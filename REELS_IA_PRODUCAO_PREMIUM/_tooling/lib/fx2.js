/* ENERGIA v2 runtime additions (seek-safe; uses the same global tl) */
(function () {
  const css = getComputedStyle(document.documentElement);
  const capbg = (css.getPropertyValue("--capbg") || "#ff6a3d").trim();
  const capfg = (css.getPropertyValue("--capfg") || "#0f1115").trim();
  // captions with a moving highlight pill on the word being spoken
  window.captions = () => {
    document.querySelectorAll(".cap").forEach((cap) => {
      const t0 = parseFloat(cap.getAttribute("data-start"));
      const t1 = t0 + parseFloat(cap.getAttribute("data-duration"));
      const ci = cap.querySelector(".capin");
      tl.fromTo(ci, { scale: 0.7, y: 30, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.22, ease: "back.out(2.2)", immediateRender: true }, t0);
      tl.to(ci, { opacity: 0, duration: 0.06 }, t1 - 0.06);
      const ws = [...cap.querySelectorAll(".w")];
      ws.forEach((w, i) => {
        const s = parseFloat(w.getAttribute("data-s"));
        const e = i + 1 < ws.length ? parseFloat(ws[i + 1].getAttribute("data-s")) : t1;
        const base = getComputedStyle(w).color;
        tl.fromTo(w, { backgroundColor: "rgba(0,0,0,0)" }, { backgroundColor: capbg, color: capfg, duration: 0.05, immediateRender: false }, s);
        tl.fromTo(w, { scale: 1 }, { scale: 1.12, duration: 0.09, yoyo: true, repeat: 1, ease: "sine.out", immediateRender: false }, s);
        if (e - s > 0.05) tl.to(w, { backgroundColor: "rgba(0,0,0,0)", color: base, duration: 0.05 }, e - 0.02);
      });
    });
  };
  // full-frame diagonal swipe transition
  window.swipe = (id, t, d = 0.5) => {
    tl.fromTo(`#${id}`, { xPercent: -130, skewX: -12 }, { xPercent: 130, skewX: -12, duration: d, ease: "power2.inOut", immediateRender: true }, t - d / 2);
  };
  // camera punch-in on a keyword (on scene .cam is already used; punch a wrapper)
  window.punch = (sel, t, amt = 0.06) => {
    tl.fromTo(sel, { scale: 1 }, { scale: 1 + amt, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.out", immediateRender: false }, t);
  };
  // deterministic particle burst from the centre of a container
  window.burst = (sel, t, n = 26, colors = ["#ff6a3d", "#ffd23f", "#2f7bff", "#22c55e", "#ffffff"]) => {
    const host = document.querySelector(sel); if (!host) return;
    let seed = 11; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i");
      p.style.left = "50%"; p.style.top = "50%"; p.style.background = colors[i % colors.length]; p.style.opacity = 0;
      host.appendChild(p);
      const a = r() * Math.PI * 2, dist = 220 + r() * 380;
      tl.fromTo(p, { x: 0, y: 0, opacity: 1, rotation: 0, scale: 0.6 + r() },
        { x: Math.cos(a) * dist, y: Math.sin(a) * dist + 120, rotation: r() * 540, opacity: 0, duration: 1.1 + r() * 0.5, ease: "power3.out", immediateRender: false }, t);
    }
  };
  window.progress = (dur) => tl.fromTo(".progress", { scaleX: 0 }, { scaleX: 1, duration: dur, ease: "none", immediateRender: true }, 0);
  // floating drift for decorative items
  window.floaty = (sel, t, d, amp = 18) => tl.fromTo(sel, { y: -amp }, { y: amp, duration: d, ease: "sine.inOut", yoyo: true, repeat: 1, immediateRender: false }, t);
})();
