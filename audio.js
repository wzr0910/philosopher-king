// 音效模块：WebAudio 合成，青铜印章 + 羊皮纸 + 钟鸣质感，无外部文件
window.Sfx = (function () {
  let ctx = null;
  let muted = false;
  // 主音量（0~1）。此前 noise() 里引用了 masterVol 却从未声明，
  // 导致每次点击音效都抛 ReferenceError，羊皮纸沙沙声那层永远发不出来。
  let masterVol = 1;

  let resumePending = false;
  function markResumeDone() { resumePending = false; }

  function ensure() {
    if (muted) return null;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    // 原先每个音效都会调一次 resume()，在产生用户手势前会反复触发 autoplay 警告。
    // 改为：同一时刻只允许一个 resume 请求在途；并在首次用户手势时统一恢复一次。
    if (ctx.state === "suspended" && !resumePending) {
      resumePending = true;
      ctx.resume().then(markResumeDone, markResumeDone);
    }
    return ctx;
  }

  // 首次用户手势（点击/按键）时统一恢复一次 AudioContext，之后自动解绑
  function bindFirstGesture() {
    const handler = function () {
      if (ctx && ctx.state === "suspended") {
        ctx.resume().catch(function () { /* 忽略：等下次手势再试 */ });
      }
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
    window.addEventListener("pointerdown", handler);
    window.addEventListener("keydown", handler);
  }
  bindFirstGesture();

  // 基础单音：加泛音，做厚重金属/木质质感
  function tone(freq, dur, type, vol, overtones) {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    const master = c.createGain();
    master.gain.setValueAtTime(vol * masterVol, t);
    master.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    master.connect(c.destination);
    // 基音
    const o1 = c.createOscillator();
    o1.type = type || "sine";
    o1.frequency.value = freq;
    o1.connect(master);
    o1.start(t); o1.stop(t + dur + 0.02);
    // 泛音叠加
    if (overtones) {
      overtones.forEach(([mult, v]) => {
        const o = c.createOscillator();
        o.type = "sine";
        o.frequency.value = freq * mult;
        const g = c.createGain();
        g.gain.value = v;
        o.connect(g); g.connect(master);
        o.start(t); o.stop(t + dur + 0.02);
      });
    }
  }

  // 轻微白噪声（羊皮纸沙沙声）
  function noise(dur, vol, filterFreq) {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    const bufferSize = c.sampleRate * dur;
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = filterFreq || 1200;
    const g = c.createGain();
    g.gain.setValueAtTime(vol * masterVol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter); filter.connect(g); g.connect(c.destination);
    src.start(t); src.stop(t + dur);
  }

  // 青铜印章按下：低沉闷响 + 金属共鸣
  function click() {
    tone(180, 0.12, "sine", 0.18, [
      [2.5, 0.08],
      [5.2, 0.03]
    ]);
    noise(0.06, 0.04, 800);
  }

  // 数值变化：上涨=金箔轻碰暖音，下降=石质沉响
  function statChange(delta) {
    if (delta > 0) {
      tone(420, 0.18, "triangle", 0.07, [[2, 0.04]]);
    } else if (delta < 0) {
      tone(140, 0.22, "sine", 0.09, [[1.5, 0.05]]);
    }
  }

  // 结局：缓慢钟鸣，历史厚重感
  function ending() {
    const notes = [196, 247, 294, 392]; // G B D G 低音和弦
    notes.forEach((f, i) => {
      setTimeout(() => {
        tone(f, 1.2, "sine", 0.08, [
          [2, 0.04],
          [3, 0.02]
        ]);
      }, i * 350);
    });
  }

  // 翻页/打字：羊皮纸沙沙声
  function parchment() {
    noise(0.12, 0.035, 1800);
  }

  function toggle() { muted = !muted; return muted; }
  function isMuted() { return muted; }
  // 供设置面板调用。与顶栏 toggle() 共用同一个 muted，避免两处各管各的状态。
  function setMuted(m) { muted = !!m; return muted; }
  function setVolume(v) {
    v = Number(v);
    masterVol = isFinite(v) ? Math.max(0, Math.min(1, v)) : 1;
    return masterVol;
  }
  function getVolume() { return masterVol; }

  return {
    click, statChange, ending, parchment,
    toggle, isMuted, setMuted, setVolume, getVolume
  };
})();
