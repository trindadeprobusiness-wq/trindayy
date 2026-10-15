/* Runtime motion helpers — deterministic, seek-safe (all tweens live on one paused timeline). */
(function () {
  const tl = gsap.timeline({ paused: true });
  window.tl = tl;
  const $ = (s) => (typeof s === "string" ? document.querySelectorAll(s) : s);
  const E = { o: "power3.out", o4: "power4.out", io: "power2.inOut", back: "back.out(1.7)", soft: "sine.inOut", expo: "expo.out" };
  window.E = E;
  const FROM = {
    up: { y: 70, opacity: 0 }, down: { y: -70, opacity: 0 }, left: { x: -110, opacity: 0 }, right: { x: 110, opacity: 0 },
    pop: { scale: 0.55, opacity: 0 }, zoom: { scale: 1.25, opacity: 0 }, fade: { opacity: 0 }, rise: { y: 140, opacity: 0, scale: 0.94 },
    slam: { scale: 1.9, opacity: 0, rotation: -6 }, flip: { rotationX: -80, opacity: 0, y: 40, transformPerspective: 900 },
    wipe: { clipPath: "inset(0 100% 0 0)" }, drop: { y: -160, opacity: 0, rotation: -8 },
  };
  const TO = { y: 0, x: 0, opacity: 1, scale: 1, rotation: 0, rotationX: 0, clipPath: "inset(0 0% 0 0)" };
  // entrance
  window.inn = (sel, t, k = "up", d, extra) => {
    const f = FROM[k] || FROM.up;
    const to = {};
    for (const key in f) to[key] = TO[key];
    if (f.transformPerspective) delete to.transformPerspective;
    const ease = k === "pop" || k === "drop" ? E.back : k === "slam" ? "back.out(1.4)" : k === "wipe" ? E.io : E.o;
    tl.fromTo(sel, { ...f }, { ...to, duration: d || (k === "slam" ? 0.45 : k === "wipe" ? 0.7 : 0.6), ease, stagger: extra && extra.stagger, immediateRender: true }, t);
  };
  // exit
  window.out = (sel, t, k = "fade", d = 0.35) => {
    const to = k === "down" ? { y: 60, opacity: 0 } : k === "up" ? { y: -60, opacity: 0 } : k === "shrink" ? { scale: 0.8, opacity: 0 } : k === "left" ? { x: -120, opacity: 0 } : { opacity: 0 };
    tl.to(sel, { ...to, duration: d, ease: "power2.in" }, t);
  };
  window.set = (sel, vars, t) => tl.set(sel, vars, t);
  window.to = (sel, vars, t) => tl.to(sel, vars, t);
  window.fromTo = (sel, a, b, t) => tl.fromTo(sel, a, { immediateRender: false, ...b }, t);
  // typewriter (text stored in data-text)
  window.type = (sel, t, d) => {
    $(sel).forEach((el) => {
      const full = el.getAttribute("data-text") || el.textContent;
      el.textContent = "";
      const p = { n: 0 };
      tl.to(p, { n: full.length, duration: d || Math.max(0.3, full.length * 0.035), ease: "none",
        onUpdate: () => { el.textContent = full.slice(0, Math.round(p.n)); } }, t);
    });
  };
  // number counter; fmt: (v)=>string
  const FMT = {
    int: (v) => Math.round(v).toLocaleString("pt-BR"),
    mil: (v) => Math.round(v) + " mil",
    time: (v) => { const s = Math.round(v); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); },
    pct: (v) => Math.round(v) + "%",
    plus: (v) => "+" + Math.round(v),
  };
  window.count = (sel, t, d, from, toV, fmt = "int") => {
    $(sel).forEach((el) => {
      const p = { v: from }; const f = FMT[fmt] || FMT.int;
      el.textContent = f(from);
      tl.to(p, { v: toV, duration: d, ease: "power2.out", onUpdate: () => { el.textContent = f(p.v); } }, t);
    });
  };
  // svg stroke draw
  window.draw = (sel, t, d = 0.8, ease = "power2.inOut") => {
    $(sel).forEach((p) => {
      const L = p.getTotalLength ? p.getTotalLength() : 1000;
      tl.fromTo(p, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: d, ease, immediateRender: true }, t);
    });
  };
  window.pulse = (sel, t, s = 1.1, d = 0.5) => {
    tl.fromTo(sel, { scale: 1 }, { scale: s, duration: d / 2, yoyo: true, repeat: 1, ease: E.soft, immediateRender: false }, t);
  };
  window.shake = (sel, t) => {
    tl.fromTo(sel, { x: 0 }, { keyframes: { x: [0, -14, 12, -9, 6, -3, 0] }, duration: 0.42, ease: "none", immediateRender: false }, t);
  };
  window.strike = (sel, t, d = 0.35) => tl.fromTo(sel, { scaleX: 0 }, { scaleX: 1, duration: d, ease: E.io, transformOrigin: "left center", immediateRender: true }, t);
  window.glow = (sel, t, color, d = 0.4) => tl.to(sel, { boxShadow: `0 0 0 4px ${color}, 0 0 70px ${color}`, duration: d, ease: E.o }, t);
  window.unglow = (sel, t, d = 0.4) => tl.to(sel, { boxShadow: "0 0 0 0px rgba(0,0,0,0), 0 20px 50px rgba(0,0,0,0.55)", duration: d }, t);
  window.color = (sel, t, c, d = 0.25) => tl.to(sel, { color: c, duration: d }, t);
  window.bgc = (sel, t, c, d = 0.3) => tl.to(sel, { backgroundColor: c, duration: d }, t);
  // scene wrapper choreography
  window.scene = (id, t0, t1, opt = {}) => {
    const inner = `#${id} > .inner`, cam = `#${id} .cam`;
    const kin = opt.in || "rise";
    if (kin !== "none") {
      const f = kin === "zoom" ? { scale: 1.12, opacity: 0 } : kin === "left" ? { x: 160, opacity: 0 } : kin === "cut" ? { opacity: 0 } : { y: 120, scale: 0.97, opacity: 0 };
      tl.fromTo(inner, f, { x: 0, y: 0, scale: 1, opacity: 1, duration: kin === "cut" ? 0.08 : 0.55, ease: E.o4, immediateRender: true }, t0);
    }
    if (!opt.last) tl.to(inner, { opacity: 0, scale: 0.965, y: -50, duration: 0.32, ease: "power2.in" }, t1 - 0.32);
    const push = opt.push === undefined ? 0.035 : opt.push;
    tl.fromTo(cam, { scale: 1 }, { scale: 1 + push, duration: Math.max(0.5, t1 - t0), ease: "none", immediateRender: true }, t0);
  };
  // captions: data-ws JSON on each .cap: [[start,end,isKey],...]
  window.captions = () => {
    document.querySelectorAll(".cap").forEach((cap) => {
      const t0 = parseFloat(cap.getAttribute("data-start"));
      const t1 = t0 + parseFloat(cap.getAttribute("data-duration"));
      const ci = cap.querySelector(".capin");
      tl.fromTo(ci, { y: 26, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.16, ease: E.o, immediateRender: true }, t0);
      tl.to(ci, { opacity: 0, duration: 0.08 }, t1 - 0.08);
      cap.querySelectorAll(".w").forEach((w) => {
        const s = parseFloat(w.getAttribute("data-s"));
        tl.to(w, { opacity: 1, duration: 0.08, ease: "none" }, s);
        if (w.classList.contains("k")) tl.fromTo(w, { scale: 1 }, { scale: 1.12, duration: 0.12, yoyo: true, repeat: 1, ease: E.soft, immediateRender: false }, s);
      });
    });
  };
  // background drift
  window.bgDrift = (dur) => {
    tl.fromTo(".bg-grid", { x: 0, y: 0 }, { x: -72, y: -144, duration: dur, ease: "none", immediateRender: true }, 0);
    tl.fromTo(".bg-glow.a", { x: 0, y: 0 }, { x: 160, y: 220, duration: dur, ease: "sine.inOut", immediateRender: true }, 0);
    tl.fromTo(".bg-glow.b", { x: 0, y: 0 }, { x: -200, y: -260, duration: dur, ease: "sine.inOut", immediateRender: true }, 0);
  };
  window.tint = (t, c, d = 0.6) => tl.to(".bg-glow.c", { "--tint": c, duration: d }, t);
})();
