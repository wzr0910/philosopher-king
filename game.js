// 《哲人王》UI 控制器（实际依赖 data.js / engine.js / audio.js，纯原生 JS）
(function () {
  "use strict";
  const D = window.GAME_DATA;
  const E = window.Engine;
  const SAVE_KEY = "zhenrenwang_v1";
  const SLOT_COUNT = 3;

  const STAT_META = {
    民心: { cls: "crimson" },
    财富: { cls: "ochre" },
    稳定: { cls: "ultra" },
    自由: { cls: "sage" }
  };
  // （已删除 EXPR_EMOJI：定义后全文件零引用，且与你「不用 emoji 当图标」的要求冲突）

  const philMap = {};
  D.philosophers.forEach((p) => (philMap[p.id] = p));

  // save.slots[i] = 进行中的对局 或 null；save.activeSlot = 当前槽位；save.global 跨局/跨周目保留
  let save = {
    version: 1,
    slots: [null, null, null],
    activeSlot: null,
    global: { achievements: [], codex: [], viewed: [], completed: [] }
  };
  let statEls = {};
  let choseThisRound = false;
  let slotsMode = "new";

  // 开场定时器 id：用户提前操作时可清除，避免到点被强行拉回主菜单
  let introTimer = null;

  // 顾问面板选中态：提升为模块级「单一状态」。
  // 原先这两个变量是 renderChoiceCards 的闭包局部变量，一旦该函数被二次调用
  // 就会产生第二份互不相同的状态，导致「面板开着但采纳静默失效」。
  let currentAdvisor = null;
  let currentAdvice = null;
  let _dockSig = null;

  const $id = (id) => document.getElementById(id);

  // ---------- 集中配置：魔法数字统一收口（F5）----------
  const TUNING = {
    INTRO_MS: 999999,
    TOAST_MS: 1400,
    TYPE_CHAR_MS: 28,
    TYPE_PARA_GAP_MS: 60,
    ACHV_STEP_MS: 1500,
    ACHV_VISIBLE_MS: 1400,
    ACHV_FADE_IN_MS: 10,
    ACHV_FADE_OUT_MS: 400,
    FLOAT_MS: 1200,
    ROLL_DUR: 800
  };

  // ---------- 资源路径集中映射（I4）----------
  const RES = {
    portrait: (id) => "assets/portraits/" + id + ".webp",
    scene: (id) => "assets/scenes/" + id + ".jpg",
    ending: (id) => "assets/scenes/ending_" + id + ".jpg",
    achv: {
      first_crown: "achv_first_crown.jpg",
      iron_fist: "achv_iron_fist.jpg",
      free_wind: "achv_free_wind.jpg",
      fickle: "achv_fickle.jpg",
      polymath: "achv_polymath.jpg",
      virtuous_rule: "achv_virtuous_rule.jpg",
      six_sages: "achv_six_sages.jpg"
    }
  };

  // ---------- 背景图预加载 + 微光占位 + 淡入（慢网下不再黑底闪烁）----------
  const _bgCache = new Set();
  function preloadImg(url) {
    if (!url || _bgCache.has(url)) return Promise.resolve(url);
    return new Promise(function (res) {
      const im = new Image();
      im.onload = im.onerror = function () { _bgCache.add(url); res(url); };
      im.src = url;
    });
  }
  // 空容器（事件横幅）：加载中显示微光占位，加载完成淡入
  function setSceneBg(el, url) {
    if (!el) return;
    el.classList.remove("bg-loaded");
    el.classList.add("bg-loading");
    el.style.backgroundImage = "none";
    preloadImg(url).then(function () {
      el.style.backgroundImage = "url('" + url + "')";
      el.classList.remove("bg-loading");
      void el.offsetWidth;
      el.classList.add("bg-loaded");
    });
  }

  // ---------- DOM 辅助（F2）----------
  const $qs = (sel, ctx) => (ctx || document).querySelectorAll(sel);
  const $q = (sel, ctx) => (ctx || document).querySelector(sel);

  // ---------- 定时器统一注册表（H5）----------
  const _timers = new Set();
  function later(fn, ms) {
    const id = setTimeout(function () { _timers.delete(id); fn(); }, ms);
    _timers.add(id);
    return id;
  }
  function clearTimers() {
    _timers.forEach(function (id) { clearTimeout(id); });
    _timers.clear();
    // 打字机定时器不在 _timers 注册表内，切屏时一并清掉，避免打字途中切屏后继续跑并污染当前屏
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }
  }
  let typeTimer = null;

  // ---------- 用户偏好持久化（J4）----------
  const PREFS_KEY = "zhenrenwang_prefs";
  const prefs = loadPrefs();
  function loadPrefs() {
    const def = { muted: false, reduceMotion: false, noTypewriter: false, volume: 1 };
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      if (raw) return Object.assign(def, JSON.parse(raw));
    } catch (e) {}
    return def;
  }
  function savePrefs() {
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (e) {}
  }
  function prefersReduced() {
    return prefs.reduceMotion ||
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // ---------- 存储 ----------
  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) save = JSON.parse(raw);
    } catch (e) { /* 忽略，使用默认 */ }
    if (!save.slots || save.slots.length !== SLOT_COUNT) save.slots = [null, null, null];
    // 存档版本：老存档缺 version 字段时补齐（只补不重置，避免误伤已有进度）
    if (typeof save.version !== "number") save.version = 1;
    save.activeSlot = null;
    if (!save.global) save.global = { achievements: [], codex: [], viewed: [], completed: [] };
    ["achievements", "codex", "viewed", "completed"].forEach((k) => { if (!save.global[k]) save.global[k] = []; });
  }
  function persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {}
  }
  function anyRun() { return save.slots.some((s) => !!s); }
  function refreshMenu() {
    var b = $id("btn-continue"); if (b) b.disabled = !anyRun();
    var nb = $id("btn-new");
    if (nb) nb.textContent = anyRun() ? "继续议会" : "开启哲思";
  }

  // ---------- 屏幕切换 ----------
  function showScreen(id) {
    // 切屏时统一清理残留定时器，避免浮层/打字机/toast 跨屏泄漏（H5）
    clearTimers();
    // 成就卡的「淡出并移除」也走定时器，被上面清掉后它不会自行消失，
    // 会在页面上留下一层固定覆盖层。这里顺手清掉，避免切屏后卡片残留挡住操作。
    $qs(".achv-toast").forEach((t) => t.remove());
    $qs(".screen").forEach((s) => s.classList.remove("active"));
    $id(id).classList.add("active");
  }
  function toast(msg) {
    const t = document.createElement("div");
    t.textContent = msg;
    t.style.cssText = "position:fixed;left:50%;top:20%;transform:translateX(-50%);background:#000a;color:#fff;padding:8px 14px;border-radius:8px;z-index:99;font-size:13px;";
    $id("app").appendChild(t);
    later(() => t.remove(), TUNING.TOAST_MS);
  }

  // ---------- 哲人立绘（直接用本地抠好的PNG）----------
  function portraitEl(philId, expr, size) {
    const sz = size || 56;
    const img = document.createElement("img");
    img.className = "portrait portrait-img";
    img.src = RES.portrait(philId);
    img.loading = "lazy";
    img.alt = (philMap[philId] && philMap[philId].name) || philId;
    img.title = (philMap[philId] && philMap[philId].name) || philId;
    img.style.width = img.style.height = sz + "px";
    img.style.flex = "0 0 " + sz + "px";
    img.style.objectFit = "cover";
    img.style.objectPosition = "center top";
    return img;
  }

  // ---------- 数值条 ----------
  function buildStatBar() {
    const bar = $id("stat-bar");
    bar.innerHTML = "";
    statEls = {};
    E.STAT_KEYS.forEach((k) => {
      const meta = STAT_META[k];
      const el = document.createElement("div");
      el.className = "scroll-stat " + meta.cls;
      el.innerHTML =
        '<div class="scroll-bar"><div class="scroll-fill"></div></div>' +
        '<div class="scroll-value">0</div>' +
        '<div class="scroll-divider"></div>' +
        '<div class="scroll-name">' + k + '</div>';
      bar.appendChild(el);
      statEls[k] = { root: el, fill: el.querySelector(".scroll-fill"), val: el.querySelector(".scroll-value") };
    });
  }
  function paintStats(stats, before) {
    if (!stats) return;
    const reduce = prefersReduced();
    E.STAT_KEYS.forEach((k) => {
      const v = stats[k];
      const oldV = before ? before[k] : v;
      statEls[k].fill.style.width = v + "%";
      if (reduce) {
        statEls[k].val.textContent = v;
        return;
      }
      // 数字滚动动画
      if (oldV !== v) {
        const start = performance.now();
        const dur = TUNING.ROLL_DUR;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const cur = Math.round(oldV + (v - oldV) * eased);
          statEls[k].val.textContent = cur;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      } else {
        statEls[k].val.textContent = v;
      }
      if (before && before[k] !== v) {
        const diff = v - before[k];
        if (window.Sfx) window.Sfx.statChange(diff);
        // 飘字动画（绿涨红落）
        const float = document.createElement("div");
        float.className = "stat-float " + (diff > 0 ? "up" : "down");
        float.textContent = (diff > 0 ? "+" : "") + diff;
        const rect = statEls[k].val.getBoundingClientRect();
        float.style.left = rect.left + rect.width/2 + "px";
        float.style.top = rect.top + "px";
        document.body.appendChild(float);
        later(() => float.remove(), TUNING.FLOAT_MS);
      }
    });
  }

  // ---------- 成就 ----------
  function ctxForAchv() {
    return {
      historyLen: save.run ? save.run.history.length : 0,
      counters: save.run ? save.run.counters : {},
      streakDiff: save.run ? save.run.streakDiff : 0,
      codex: undefined, // 在调用处补全
      viewed: save.global.viewed
    };
  }
  function checkProcessAchievements() {
    let unlocked = [];
    D.achievements.forEach((a) => {
      if (save.global.achievements.includes(a.id)) return;
      const ctx = ctxForAchv();
      ctx.codex = save.global.codex;
      if (E.achievementUnlocked(a, ctx)) {
        save.global.achievements.push(a.id);
        // 同时记入本局，供结算页「一生所获」只显示本局所获
        if (save.run && Array.isArray(save.run.achievementsThisRun)) {
          save.run.achievementsThisRun.push(a.id);
        }
        // 连同 id / description 一起入队：渲染时才拼得出正确的成就配图与说明文字
        unlocked.push({ id: a.id, name: a.name, desc: a.description });
      }
    });
    if (unlocked.length) {
      unlocked.forEach((item, i) => {
        later(() => {
          // 单个成就渲染失败不得影响其余成就，也不得阻断游戏
          try {
            const bgFile = RES.achv[item.id] || 'achv_first_crown.jpg';
            const bgUrl = "assets/scenes/" + bgFile;
            const toast = document.createElement("div");
            toast.className = "achv-toast bg-loading";
            toast.innerHTML = '<div class="achv-content"><div class="achv-tag">✦ 成就解锁 ✦</div><div class="achv-name">' + item.name + '</div><div class="achv-desc">' + (item.desc || '') + '</div></div>';
            const showToast = () => {
              document.body.appendChild(toast);
              later(() => toast.classList.add("show"), TUNING.ACHV_FADE_IN_MS);
              later(() => {
                toast.classList.remove("show");
                later(() => toast.remove(), TUNING.ACHV_FADE_OUT_MS);
              }, TUNING.ACHV_VISIBLE_MS);
            };
            // 背景图就绪后再弹出；若已缓存则立即弹
            if (_bgCache.has(bgUrl)) {
              toast.style.background = `linear-gradient(180deg, rgba(20,12,5,.55) 0%, rgba(20,12,5,.75) 100%), url('${bgUrl}') center/cover`;
              toast.classList.remove("bg-loading");
              showToast();
            } else {
              preloadImg(bgUrl).then(() => {
                toast.style.background = `linear-gradient(180deg, rgba(20,12,5,.55) 0%, rgba(20,12,5,.75) 100%), url('${bgUrl}') center/cover`;
                toast.classList.remove("bg-loading");
                showToast();
              });
            }
          } catch (err) {
            console.warn("[哲人王] 成就弹窗渲染失败：", item && item.id, err);
          }
        }, i * TUNING.ACHV_STEP_MS);
      });
    }
  }
  function unlockEndingAchievement(endingId) {
    const id = "ending_" + endingId;
    if (!save.global.achievements.includes(id)) {
      save.global.achievements.push(id);
      // 结局成就同样记入本局，否则结算页会漏掉它
      if (save.run && Array.isArray(save.run.achievementsThisRun)) {
        save.run.achievementsThisRun.push(id);
      }
      return true;
    }
    return false;
  }

  // ---------- 游戏流程 ----------
  function newRun() {
    const randoms = D.events.filter((e) => e.type !== "tutorial").map((e) => e.id);
    return {
      round: 1,
      stats: Object.assign({}, D.config.initialStats),
      history: [],
      counters: {},
      // 只记录「本局」解锁的成就，供结算页「一生所获」使用
      achievementsThisRun: [],
      streakDiff: 0,
      lastPhil: null,
      usedEvents: [],
      pendingQueue: shuffle(randoms),
      pendingEnding: null
    };
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startNewGame(slotIdx) {
    if (save.slots[slotIdx] && !confirm("存档 " + (slotIdx + 1) + " 已有进度，确定覆盖开始新游戏？")) return;
    save.slots[slotIdx] = newRun();
    save.activeSlot = slotIdx;
    save.run = save.slots[slotIdx];
    persist();
    showScreen("game");
    renderEvent();
  }
  function resumeGame(slotIdx) {
    if (!save.slots[slotIdx]) { toast("该存档为空"); return; }
    save.activeSlot = slotIdx;
    // 兼容新老存档结构
    const slot = save.slots[slotIdx];
    save.run = slot.run ? slot.run : slot;
    persist();
    showScreen("game");
    renderEvent();
  }
  function openSlots(mode) {
    // 用户已进入存档选择：清掉开场残留定时器，防止 4500ms 到点把人拉回主菜单
    if (introTimer) { clearTimeout(introTimer); introTimer = null; }
    slotsMode = mode;
    renderSlots();
    showScreen("slots");
  }
  function renderSlots() {
    $id("slots-title").textContent = slotsMode === "resume" ? "继续游戏" : "开始新游戏";
    const list = $id("slots-list");
    list.innerHTML = "";
    save.slots.forEach((slot, i) => {
      // 兼容新老存档结构
      const runObj = slot && slot.run ? slot.run : slot;
      const occupied = !!runObj && !!runObj.stats;
      const broken = occupied && runObj.round > D.config.maxRounds;
      const div = document.createElement("div");
      div.className = "slot" + (occupied ? "" : " empty");
      const info = broken
        ? "已完结 · 可点击开启新的篇章"
        : occupied
        ? ("进行中 · 第 " + runObj.round + " / " + D.config.maxRounds + " 轮 · 民心 " + runObj.stats["民心"] + " · 财富 " + runObj.stats["财富"])
        : "空槽位 · 点击开始新的篇章";
      div.innerHTML = '<div class="slot-no">存档 ' + (i + 1) + '</div><div class="slot-info">' + info + "</div>";
      div.onclick = () => {
        // 坏存档（轮次超12）直接开新局
        const runObj = slot && slot.run ? slot.run : slot;
        if (runObj && runObj.round > D.config.maxRounds) { startNewGame(i); return; }
        if (slotsMode === "resume" && !occupied) { toast("该存档为空，无法继续"); return; }
        if (slotsMode === "new" && occupied) startNewGame(i);
        else if (slotsMode === "new") startNewGame(i);
        else resumeGame(i);
      };
      list.appendChild(div);
    });
  }

  function renderEvent() {
    choseThisRound = false;
    // 兜底：轮次超过上限直接跳结局，防止坏存档卡关
    if (save.run.round > D.config.maxRounds) { finishGame(); return; }
    $id("result-area").classList.add("hidden");
    const ea = $id("event-area");
    ea.classList.remove("enter"); void ea.offsetWidth; ea.classList.add("enter");
    const ev = E.currentEvent(save.run, D);
    if (!ev) { finishGame(); return; }
    // 事件场景图统一走下面的 CSS 背景图（RES.scene）。
    // 原先此处还有「SCENE_B64 内嵌真图 / Canvas 像素图」两个分支，但 index.html 并未引入
    // scenes.js，window.SCENE_B64 与 window.Scenes 恒为 undefined，两个分支永不执行，已删除。
    $id("round-indicator").textContent = "第 " + save.run.round + " / " + D.config.maxRounds + " 轮";
    $id("event-title").textContent = ev.title;
    const descEl = $id("event-desc");
    descEl.innerHTML = "";
    paintStats(save.run.stats, null);

    // 事件场景插画：根据事件id自动加载对应图
    const sceneEl = $id("event-scene");
    sceneEl.style.display = "block";
    setSceneBg(sceneEl, RES.scene(ev.id));

    // 重置界面状态：显示事件区，隐藏结果区和顾问面板
    $id("result-area").classList.add("hidden");
    $id("event-area").style.display = "";
    $id("advisor-panel").classList.remove("show");

    // 打字机效果：逐段逐字显示
    const descParas = ev.description;
    let paraIdx = 0;
    let charIdx = 0;
    let currentPara = null;

    function typeNextChar() {
      if (paraIdx >= descParas.length) {
        // 全部打完，渲染圆章和选项
        renderChoices();
        const hint = document.createElement("div");
        hint.className = "after-hint";
        hint.textContent = "—— 点击下方哲人，听取他们的谏言 ——";
        descEl.appendChild(hint);
        return;
      }
      if (!currentPara) {
        currentPara = document.createElement("p");
        descEl.appendChild(currentPara);
      }
        const text = descParas[paraIdx];
      if (charIdx <= text.length) {
        currentPara.textContent = text.slice(0, charIdx);
        charIdx++;
        typeTimer = setTimeout(typeNextChar, TUNING.TYPE_CHAR_MS);
      } else {
        paraIdx++;
        charIdx = 0;
        currentPara = null;
        typeTimer = setTimeout(typeNextChar, TUNING.TYPE_PARA_GAP_MS);
      }
    }

    // “点击跳过”提示（打字期间显示，打完或跳过后隐藏）
    let hintEl = $id("type-hint");
    if (!hintEl) {
      hintEl = document.createElement("div");
      hintEl.id = "type-hint";
      hintEl.className = "type-hint";
      hintEl.textContent = "点击跳过";
      descEl.parentNode.insertBefore(hintEl, descEl.nextSibling);
    }
    hintEl.style.display = "block";

    function renderChoices() {
      if (typeTimer) clearTimeout(typeTimer);
      descEl.onclick = null;
      descEl.style.cursor = "default";
      hintEl.style.display = "none";
      hintEl.onclick = null;
      // 【关键修复】原先只解绑了 descEl，漏解绑 event-area —— 导致打字结束后再点正文区
      // 仍会触发 skipType → 再次调用 renderChoiceCards → 产生第二份闭包状态。
      // 这一处是「面板开着但采纳静默失效」与「操作提示被重写冲掉」的共同根因。
      const eventArea = $id("event-area");
      if (eventArea) eventArea.onclick = null;
      renderChoiceCards(ev);
    }

    // 点击跳过打字机
    function skipType() {
      if (typeTimer) clearTimeout(typeTimer);
      descEl.innerHTML = descParas.map((s) => "<p>" + s + "</p>").join("");
      renderChoices();
    }

    descEl.style.cursor = "pointer";
    descEl.onclick = skipType;
    hintEl.onclick = skipType;
    // 整个事件区点击都能跳过打字机
    $id("event-area").onclick = skipType;

    // 减动效 / 关打字机偏好：直接出全文，跳过逐字动画（K3）
    if (prefersReduced() || prefs.noTypewriter) { skipType(); return; }

    typeNextChar();
  }

  function renderChoiceCards(ev) {
    // 选择区：哲人谏言 + 选项 合并为可点击卡片（不显示数值增减，凭论点与行动判断）
    // 先过滤掉不满足条件的隐藏选项
    const currentStats = save.run.stats;
    const visibleAdvice = ev.advice
      .map((a, origIdx) => ({ ...a, origIdx }))
      .filter((a) => {
        if (!a.hidden) return true;
        if (!a.condition) return true;
        // 检查条件是否满足
        if (a.condition.stats) {
          for (const k in a.condition.stats) {
            const rule = a.condition.stats[k];
            const v = currentStats[k] || 0;
            if (rule.min !== undefined && v < rule.min) return false;
            if (rule.max !== undefined && v > rule.max) return false;
          }
        }
        return true;
      });

    const choiceArea = $id("choice-area");
    choiceArea.innerHTML = "";

    // 生成底部圆章
    const dock = $id("portrait-dock");
    dock.style.display = "flex";
    // 每次重建都复位选中态并收起面板：让「DOM 视觉态」与「选中状态」始终保持一致。
    // 即使将来仍出现重入，也不会再留下「面板开着、却已无选中」的错位。
    currentAdvisor = null;
    currentAdvice = null;
    $id("advisor-panel").classList.remove("show");

    // 增量更新（G4）：同一组谏者（同顺序）不重建圆章，保留焦点、避免闪烁
    const dockSig = visibleAdvice.map((a) => a.philosopher).join("|");
    if (dockSig !== _dockSig) {
      _dockSig = dockSig;
      dock.innerHTML = "";
      visibleAdvice.forEach((a, displayIdx) => {
        const p = philMap[a.philosopher];
        // 改用 <button>：可被 Tab 聚焦、回车/空格触发、读屏可识别（原先是 div，键盘完全不可用）
        const item = document.createElement("button");
        item.type = "button";
        item.className = "dock-item";
        // 首步引导（E1）：仅首轮高亮第一个谏者，提示「点这里看建议」
        if (displayIdx === 0 && save.run && save.run.round === 1) item.classList.add("dock-guide");
        item.setAttribute("aria-label", "查看" + (p ? p.name : a.philosopher) + "的建议");
        item.style.backgroundImage = "url('" + RES.portrait(a.philosopher) + "')";
        item.style.backgroundSize = "cover";
        item.style.backgroundPosition = "center top";
        item.innerHTML = '<span class="dock-name">' + (p ? p.name : a.philosopher) + '</span>';
        item.onclick = (e) => {
          e.stopPropagation();
          if (currentAdvisor === a.philosopher) {
            closeAdvisorPanel();
            return;
          }
          openAdvisorPanel(a, p);
        };
        dock.appendChild(item);
      });
    } else {
      _dockSig = dockSig;
    }

    function openAdvisorPanel(a, p) {
      currentAdvisor = a.philosopher;
      currentAdvice = a;
      $id("advisor-portrait").src = RES.portrait(a.philosopher);
      $id("advisor-name").textContent = p ? p.name : a.philosopher;
      $id("advisor-role").textContent = p ? p.tagline : "";
      $id("advisor-text").textContent = a.text;
      $id("btn-adopt").textContent = "采 纳 · " + a.option;
      $id("advisor-panel").classList.add("show");
      $qs(".dock-item").forEach((item, i) => {
        item.classList.toggle("active", visibleAdvice[i].philosopher === a.philosopher);
      });
    }

    function closeAdvisorPanel() {
      currentAdvisor = null;
      currentAdvice = null;
      $id("advisor-panel").classList.remove("show");
      $qs(".dock-item").forEach((item) => {
        item.classList.remove("active");
      });
    }

    // 点面板外面关闭
    document.onclick = (e) => {
      if (!$id("advisor-panel").classList.contains("show")) return;
      if ($id("advisor-panel").contains(e.target)) return;
      if (e.target.closest(".dock-item")) return;
      closeAdvisorPanel();
    };

    // 采纳按钮
    $id("btn-adopt").onclick = (e) => {
      e.stopPropagation();
      if (!currentAdvice) {
        // 不再静默失败：给一次轻微抖动反馈，并把原因打到控制台便于排查
        const panel = $id("advisor-panel");
        panel.classList.remove("shake");
        void panel.offsetWidth; // 强制重排，保证连续触发时动画能重放
        panel.classList.add("shake");
        console.warn("[哲人王] 采纳未生效：当前没有选中的建议（已给抖动反馈）");
        return;
      }
      const idx = currentAdvice.origIdx;
      closeAdvisorPanel();
      onChoose(ev, idx);
    };
  }

  function onChoose(ev, idx) {
    if (choseThisRound) return;
    choseThisRound = true;
    const adv = ev.advice[idx];
    const before = Object.assign({}, save.run.stats);
    const after = E.applyEffects(save.run.stats, adv.effects);
    save.run.stats = after;

    save.run.counters[adv.philosopher] = (save.run.counters[adv.philosopher] || 0) + 1;
    if (save.run.lastPhil && save.run.lastPhil !== adv.philosopher) save.run.streakDiff++;
    else if (save.run.lastPhil === adv.philosopher) save.run.streakDiff = 0;
    save.run.lastPhil = adv.philosopher;
    save.run.history.push({ eventId: ev.id, choice: idx, philosopher: adv.philosopher });
    if (!save.global.codex.includes(adv.philosopher)) save.global.codex.push(adv.philosopher);

    checkProcessAchievements();
    paintStats(after, before);

    const extreme = E.extremeEnding(after);
    if (extreme) {
      const end = D.endings.find((e) => e.id === extreme);
      save.run.pendingEnding = end ? end.id : null;
    }

    const res = (ev.results && ev.results[String(idx)]) || { text: ["（无结果描述）"], council: [] };
    $id("result-text").innerHTML = (res.text || []).map((s) => "<p>" + s + "</p>").join("");
    const councilArea = $id("council-area");
    councilArea.innerHTML = "";
    (res.council || []).forEach((c) => {
      const p = philMap[c.philosopher];
      const row = document.createElement("div");
      row.className = "council";
      const bubble = document.createElement("div");
      bubble.className = "bubble council-bubble";
      bubble.innerHTML = '<div class="who">' + (p ? p.name : c.philosopher) + '</div><div class="text">' + (c.line || "") + "</div>";
      row.appendChild(portraitEl(c.philosopher, c.expression, 40));
      row.appendChild(bubble);
      councilArea.appendChild(row);
    });
    $id("result-area").classList.remove("hidden");
    $id("choice-area").innerHTML = "";
    $id("portrait-dock").style.display = "none";
    $id("type-hint").style.display = "none";
    $id("event-area").style.display = "none";
    $id("result-area").scrollTop = 0;
    $id("btn-next").onclick = () => {
      if (save.run.pendingEnding) { finishGame(save.run.pendingEnding); return; }
      // 第12轮结果页点继续直接进结局
      if (save.run.round >= D.config.maxRounds) { finishGame(); return; }
      save.run.round++;
      persist();
      renderEvent();
    };
    persist();
    showSaveMark();
  }

  function finishGame(forcedEndingId) {
    const ending = forcedEndingId
      ? D.endings.find((e) => e.id === forcedEndingId)
      : E.evaluateEnding(save.run ? save.run.stats : D.config.initialStats, save.run ? save.run.counters : {}, D.endings);
    const newAchv = unlockEndingAchievement(ending.id);
    if (window.Sfx) window.Sfx.ending();

    // 结局页渲染
    $id("ending-name").textContent = ending.name;
    $id("ending-sub").textContent = "A Tale of Philosopher Kings · 公元前 4 世纪";
    const descArr = Array.isArray(ending.description) ? ending.description : [ending.description];
    $id("ending-desc").innerHTML = descArr.map((s) => "<p>" + s + "</p>").join("");
    // 结局插画
const endingEl = $id('ending');
    const endingImg = RES.ending(ending.id);
    // 22 个结局均已有专属图（check_assets.py 校验零缺失）；仍保留「渐变兜底 + 加载成功再叠图」，
    // 万一某张图加载失败，也只会停在渐变上，不出现破图/空白或控制台 404。
    const fallbackBg = "linear-gradient(180deg, rgba(26,20,16,.55) 0%, rgba(26,20,16,.92) 100%)";
    // 顺序很重要：先挂纯渐变，等图片真正加载成功再叠上去。
    // 原来是「先挂可能不存在的图、失败后再换渐变」，缺图时会先闪一下破图。
    // 即：图片未成功加载前不显示背景图，杜绝破图闪现。
    endingEl.style.backgroundImage = fallbackBg;
    endingEl.style.backgroundSize = "cover";
    endingEl.style.backgroundPosition = "center";
    const probe = new Image();
    probe.onload = () => {
      // 图片真正加载成功再叠到渐变兜底之上，加载期间只显示暖褐渐变，不黑底、不裂图
      endingEl.style.backgroundImage =
        "linear-gradient(180deg, rgba(20,15,12,.42) 0%, rgba(20,15,12,.70) 100%), url('" + endingImg + "')";
    };
    probe.src = endingImg;

    // 考古报告数值总结
    const statsGrid = $id("ending-stats");
    statsGrid.innerHTML = "";
    const statMeta = [
      { key: "民心", cls: "crimson", label: "民 心", desc: v => v >= 70 ? "百姓拥戴你，街头巷尾都在传颂你的名字。" : v >= 40 ? "民心尚可，偶尔还有抱怨之声。" : "民心尽失，暗处已有暗流涌动。" },
      { key: "财富", cls: "ochre", label: "财 富", desc: v => v >= 70 ? "国库充盈，商人愿意在你的城邦里投资。" : v >= 40 ? "收支平衡，勉强维持运转。" : "国库空虚，连军饷都快发不出了。" },
      { key: "稳定", cls: "ultra", label: "稳 定", desc: v => v >= 70 ? "秩序井然，法律被严格遵守。" : v >= 40 ? "偶有骚乱，但大局仍在掌控之中。" : "秩序崩坏，叛乱一触即发。" },
      { key: "自由", cls: "sage", label: "自 由", desc: v => v >= 70 ? "思想繁荣，诗人与哲人自由往来。" : v >= 40 ? "言论尚可，仍有少许禁忌。" : "钳言禁语，思想的火焰被压制。" }
    ];
    statMeta.forEach((s) => {
      const v = save.run.stats[s.key];
      const item = document.createElement("div");
      item.className = "report-item " + s.cls;
      item.innerHTML = 
        '<div class="report-item-label">' + s.label + '</div>' +
        '<div class="report-item-value">' + v + '</div>' +
        '<div class="report-item-desc">' + s.desc(v) + '</div>';
      statsGrid.appendChild(item);
    });

    // 本局成就
    const achvRow = $id("ending-achv");
    achvRow.innerHTML = "";
    // 只显示「本局」解锁的成就；旧存档没有 achievementsThisRun 字段时，
    // 退化为原来的「显示全部历史成就」，避免老进度结算页变成空白。
    const achieved = (save.run && Array.isArray(save.run.achievementsThisRun) && save.run.achievementsThisRun.length)
      ? save.run.achievementsThisRun.slice()
      : save.global.achievements.slice();
    achieved.forEach((id) => {
      let a = D.achievements.find((x) => x.id === id);
      // 结局成就 id 形如 ending_xxx，不在 D.achievements 里，需从结局表补名字，
      // 否则会被静默丢弃（原先就是被丢掉的）。
      if (!a && id.indexOf("ending_") === 0) {
        const end = D.endings.find((x) => "ending_" + x.id === id);
        if (end) a = { id: id, name: end.name };
      }
      if (a) {
        const stamp = document.createElement("div");
        stamp.className = "ending-stamp";
        stamp.innerHTML = '<div class="name">' + a.name + '</div>';
        achvRow.appendChild(stamp);
      }
    });

    // 记录多周目历史
    save.global.completed.push({
      endingId: ending.id,
      endingName: ending.name,
      stats: Object.assign({}, save.run.stats),
      date: new Date().toISOString().slice(0, 10),
      rounds: save.run.round
    });
    persist();

    showScreen("ending");

    // 显示完结局页再清空当前槽位
    if (save.activeSlot != null) save.slots[save.activeSlot] = null;
    save.run = null;
    save.activeSlot = null;
    persist();
  }

  // ---------- 图鉴 ----------
  function renderCodex() {
    const grid = $id("codex-philosophers");
    grid.innerHTML = "";
    D.philosophers.forEach((p) => {
      const unlocked = save.global.codex.includes(p.id);
      const card = document.createElement("div");
      card.className = "philosopher-card" + (unlocked ? " unlocked" : " locked");
      
      const portrait = document.createElement("div");
      portrait.className = "philosopher-portrait";
      lazyBg(portrait, RES.portrait(p.id));
      card.appendChild(portrait);

      const info = document.createElement("div");
      info.className = "philosopher-info";
      
      const name = document.createElement("div");
      name.className = "philosopher-name";
      name.textContent = unlocked ? p.name : "？？？";
      info.appendChild(name);

      const role = document.createElement("div");
      role.className = "philosopher-role";
      role.textContent = unlocked ? (p.tagline || "") : "尚未现身";
      info.appendChild(role);

      const bio = document.createElement("p");
      bio.className = "philosopher-bio";
      if (unlocked) {
        // 给每个哲人写更有古典气质的传记文字，替换掉开发用的描述
        const bioText = {
          plato: "相信唯有最智慧者方能治理城邦，正义不是强者的利益，而是各守其位。在雅典创立学院，坚信理性可以触及永恒的理念。",
          machiavelli: "认为政治的目的从来不是道德说教，而是维持秩序。君主应同时为狮为狐——既有慑人之威，亦有辨伪之明。写下《君主论》，道尽权力运行的真实面目。",
          laozi: "主张治大国若烹小鲜，最好的统治是让人民感觉不到它的存在。道可道，非常道，真正的治理在于顺应万物本性，而非强行干预。",
          hobbes: "认为若无强大国家，人的生活将孤独、贫困、污秽而短视。为摆脱自然状态的恐惧，人们须将权利交予一个绝对的主权者。",
          rousseau: "感叹人生而自由，却无往不在枷锁之中。认为合法的权威来自约定而非暴力，当自由充盈，人民自己便是秩序。",
          confucius: "主张为政以德，譬如北辰，居其所而众星共之。统治者的德行便是最好的法律，导之以德，齐之以礼，方有耻且格。"
        };
        bio.textContent = bioText[p.id] || (p.quote || "");
      } else {
        if (p.id === 'rousseau') {
          bio.textContent = "议会柱廊的阴影里，似乎还空着另一个座位——一位相信生而自由的旅人，在等你的城邦松开束缚。";
        } else if (p.id === 'confucius') {
          bio.textContent = "议会柱廊的阴影里，似乎还空着另一个座位——一位主张礼乐仁和的儒者，在等你的城邦尘埃落定。";
        } else {
          bio.textContent = "议会柱廊的阴影里，似乎还空着另一个座位。";
        }
      }
      info.appendChild(bio);

      card.appendChild(info);
      card.onclick = () => { if (unlocked) viewPhilosopher(p.id); };
      grid.appendChild(card);
    });
    const existing = grid.querySelector(".phil-detail");
    if (existing) existing.remove();

    const achvBox = $id("codex-achievements");
    achvBox.innerHTML = "";
    const all = D.achievements.concat(D.endings.map((e) => ({ id: "ending_" + e.id, name: e.name, description: e.description })));
    
    // 收集进度
    const unlockedCount = all.filter(a => save.global.achievements.includes(a.id)).length;
    const progress = document.createElement("div");
    progress.className = "achievement-progress";
    progress.textContent = "已收集 " + unlockedCount + " / " + all.length + " 方印章";
    achvBox.appendChild(progress);

    const wall = document.createElement("div");
    wall.className = "achievement-wall";
    all.forEach((a) => {
      const unlocked = save.global.achievements.includes(a.id);
      const stamp = document.createElement("div");
      stamp.className = "achievement-stamp" + (unlocked ? " unlocked" : "");
      // 把名字拆成两个字一行，做田字格效果
      const name = a.name;
      let stampText;
      if (name.length <= 4) {
        const half = Math.ceil(name.length / 2);
        stampText = name.slice(0, half) + "<br>" + name.slice(half);
      } else {
        stampText = name.slice(0, 4);
      }
      stamp.innerHTML = 
        '<div class="stamp"><div class="stamp-text">' + stampText + '</div></div>' +
        '<div class="achievement-desc">' + (unlocked ? a.description : "尚未解锁") + '</div>';
      wall.appendChild(stamp);
    });
    achvBox.appendChild(wall);

    const gamesBox = $id("codex-games");
    gamesBox.innerHTML = "";
    if (!save.global.completed.length) {
      gamesBox.innerHTML = '<div class="achv">尚未完成任何一局，去治理城邦吧。</div>';
    } else {
      save.global.completed.slice().reverse().forEach((g) => {
        const d = document.createElement("div");
        d.className = "achv";
        d.innerHTML = '<div class="an">' + g.endingName + '</div><div class="ad">' + g.date + ' · 第 ' + g.rounds + ' 轮 · 民心' + g.stats["民心"] + ' 财富' + g.stats["财富"] + ' 稳定' + g.stats["稳定"] + ' 自由' + g.stats["自由"] + "</div>";
        gamesBox.appendChild(d);
      });
    }

    // 本局进度（D1）：当前这一局的轮次与各哲人咨询次数，便于随时回看
    const runBox = $id("codex-run");
    if (runBox) {
      if (save.run) {
        const counts = D.philosophers
          .map((p) => ({ name: p.name, n: save.run.counters[p.id] || 0 }))
          .filter((x) => x.n > 0);
        const countHtml = counts.length
          ? counts.map((x) => x.name + " ×" + x.n).join("　")
          : "（本局尚未采纳任何谏言）";
        runBox.innerHTML =
          '<div class="codex-run-title">· 本局进度 ·</div>' +
          '<div class="codex-run-line">第 ' + save.run.round + " / " + D.config.maxRounds + " 轮</div>" +
          '<div class="codex-run-line">' + countHtml + "</div>";
        runBox.style.display = "";
      } else {
        runBox.innerHTML = "";
        runBox.style.display = "none";
      }
    }
  }
  function viewPhilosopher(id) {
    const p = philMap[id];
    if (!p) return;
    if (!save.global.viewed.includes(id)) {
      save.global.viewed.push(id);
      const a = D.achievements.find((x) => x.id === "polymath");
      if (a && !save.global.achievements.includes("polymath")) {
        const ctx = ctxForAchv();
        ctx.codex = save.global.codex;
        if (E.achievementUnlocked(a, ctx)) {
          save.global.achievements.push("polymath");
          toast("成就解锁：博学多闻");
        }
      }
      persist();
    }
    const grid = $id("codex-philosophers");
    let det = grid.querySelector(".phil-detail");
    if (!det) { det = document.createElement("div"); det.className = "phil-detail"; grid.appendChild(det); }
    det.innerHTML =
      "<h4>" + p.name + "（" + p.symbol + "）</h4>" +
      "<div><b>性格：</b>" + p.personality + "</div>" +
      "<div><b>思想：</b>" + p.tagline + "</div>" +
      "<div><b>名言：</b>“" + p.quote + "”</div>";
  }

  // ---------- 历史 ----------
  function renderHistory() {
    const list = $id("history-list");
    list.innerHTML = "";
    const hist = save.run ? save.run.history : [];
    if (!hist.length) {
      list.innerHTML = '<div class="history-empty"><div class="empty-title">宗卷尚空</div><div class="empty-desc">你尚未做出任何裁决，<br>城邦的第一章等待你落笔写下。</div></div>';
      return;
    }
    hist.forEach((h, i) => {
      const ev = D.events.find((e) => e.id === h.eventId);
      const adv = ev ? ev.advice[h.choice] : null;
      const p = adv ? philMap[adv.philosopher] : null;
      const d = document.createElement("div");
      d.className = "history-item";
      d.innerHTML =
        '<div class="round">第 ' + (i + 1) + " 轮</div>" +
        '<div class="title">' + (ev ? ev.title : h.eventId) + "</div>" +
        '<div class="desc">采纳 <strong>' + (p ? p.name : "?") + "</strong> 的谏言：" + (adv ? adv.option : "?") + "</div>";
      list.appendChild(d);
    });
  }

  // ---------- 浮层统一管理（C1/I2/F4）----------
  let _overlay = null;
  function openOverlay(panelHtml, bind) {
    closeOverlay();
    const ov = document.createElement("div");
    ov.className = "ingame-overlay";
    ov.id = "ingame-overlay";
    ov.innerHTML = '<div class="ingame-panel">' + panelHtml + "</div>";
    document.body.appendChild(ov);
    _overlay = ov;
    requestAnimationFrame(function () { ov.classList.add("show"); });
    ov.onclick = function (ev) { if (ev.target === ov) closeOverlay(); };
    if (bind) bind(ov);
    return ov;
  }
  function closeOverlay() {
    if (!_overlay) return;
    const ov = _overlay;
    _overlay = null;
    ov.classList.remove("show");
    later(function () { ov.remove(); }, 320);
  }

  // ---------- 设置（J4）----------
  function toggleRow(label, id, checked) {
    return '<label>' + label + '<input type="checkbox" id="' + id + '"' + (checked ? " checked" : "") + "></label>";
  }
  function settingsHtml() {
    return '<div class="ingame-settings">' +
      toggleRow("静音", "set-mute", prefs.muted) +
      toggleRow("减弱动效", "set-reduce", prefs.reduceMotion) +
      toggleRow("关闭打字机", "set-type", prefs.noTypewriter) +
      '<label>音量<input type="range" id="set-vol" min="0" max="1" step="0.05" value="' + prefs.volume + '"></label>' +
      "</div>";
  }
  function bindSettings(ov) {
    const mute = ov.querySelector("#set-mute");
    const reduce = ov.querySelector("#set-reduce");
    const type = ov.querySelector("#set-type");
    const vol = ov.querySelector("#set-vol");
    if (mute) mute.onchange = function () {
      prefs.muted = mute.checked;
      if (window.Sfx) window.Sfx.setMuted(prefs.muted);
      // 顶栏静音键与设置面板共用同一状态源，避免一处改了另一处显示不同步
      const mb = $id("btn-mute");
      if (mb) mb.classList.toggle("muted", prefs.muted);
      savePrefs();
    };
    if (reduce) reduce.onchange = function () { prefs.reduceMotion = reduce.checked; savePrefs(); };
    if (type) type.onchange = function () { prefs.noTypewriter = type.checked; savePrefs(); };
    if (vol) vol.oninput = function () { prefs.volume = parseFloat(vol.value); if (window.Sfx) window.Sfx.setVolume(prefs.volume); savePrefs(); };
  }
  function openGameMenu() {
    const panel =
      '<div class="ingame-title">游 戏 菜 单</div>' +
      settingsHtml() +
      '<button class="ingame-btn" id="ov-continue">继 续 游 戏</button>' +
      '<button class="ingame-btn danger" id="ov-quit">保 存 并 回 主 菜 单</button>';
    openOverlay(panel, function (ov) {
      bindSettings(ov);
      ov.querySelector("#ov-continue").onclick = function () { closeOverlay(); };
      ov.querySelector("#ov-quit").onclick = function () { closeOverlay(); persist(); refreshMenu(); showScreen("menu"); };
    });
  }
  function openHowTo() {
    const panel =
      '<div class="ingame-title">玩 法 卷 轴</div>' +
      '<div class="ingame-body">' +
      "<h4>四维 · 王朝命脉</h4>" +
      '<p><span class="tag">民心</span> 百姓是否拥戴你。</p>' +
      '<p><span class="tag">财富</span> 国库是否充盈。</p>' +
      '<p><span class="tag">稳定</span> 秩序是否稳固。</p>' +
      '<p><span class="tag">自由</span> 思想是否舒展。</p>' +
      "<h4>隐藏哲人</h4>" +
      '<p>六位谏者并非一开始就现身。<span class="tag">卢梭</span> 与 <span class="tag">孔子</span> 须满足特定条件（如持续提升「自由」或「民心」）方才入列——多倾听、敢放权，他们自会登场。</p>' +
      "<h4>结局判定</h4>" +
      '<p>每一轮采纳谏言都会改变四维。任意一维触顶或触底将<span class="tag">即时结局</span>；十二轮结束后，则按你权衡的结果走向对应的王朝终章。</p>' +
      "</div>" +
      '<button class="ingame-btn" id="ov-howto-close">收 起 卷 轴</button>';
    openOverlay(panel, function (ov) {
      ov.querySelector("#ov-howto-close").onclick = function () { closeOverlay(); };
    });
  }
  function showSaveMark() {
    let m = $id("save-mark");
    if (!m) {
      m = document.createElement("div");
      m.id = "save-mark";
      m.className = "save-mark";
      m.textContent = "已自动保存";
      document.body.appendChild(m);
    }
    m.classList.add("show");
    later(function () { m.classList.remove("show"); }, TUNING.TOAST_MS);
  }
  function lazyBg(el, url) {
    if (!("IntersectionObserver" in window)) { el.style.backgroundImage = "url('" + url + "')"; return; }
    const io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { el.style.backgroundImage = "url('" + url + "')"; obs.unobserve(en.target); }
      });
    });
    io.observe(el);
  }

  // ---------- 初始化 ----------
  function init() {
    load();
    buildStatBar();
    // 主菜单空闲时静默预加载首批事件场景图，缓解开局图片黑底等待
    const _warmScenes = () => {
      try {
        (D.events || []).slice(0, 6).forEach((e, i) => {
          later(() => preloadImg(RES.scene(e.id)), i * 300);
        });
      } catch (err) {}
    };
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(_warmScenes, { timeout: 2500 });
    } else {
      later(_warmScenes, 1500);
    }
    document.addEventListener("click", (e) => {
      if (e.target && e.target.closest && e.target.closest("button") && window.Sfx) window.Sfx.click();
    });
    $id("btn-new").onclick = () => openSlots("new");
    $id("btn-continue").onclick = () => { if (anyRun()) openSlots("resume"); else toast("没有进行中的存档"); };
    $id("btn-codex").onclick = () => {
      window._fromGameToCodex=false;
      document.getElementById('btn-codex-back').textContent = '返回展厅';
      renderCodex(); showScreen("codex");
    };
    $id("btn-howto").onclick = () => openHowTo();
    var cd = $id("btn-codex-desktop"); if (cd) cd.onclick = () => { window._fromGameToCodex=false; document.getElementById('btn-codex-back').textContent='返回展厅'; renderCodex(); showScreen("codex"); };
    var hd = $id("btn-howto-desktop"); if (hd) hd.onclick = () => openHowTo();
    $id("btn-quit").onclick = () => toast("感谢游玩《哲人王》");
    $id("btn-codex-back").onclick = () => {
      if (window._fromGameToCodex) {
        window._fromGameToCodex = false;
        showScreen("game");
      } else {
        refreshMenu(); showScreen("menu");
      }
    };
    $id("btn-slots-back").onclick = () => { refreshMenu(); showScreen("menu"); };
    $id("btn-history-back").onclick = () => showScreen("game");
    $id("btn-open-history").onclick = (e) => { e.stopPropagation(); renderHistory(); showScreen("history"); };
    $id("btn-open-status").onclick = (e) => {
      e.stopPropagation();
      window._fromGameToCodex = true;
      document.getElementById('btn-codex-back').textContent = '返回游戏';
      renderCodex();
      showScreen("codex");
    };
    $id("btn-quit-game").onclick = (e) => {
      e.stopPropagation();
      // 统一走 openGameMenu：原先这里内联拼了一套独立浮层（样式写死在 JS、且无设置项），
      // 与 openOverlay 体系双轨并存。改走统一入口后，样式收口到 .ingame-overlay/.ingame-panel，
      // 设置项（静音 / 减动效 / 关打字机 / 音量）一并可用，并去掉了 2 处裸 setTimeout。
      openGameMenu();
    };
    const muteBtn = $id("btn-mute");
    if (muteBtn) muteToggleBind(muteBtn);
    // 启动回读偏好：上次的静音/音量同步给 Sfx，并还原顶栏图标态（J4 闭环）
    if (window.Sfx) {
      window.Sfx.setMuted(prefs.muted);
      window.Sfx.setVolume(prefs.volume);
    }
    if (muteBtn) muteBtn.classList.toggle("muted", !!prefs.muted);
    $id("btn-restart").onclick = () => openSlots("new");
    $id("btn-tomenu").onclick = () => { refreshMenu(); showScreen("menu"); };
    // 主菜单金色尘埃粒子
    const menu = $id("menu");
    for (let i = 0; i < 30; i++) {
      const d = document.createElement("div");
      d.className = "dust";
      const size = 2 + Math.random() * 4;
      d.style.width = size + "px";
      d.style.height = size + "px";
      d.style.left = Math.random() * 100 + "%";
      d.style.bottom = "-10px";
      d.style.animationDuration = (10 + Math.random() * 14) + "s";
      d.style.animationDelay = (Math.random() * 12) + "s";
      menu.appendChild(d);
    }

    refreshMenu();
    // 打开网页先播开场导入文字，播完自动进主菜单
    showScreen("intro");
    const introEl = $id("intro");
    function skipIntro(){
      if (introTimer === null) return; // 已自动进入菜单，避免重复切屏
      clearTimeout(introTimer);
      introTimer = null;
      document.removeEventListener("keydown", onIntroKey, true);
      showScreen("menu");
    }
    function onIntroKey(){ skipIntro(); }
    introEl.addEventListener("click", skipIntro);
    document.addEventListener("keydown", onIntroKey, true);
    introTimer = setTimeout(function(){
      introTimer = null;
      document.removeEventListener("keydown", onIntroKey, true);
      showScreen("menu");
    }, TUNING.INTRO_MS);
  }
  function muteToggleBind(btn) {
    btn.onclick = () => {
      const m = window.Sfx ? window.Sfx.toggle() : true;
      btn.classList.toggle("muted", m);
      prefs.muted = m; savePrefs();
    };
  }

  // 只读调试钩子（I3）：便于排查存档/数值，不暴露任何可写入口
  window.__debug = {
    get save() { return save; },
    get run() { return save ? save.run : null; },
    get prefs() { return prefs; },
    data: D,
    engine: E,
    RES: RES,
    showScreen: showScreen,
    renderEvent: renderEvent,
    persist: persist,
    version: "1.1"
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
