// 纯逻辑规则层（无 DOM 依赖，可在 node 中单元测试）
// 通过 UMD 兼容浏览器(window.Engine) 与 node(module.exports)
(function (global) {
  "use strict";

  const STAT_KEYS = ["民心", "财富", "稳定", "自由"];
  const EXPRESSIONS = ["calm", "happy", "serious", "angry", "mock", "worry"];

  function clamp(v) {
    v = Math.round(Number(v) || 0);
    return Math.max(0, Math.min(100, v));
  }

  // 仅叠加 effects 中存在的键，返回新对象（不修改入参）
  function applyEffects(stats, effects) {
    const next = Object.assign({}, stats);
    if (effects) {
      for (const k in effects) {
        if (k in next) next[k] = clamp(next[k] + effects[k]);
      }
    }
    return next;
  }

  function ruleMet(rule, v) {
    if (!rule) return true;
    if (rule.min !== undefined && v < rule.min) return false;
    if (rule.max !== undefined && v > rule.max) return false;
    return true;
  }

  function conditionMet(condition, stats, counters) {
    if (!condition) return true;
    if (condition.stats) {
      for (const k in condition.stats) {
        if (!ruleMet(condition.stats[k], stats[k])) return false;
      }
    }
    if (condition.behavior) {
      const bh = condition.behavior;
      if (bh.philosopher) {
        if ((counters[bh.philosopher] || 0) < (bh.count || 0)) return false;
      }
    }
    return true;
  }

  // 极值即时结局阈值（原为写死的 0 / 100）。
  // 【为什么改】实测：起始四维 50、单事件增减仅 ±1~4、12 轮里前 3 轮还是 tutorial 强制事件
  // （实际只有 9 轮自由），任一维最多推到 68~77、最低只到 24~34 —— 也就是说写死 0/100 时
  // 这 4 个「即时结局」在数值上永远触发不了，形同死内容。现按实测可达区间下调（方案 A）。
  // ⚠️ 改这里必须同步改 data.js 里同名结局的 condition.stats，两处必须一致，
  //    否则会出现「即时结局触发了、但结算页按 condition 匹配不上」的错位。
  // 即时结局阈值：必须与 data.js endings 表中「priority 1000、condition 仅单个 stat」的结局保持 id 一致。
  // 新增即时结局时，两边同步加，只维护这一份阈值。
  const EXTREME = {
    people_overthrow: { stat: "民心", max: 30 },
    civil_war:        { stat: "稳定", max: 42 },
    utopia:           { stat: "自由", min: 68 },
    absolute_order:   { stat: "稳定", min: 74 },
    wealth_ruin:      { stat: "财富", max: 30 },
    golden_cage:     { stat: "财富", min: 75 }
  };

  // 极值即时结局：返回 ending id 或 null
  function extremeEnding(stats) {
    for (const id in EXTREME) {
      const r = EXTREME[id];
      const v = stats[r.stat];
      if (r.max !== undefined && v <= r.max) return id;
      if (r.min !== undefined && v >= r.min) return id;
    }
    return null;
  }

  // 综合判定：极值优先 → priority 降序取首个满足 → 默认 mediocre
  function evaluateEnding(stats, counters, endings) {
    const ext = extremeEnding(stats);
    if (ext) {
      const e = endings.find((x) => x.id === ext);
      if (e) return e;
    }
    const matched = endings
      .filter((e) => conditionMet(e.condition, stats, counters))
      .sort((a, b) => (b.priority || 0) - (a.priority || 0));
    return matched[0] || endings.find((e) => e.id === "mediocre") || null;
  }

  function isReqMet(req, stats) {
    if (!req) return true;
    for (const k in req) {
      if (!ruleMet(req[k], stats[k])) return false;
    }
    return true;
  }

  function countTutorial(data) {
    return data.events.filter((e) => e.type === "tutorial").length;
  }

  // 从已洗牌的随机池队列中抽一个满足前置条件的事件。
  // 不满足前置的事件放回队尾（而非丢弃），等后续轮次数值变化后可能满足；
  // 一轮内全部不满足则返回 null，避免死循环，也避免把「将来可能满足」的事件静默丢弃。
  function drawRandom(queue, data, stats) {
    if (!queue || !queue.length) return null;
    const total = queue.length;
    for (let i = 0; i < total; i++) {
      const id = queue.shift();
      const ev = data.events.find((e) => e.id === id);
      if (ev && isReqMet(ev.requires, stats)) return ev;
      // 抽到的不满足前置（或数据缺失）：放回队尾，等待后续轮次
      queue.push(id);
    }
    return null;
  }

  // 取出当前轮次应展示的事件（tutorial 按 order 强制，其后从队列抽）
  function currentEvent(state, data) {
    const tut = data.events
      .filter((e) => e.type === "tutorial")
      .sort((a, b) => a.order - b.order);
    if (state.round <= tut.length) {
      return tut[state.round - 1] || null;
    }
    return drawRandom(state.pendingQueue, data, state.stats);
  }

  // 成就是否达成（process 类；ending 类由 game 在结局时处理）
  function achievementUnlocked(a, ctx) {
    const t = a.trigger || {};
    if (t.event === "complete_event") return ctx.historyLen >= 1;
    if (t.behavior) {
      const bh = t.behavior;
      if (bh.philosopher) return (ctx.counters[bh.philosopher] || 0) >= (bh.count || 0);
      if (bh.streak) return ctx.streakDiff >= bh.streak;
      if (bh.viewedAll) return ctx.codex.length > 0 && ctx.viewed.length >= ctx.codex.length;
      if (bh.allUnlocked) return ctx.codex.length >= 6;
    }
    return false;
  }

  const Engine = {
    STAT_KEYS, EXPRESSIONS, EXTREME,
    clamp, applyEffects, conditionMet, extremeEnding, evaluateEnding,
    isReqMet, countTutorial, drawRandom, currentEvent, achievementUnlocked
  };

  if (typeof module !== "undefined" && module.exports) module.exports = Engine;
  else global.Engine = Engine;
})(typeof window !== "undefined" ? window : globalThis);
