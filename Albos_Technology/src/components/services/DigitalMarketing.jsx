// import { useState, useEffect, useRef } from "react";
// import {
//   Phone, Mail, MapPin, Clock, TrendingUp, Target, Users, Eye,
//   Briefcase, Rocket, Layers, Search, ArrowRight, CircleCheckBig,
//   CircleX, PhoneCall, Video, ChevronDown, ShieldCheck,
//   BarChart2, Zap, CheckCircle2, Star, Building2, ShoppingCart,
//   MapPinned, ChartNoAxesColumn, TriangleAlert
// } from "lucide-react";

// /* ─────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────── */
// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// /* ─────────────────────────────────────────
//    REVEAL WRAPPER
// ───────────────────────────────────────── */
// function Reveal({ children, delay = 0, dir = "up", style = {} }) {
//   const [ref, inView] = useInView();
//   const dirs = {
//     up: "translateY(42px)",
//     down: "translateY(-42px)",
//     left: "translateX(-42px)",
//     right: "translateX(42px)",
//   };
//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "none" : dirs[dir],
//         transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    ANIMATED COUNTER
// ───────────────────────────────────────── */
// function Counter({ target, suffix = "" }) {
//   const [n, setN] = useState(0);
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (!inView) return;
//     let v = 0;
//     const step = target / 60;
//     const t = setInterval(() => {
//       v += step;
//       if (v >= target) { setN(target); clearInterval(t); }
//       else setN(Math.floor(v));
//     }, 16);
//     return () => clearInterval(t);
//   }, [inView, target]);
//   return <span ref={ref}>{n}{suffix}</span>;
// }

// /* ─────────────────────────────────────────
//    PARTICLES
// ───────────────────────────────────────── */
// function Particles({ color = "rgba(251,146,60,0.15)", count = 18 }) {
//   const pts = Array.from({ length: count }, (_, i) => ({
//     id: i, size: 2 + (i % 5),
//     x: (i * 19 + 11) % 96, y: (i * 27 + 8) % 92,
//     dur: 4 + (i % 7), delay: i % 5,
//   }));
//   return (
//     <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
//       {pts.map(p => (
//         <div key={p.id} style={{
//           position: "absolute", width: p.size, height: p.size, borderRadius: "50%",
//           background: color, left: `${p.x}%`, top: `${p.y}%`,
//           animation: `dmf ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
//         }} />
//       ))}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    TICKER STRIP
// ───────────────────────────────────────── */
// const ticks = ["Meta Ads", "LinkedIn B2B", "YouTube SEO", "Instagram Growth", "TikTok Strategy", "Retargeting Funnels", "A/B Testing", "ROAS Optimization", "Content Strategy", "Analytics & ROI", "Brand Building", "Conversion Funnels"];
// function Ticker() {
//   return (
//     <div style={{ overflow: "hidden", padding: "11px 0", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e", background: "#0d0d1a" }}>
//       <div style={{ display: "inline-flex", animation: "ticker 30s linear infinite" }}>
//         {[...ticks, ...ticks].map((t, i) => (
//           <span key={i} style={{ padding: "0 28px", fontSize: 12, fontWeight: 700, color: "#6b7280", letterSpacing: "0.12em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
//             <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#f97316", display: "inline-block" }} />{t}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    LIVE DASHBOARD (Hero Visual)
// ───────────────────────────────────────── */
// function LiveDashboard() {
//   const [active, setActive] = useState(0);
//   const platforms = [
//     { name: "Meta Ads",  leads: 480, spend: "₹1.2L", icon: "📘", color: "#1877f2" },
//     { name: "LinkedIn",  leads: 210, spend: "₹80K",  icon: "💼", color: "#0077b5" },
//     { name: "YouTube",   leads: 150, spend: "₹60K",  icon: "▶",  color: "#ff0000" },
//   ];
//   useEffect(() => {
//     const t = setInterval(() => setActive(a => (a + 1) % 3), 2800);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "100%", maxWidth: 480, margin: "0 auto" }}>
//       {/* Main card */}
//       <div style={{ background: "#111827", borderRadius: 22, border: "1px solid #1f2937", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
//         {/* Header bar */}
//         <div style={{ padding: "14px 20px", background: "#0d0d1a", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1f2937" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#f97316,#ef4444)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>📊</div>
//             <div>
//               <div style={{ fontSize: 12, fontWeight: 700, color: "#e5e7eb", letterSpacing: "0.04em" }}>CAMPAIGN OVERVIEW</div>
//               <div style={{ fontSize: 11, color: "#6b7280" }}>Live · 3 Active Campaigns</div>
//             </div>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#065f46", borderRadius: 20, padding: "4px 10px", fontSize: 10, fontWeight: 700, color: "#10b981", letterSpacing: "0.06em" }}>
//             <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "pulse 1.4s infinite" }} />LIVE
//           </div>
//         </div>
//         {/* KPIs */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #1f2937" }}>
//           {[
//             { label: "ROAS", val: "4.2×", color: "#f97316" },
//             { label: "Leads", val: "1,840", color: "#a78bfa" },
//             { label: "Reach", val: "2.4M", color: "#34d399" },
//           ].map((m, i) => (
//             <div key={i} style={{ padding: "14px 10px", textAlign: "center", borderRight: i < 2 ? "1px solid #1f2937" : "none" }}>
//               <div style={{ fontSize: 17, fontWeight: 800, color: m.color, fontFamily: "'Syne',sans-serif" }}>{m.val}</div>
//               <div style={{ fontSize: 10, color: "#6b7280", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em" }}>{m.label}</div>
//             </div>
//           ))}
//         </div>
//         {/* Platform list */}
//         <div style={{ padding: "14px 16px" }}>
//           <div style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", marginBottom: 10 }}>ACTIVE PLATFORMS</div>
//           {platforms.map((p, i) => (
//             <div key={i} style={{
//               display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10,
//               background: active === i ? "#1f2937" : "transparent",
//               border: active === i ? "1px solid #374151" : "1px solid transparent",
//               marginBottom: 6, transition: "all 0.4s",
//             }}>
//               <div style={{ width: 32, height: 32, borderRadius: 8, background: active === i ? p.color : "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, transition: "background 0.4s" }}>{p.icon}</div>
//               <div style={{ flex: 1 }}>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: "#e5e7eb" }}>{p.name}</div>
//                 <div style={{ fontSize: 11, color: "#6b7280" }}>Spend: {p.spend}</div>
//               </div>
//               <div style={{ textAlign: "right" }}>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: active === i ? "#f97316" : "#6b7280" }}>{p.leads} leads</div>
//                 {active === i && <div style={{ fontSize: 9, color: "#10b981", fontWeight: 700, letterSpacing: "0.06em" }}>● ACTIVE</div>}
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Bar chart */}
//         <div style={{ padding: "10px 16px 16px", borderTop: "1px solid #1f2937" }}>
//           <div style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", marginBottom: 8 }}>WEEKLY PERFORMANCE</div>
//           <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 44 }}>
//             {[28, 45, 38, 62, 55, 80, 68, 88, 72, 92, 65, 85].map((h, i) => (
//               <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 11 ? "#f97316" : "#1f2937" }} />
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Floating badges */}
//       {[
//         { text: "3.8× ROAS", icon: "🎯", pos: { top: "10%", left: "-20%" }, bg: "#0d0d1a", border: "#f97316", color: "#f97316", d: 0 },
//         { text: "+120% Leads", icon: "🚀", pos: { bottom: "20%", right: "-18%" }, bg: "#0d0d1a", border: "#34d399", color: "#34d399", d: 0.9 },
//         { text: "50M Reach", icon: "👁", pos: { bottom: "4%", left: "-15%" }, bg: "#0d0d1a", border: "#a78bfa", color: "#a78bfa", d: 1.7 },
//       ].map((b, i) => (
//         <div key={i} style={{
//           position: "absolute", ...b.pos,
//           background: b.bg, border: `1px solid ${b.border}33`,
//           borderRadius: 12, padding: "7px 13px",
//           display: "flex", alignItems: "center", gap: 7,
//           fontSize: 12, fontWeight: 700, color: b.color,
//           boxShadow: `0 4px 20px ${b.border}22`,
//           animation: `dmf ${3 + i * 0.6}s ease-in-out ${b.d}s infinite alternate`,
//           whiteSpace: "nowrap", zIndex: 10,
//         }}>
//           <span style={{ fontSize: 14 }}>{b.icon}</span>{b.text}
//         </div>
//       ))}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    FAQ ACCORDION
// ───────────────────────────────────────── */
// function FAQItem({ question, answer, delay = 0 }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <Reveal delay={delay}>
//       <div style={{
//         borderRadius: 14, border: `1px solid ${open ? "#f9731633" : "#1f2937"}`,
//         background: open ? "#111827" : "#0d0d1a",
//         overflow: "hidden", transition: "border 0.3s, background 0.3s", marginBottom: 10,
//       }}>
//         <button onClick={() => setOpen(!open)} style={{
//           width: "100%", padding: "18px 22px", display: "flex", alignItems: "center",
//           justifyContent: "space-between", background: "none", border: "none",
//           cursor: "pointer", gap: 14, textAlign: "left",
//         }}>
//           <span style={{ fontSize: 15, fontWeight: 600, color: "#e5e7eb", lineHeight: 1.5 }}>{question}</span>
//           <span style={{
//             flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
//             background: open ? "#f97316" : "#1f2937",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             transition: "background 0.3s, transform 0.35s", transform: open ? "rotate(180deg)" : "none",
//           }}>
//             <ChevronDown size={14} color={open ? "white" : "#6b7280"} />
//           </span>
//         </button>
//         {open && (
//           <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#9ca3af", lineHeight: 1.78 }}>{answer}</div>
//         )}
//       </div>
//     </Reveal>
//   );
// }

// /* ─────────────────────────────────────────
//    COMPARISON ROW
// ───────────────────────────────────────── */
// function CompRow({ cap, ours, theirs }) {
//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr", borderBottom: "1px solid #1f2937" }}>
//       <div style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600, color: "#9ca3af" }}>{cap}</div>
//       <div style={{ padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: 10, borderLeft: "1px solid #1f2937" }}>
//         <CircleCheckBig size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
//         <span style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.6 }}>{ours}</span>
//       </div>
//       <div style={{ padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: 10, borderLeft: "1px solid #1f2937" }}>
//         <CircleX size={16} color="#f43f5e" style={{ flexShrink: 0, marginTop: 2 }} />
//         <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{theirs}</span>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    SECTION LABEL
// ───────────────────────────────────────── */
// function Label({ children, color = "#f97316" }) {
//   return (
//     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
//       <span style={{ width: 20, height: 2, background: color, display: "inline-block" }} />
//       <span style={{ fontSize: 11, fontWeight: 800, color, letterSpacing: "0.14em", textTransform: "uppercase" }}>{children}</span>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    MAIN
// ───────────────────────────────────────── */
// export default function DigitalMarketing() {
//   return (
//     <div style={{ fontFamily: "'DM Sans',sans-serif", background: "#0a0a14", color: "#e5e7eb", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
//         *{box-sizing:border-box;margin:0;padding:0;}
//         body{-webkit-font-smoothing:antialiased;}
//         @keyframes dmf    {0%{transform:translateY(0);}100%{transform:translateY(-16px);}}
//         @keyframes ticker {0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
//         @keyframes pulse  {0%,100%{opacity:1;}50%{opacity:.3;}}
//         @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
//         @keyframes spin   {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
//         @keyframes blink  {0%,100%{opacity:1;}40%{opacity:.5;}}
//         .hov-lift{transition:transform .3s,box-shadow .3s;}
//         .hov-lift:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,0,0,.5)!important;}
//         .hov-img img{transition:transform .55s;}
//         .hov-img:hover img{transform:scale(1.07);}
//         .hov-border{transition:border-color .25s;}
//         .hov-border:hover{border-color:#f97316 !important;}
//         @media(max-width:700px){
//           .hero-row{flex-direction:column-reverse !important;}
//           .badge-float{display:none !important;}
//           .cmp-grid{grid-template-columns:1fr 1fr !important;}
//           .cmp-cap{display:none !important;}
//         }
//         @media(max-width:480px){
//           .cmp-grid{grid-template-columns:1fr !important;}
//         }
//       `}</style>

//       {/* ════════════════════════════
//           HERO
//       ════════════════════════════ */}
//       <section style={{ position: "relative", padding: "clamp(80px,12vw,130px) 0 clamp(70px,10vw,110px)", overflow: "hidden", background: "radial-gradient(ellipse 80% 50% at 60% 0%,rgba(249,115,22,0.08) 0%,transparent 70%)" }}>
//         <Particles />
//         {/* Grid texture */}
//         <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
//           <defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#f97316" strokeWidth="0.6" /></pattern></defs>
//           <rect width="100%" height="100%" fill="url(#g)" />
//         </svg>

//         <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,5vw,48px)", position: "relative", zIndex: 1 }}>
//           <div className="hero-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,80px)", justifyContent: "space-between" }}>
//             {/* Text side */}
//             <div style={{ flex: "1 1 380px", maxWidth: 580 }}>
//               <Reveal>
//                 <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f9731614", border: "1px solid #f9731633", borderRadius: 6, padding: "5px 14px", marginBottom: 24 }}>
//                   <TrendingUp size={12} color="#f97316" />
//                   <span style={{ fontSize: 11, fontWeight: 800, color: "#f97316", letterSpacing: "0.1em", textTransform: "uppercase" }}>Enterprise Social Media Marketing</span>
//                 </div>
//               </Reveal>
//               <Reveal delay={0.1}>
//                 <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", lineHeight: 1.08, color: "#f9fafb", marginBottom: 22, letterSpacing: "-0.02em" }}>
//                   Social Media That{" "}
//                   <span style={{ position: "relative", display: "inline-block" }}>
//                     <span style={{ background: "linear-gradient(90deg,#f97316,#ef4444,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Drives Revenue</span>
//                     <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }} viewBox="0 0 200 8" preserveAspectRatio="none">
//                       <path d="M2 6 Q100 1 198 6" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
//                     </svg>
//                   </span>
//                 </h1>
//               </Reveal>
//               <Reveal delay={0.18}>
//                 <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.78, marginBottom: 36, maxWidth: 500 }}>
//                   Performance-driven social media marketing designed to increase visibility, generate qualified leads, and drive measurable revenue growth across major platforms.
//                 </p>
//               </Reveal>
//               <Reveal delay={0.26}>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
//                   <button style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", color: "white", border: "none", borderRadius: 10, padding: "14px clamp(20px,3vw,32px)", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 28px rgba(249,115,22,0.4)", transition: "all .3s" }}
//                     onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(249,115,22,0.5)"; }}
//                     onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 28px rgba(249,115,22,0.4)"; }}>
//                     Get a Free Quote <PhoneCall size={15} />
//                   </button>
//                   <button style={{ background: "transparent", color: "#e5e7eb", border: "1px solid #374151", borderRadius: 10, padding: "14px clamp(20px,3vw,32px)", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all .3s" }}
//                     onMouseEnter={e => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.color = "#f97316"; }}
//                     onMouseLeave={e => { e.currentTarget.style.borderColor = "#374151"; e.currentTarget.style.color = "#e5e7eb"; }}>
//                     View Our Work <Video size={15} />
//                   </button>
//                 </div>
//               </Reveal>
//               <Reveal delay={0.34}>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
//                   {[["🎯", "ROI-Focused"], ["📊", "Data-Driven"], ["🚀", "Scalable"]].map(([ic, lb]) => (
//                     <span key={lb} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
//                       <span>{ic}</span>{lb}
//                     </span>
//                   ))}
//                 </div>
//               </Reveal>
//             </div>
//             {/* Dashboard */}
//             <Reveal delay={0.14} dir="left" style={{ flex: "1 1 340px", maxWidth: 500 }}>
//               <LiveDashboard />
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       <Ticker />

//       {/* ════════════════════════════
//           STATS
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(56px,8vw,80px) clamp(20px,5vw,48px)", background: "#0d0d1a" }}>
//         <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
//           {[
//             { val: 3, suf: "×", label: "Avg Return on Ad Spend", icon: "💰", color: "#f97316" },
//             { val: 120, suf: "%", label: "Lead Growth Rate", icon: "📈", color: "#a78bfa" },
//             { val: 50, suf: "M+", label: "Ad Impressions Served", icon: "👁", color: "#34d399" },
//             { val: 200, suf: "+", label: "Brands Scaled Globally", icon: "🏆", color: "#60a5fa" },
//           ].map((s, i) => (
//             <Reveal key={i} delay={i * 0.08}>
//               <div className="hov-lift" style={{ background: "#111827", borderRadius: 18, padding: "24px 18px", border: "1px solid #1f2937", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
//                 <div style={{ fontSize: 26, marginBottom: 6 }}>{s.icon}</div>
//                 <div style={{ fontSize: 38, fontWeight: 900, color: s.color, fontFamily: "'Syne',sans-serif", lineHeight: 1 }}>
//                   <Counter target={s.val} suffix={s.suf} />
//                 </div>
//                 <div style={{ fontSize: 12, color: "#6b7280", marginTop: 7, fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════
//           CHALLENGES
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(80px,10vw,112px) clamp(20px,5vw,48px)", background: "#0a0a14" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 72px" }}>
//               <Label color="#ef4444">The Problem</Label>
//               <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Why Most Social Media Efforts Fail to Deliver Results</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>Most businesses are active on social platforms, yet very few achieve consistent leads or revenue. The real challenge is moving beyond posting to building a structured, data-driven growth system.</p>
//             </div>
//           </Reveal>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
//             {/* Challenges */}
//             <Reveal dir="right">
//               <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid #1f2937", background: "#111827", height: "100%" }}>
//                 <div className="hov-img" style={{ height: 220, overflow: "hidden", position: "relative" }}>
//                   <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80" alt="Challenges" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                   <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(17,24,39,1),transparent 55%)" }} />
//                   <div style={{ position: "absolute", bottom: 18, left: 22 }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ef444433", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700, color: "#fca5a5", letterSpacing: "0.1em", marginBottom: 6 }}>⚠ COMMON CHALLENGES</div>
//                     <div style={{ fontSize: 18, fontWeight: 800, color: "white", fontFamily: "'Syne',sans-serif" }}>Why Brands Struggle</div>
//                   </div>
//                 </div>
//                 <div style={{ padding: "24px 26px 28px" }}>
//                   {[
//                     { icon: <TriangleAlert size={16} />, t: "Low Engagement & Limited Reach", d: "Content published consistently but fails to attract meaningful engagement or qualified attention." },
//                     { icon: <Target size={16} />, t: "Unclear Audience Targeting", d: "Ads reach broad audiences without data-backed segmentation or intent-based targeting." },
//                     { icon: <ChartNoAxesColumn size={16} />, t: "No Measurable ROI", d: "Hard to connect social media activity with leads, sales, or real business growth." },
//                   ].map((item, i) => (
//                     <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < 2 ? 20 : 0 }}>
//                       <div style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 9, background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>{item.icon}</div>
//                       <div>
//                         <div style={{ fontWeight: 700, fontSize: 14, color: "#e5e7eb", marginBottom: 4 }}>{item.t}</div>
//                         <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{item.d}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//             {/* Opportunity */}
//             <Reveal dir="left" delay={0.12}>
//               <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid #1f2937", background: "#111827", height: "100%" }}>
//                 <div className="hov-img" style={{ height: 220, overflow: "hidden", position: "relative" }}>
//                   <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=700&q=80" alt="Opportunity" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                   <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(17,24,39,1),transparent 55%)" }} />
//                   <div style={{ position: "absolute", bottom: 18, left: 22 }}>
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#05966933", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700, color: "#6ee7b7", letterSpacing: "0.1em", marginBottom: 6 }}>✓ THE OPPORTUNITY</div>
//                     <div style={{ fontSize: 18, fontWeight: 800, color: "white", fontFamily: "'Syne',sans-serif" }}>Performance-Driven Strategy</div>
//                   </div>
//                 </div>
//                 <div style={{ padding: "24px 26px 28px" }}>
//                   {[
//                     { icon: <TrendingUp size={16} />, t: "Predictable & Scalable Growth", d: "Platform-specific strategies that consistently increase reach, engagement, and conversions." },
//                     { icon: <Target size={16} />, t: "Precision Targeting & Funnels", d: "Advanced audience segmentation, retargeting funnels, and accurate conversion tracking." },
//                     { icon: <ChartNoAxesColumn size={16} />, t: "Clear ROI & Business Impact", d: "Transparent reporting linking social media performance directly to revenue and growth." },
//                   ].map((item, i) => (
//                     <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < 2 ? 20 : 0 }}>
//                       <div style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 9, background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#34d399" }}>{item.icon}</div>
//                       <div>
//                         <div style={{ fontWeight: 700, fontSize: 14, color: "#e5e7eb", marginBottom: 4 }}>{item.t}</div>
//                         <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{item.d}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           PLATFORMS
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(80px,10vw,112px) clamp(20px,5vw,48px)", background: "#0d0d1a" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 72px" }}>
//               <Label color="#60a5fa">Platforms</Label>
//               <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Platform-Specific Marketing Services</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>Every platform requires a different strategy. We deliver platform-focused services designed to drive engagement, leads, and measurable business growth.</p>
//             </div>
//           </Reveal>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
//             {[
//               { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80", icon: "📘", accent: "#1877f2", title: "Meta Ads (Facebook & Instagram)", desc: "Performance-driven advertising focused on lead generation, eCommerce sales, and scalable ROAS through advanced targeting.", bullets: ["Facebook & Instagram ad management", "Custom audiences & lookalike targeting", "Meta Pixel & conversion tracking", "Retargeting funnels & ROAS scaling"] },
//               { img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80", icon: "💼", accent: "#0077b5", title: "LinkedIn B2B Lead Generation", desc: "High-quality B2B lead generation and executive branding on LinkedIn to reach decision-makers and enterprise buyers.", bullets: ["LinkedIn Ads & ABM campaigns", "Sponsored content & InMail outreach", "Founder & CXO personal branding", "CRM-integrated lead tracking"] },
//               { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", icon: "▶", accent: "#ff0000", title: "YouTube SEO & Video Marketing", desc: "Long-term YouTube growth through SEO-optimized video content, Shorts strategy, paid video ads, and analytics-driven optimization.", bullets: ["YouTube SEO & channel optimization", "High-retention long & short-form videos", "YouTube Ads & remarketing funnels", "Performance tracking & scaling"] },
//             ].map((p, i) => (
//               <Reveal key={i} delay={i * 0.1}>
//                 <div className="hov-lift hov-border" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1f2937", background: "#111827", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
//                   <div className="hov-img" style={{ height: 168, overflow: "hidden", position: "relative" }}>
//                     <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                     <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top,#111827,${p.accent}22 80%,transparent)` }} />
//                     <div style={{ position: "absolute", top: 12, left: 12, width: 36, height: 36, borderRadius: 9, background: "#0d0d1a", border: `1px solid ${p.accent}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{p.icon}</div>
//                   </div>
//                   <div style={{ padding: "20px 22px 24px" }}>
//                     <h3 style={{ fontWeight: 800, fontSize: 15, fontFamily: "'Syne',sans-serif", color: "#f9fafb", marginBottom: 8 }}>{p.title}</h3>
//                     <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
//                     {p.bullets.map((b, j) => (
//                       <div key={j} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, color: "#9ca3af", marginBottom: 7 }}>
//                         <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.accent, flexShrink: 0 }} />{b}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           INDUSTRIES
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(80px,10vw,112px) clamp(20px,5vw,48px)", background: "#0a0a14" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 72px" }}>
//               <Label color="#a78bfa">Industries</Label>
//               <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Built for Every Growth-Driven Industry</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>From startups to established enterprises, we help businesses leverage social media to increase visibility, leads, and revenue.</p>
//             </div>
//           </Reveal>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 16 }}>
//             {[
//               { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80", icon: <Building2 size={18} />, accent: "#6366f1", title: "B2B & Enterprise", desc: "LinkedIn-focused strategies for lead generation, authority building, and decision-maker engagement." },
//               { img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", icon: <ShoppingCart size={18} />, accent: "#f43f5e", title: "eCommerce & D2C", desc: "Performance ads, product creatives, and retargeting funnels built to maximize ROAS." },
//               { img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80", icon: <Rocket size={18} />, accent: "#34d399", title: "Startups & SaaS", desc: "Rapid brand building, audience growth, and demand generation through scalable systems." },
//               { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", icon: <MapPinned size={18} />, accent: "#60a5fa", title: "Local & Service", desc: "Location-based targeting, Google Business Profile, and community engagement for local growth." },
//             ].map((ind, i) => (
//               <Reveal key={i} delay={(i % 4) * 0.08}>
//                 <div style={{ position: "relative", height: 268, borderRadius: 18, overflow: "hidden", cursor: "pointer", border: "1px solid #1f2937", boxShadow: "0 4px 20px rgba(0,0,0,0.4)", transition: "transform .3s, box-shadow .3s" }}
//                   onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 48px ${ind.accent}22`; e.currentTarget.style.borderColor = `${ind.accent}66`; e.currentTarget.querySelector("img").style.transform = "scale(1.1)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)"; e.currentTarget.style.borderColor = "#1f2937"; e.currentTarget.querySelector("img").style.transform = "scale(1)"; }}>
//                   <img src={ind.img} alt={ind.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .55s" }} />
//                   <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(10,10,20,0.95),rgba(10,10,20,0.2) 60%,transparent)" }} />
//                   <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 18 }}>
//                     <div style={{ width: 34, height: 34, borderRadius: 9, background: `${ind.accent}22`, border: `1px solid ${ind.accent}55`, display: "flex", alignItems: "center", justifyContent: "center", color: ind.accent, marginBottom: 8 }}>{ind.icon}</div>
//                     <h3 style={{ fontWeight: 800, fontSize: 15, color: "white", fontFamily: "'Syne',sans-serif", marginBottom: 5 }}>{ind.title}</h3>
//                     <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.55 }}>{ind.desc}</p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           FRAMEWORK
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(80px,10vw,112px) clamp(20px,5vw,48px)", background: "#0d0d1a" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 72px" }}>
//               <Label color="#f97316">Our Process</Label>
//               <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Our Proven Growth Framework</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>A systematic, data-driven process designed to generate consistent leads, conversions, and measurable ROI across platforms.</p>
//             </div>
//           </Reveal>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
//             {[
//               { step: "01", icon: <Search size={20} />, accent: "#ef4444", title: "Audit & Research", desc: "Deep audit of your accounts, competitors, audience behavior, and historical performance to identify gaps.", points: ["Platform & account performance audit", "Audience & competitor research", "Content & funnel gap analysis", "KPI definition & benchmarks"] },
//               { step: "02", icon: <Layers size={20} />, accent: "#a78bfa", title: "Strategy & Funnel Architecture", desc: "Platform-specific strategies and conversion-focused funnels aligned with your business objectives.", points: ["Content & campaign roadmap", "Paid + organic funnel design", "Messaging & positioning strategy", "Budget planning & forecasting"] },
//               { step: "03", icon: <Rocket size={20} />, accent: "#34d399", title: "Creative Execution & Launch", desc: "Creative and performance teams execute campaigns with precision and strong conversion readiness.", points: ["Ad creatives & content production", "Campaign setup & QA", "Pixel, events & analytics setup", "Controlled rollout & A/B testing"] },
//               { step: "04", icon: <BarChart2 size={20} />, accent: "#60a5fa", title: "Optimization & Reporting", desc: "Continuously optimize campaigns, scale high-performing strategies, and deliver transparent reporting.", points: ["Performance monitoring & optimization", "Budget scaling & ROAS improvement", "Weekly / monthly performance reports", "Continuous growth iteration"] },
//             ].map((s, i) => (
//               <Reveal key={i} delay={i * 0.1}>
//                 <div className="hov-lift hov-border" style={{ borderRadius: 20, border: "1px solid #1f2937", background: "#111827", padding: "24px 22px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", height: "100%" }}>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
//                     <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.accent}15`, border: `1px solid ${s.accent}33`, display: "flex", alignItems: "center", justifyContent: "center", color: s.accent }}>{s.icon}</div>
//                     <span style={{ fontSize: 38, fontWeight: 900, color: "#1f2937", fontFamily: "'Syne',sans-serif", lineHeight: 1 }}>{s.step}</span>
//                   </div>
//                   <h3 style={{ fontWeight: 800, fontSize: 15, fontFamily: "'Syne',sans-serif", color: "#f9fafb", marginBottom: 8 }}>{s.title}</h3>
//                   <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
//                   {s.points.map((p, j) => (
//                     <div key={j} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, color: "#9ca3af", marginBottom: 8 }}>
//                       <span style={{ width: 4, height: 4, borderRadius: "50%", background: s.accent, flexShrink: 0 }} />{p}
//                     </div>
//                   ))}
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           WHY CHOOSE US
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(80px,10vw,112px) clamp(20px,5vw,48px)", background: "#0a0a14" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 72px" }}>
//               <Label color="#34d399">Why Us</Label>
//               <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Why Brands Choose Us as Their Growth Partner</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>We combine creativity, performance marketing, and analytics to drive real business outcomes — not just likes and followers.</p>
//             </div>
//           </Reveal>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
//             {[
//               { icon: <Target size={20} />, accent: "#ef4444", title: "Strategy Before Execution", desc: "Every campaign starts with deep research, audience insights, and business alignment — not random posting or boosted ads." },
//               { icon: <BarChart2 size={20} />, accent: "#a78bfa", title: "Performance & ROI Focused", desc: "We optimize every platform for measurable KPIs — leads, conversions, ROAS, and long-term revenue impact." },
//               { icon: <Users size={20} />, accent: "#34d399", title: "Dedicated Expert Teams", desc: "Your brand is handled by platform specialists — strategists, creatives, and performance marketers." },
//               { icon: <Layers size={20} />, accent: "#60a5fa", title: "Full-Funnel Approach", desc: "From awareness to conversion and retention, we design integrated funnels across every buyer stage." },
//               { icon: <ShieldCheck size={20} />, accent: "#f97316", title: "Transparent Reporting", desc: "No vanity metrics. Clear dashboards, honest reporting, and actionable insights aligned with business goals." },
//               { icon: <TrendingUp size={20} />, accent: "#f43f5e", title: "Built to Scale With You", desc: "Whether startup or enterprise, our systems and campaigns scale seamlessly as your business grows." },
//             ].map((f, i) => (
//               <Reveal key={i} delay={i * 0.07}>
//                 <div className="hov-lift hov-border" style={{ background: "#111827", borderRadius: 18, padding: "22px 20px", border: "1px solid #1f2937", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}>
//                   <div style={{ width: 42, height: 42, borderRadius: 11, background: `${f.accent}15`, border: `1px solid ${f.accent}33`, display: "flex", alignItems: "center", justifyContent: "center", color: f.accent, marginBottom: 14 }}>{f.icon}</div>
//                   <div style={{ fontWeight: 800, fontSize: 14.5, color: "#f9fafb", marginBottom: 7, fontFamily: "'Syne',sans-serif" }}>{f.title}</div>
//                   <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>{f.desc}</div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           CTA BANNER
//       ════════════════════════════ */}
//       <section style={{ padding: "0 clamp(20px,5vw,48px) clamp(80px,10vw,112px)" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ borderRadius: 26, padding: "clamp(48px,6vw,80px) clamp(28px,5vw,64px)", textAlign: "center", background: "linear-gradient(135deg,#1c0a00,#7c2d12,#1e1b4b,#0d0d1a)", backgroundSize: "400% 400%", animation: "gradShift 8s ease infinite", position: "relative", overflow: "hidden", border: "1px solid #374151" }}>
//               <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse,rgba(249,115,22,0.15),transparent 70%)", pointerEvents: "none" }} />
//               <div style={{ position: "relative", zIndex: 1 }}>
//                 <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 6, padding: "6px 16px", marginBottom: 22, fontSize: 12, fontWeight: 700, color: "#fb923c", letterSpacing: "0.1em", textTransform: "uppercase" }}>
//                   📅 Free Social Media Audit & Strategy Session
//                 </div>
//                 <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 900, color: "white", marginBottom: 16, lineHeight: 1.15, letterSpacing: "-0.02em" }}>Ready to Turn Social Media Into a Predictable Growth Channel?</h3>
//                 <p style={{ color: "#9ca3af", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.78, fontSize: 16 }}>Get a personalized audit of your social media presence, ad performance, and growth opportunities — completely free. No sales pressure, just actionable insights.</p>
//                 <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
//                   <button style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", color: "white", border: "none", borderRadius: 10, padding: "14px 34px", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 28px rgba(249,115,22,0.45)", transition: "all .3s" }}
//                     onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
//                     onMouseLeave={e => e.currentTarget.style.transform = ""}>
//                     Get My Free Audit <ArrowRight size={15} />
//                   </button>
//                   <button style={{ background: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "14px 34px", fontWeight: 600, fontSize: 15, cursor: "pointer", backdropFilter: "blur(8px)", transition: "all .3s" }}
//                     onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
//                     onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
//                     Book a Strategy Call
//                   </button>
//                 </div>
//                 <div style={{ marginTop: 22, fontSize: 12, color: "#6b7280", letterSpacing: "0.04em" }}>
//                   ✓ No obligation &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 30-minute expert review &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Actionable growth plan
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           COMPARISON TABLE
//       ════════════════════════════ */}
//       <section style={{ padding: "0 clamp(20px,5vw,48px) clamp(80px,10vw,112px)", background: "#0a0a14" }}>
//         <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
//               <Label color="#ef4444">Comparison</Label>
//               <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>How We Compare to Traditional Agencies</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>Not all social media agencies are built the same. Here's how our performance-driven approach compares.</p>
//             </div>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <div style={{ overflowX: "auto", borderRadius: 20, border: "1px solid #1f2937", background: "#111827" }}>
//               <div style={{ minWidth: 600 }}>
//                 {/* Header */}
//                 <div className="cmp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr", borderBottom: "1px solid #1f2937", background: "#0d0d1a" }}>
//                   <div className="cmp-cap" style={{ padding: "16px 20px", fontSize: 12, fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>Capability</div>
//                   <div style={{ padding: "16px 20px", textAlign: "center", fontWeight: 800, color: "#f97316", fontSize: 13, borderLeft: "1px solid #1f2937", letterSpacing: "0.06em" }}>
//                     <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Star size={13} /> Us (Growth Partner)</span>
//                   </div>
//                   <div style={{ padding: "16px 20px", textAlign: "center", fontWeight: 600, color: "#6b7280", fontSize: 13, borderLeft: "1px solid #1f2937" }}>Traditional Agencies</div>
//                 </div>
//                 {[
//                   { cap: "Strategy-First Approach",       ours: "Deep research, business alignment & funnel planning",  theirs: "Posting calendars & generic campaigns" },
//                   { cap: "Platform Specialization",       ours: "Dedicated experts per platform",                       theirs: "One team handles everything" },
//                   { cap: "Performance & ROI Focus",       ours: "Leads, conversions & ROAS-driven KPIs",                theirs: "Likes, followers & vanity metrics" },
//                   { cap: "Full-Funnel Marketing",         ours: "Awareness → Conversion → Retention",                   theirs: "Mostly top-of-funnel activity" },
//                   { cap: "Analytics & Transparency",      ours: "Live dashboards & business-focused reports",            theirs: "Basic monthly reports" },
//                   { cap: "Scalability",                   ours: "Built for startups to enterprises",                     theirs: "Struggles beyond small accounts" },
//                   { cap: "Collaboration",                 ours: "Dedicated account manager + specialists",               theirs: "Limited contact & slow responses" },
//                 ].map((row, i) => <CompRow key={i} {...row} />)}
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ════════════════════════════
//           FAQ
//       ════════════════════════════ */}
//       <section style={{ padding: "0 clamp(20px,5vw,48px) clamp(80px,10vw,112px)", background: "#0d0d1a" }}>
//         <div style={{ maxWidth: 840, margin: "0 auto" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", marginBottom: 56 }}>
//               <Label color="#a78bfa">FAQ</Label>
//               <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", marginBottom: 14, letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.78 }}>Everything you need to know before choosing a social media marketing partner.</p>
//             </div>
//           </Reveal>
//           {[
//             { q: "How long does it take to see results from social media marketing?", a: "Organic growth typically takes 60–90 days to gain momentum, while paid campaigns can start generating leads within a few weeks. Sustainable results come from consistent optimization and data-driven scaling." },
//             { q: "Which social media platforms are best for my business?", a: "The right platform depends on your business model and audience. B2B companies usually perform best on LinkedIn, eCommerce brands on Meta and Instagram, while YouTube works well for long-term brand authority and discovery." },
//             { q: "Do you focus on organic growth, paid ads, or both?", a: "We use a hybrid approach. Organic content builds brand trust and engagement, while paid advertising accelerates reach, leads, and revenue. Combining both ensures consistent and scalable growth." },
//             { q: "How do you measure success and ROI?", a: "Success is measured through clear KPIs such as leads, conversions, ROAS, engagement quality, and revenue impact. We provide transparent reporting dashboards that connect social media performance directly to business outcomes." },
//             { q: "What industries do you specialize in?", a: "We work with B2B companies, startups, SaaS businesses, eCommerce brands, and local service providers. Our strategies are customized based on industry dynamics, audience behavior, and growth stage." },
//             { q: "Will I have a dedicated account manager?", a: "Yes. You'll have a dedicated account manager supported by platform specialists, creatives, and performance marketers to ensure smooth communication and consistent results." },
//             { q: "How much does social media marketing cost?", a: "Pricing depends on platforms, campaign complexity, ad spend, and growth objectives. We offer flexible packages designed to scale with your business. A detailed proposal is shared after an initial strategy discussion." },
//             { q: "Can you work with our internal marketing or sales team?", a: "Absolutely. We frequently collaborate with in-house teams, agencies, and sales departments to ensure alignment, seamless execution, and better lead conversion." },
//           ].map((faq, i) => (
//             <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.04} />
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════
//           CONTACT
//       ════════════════════════════ */}
//       <section style={{ padding: "clamp(72px,10vw,96px) clamp(20px,5vw,48px)", background: "#0a0a14", borderTop: "1px solid #1f2937", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(249,115,22,0.06),transparent 70%)", pointerEvents: "none" }} />
//         <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
//           <Reveal>
//             <div style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 48px" }}>
//               <Label color="#f97316">Get in Touch</Label>
//               <h2 style={{ fontSize: "clamp(1.6rem,3.2vw,2.4rem)", fontWeight: 900, fontFamily: "'Syne',sans-serif", color: "#f9fafb", marginBottom: 12, letterSpacing: "-0.02em" }}>Ready to Grow Your Business?</h2>
//               <p style={{ color: "#6b7280", fontSize: 15.5, lineHeight: 1.78 }}>Speak with our experts today. We help brands scale with powerful social media, design, automation, and cloud solutions.</p>
//             </div>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 52 }}>
//               <button style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", color: "white", border: "none", borderRadius: 10, padding: "14px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 28px rgba(249,115,22,0.4)", transition: "all .3s" }}
//                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                 onMouseLeave={e => e.currentTarget.style.transform = ""}>
//                 Get a Free Quote <ArrowRight size={15} />
//               </button>
//               <a href="tel:+919766650411" style={{ background: "#064e3b", color: "#34d399", border: "1px solid #065f46", borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "all .3s" }}
//                 onMouseEnter={e => e.currentTarget.style.background = "#065f46"}
//                 onMouseLeave={e => e.currentTarget.style.background = "#064e3b"}>
//                 <Phone size={15} /> Call Sales
//               </a>
//             </div>
//           </Reveal>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
//             {[
//               { icon: <Phone size={19} color="#f97316" />, title: "Phone", value: "+91 97666 50411" },
//               { icon: <Mail size={19} color="#a78bfa" />, title: "Email", value: "info@albostechnologies.com" },
//               { icon: <MapPin size={19} color="#34d399" />, title: "Office", value: "Office no. 78, 5th floor, Kunal Plaza, Pune, MH 411019" },
//               { icon: <Clock size={19} color="#60a5fa" />, title: "Hours", value: "Mon – Sat, 10:00 AM – 7:00 PM" },
//             ].map((c, i) => (
//               <Reveal key={i} delay={i * 0.08}>
//                 <div className="hov-lift hov-border" style={{ background: "#111827", borderRadius: 16, padding: "22px 18px", textAlign: "center", border: "1px solid #1f2937", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
//                   <div style={{ width: 42, height: 42, borderRadius: 11, background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{c.icon}</div>
//                   <div style={{ fontWeight: 800, fontSize: 13, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{c.title}</div>
//                   <div style={{ fontSize: 13.5, color: "#e5e7eb", lineHeight: 1.55 }}>{c.value}</div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }























import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, MapPin, Clock, TrendingUp, Target, BarChart2,
  Users, Eye, Briefcase, Rocket, Layers, Search, CalendarCheck,
  ArrowRight, CheckCircle, XCircle, PhoneCall, Video,
  ChevronDown, AlertTriangle, ShoppingCart, Building2,
  Navigation, ShieldCheck, LineChart
} from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, dir = "up", style = {} }) {
  const [ref, inView] = useInView();
  const dirs = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-40px)", right: "translateX(40px)" };
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : dirs[dir],
      transition: `opacity .7s cubic-bezier(.4,0,.2,1) ${delay}s, transform .7s cubic-bezier(.4,0,.2,1) ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

function Counter({ end, suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let cur = 0; const step = end / 60;
    const t = setInterval(() => { cur += step; if (cur >= end) { setN(end); clearInterval(t); } else setN(Math.floor(cur)); }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Particles() {
  const pts = Array.from({ length: 18 }, (_, i) => ({
    id: i, size: 3 + (i % 4),
    x: (i * 19 + 7) % 94, y: (i * 31 + 5) % 88,
    dur: 4 + (i % 5), delay: (i % 5) * 0.6,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {pts.map(p => (
        <div key={p.id} style={{
          position: "absolute", width: p.size, height: p.size, borderRadius: "50%",
          background: "rgba(59,130,246,0.12)", left: `${p.x}%`, top: `${p.y}%`,
          animation: `dmFloat ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
        }} />
      ))}
    </div>
  );
}

const TICKS = ["Meta Ads", "LinkedIn B2B", "YouTube SEO", "Instagram Growth", "Retargeting Funnels", "ROAS Optimization", "Content Strategy", "A/B Testing", "Analytics & ROI", "Brand Building", "Influencer Marketing", "Demand Generation"];
function Ticker() {
  return (
    <div style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", overflow: "hidden", padding: "13px 0" }}>
      <div style={{ display: "inline-flex", animation: "dmTicker 28s linear infinite", whiteSpace: "nowrap" }}>
        {[...TICKS, ...TICKS].map((t, i) => (
          <span key={i} style={{ padding: "0 26px", fontSize: 13, fontWeight: 600, color: "#64748b", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroDashboard() {
  const [active, setActive] = useState(0);
  const campaigns = [
    { name: "Meta Ads – Retargeting", status: "Live", leads: 480, roas: "4.1×", color: "#1877f2", icon: "📘" },
    { name: "LinkedIn – B2B Outreach", status: "Scaling", leads: 210, roas: "3.8×", color: "#0077b5", icon: "💼" },
    { name: "YouTube – Video Funnel", status: "Optimizing", leads: 156, roas: "3.2×", color: "#ff0000", icon: "▶️" },
  ];
  const metrics = [
    { label: "ROAS", val: "4.2×", delta: "+18%", c: "#10b981" },
    { label: "Leads", val: "1.8K", delta: "+120%", c: "#6366f1" },
    { label: "CPL", val: "₹340", delta: "-32%", c: "#f59e0b" },
  ];
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % 3), 2600);
    return () => clearInterval(t);
  }, []);
  const bars = [30, 48, 42, 65, 58, 82, 70, 90, 76, 88, 68, 94];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 460 }}>
      <div style={{ background: "white", borderRadius: 22, border: "1px solid #e2e8f0", boxShadow: "0 20px 70px rgba(59,130,246,0.16)", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#1e40af,#3b82f6)", padding: "15px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>📊</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Marketing Dashboard</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.72)" }}>Live · 3 Active Campaigns</div>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 30, padding: "4px 11px", fontSize: 11, fontWeight: 700, color: "white", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", animation: "dmPulse 1.3s infinite" }} />LIVE
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #f1f5f9" }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ padding: "13px 10px", borderRight: i < 2 ? "1px solid #f1f5f9" : "none", textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: m.c, fontFamily: "'Syne',sans-serif" }}>{m.val}</div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 500, marginTop: 1 }}>{m.label}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#10b981", marginTop: 2 }}>↑ {m.delta}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.07em", marginBottom: 9 }}>ACTIVE CAMPAIGNS</div>
          {campaigns.map((c, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 11, padding: "10px 11px", borderRadius: 12, marginBottom: 6,
              background: active === i ? "#eff6ff" : "transparent",
              border: active === i ? "1.5px solid #bfdbfe" : "1.5px solid transparent",
              transition: "all .4s",
            }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: active === i ? c.color : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, transition: "background .4s", flexShrink: 0 }}>{c.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "#94a3b8" }}>{c.status}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: active === i ? "#3b82f6" : "#64748b" }}>{c.leads} leads</div>
                <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>{c.roas} ROAS</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 16px 16px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.07em", marginBottom: 8 }}>WEEKLY LEAD VOLUME</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 40 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === bars.length - 1 ? "#3b82f6" : "#dbeafe" }} />
            ))}
          </div>
        </div>
      </div>
      {[
        { text: "4.2× ROAS", icon: "🎯", pos: { top: "6%", left: "-22%" }, bg: "#eff6ff", border: "#bfdbfe", d: 0 },
        { text: "+120% Leads", icon: "🚀", pos: { bottom: "18%", right: "-20%" }, bg: "#f0fdf4", border: "#bbf7d0", d: 0.8 },
        { text: "200+ Brands", icon: "⭐", pos: { bottom: "2%", left: "-12%" }, bg: "#fefce8", border: "#fef08a", d: 1.4 },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute", ...b.pos,
          background: b.bg, border: `1.5px solid ${b.border}`,
          borderRadius: 13, padding: "8px 13px",
          display: "flex", alignItems: "center", gap: 7,
          fontSize: 12, fontWeight: 700, color: "#0f172a",
          boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
          animation: `dmFloat ${3 + i * .6}s ease-in-out ${b.d}s infinite alternate`,
          whiteSpace: "nowrap", zIndex: 2,
        }}>
          <span style={{ fontSize: 14 }}>{b.icon}</span>{b.text}
        </div>
      ))}
    </div>
  );
}

function FAQItem({ question, answer, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <div style={{
        borderRadius: 18, border: `1.5px solid ${open ? "#bfdbfe" : "#e2e8f0"}`,
        background: open ? "#f8fbff" : "white", overflow: "hidden",
        transition: "border .3s, background .3s", marginBottom: 10,
      }}>
        <button onClick={() => setOpen(!open)} style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "19px 22px", background: "none", border: "none", cursor: "pointer", gap: 16, textAlign: "left",
        }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", lineHeight: 1.5 }}>{question}</span>
          <span style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
            background: open ? "#3b82f6" : "#f1f5f9",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background .3s, transform .3s", transform: open ? "rotate(180deg)" : "none",
          }}>
            <ChevronDown size={14} color={open ? "white" : "#64748b"} />
          </span>
        </button>
        {open && <div style={{ padding: "0 22px 18px", fontSize: 14.5, color: "#475569", lineHeight: 1.75 }}>{answer}</div>}
      </div>
    </Reveal>
  );
}

function ContactCard({ icon, title, value, delay = 0 }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        background: "white", borderRadius: 18, padding: "24px 18px", textAlign: "center",
        border: `1.5px solid ${hov ? "#93c5fd" : "rgba(255,255,255,0.9)"}`,
        boxShadow: hov ? "0 16px 44px rgba(59,130,246,0.14)" : "0 4px 16px rgba(0,0,0,0.06)",
        transition: "all .3s", position: "relative", overflow: "hidden", cursor: "default",
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: 13, background: "#eff6ff",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 10px", transition: "transform .3s",
          transform: hov ? "scale(1.12)" : "scale(1)", color: "#3b82f6",
        }}>{icon}</div>
        <div style={{ fontWeight: 700, fontSize: 14.5, color: "#0f172a", marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, wordBreak: "break-word" }}>{value}</div>
      </div>
    </Reveal>
  );
}

export default function DigitalMarketing() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", background: "#fff", color: "#1e293b", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;}
        body{-webkit-font-smoothing:antialiased;margin:0;}
        @keyframes dmFloat  {0%{transform:translateY(0);}  100%{transform:translateY(-16px);}}
        @keyframes dmTicker {0%{transform:translateX(0);}  100%{transform:translateX(-50%);}}
        @keyframes dmPulse  {0%,100%{opacity:1;}           50%{opacity:.35;}}
        @keyframes dmGrad   {0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;}}
        .dm-card{transition:transform .3s,box-shadow .3s;}
        .dm-card:hover{transform:translateY(-6px);box-shadow:0 18px 50px rgba(59,130,246,0.12)!important;}
        .dm-imgzoom img{transition:transform .5s;}
        .dm-imgzoom:hover img{transform:scale(1.07);}
        @media(max-width:768px){
          .hero-wrap{flex-direction:column-reverse!important;}
          .hero-ctr{text-align:center!important;}
          .hero-ctr .btns{justify-content:center!important;}
          .badge-hide{display:none!important;}
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", padding: "clamp(64px,9vw,110px) 0 80px", overflow: "hidden", background: "linear-gradient(145deg,#f0f7ff 0%,#ffffff 55%,#f5f3ff 100%)" }}>
        <Particles />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2, pointerEvents: "none" }}>
          <defs><pattern id="hg" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0L0 0 0 44" fill="none" stroke="#94a3b8" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>
        <div style={{ position: "absolute", top: -90, right: -70, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.1),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -50, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.07),transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-wrap" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,4vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 52, justifyContent: "space-between" }}>
          <div className="hero-ctr" style={{ flex: "1 1 420px", maxWidth: 580 }}>
            <Reveal>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(59,130,246,0.09)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 40, padding: "5px 15px", marginBottom: 22 }}>
                <TrendingUp size={12} color="#3b82f6" />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#3b82f6", letterSpacing: "0.07em" }}>ENTERPRISE DIGITAL MARKETING</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", lineHeight: 1.1, color: "#0f172a", marginBottom: 18 }}>
                Enterprise Social Media{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Marketing Services</span>
                  <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }} viewBox="0 0 260 10" preserveAspectRatio="none">
                    <path d="M2 7 Q130 2 258 7" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p style={{ fontSize: 16.5, color: "#475569", lineHeight: 1.78, marginBottom: 32, maxWidth: 510 }}>
                Performance-driven social media marketing designed to help brands increase visibility, generate qualified leads, and drive measurable revenue growth across major platforms.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="btns" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                <button style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", color: "white", border: "none", borderRadius: 13, padding: "14px 30px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 22px rgba(59,130,246,0.36)", transition: "all .3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = ""}>
                  Get a Free Quote <PhoneCall size={14} />
                </button>
                <button style={{ background: "#0f172a", color: "white", border: "none", borderRadius: 13, padding: "14px 30px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all .3s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1e293b"}
                  onMouseLeave={e => e.currentTarget.style.background = "#0f172a"}>
                  View Our Work <Video size={14} />
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
                {[["🎯", "ROI-Focused"], ["📊", "Data-Driven"], ["🚀", "Scalable Growth"]].map(([ic, lb]) => (
                  <span key={lb} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "#64748b" }}><span>{ic}</span>{lb}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} dir="left" style={{ flex: "1 1 360px", maxWidth: 500, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", padding: "16px 36px 16px 16px" }}>
              <HeroDashboard />
            </div>
          </Reveal>
        </div>
      </section>

      <Ticker />

      {/* STATS */}
      <section style={{ padding: "64px clamp(16px,4vw,48px)", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          {[
            { n: 3, s: "×", label: "Return on Ad Spend", icon: "💰", c: "#3b82f6" },
            { n: 120, s: "%", label: "Lead Growth Rate", icon: "📈", c: "#8b5cf6" },
            { n: 50, s: "M+", label: "Ad Impressions", icon: "👁", c: "#10b981" },
            { n: 200, s: "+", label: "Brands Scaled", icon: "🏆", c: "#f59e0b" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="dm-card" style={{ background: "white", borderRadius: 18, padding: "22px 16px", border: "1px solid #e2e8f0", boxShadow: "0 3px 14px rgba(0,0,0,0.05)", textAlign: "center" }}>
                <div style={{ fontSize: 26, marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontSize: 34, fontWeight: 800, color: s.c, fontFamily: "'Syne',sans-serif", lineHeight: 1 }}>
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div style={{ fontSize: 12.5, color: "#64748b", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section style={{ padding: "96px clamp(16px,4vw,48px)", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 72px" }}>
              <div style={{ display: "inline-block", background: "#fef2f2", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#dc2626", letterSpacing: "0.08em", marginBottom: 14 }}>THE PROBLEM</div>
              <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", lineHeight: 1.2, marginBottom: 14 }}>Why Most Social Media Efforts Fail to Deliver Results</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>Most businesses are active on social platforms, yet very few achieve consistent leads or revenue. The real challenge lies in moving beyond posting to building a structured, data-driven growth system.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
            {[
              {
                img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80",
                gradColor: "rgba(220,38,38,0.55)", title: "Common Challenges",
                items: [
                  { title: "Low Engagement & Limited Reach", desc: "Content published consistently but fails to attract meaningful engagement or qualified attention.", icon: <AlertTriangle size={17} color="#dc2626" /> },
                  { title: "Unclear Audience Targeting", desc: "Ads reach broad audiences without data-backed segmentation or intent-based targeting.", icon: <Target size={17} color="#dc2626" /> },
                  { title: "No Measurable ROI", desc: "Hard to connect social media activity with leads, sales, or real business growth.", icon: <BarChart2 size={17} color="#dc2626" /> },
                ],
                iconBg: "#fef2f2",
              },
              {
                img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=700&q=80",
                gradColor: "rgba(5,150,105,0.55)", title: "Performance-Driven Strategy",
                items: [
                  { title: "Predictable & Scalable Growth", desc: "Platform-specific strategies designed to consistently increase reach, engagement, and conversions.", icon: <TrendingUp size={17} color="#059669" /> },
                  { title: "Precision Targeting & Funnels", desc: "Advanced audience segmentation, retargeting funnels, and accurate conversion tracking.", icon: <Target size={17} color="#059669" /> },
                  { title: "Clear ROI & Business Impact", desc: "Transparent reporting linking social performance directly to revenue and growth.", icon: <BarChart2 size={17} color="#059669" /> },
                ],
                iconBg: "#ecfdf5",
              },
            ].map((col, ci) => (
              <Reveal key={ci} dir={ci === 0 ? "right" : "left"} delay={ci * 0.1}>
                <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 6px 22px rgba(0,0,0,0.07)" }}>
                  <div className="dm-imgzoom" style={{ height: 210, overflow: "hidden", position: "relative" }}>
                    <img src={col.img} alt={col.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top,${col.gradColor},transparent 65%)` }} />
                    <div style={{ position: "absolute", bottom: 16, left: 18, fontSize: 15, fontWeight: 800, color: "white", fontFamily: "'Syne',sans-serif" }}>{col.title}</div>
                  </div>
                  <div style={{ padding: "22px 22px 26px", background: "white" }}>
                    {col.items.map((item, ii) => (
                      <div key={ii} style={{ display: "flex", gap: 12, marginBottom: ii < 2 ? 18 : 0 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: col.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 3 }}>{item.title}</div>
                          <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section style={{ padding: "96px clamp(16px,4vw,48px)", background: "linear-gradient(180deg,#f8fafc,white)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 68px" }}>
              <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#3b82f6", letterSpacing: "0.08em", marginBottom: 14 }}>PLATFORMS</div>
              <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 14 }}>Platform-Specific Marketing Services</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>Every social platform requires a different growth strategy. We deliver platform-focused services designed to drive engagement, leads, and measurable business growth.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {[
              { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80", icon: "📘", color: "#1877f2", title: "Meta Ads (Facebook & Instagram)", desc: "Performance-driven Facebook and Instagram advertising focused on lead generation, eCommerce sales, and scalable ROAS through advanced targeting.", bullets: ["Facebook & Instagram ad management", "Custom audiences & lookalike targeting", "Meta Pixel & conversion tracking", "Retargeting funnels & ROAS scaling"] },
              { img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80", icon: "💼", color: "#0077b5", title: "LinkedIn B2B Lead Generation", desc: "High-quality B2B lead generation and executive branding on LinkedIn, designed to reach decision-makers, founders, and enterprise buyers.", bullets: ["LinkedIn Ads & ABM campaigns", "Sponsored content & InMail outreach", "Founder & CXO personal branding", "CRM-integrated lead tracking"] },
              { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", icon: "▶️", color: "#ff0000", title: "YouTube SEO & Video Marketing", desc: "Long-term YouTube growth through SEO-optimized video content, Shorts strategy, paid video ads, and analytics-driven optimization.", bullets: ["YouTube SEO & channel optimization", "High-retention long & short-form videos", "YouTube Ads & remarketing funnels", "Performance tracking & scaling"] },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="dm-card" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #e2e8f0", background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", height: "100%" }}>
                  <div className="dm-imgzoom" style={{ height: 165, overflow: "hidden", position: "relative" }}>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.3),transparent)" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
                  </div>
                  <div style={{ padding: "18px 20px 22px" }}>
                    <h3 style={{ fontWeight: 700, fontSize: 15, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.68, marginBottom: 14 }}>{p.desc}</p>
                    {p.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151", marginBottom: 5 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, flexShrink: 0 }} />{b}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "96px clamp(16px,4vw,48px)", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 68px" }}>
              <div style={{ display: "inline-block", background: "#fef3c7", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#d97706", letterSpacing: "0.08em", marginBottom: 14 }}>INDUSTRIES</div>
              <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 14 }}>Social Media Marketing for Every Industry</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>From startups to established enterprises, we help businesses leverage social media to increase visibility, leads, and revenue.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 16 }}>
            {[
              { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80", icon: <Building2 size={18} />, bg: "#eef2ff", color: "#6366f1", title: "B2B & Enterprise", desc: "LinkedIn-focused strategies for lead generation, authority building, and decision-maker engagement." },
              { img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", icon: <ShoppingCart size={18} />, bg: "#fef2f2", color: "#ef4444", title: "eCommerce & D2C", desc: "Performance ads, product creatives, and retargeting funnels built to maximize ROAS." },
              { img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80", icon: <Rocket size={18} />, bg: "#ecfdf5", color: "#10b981", title: "Startups & SaaS", desc: "Rapid brand building, audience growth, and demand generation through scalable systems." },
              { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", icon: <Navigation size={18} />, bg: "#eff6ff", color: "#3b82f6", title: "Local & Service", desc: "Location-based targeting, Google Business Profile marketing, and community engagement." },
            ].map((ind, i) => (
              <Reveal key={i} delay={i * 0.09}>
                <div style={{ position: "relative", height: 275, borderRadius: 18, overflow: "hidden", cursor: "pointer", boxShadow: "0 5px 20px rgba(0,0,0,0.1)", transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 18px 50px rgba(0,0,0,0.18)"; e.currentTarget.querySelector("img").style.transform = "scale(1.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)"; e.currentTarget.querySelector("img").style.transform = "scale(1)"; }}>
                  <img src={ind.img} alt={ind.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.78),rgba(0,0,0,0.1) 65%,transparent)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: ind.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 7, color: ind.color }}>{ind.icon}</div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, color: "white", fontFamily: "'Syne',sans-serif", marginBottom: 4 }}>{ind.title}</h3>
                    <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{ind.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section style={{ padding: "96px clamp(16px,4vw,48px)", background: "linear-gradient(180deg,#f8fafc,white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 68px" }}>
              <div style={{ display: "inline-block", background: "#f5f3ff", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.08em", marginBottom: 14 }}>PROCESS</div>
              <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 14 }}>Our Proven Growth Framework</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>A systematic, data-driven process designed to generate consistent leads, conversions, and measurable ROI across platforms.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))", gap: 18 }}>
            {[
              { step: "01", color: "#ef4444", bg: "#fef2f2", icon: "🔍", title: "Audit & Market Research", desc: "Deep audit of your accounts, competitors, audience behavior, and historical performance to identify gaps and growth opportunities.", pts: ["Platform & account performance audit", "Audience & competitor research", "Content & funnel gap analysis", "KPI definition & benchmarks"] },
              { step: "02", color: "#6366f1", bg: "#eef2ff", icon: "🗺", title: "Strategy & Funnel Architecture", desc: "Platform-specific strategies and conversion-focused funnels aligned with your business objectives and growth goals.", pts: ["Content & campaign roadmap", "Paid + organic funnel design", "Messaging & positioning strategy", "Budget planning & forecasting"] },
              { step: "03", color: "#10b981", bg: "#ecfdf5", icon: "🎨", title: "Creative Execution & Launch", desc: "Our creative and performance teams execute campaigns with precision, ensuring strong visual branding and conversion readiness.", pts: ["Ad creatives & content production", "Campaign setup & QA", "Pixel, events & analytics setup", "Controlled rollout & A/B testing"] },
              { step: "04", color: "#0ea5e9", bg: "#f0f9ff", icon: "📊", title: "Optimization, Scaling & Reporting", desc: "Continuously optimize campaigns, scale high-performing strategies, and deliver transparent reporting focused on ROI.", pts: ["Performance monitoring & optimization", "Budget scaling & ROAS improvement", "Weekly / monthly performance reports", "Continuous growth iteration"] },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="dm-card" style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "white", padding: "24px 20px", boxShadow: "0 3px 14px rgba(0,0,0,0.05)", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 13, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
                    <span style={{ fontSize: 11, fontWeight: 800, color: s.color, letterSpacing: "0.1em" }}>STEP {s.step}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.68, marginBottom: 14 }}>{s.desc}</p>
                  {s.pts.map((p, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151", marginBottom: 6 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, flexShrink: 0 }} />{p}
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "96px clamp(16px,4vw,48px)", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 68px" }}>
              <div style={{ display: "inline-block", background: "#ecfdf5", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#059669", letterSpacing: "0.08em", marginBottom: 14 }}>WHY US</div>
              <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 14 }}>Why Brands Choose Us as Their Growth Partner</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>We operate as a strategic growth partner — combining creativity, performance marketing, and analytics to drive real business outcomes.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {[
              { icon: <Target size={22} />, bg: "#fef2f2", color: "#ef4444", title: "Strategy Before Execution", desc: "Every campaign starts with deep research, audience insights, and business alignment — not random posting." },
              { icon: <BarChart2 size={22} />, bg: "#eef2ff", color: "#6366f1", title: "Performance & ROI Focused", desc: "We optimize every platform for measurable KPIs — leads, conversions, ROAS, and long-term revenue impact." },
              { icon: <Users size={22} />, bg: "#ecfdf5", color: "#10b981", title: "Dedicated Expert Teams", desc: "Your brand is handled by platform specialists — strategists, creatives, and performance marketers." },
              { icon: <Layers size={22} />, bg: "#f0f9ff", color: "#0ea5e9", title: "Full-Funnel Approach", desc: "From awareness to conversion and retention, we design integrated funnels across every buyer stage." },
              { icon: <ShieldCheck size={22} />, bg: "#fef3c7", color: "#d97706", title: "Transparent Reporting", desc: "No vanity metrics. Clear dashboards, honest reporting, and actionable insights aligned with business goals." },
              { icon: <LineChart size={22} />, bg: "#f5f3ff", color: "#7c3aed", title: "Built to Scale With You", desc: "Whether startup or enterprise, our systems and campaigns scale seamlessly as your business grows." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="dm-card" style={{ background: f.bg, borderRadius: 18, padding: "22px 18px", border: "1px solid rgba(0,0,0,0.04)", height: "100%" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: f.color, marginBottom: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: "#0f172a", marginBottom: 6, fontFamily: "'Syne',sans-serif" }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.68 }}>{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "0 clamp(16px,4vw,48px) 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ borderRadius: 26, background: "linear-gradient(135deg,#1e3a8a,#3b82f6,#7c3aed,#ec4899)", backgroundSize: "300% 300%", animation: "dmGrad 8s ease infinite", padding: "clamp(40px,6vw,72px) clamp(24px,5vw,60px)", textAlign: "center", boxShadow: "0 24px 80px rgba(59,130,246,0.26)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -70, right: -70, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.14)", borderRadius: 30, padding: "6px 16px", marginBottom: 20, fontSize: 13, fontWeight: 600, color: "white" }}>
                  <CalendarCheck size={14} /> Free Social Media Audit & Strategy Session
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 800, color: "white", marginBottom: 14, lineHeight: 1.2 }}>Ready to Turn Social Media Into a Predictable Growth Channel?</h3>
                <p style={{ color: "rgba(255,255,255,0.84)", maxWidth: 580, margin: "0 auto 32px", lineHeight: 1.75, fontSize: 15.5 }}>Get a personalized audit of your social media presence, ad performance, and growth opportunities — completely free.</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                  <button style={{ background: "white", color: "#3b82f6", border: "none", borderRadius: 13, padding: "14px 32px", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 20px rgba(0,0,0,0.18)", transition: "all .3s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = ""}>
                    Get My Free Audit <ArrowRight size={15} />
                  </button>
                  <button style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1.5px solid rgba(255,255,255,0.32)", borderRadius: 13, padding: "14px 32px", fontWeight: 600, fontSize: 15, cursor: "pointer", backdropFilter: "blur(8px)", transition: "all .3s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}>
                    Book a Strategy Call
                  </button>
                </div>
                <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.62)" }}>✓ No obligation &nbsp;•&nbsp; ✓ 30-minute expert review &nbsp;•&nbsp; ✓ Actionable growth plan</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: "0 clamp(16px,4vw,48px) 96px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
              <div style={{ display: "inline-block", background: "#f0fdf4", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#16a34a", letterSpacing: "0.08em", marginBottom: 14 }}>COMPARISON</div>
              <h2 style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 14 }}>How We Compare to Traditional Agencies</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>Not all social media agencies are built the same. Here's how our strategic, performance-driven approach compares.</p>
            </div>
          </Reveal>
          <div style={{ overflowX: "auto", borderRadius: 20, border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ minWidth: 600 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1fr", borderBottom: "2px solid #e2e8f0", background: "#f8fafc" }}>
                <div style={{ padding: "16px 20px", fontWeight: 600, color: "#64748b", fontSize: 13, letterSpacing: "0.05em" }}>CAPABILITIES</div>
                <div style={{ padding: "16px 20px", fontWeight: 700, color: "#0f172a", fontSize: 14, textAlign: "center", background: "#eff6ff", borderLeft: "1px solid #e2e8f0" }}>Us (Growth Partner) ✓</div>
                <div style={{ padding: "16px 20px", fontWeight: 600, color: "#64748b", fontSize: 14, textAlign: "center", borderLeft: "1px solid #e2e8f0" }}>Traditional Agencies</div>
              </div>
              {[
                { cap: "Strategy-First Approach", ours: "Deep research, business alignment & funnel planning", theirs: "Posting calendars & generic campaigns" },
                { cap: "Platform Specialization", ours: "Dedicated experts per platform", theirs: "One team handles everything" },
                { cap: "Performance & ROI Focus", ours: "Leads, conversions & ROAS-driven KPIs", theirs: "Likes, followers & vanity metrics" },
                { cap: "Full-Funnel Marketing", ours: "Awareness → Conversion → Retention", theirs: "Mostly top-of-funnel activity" },
                { cap: "Analytics & Transparency", ours: "Live dashboards & business-focused reports", theirs: "Basic monthly reports" },
                { cap: "Scalability", ours: "Built for startups to enterprises", theirs: "Struggles beyond small accounts" },
                { cap: "Collaboration", ours: "Dedicated account manager + specialists", theirs: "Limited contact & delayed responses" },
              ].map((row, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1fr", borderBottom: i < 6 ? "1px solid #f1f5f9" : "none" }}>
                    <div style={{ padding: "16px 20px", fontWeight: 600, color: "#334155", fontSize: 14, display: "flex", alignItems: "center" }}>{row.cap}</div>
                    <div style={{ padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: 9, background: "#f8fbff", borderLeft: "1px solid #f1f5f9" }}>
                      <CheckCircle size={17} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 13.5, color: "#166534", fontWeight: 500 }}>{row.ours}</span>
                    </div>
                    <div style={{ padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: 9, borderLeft: "1px solid #f1f5f9" }}>
                      <XCircle size={17} color="#dc2626" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 13.5, color: "#64748b" }}>{row.theirs}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 clamp(16px,4vw,48px) 96px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div style={{ display: "inline-block", background: "#f5f3ff", borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.08em", marginBottom: 14 }}>FAQ</div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 14 }}>Frequently Asked Questions</h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75 }}>Everything you need to know before choosing a social media marketing partner.</p>
            </div>
          </Reveal>
          {[
            { q: "How long does it take to see results from social media marketing?", a: "Organic growth typically takes 60–90 days to gain momentum, while paid campaigns can start generating leads within a few weeks. Sustainable results come from consistent optimization and data-driven scaling." },
            { q: "Which social media platforms are best for my business?", a: "The right platform depends on your business model and audience. B2B companies usually perform best on LinkedIn, eCommerce brands on Meta and Instagram, while YouTube works well for long-term brand authority." },
            { q: "Do you focus on organic growth, paid ads, or both?", a: "We use a hybrid approach. Organic content builds brand trust and engagement, while paid advertising accelerates reach, leads, and revenue. Combining both ensures consistent and scalable growth." },
            { q: "How do you measure success and ROI?", a: "Success is measured through clear KPIs such as leads, conversions, ROAS, engagement quality, and revenue impact. We provide transparent reporting dashboards that connect social media performance directly to business outcomes." },
            { q: "What industries do you specialize in?", a: "We work with B2B companies, startups, SaaS businesses, eCommerce brands, and local service providers. Our strategies are customized based on industry dynamics, audience behavior, and growth stage." },
            { q: "Will I have a dedicated account manager?", a: "Yes. You'll have a dedicated account manager supported by platform specialists, creatives, and performance marketers to ensure smooth communication and consistent results." },
            { q: "How much does social media marketing cost?", a: "Pricing depends on platforms, campaign complexity, ad spend, and growth objectives. We offer flexible packages designed to scale with your business. A detailed proposal is shared after an initial strategy discussion." },
            { q: "Can you work with our internal marketing or sales team?", a: "Absolutely. We frequently collaborate with in-house teams, agencies, and sales departments to ensure alignment, seamless execution, and better lead conversion." },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.04} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px clamp(16px,4vw,48px) 96px", background: "linear-gradient(135deg,#dbeafe 0%,#e0e7ff 50%,#ede9fe 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -60, width: 380, height: 380, borderRadius: "50%", background: "rgba(59,130,246,0.1)", pointerEvents: "none", animation: "dmFloat 6s ease-in-out infinite alternate" }} />
        <div style={{ position: "absolute", bottom: -60, left: -50, width: 300, height: 300, borderRadius: "50%", background: "rgba(139,92,246,0.08)", pointerEvents: "none", animation: "dmFloat 5s ease-in-out 1s infinite alternate" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 48px" }}>
              <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0f172a", marginBottom: 12 }}>Ready to Grow Your Business?</h2>
              <p style={{ color: "#475569", fontSize: 15.5, lineHeight: 1.75 }}>Speak with our experts today. We help brands scale with powerful social media, design, automation, and cloud solutions.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 52 }}>
              <button style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", color: "white", border: "none", borderRadius: 13, padding: "14px 34px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 22px rgba(59,130,246,0.34)", transition: "all .3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = ""}>
                Get a Free Quote <ArrowRight size={15} />
              </button>
              <a href="tel:+919766650411" style={{ background: "#16a34a", color: "white", borderRadius: 13, padding: "14px 30px", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", boxShadow: "0 6px 22px rgba(22,163,74,0.26)", transition: "all .3s" }}>
                <Phone size={15} /> Call Sales
              </a>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            <ContactCard icon={<Phone size={20} />} title="Phone Number" value="+91 97666 50411" delay={0} />
            <ContactCard icon={<Mail size={20} />} title="Email Address" value="info@albostechnologies.com" delay={0.08} />
            <ContactCard icon={<MapPin size={20} />} title="Office Location" value="Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019" delay={0.16} />
            <ContactCard icon={<Clock size={20} />} title="Office Hours" value="Mon – Sat, 10:00 AM – 7:00 PM" delay={0.24} />
          </div>
        </div>
      </section>
    </div>
  );
}