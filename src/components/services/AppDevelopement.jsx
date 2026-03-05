// import { useState, useEffect, useRef } from "react";

// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
//     }, { threshold: 0.12, ...options });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
//   return [ref, inView];
// }

// function Reveal({ children, className = "", delay = 0, direction = "up" }) {
//   const [ref, inView] = useInView();
//   const offsets = { up: "translateY(50px)", down: "translateY(-30px)", left: "translateX(-50px)", right: "translateX(50px)" };
//   return (
//     <div ref={ref} className={className} style={{
//       opacity: inView ? 1 : 0,
//       transform: inView ? "none" : offsets[direction],
//       transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
//     }}>{children}</div>
//   );
// }

// function CountUp({ end, suffix = "", duration = 2000 }) {
//   const [n, setN] = useState(0);
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (!inView) return;
//     let s = 0; const step = end / (duration / 16);
//     const t = setInterval(() => { s += step; if (s >= end) { setN(end); clearInterval(t); } else setN(Math.floor(s)); }, 16);
//     return () => clearInterval(t);
//   }, [inView]);
//   return <span ref={ref}>{n}{suffix}</span>;
// }

// const CAPABILITIES = [
//   { icon: "🤖", color: "#22c55e", title: "Native Android Engineering", desc: "High-performance Android apps built with Kotlin, Java and modern Android tooling—Jetpack, Room, WorkManager.", tags: ["Kotlin", "Java", "Jetpack Compose"] },
//   { icon: "⚡", color: "#f59e0b", title: "Cross-Platform (Flutter / RN)", desc: "Single codebase apps with native-like performance, shared logic and platform-specific UI polish.", tags: ["Flutter", "React Native", "Dart"] },
//   { icon: "🎨", color: "#06b6d4", title: "UI/UX & Design Systems", desc: "Material Design 3, Jetpack Compose UIs, reusable component libraries and pixel-perfect implementations.", tags: ["Material 3", "Compose", "Figma"] },
//   { icon: "🔌", color: "#8b5cf6", title: "Backend & Integrations", desc: "Secure REST/GraphQL APIs, real-time sync, Firebase, push notifications and cloud integrations.", tags: ["REST", "GraphQL", "Firebase"] },
// ];

// const PROCESS = [
//   { step: "01", title: "Discovery & Strategy", text: "Requirements gathering, success metrics, target device matrix and architecture planning that aligns with your business goals.", icon: "🔍", color: "#22c55e" },
//   { step: "02", title: "Design & Prototyping", text: "Wireframes, interactive prototypes and component libraries built for real user feedback before a line of code is written.", icon: "✏️", color: "#f59e0b" },
//   { step: "03", title: "Engineering & QA", text: "Modular Kotlin/Java code with unit & integration tests, CI/CD pipelines and automated device lab testing.", icon: "⚙️", color: "#06b6d4" },
//   { step: "04", title: "Launch & Support", text: "Play Store release management, crash monitoring, analytics dashboards and long-term maintenance sprints.", icon: "🚀", color: "#8b5cf6" },
// ];

// const CASES = [
//   { title: "Fintech Mobile Banking", outcome: "2M+ transactions processed monthly with zero security incidents.", tags: ["Kotlin", "Encryption", "Payments"], img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop", metric: "2M+", metricLabel: "Monthly Transactions" },
//   { title: "Healthcare Monitoring", outcome: "Real-time patient vitals tracking deployed across 40 hospitals.", tags: ["Compose", "Realtime", "Cloud"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", metric: "40", metricLabel: "Hospitals Deployed" },
//   { title: "Enterprise Ops App", outcome: "Field operations digitized for 500+ enterprise users across 3 countries.", tags: ["Java", "Offline Sync", "ERP"], img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", metric: "500+", metricLabel: "Enterprise Users" },
// ];

// const TRUST = [
//   { icon: "⚡", label: "Performance & Stability", desc: "Profiling, memory tuning and 60fps UIs." },
//   { icon: "🔒", label: "Security & Compliance", desc: "Encrypted storage, secure API calls." },
//   { icon: "🧪", label: "Obsessive QA", desc: "Automated tests and device lab regression." },
//   { icon: "📦", label: "Play Store Readiness", desc: "Signing, release tracks and store listing." },
// ];

// // Animated phone mockup component
// function PhoneMockup() {
//   const [activeScreen, setActiveScreen] = useState(0);
//   const screens = [
//     { bg: "from-emerald-900 to-slate-900", label: "Dashboard", items: ["💳 Balance: $12,450", "📈 +2.4% today", "🔔 3 alerts"] },
//     { bg: "from-cyan-900 to-slate-900", label: "Analytics", items: ["📊 7d trend", "👥 1,240 users", "⚡ 98ms avg"] },
//     { bg: "from-violet-900 to-slate-900", label: "Settings", items: ["🔒 2FA enabled", "🌙 Dark mode", "📱 v2.4.1"] },
//   ];
//   useEffect(() => {
//     const t = setInterval(() => setActiveScreen(p => (p + 1) % screens.length), 2800);
//     return () => clearInterval(t);
//   }, []);
//   const s = screens[activeScreen];
//   return (
//     <div className="relative" style={{ animation: "float 5s ease-in-out infinite" }}>
//       {/* Phone frame */}
//       <div className="relative w-56 mx-auto rounded-[2.5rem] border-4 overflow-hidden shadow-2xl" style={{ borderColor: "#1e293b", background: "#0f172a", boxShadow: "0 0 60px rgba(34,197,94,0.2), 0 30px 60px rgba(0,0,0,0.6)" }}>
//         {/* Notch */}
//         <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full z-10" style={{ background: "#0f172a" }} />
//         {/* Screen */}
//         <div className={`bg-gradient-to-br ${s.bg} p-5 pt-10 pb-8`} style={{ minHeight: "380px", transition: "background 0.6s ease" }}>
//           <div className="text-white text-xs font-mono opacity-50 mb-3">albos://app/{s.label.toLowerCase()}</div>
//           <div className="text-white font-bold text-lg mb-4">{s.label}</div>
//           {s.items.map((item, i) => (
//             <div key={i} className="flex items-center gap-2 text-white/80 text-sm mb-3 rounded-xl p-3"
//               style={{ background: "rgba(255,255,255,0.07)", animation: `fadeInUp 0.4s ease ${i * 80}ms both` }}>
//               {item}
//             </div>
//           ))}
//           {/* Bottom nav dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {screens.map((_, i) => (
//               <div key={i} className="rounded-full transition-all duration-300"
//                 style={{ width: i === activeScreen ? "20px" : "6px", height: "6px", background: i === activeScreen ? "#22c55e" : "rgba(255,255,255,0.3)" }} />
//             ))}
//           </div>
//         </div>
//         {/* Home bar */}
//         <div className="flex justify-center py-2" style={{ background: "#0f172a" }}>
//           <div className="w-24 h-1 rounded-full" style={{ background: "#334155" }} />
//         </div>
//       </div>

//       {/* Floating stat bubbles */}
//       <div className="absolute -left-12 top-16 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl"
//         style={{ background: "#0f172a", border: "1px solid #22c55e33", color: "#22c55e", animation: "float 4s ease-in-out 1s infinite" }}>
//         ✓ Play Store Live
//       </div>
//       <div className="absolute -right-10 top-32 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl"
//         style={{ background: "#0f172a", border: "1px solid #06b6d433", color: "#06b6d4", animation: "float 6s ease-in-out 0.5s infinite" }}>
//         ⚡ 60fps Smooth
//       </div>
//       <div className="absolute -left-8 bottom-20 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl"
//         style={{ background: "#0f172a", border: "1px solid #8b5cf633", color: "#a78bfa", animation: "float 5s ease-in-out 2s infinite" }}>
//         🔒 Bank-Grade
//       </div>
//     </div>
//   );
// }

// export default function AppDevelopment() {
//   const [activeCase, setActiveCase] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#030712", color: "#f1f5f9" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Clash+Display:wght@600;700&display=swap');

//         * { box-sizing: border-box; }

//         @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
//         @keyframes fadeInUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
//         @keyframes scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
//         @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes spin-rev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
//         @keyframes pulse-glow { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.8;transform:scale(1.05)} }
//         @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
//         @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//         @keyframes border-glow { 0%,100%{box-shadow:0 0 20px rgba(34,197,94,0.2)} 50%{box-shadow:0 0 40px rgba(34,197,94,0.5)} }
//         @keyframes dot-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
//         @keyframes slide-up { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }

//         .font-display { font-family: 'Clash Display', 'Plus Jakarta Sans', sans-serif; }
//         .green-glow { text-shadow: 0 0 30px rgba(34,197,94,0.4); }
//         .gradient-green {
//           background: linear-gradient(135deg, #22c55e, #06b6d4, #22c55e);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: gradient-x 4s ease infinite;
//         }
//         .card-dark {
//           background: rgba(15,23,42,0.8);
//           border: 1px solid rgba(255,255,255,0.06);
//           backdrop-filter: blur(12px);
//           transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
//         }
//         .card-dark:hover {
//           border-color: rgba(34,197,94,0.3);
//           box-shadow: 0 0 40px rgba(34,197,94,0.08), 0 20px 40px rgba(0,0,0,0.4);
//           transform: translateY(-6px);
//         }
//         .btn-green {
//           background: linear-gradient(135deg, #16a34a, #15803d);
//           box-shadow: 0 4px 24px rgba(34,197,94,0.35);
//           transition: all 0.3s ease;
//         }
//         .btn-green:hover {
//           box-shadow: 0 8px 32px rgba(34,197,94,0.5);
//           transform: translateY(-2px);
//         }
//         .btn-outline {
//           border: 1px solid rgba(255,255,255,0.15);
//           background: rgba(255,255,255,0.04);
//           transition: all 0.3s ease;
//         }
//         .btn-outline:hover {
//           border-color: rgba(34,197,94,0.4);
//           background: rgba(34,197,94,0.06);
//           transform: translateY(-2px);
//         }
//         .scan-line {
//           position: absolute;
//           left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, rgba(34,197,94,0.6), transparent);
//           animation: scan 4s ease-in-out infinite;
//         }
//         .process-line::before {
//           content: '';
//           position: absolute;
//           left: 28px;
//           top: 60px;
//           bottom: -24px;
//           width: 2px;
//           background: linear-gradient(180deg, rgba(34,197,94,0.4), transparent);
//         }
//         .tag-chip {
//           background: rgba(34,197,94,0.08);
//           border: 1px solid rgba(34,197,94,0.2);
//           color: #86efac;
//           font-size: 11px;
//           font-weight: 600;
//           padding: 2px 10px;
//           border-radius: 999px;
//         }
//         .ticker-wrap { overflow: hidden; }
//         .ticker-inner { display: flex; animation: ticker 20s linear infinite; white-space: nowrap; }
//         .section-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #22c55e;
//           margin-bottom: 16px;
//         }
//         .section-label::before {
//           content: '';
//           width: 20px; height: 2px;
//           background: #22c55e;
//           border-radius: 2px;
//         }
//         .hero-grid {
//           background-image:
//             linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px);
//           background-size: 48px 48px;
//         }
//         .case-img-overlay {
//           background: linear-gradient(to top, rgba(3,7,18,0.95) 20%, rgba(3,7,18,0.3) 70%, transparent);
//         }
//         .trust-card {
//           background: rgba(15,23,42,0.6);
//           border: 1px solid rgba(255,255,255,0.05);
//           transition: all 0.3s ease;
//         }
//         .trust-card:hover {
//           border-color: rgba(34,197,94,0.25);
//           background: rgba(34,197,94,0.04);
//         }
//         .active-case-tab {
//           background: rgba(34,197,94,0.1);
//           border-color: rgba(34,197,94,0.4) !important;
//           color: #22c55e;
//         }
//         .nav-link {
//           color: #94a3b8;
//           font-size: 14px;
//           font-weight: 500;
//           transition: color 0.2s ease;
//         }
//         .nav-link:hover { color: #f1f5f9; }
//       `}</style>

//       {/* NAV */}
//       <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}>A</div>
//             <span className="font-bold text-white">Albos</span>
//           </a>
//           <div className="hidden md:flex items-center gap-8">
//             {["Capabilities", "Process", "Case Studies"].map(l => (
//               <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="nav-link">{l}</a>
//             ))}
//             <a href="/contact" className="btn-green px-5 py-2 rounded-xl text-white text-sm font-semibold">Get a Quote</a>
//           </div>
//           <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}>☰</button>
//         </div>
//         {menuOpen && (
//           <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
//             {["Capabilities", "Process", "Case Studies"].map(l => (
//               <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="nav-link py-2">{l}</a>
//             ))}
//             <a href="/contact" className="btn-green px-5 py-2.5 rounded-xl text-white text-sm font-semibold text-center mt-1">Get a Quote</a>
//           </div>
//         )}
//       </nav>

//       {/* HERO */}
//       <header className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-grid">
//         {/* Background orbs */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10"
//             style={{ background: "radial-gradient(circle, #22c55e, transparent)", filter: "blur(80px)", animation: "pulse-glow 6s ease-in-out infinite" }} />
//           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8"
//             style={{ background: "radial-gradient(circle, #06b6d4, transparent)", filter: "blur(100px)", animation: "pulse-glow 8s ease-in-out 2s infinite" }} />
//           {/* Rotating orbit rings */}
//           <div className="absolute top-1/2 right-16 -translate-y-1/2 w-80 h-80 hidden lg:block opacity-20">
//             <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(34,197,94,0.4)", animation: "spin-slow 25s linear infinite" }} />
//             <div className="absolute inset-8 rounded-full" style={{ border: "1px dashed rgba(6,182,212,0.4)", animation: "spin-rev 15s linear infinite" }} />
//             <div className="absolute inset-16 rounded-full" style={{ border: "1px solid rgba(139,92,246,0.3)", animation: "spin-slow 20s linear infinite" }} />
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
//           <div style={{ animation: "slide-up 0.8s ease 0.1s both" }}>
//             <div className="section-label">Android App Development</div>

//             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
//               Native &amp; <span className="gradient-green green-glow">Cross-Platform</span><br />
//               Apps That <span style={{ color: "#f1f5f9" }}>Scale</span>
//             </h1>

//             <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
//               We build high-performance, secure, and maintainable Android applications using Kotlin, Java, Jetpack Compose, Flutter and React Native — from MVPs to enterprise-grade Play Store launches.
//             </p>

//             <div className="flex flex-wrap gap-4 mb-12">
//               <a href="/contact" className="btn-green inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base">
//                 Get a Free Quote
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//               </a>
//               <a href="#case-studies" className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-slate-300">
//                 See Case Studies
//               </a>
//             </div>

//             {/* Feature chips */}
//             <div className="flex flex-wrap gap-2">
//               {["Clean Architecture", "CI/CD Pipelines", "Security-First", "Offline Support", "60fps UI", "Play Store Ready"].map((f, i) => (
//                 <span key={f} className="tag-chip" style={{ animation: `fadeInUp 0.4s ease ${200 + i * 60}ms both` }}>{f}</span>
//               ))}
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
//               {[{ n: 150, s: "+", l: "Apps Shipped" }, { n: 98, s: "%", l: "Client Retention" }, { n: 5, s: "M+", l: "End Users" }].map((s, i) => (
//                 <div key={i}>
//                   <div className="text-2xl font-bold" style={{ color: "#22c55e" }}><CountUp end={s.n} suffix={s.s} /></div>
//                   <div className="text-xs text-slate-500 mt-1">{s.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Phone Visual */}
//           <div className="flex justify-center lg:justify-end" style={{ animation: "slide-up 0.8s ease 0.3s both" }}>
//             <PhoneMockup />
//           </div>
//         </div>
//       </header>

//       {/* TICKER */}
//       <div className="py-4 overflow-hidden" style={{ background: "#0a1628", borderTop: "1px solid rgba(34,197,94,0.1)", borderBottom: "1px solid rgba(34,197,94,0.1)" }}>
//         <div className="ticker-inner">
//           {Array(2).fill(["Kotlin", "Flutter", "React Native", "Jetpack Compose", "Firebase", "Play Store", "Material Design 3", "Clean Architecture", "Offline Sync", "GraphQL", "Encryption", "CI/CD"]).flat().map((t, i) => (
//             <span key={i} className="mx-6 text-sm font-semibold" style={{ color: i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#06b6d4" : "#94a3b8" }}>
//               {t} <span className="mx-4 opacity-30">•</span>
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* TRUSTED / WHY */}
//       <section className="py-28 relative" style={{ background: "linear-gradient(180deg, #030712 0%, #060d1f 100%)" }}>
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//           <Reveal direction="left">
//             <div className="section-label">Why Albos</div>
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
//               Trusted Android <span className="gradient-green">Development Partner</span>
//             </h2>
//             <p className="text-slate-400 leading-relaxed mb-10 max-w-xl">
//               We combine product thinking, engineering discipline and strong delivery practices to ship reliable Android apps that scale across devices and user loads.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TRUST.map((t, i) => (
//                 <Reveal key={i} delay={i * 80}>
//                   <div className="trust-card rounded-2xl p-5 flex items-start gap-3">
//                     <div className="text-2xl">{t.icon}</div>
//                     <div>
//                       <div className="font-semibold text-sm text-white">{t.label}</div>
//                       <div className="text-xs text-slate-500 mt-1">{t.desc}</div>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </Reveal>

//           <Reveal direction="right" delay={150}>
//             <div className="relative">
//               <div className="absolute inset-0 rounded-3xl opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, #22c55e, transparent)", filter: "blur(40px)" }} />
//               <div className="relative rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(34,197,94,0.15)", animation: "border-glow 4s ease-in-out infinite" }}>
//                 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
//                   alt="team working" className="w-full object-cover" style={{ height: "400px" }} />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,7,18,0.7), transparent)" }} />
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: "rgba(3,7,18,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(34,197,94,0.2)" }}>
//                     <div className="w-2.5 h-2.5 rounded-full bg-green-400" style={{ animation: "dot-blink 2s ease-in-out infinite" }}></div>
//                     <span className="text-sm font-semibold text-green-400">Currently accepting new projects</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* CAPABILITIES */}
//       <section id="capabilities" className="py-28" style={{ background: "#060d1f" }}>
//         <div className="max-w-7xl mx-auto px-6">
//           <Reveal className="text-center max-w-3xl mx-auto mb-16">
//             <div className="section-label" style={{ justifyContent: "center" }}>Capabilities</div>
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
//             <p className="text-slate-400 text-lg">From consumer apps to mission-critical enterprise mobile products — we cover the full spectrum.</p>
//           </Reveal>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {CAPABILITIES.map((c, i) => (
//               <Reveal key={i} delay={i * 90}>
//                 <div className="card-dark rounded-2xl p-7 h-full relative overflow-hidden">
//                   <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />
//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: `${c.color}14` }}>
//                     {c.icon}
//                   </div>
//                   <h4 className="font-bold text-white mb-3">{c.title}</h4>
//                   <p className="text-slate-400 text-sm leading-relaxed mb-5">{c.desc}</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {c.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section id="process" className="py-28 relative" style={{ background: "linear-gradient(180deg, #060d1f 0%, #030712 100%)" }}>
//         <div className="max-w-7xl mx-auto px-6">
//           <Reveal className="text-center max-w-3xl mx-auto mb-20">
//             <div className="section-label" style={{ justifyContent: "center" }}>How We Work</div>
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
//             <p className="text-slate-400 text-lg">Structured phases that reduce risk and deliver measurable progress at every step.</p>
//           </Reveal>

//           <div className="max-w-4xl mx-auto">
//             {PROCESS.map((p, i) => (
//               <Reveal key={i} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
//                 <div className={`relative flex ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8 items-start mb-12 last:mb-0`}>
//                   {/* Timeline dot */}
//                   <div className="flex-shrink-0 flex flex-col items-center" style={{ minWidth: "56px" }}>
//                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl z-10 relative"
//                       style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}11)`, border: `1px solid ${p.color}44` }}>
//                       {p.icon}
//                     </div>
//                     {i < PROCESS.length - 1 && (
//                       <div className="w-0.5 flex-1 mt-3 min-h-12" style={{ background: `linear-gradient(180deg, ${p.color}40, transparent)` }} />
//                     )}
//                   </div>

//                   {/* Content card */}
//                   <div className="card-dark rounded-2xl p-7 flex-1 mb-4">
//                     <div className="flex items-center gap-3 mb-3">
//                       <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${p.color}15`, color: p.color }}>STEP {p.step}</span>
//                       <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${p.color}30, transparent)` }} />
//                     </div>
//                     <h4 className="font-bold text-xl text-white mb-2">{p.title}</h4>
//                     <p className="text-slate-400 leading-relaxed">{p.text}</p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDIES */}
//       <section id="case-studies" className="py-28" style={{ background: "#030712" }}>
//         <div className="max-w-7xl mx-auto px-6">
//           <Reveal className="text-center max-w-3xl mx-auto mb-16">
//             <div className="section-label" style={{ justifyContent: "center" }}>Portfolio</div>
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Selected Case Studies</h2>
//             <p className="text-slate-400 text-lg">Real projects we shipped — outcomes, tech stacks and key takeaways.</p>
//           </Reveal>

//           {/* Case tab navigation */}
//           <div className="flex flex-wrap justify-center gap-3 mb-10">
//             {CASES.map((c, i) => (
//               <button key={i} onClick={() => setActiveCase(i)}
//                 className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${i === activeCase ? "active-case-tab" : "btn-outline text-slate-400"}`}>
//                 {c.title}
//               </button>
//             ))}
//           </div>

//           {/* Active case */}
//           {CASES.map((c, i) => i === activeCase && (
//             <Reveal key={i}>
//               <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(34,197,94,0.12)" }}>
//                 <div className="grid lg:grid-cols-2">
//                   <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
//                     <img src={c.img} alt={c.title} className="w-full h-full object-cover absolute inset-0"
//                       style={{ animation: "slide-up 0.5s ease" }} />
//                     <div className="case-img-overlay absolute inset-0" />
//                     <div className="absolute bottom-8 left-8">
//                       <div className="text-4xl font-bold text-white">{c.metric}</div>
//                       <div className="text-green-400 text-sm font-semibold mt-1">{c.metricLabel}</div>
//                     </div>
//                     {/* Scan line effect */}
//                     <div className="scan-line" />
//                   </div>
//                   <div className="p-10" style={{ background: "#070d1f" }}>
//                     <h3 className="font-display text-2xl font-bold text-white mb-4">{c.title}</h3>
//                     <p className="text-slate-400 leading-relaxed mb-8">{c.outcome}</p>
//                     <div className="mb-8">
//                       <div className="text-xs text-slate-500 font-semibold mb-3 uppercase tracking-wide">Tech Stack</div>
//                       <div className="flex flex-wrap gap-2">
//                         {c.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
//                       </div>
//                     </div>
//                     <a href="/contact" className="btn-green inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm">
//                       Build Something Similar
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}

//           {/* All cases grid below */}
//           <div className="grid md:grid-cols-3 gap-5 mt-8">
//             {CASES.map((c, i) => (
//               <Reveal key={i} delay={i * 90}>
//                 <div className="card-dark rounded-2xl overflow-hidden cursor-pointer" onClick={() => setActiveCase(i)}>
//                   <div className="h-40 overflow-hidden relative">
//                     <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
//                     <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,7,18,0.8), transparent)" }} />
//                     <div className="absolute bottom-3 left-4 text-xl font-bold text-white">{c.metric}</div>
//                   </div>
//                   <div className="p-5">
//                     <h4 className="font-semibold text-white text-sm mb-2">{c.title}</h4>
//                     <div className="flex flex-wrap gap-1.5">
//                       {c.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative py-24 overflow-hidden" style={{ background: "#060d1f" }}>
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute inset-0 hero-grid opacity-50" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-15"
//             style={{ background: "radial-gradient(ellipse, #22c55e, transparent)", filter: "blur(80px)" }} />
//         </div>

//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <Reveal>
//             <div className="section-label" style={{ justifyContent: "center" }}>Start Building</div>
//             <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Ready to Build Your <span className="gradient-green">Android App?</span>
//             </h2>
//             <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
//               Tell us about your idea and we'll propose a clear roadmap and estimate within 48 hours. No obligation, no fluff.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//               <a href="/contact" className="btn-green px-10 py-4 rounded-2xl text-white font-bold text-lg w-full sm:w-auto text-center">
//                 Get a Free Quote
//               </a>
//               <a href="mailto:info@albostechnologies.com" className="btn-outline px-10 py-4 rounded-2xl font-semibold text-lg text-slate-300 w-full sm:w-auto text-center">
//                 Email Sales
//               </a>
//             </div>

//             {/* Contact info row */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {[
//                 { icon: "📞", label: "Phone", val: "+91 97666 50411" },
//                 { icon: "✉️", label: "Email", val: "info@albostechnologies.com" },
//                 { icon: "📍", label: "Location", val: "Pune, Maharashtra" },
//                 { icon: "🕐", label: "Hours", val: "Mon–Sat, 10am–7pm" },
//               ].map((c, i) => (
//                 <Reveal key={i} delay={i * 60}>
//                   <div className="rounded-2xl p-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
//                     <div className="text-2xl mb-2">{c.icon}</div>
//                     <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">{c.label}</div>
//                     <div className="text-xs text-slate-300">{c.val}</div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </div>
//   );
// }












































import { useState, useEffect, useRef } from "react";

// Intersection observer hook for scroll animations
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.12, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const [ref, inView] = useInView();
  const transforms = {
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.65s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.65s cubic-bezier(.4,0,.2,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function CountUp({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const CAPABILITIES = [
  {
    icon: "🤖",
    bg: "bg-emerald-50",
    accent: "#059669",
    border: "#a7f3d0",
    tagBg: "#ecfdf5",
    title: "Native Android Engineering",
    desc: "High-performance Android apps built with Kotlin, Java and modern Android tooling for enterprise and consumer apps.",
    tags: ["Kotlin", "Java", "Jetpack"],
  },
  {
    icon: "⚡",
    bg: "bg-sky-50",
    accent: "#0284c7",
    border: "#bae6fd",
    tagBg: "#f0f9ff",
    title: "Cross-Platform (Flutter / RN)",
    desc: "Single codebase mobile apps with native-like performance, beautiful UI and shared business logic across platforms.",
    tags: ["Flutter", "React Native", "Dart"],
  },
  {
    icon: "🎨",
    bg: "bg-violet-50",
    accent: "#7c3aed",
    border: "#ddd6fe",
    tagBg: "#f5f3ff",
    title: "UI / UX & Design Systems",
    desc: "Material Design, Jetpack Compose UIs and reusable component libraries crafted for delight and usability.",
    tags: ["Compose", "Material 3", "Figma"],
  },
  {
    icon: "🔗",
    bg: "bg-orange-50",
    accent: "#ea580c",
    border: "#fed7aa",
    tagBg: "#fff7ed",
    title: "Backend & Integrations",
    desc: "Secure REST / GraphQL APIs, real-time sync, payment gateways and cloud integration layers built to scale.",
    tags: ["REST", "GraphQL", "Firebase"],
  },
];

const PROCESS = [
  {
    step: "01",
    color: "#059669",
    badgeCls: "bg-emerald-100 text-emerald-700",
    title: "Discovery & Strategy",
    text: "We dig into your requirements, define success metrics, map the target device matrix, and draft a solid architecture plan before a single line of code is written.",
    icon: "🔍",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
  },
  {
    step: "02",
    color: "#0284c7",
    badgeCls: "bg-sky-100 text-sky-700",
    title: "Design & Prototyping",
    text: "Wireframes become interactive prototypes. We validate flows and aesthetics early, building component libraries that speed up every sprint that follows.",
    icon: "✏️",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop",
  },
  {
    step: "03",
    color: "#7c3aed",
    badgeCls: "bg-violet-100 text-violet-700",
    title: "Engineering & QA",
    text: "Modular Kotlin / Java code with clean architecture, comprehensive unit and integration tests, and CI/CD pipelines for reliable, repeatable delivery.",
    icon: "⚙️",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
  },
  {
    step: "04",
    color: "#ea580c",
    badgeCls: "bg-orange-100 text-orange-700",
    title: "Launch & Support",
    text: "Smooth Play Store release, real-time monitoring, crash analytics, and long-term maintenance partnerships to keep your app ahead of the curve.",
    icon: "🚀",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop",
  },
];

const CASES = [
  {
    title: "Fintech Mobile Banking",
    category: "Financial Services",
    result: "3× faster transactions, zero security breaches at 1M+ active users.",
    tags: ["Kotlin", "Encryption", "Payments"],
    badgeCls: "bg-emerald-100 text-emerald-700",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Healthcare Monitoring",
    category: "HealthTech",
    result: "Real-time vitals tracking, reduced clinical response time by 40%.",
    tags: ["Compose", "Realtime", "Cloud"],
    badgeCls: "bg-sky-100 text-sky-700",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Enterprise Ops App",
    category: "Enterprise Software",
    result: "Offline-first field ops, 60% reduction in manual reporting overhead.",
    tags: ["Java", "Offline Sync", "Push"],
    badgeCls: "bg-violet-100 text-violet-700",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
];

const TRUST = [
  { icon: "⚡", title: "Performance & Stability", desc: "Profiling, memory tuning, 60fps UIs across device tiers." },
  { icon: "🔒", title: "Security & Compliance", desc: "Secure storage, encrypted network calls, OWASP aligned." },
  { icon: "🧪", title: "Obsessive QA", desc: "Automated tests, manual regression and real device labs." },
  { icon: "📦", title: "Play Store Readiness", desc: "Signing, release tracks, store listing, in-app analytics." },
];

export default function AppDevelopment() {
  const [activeCase, setActiveCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="antialiased text-slate-900 bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,700&display=swap');

        * { box-sizing: border-box; }
        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }

        @keyframes float-a { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(1deg)} }
        @keyframes float-b { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer-light { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes gradient-pan { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.4)} 50%{box-shadow:0 0 0 10px rgba(16,185,129,0)} }
        @keyframes bar-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes bounce-in { 0%{transform:scale(.85) translateY(12px);opacity:0} 70%{transform:scale(1.02)} 100%{transform:scale(1) translateY(0);opacity:1} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes phone-float { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-18px) rotate(2deg)} }
        @keyframes tag-pop { from{transform:scale(0) rotate(-8deg);opacity:0} to{transform:scale(1) rotate(0);opacity:1} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes fade-slide { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }

        .gradient-heading {
          background: linear-gradient(135deg, #059669 0%, #0ea5e9 55%, #7c3aed 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-pan 5s ease infinite;
        }

        .hero-cta-btn {
          background: linear-gradient(135deg, #059669, #0891b2, #059669);
          background-size: 200% auto;
          animation: shimmer-light 3s linear infinite;
          transition: transform .2s, box-shadow .2s;
        }
        .hero-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(5,150,105,.35); }

        .nav-glass {
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .dots-bg {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .cap-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
        }
        .cap-card:hover { transform: translateY(-8px); box-shadow: 0 24px 52px rgba(0,0,0,.08); }

        .process-img-wrap {
          border-radius: 24px;
          overflow: hidden;
          transition: box-shadow .4s ease;
        }
        .process-img-wrap:hover { box-shadow: 0 28px 60px rgba(0,0,0,.14); }
        .process-img-wrap img { transition: transform .5s ease; }
        .process-img-wrap:hover img { transform: scale(1.04); }

        .case-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
        }
        .case-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,.1); }

        .trust-card {
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          border: 1.5px solid #e2e8f0;
        }
        .trust-card:hover { transform: translateY(-5px); border-color: #6ee7b7; box-shadow: 0 14px 32px rgba(16,185,129,.1); }

        .tab-btn {
          position: relative;
          transition: color .3s, font-weight .2s;
          padding-bottom: 14px;
        }
        .tab-btn::after {
          content:'';
          position:absolute;
          bottom:0; left:0; right:0;
          height:3px;
          border-radius:99px;
          background: linear-gradient(90deg,#059669,#0ea5e9);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }
        .tab-btn.is-active { color:#059669; font-weight:700; }
        .tab-btn.is-active::after { transform: scaleX(1); }

        .phone-float { animation: phone-float 5.5s ease-in-out infinite; }
        .badge-a { animation: float-b 4s ease-in-out .5s infinite; }
        .badge-b { animation: float-a 5s ease-in-out 1.5s infinite; }
        .badge-c { animation: float-b 6s ease-in-out .8s infinite; }

        .ticker-wrap { overflow:hidden; white-space:nowrap; }
        .ticker-inner { display:inline-block; animation: ticker 20s linear infinite; }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .highlight-rail { height:3px; background:linear-gradient(90deg,#059669,#0ea5e9,#7c3aed); animation:shimmer-light 2s linear infinite; background-size:200% auto; }

        .cta-bg {
          background: linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 50%, #f5f3ff 100%);
        }

        .outline-btn {
          transition: all .25s;
          border: 2px solid #e2e8f0;
        }
        .outline-btn:hover { border-color: #6ee7b7; color: #059669; background: #ecfdf5; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav className="nav-glass sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-base shadow-md">A</div>
            <span className="font-bold text-lg text-slate-900" style={{ fontFamily: "'Fraunces', serif" }}>Albos Technologies</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {[["#capabilities","Capabilities"],["#process","Process"],["#case-studies","Case Studies"]].map(([href,label]) => (
              <a key={href} href={href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                {label}
              </a>
            ))}
            <a href="/contact" className="hero-cta-btn ml-3 px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-md">
              Get a Quote
            </a>
          </div>

          <button className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-slate-100 flex flex-col gap-2 bg-white">
            {[["#capabilities","Capabilities"],["#process","Process"],["#case-studies","Case Studies"]].map(([href,label]) => (
              <a key={href} href={href}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="/contact" className="hero-cta-btn px-5 py-3 rounded-xl text-white text-sm font-semibold text-center mt-2">Get a Quote</a>
          </div>
        )}
        <div className="highlight-rail" />
      </nav>

      {/* ─── HERO ─── */}
      <header className="relative min-h-[92vh] flex items-center overflow-hidden bg-white dots-bg">
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-60"
            style={{ background:"radial-gradient(ellipse,rgba(16,185,129,.18),transparent 70%)", filter:"blur(60px)", animation:"float-a 8s ease-in-out infinite" }} />
          <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full opacity-50"
            style={{ background:"radial-gradient(ellipse,rgba(14,165,233,.14),transparent 70%)", filter:"blur(80px)", animation:"float-b 10s ease-in-out 2s infinite" }} />
          <div className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full opacity-40"
            style={{ background:"radial-gradient(ellipse,rgba(139,92,246,.1),transparent 70%)", filter:"blur(60px)", animation:"float-a 12s ease-in-out 4s infinite" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-8"
              style={{ animation:"bounce-in .6s ease .2s both", boxShadow:"0 0 0 0 rgba(16,185,129,.4)", animationName:"bounce-in, pulse-glow" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              Now accepting new projects · 2-week kickoff
            </div>

            <h1 className="font-fraunces text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.08] mb-6"
              style={{ animation:"bounce-in .7s ease .1s both" }}>
              Android App<br />
              <span className="gradient-heading">Development</span><br />
              <span className="text-slate-900">Done Right.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10"
              style={{ animation:"bounce-in .7s ease .25s both" }}>
              Native & cross-platform Android apps built with Kotlin, Jetpack Compose, Flutter and React Native — from MVPs to enterprise-grade Play Store launches.
            </p>

            <div className="flex flex-wrap gap-4 mb-12" style={{ animation:"bounce-in .7s ease .4s both" }}>
              <a href="/contact" className="hero-cta-btn inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-white font-semibold text-base shadow-xl">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#case-studies" className="outline-btn inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-slate-700 font-semibold text-base">
                See Case Studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-8 border-t border-slate-100"
              style={{ animation:"bounce-in .7s ease .55s both" }}>
              {[
                { val:150, suffix:"+", label:"Apps Shipped" },
                { val:98,  suffix:"%", label:"Client Retention" },
                { val:5,   suffix:"★", label:"Play Store Avg" },
              ].map((s,i) => (
                <div key={i}>
                  <div className="font-fraunces text-3xl font-bold text-emerald-600">
                    <CountUp end={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Phone Mockup */}
          <div className="flex justify-center items-center relative">
            <div className="phone-float relative">
              <div className="relative w-[260px] mx-auto">
                <div className="rounded-[2.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden"
                  style={{ boxShadow:"0 40px 80px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.1) inset" }}>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-full z-10" />
                  <div className="relative h-[480px] overflow-hidden"
                    style={{ background:"linear-gradient(160deg,#ecfdf5,#f0f9ff)" }}>
                    <div className="p-5 pt-10">
                      {/* App UI */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-xs text-slate-400">Good morning 👋</div>
                          <div className="font-bold text-slate-900 text-sm">Dashboard</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">A</div>
                      </div>
                      {/* Balance card */}
                      <div className="rounded-2xl p-4 mb-4 text-white"
                        style={{ background:"linear-gradient(135deg,#059669,#0891b2)" }}>
                        <div className="text-[10px] opacity-80 mb-1">Total Balance</div>
                        <div className="text-xl font-bold">₹2,48,340</div>
                        <div className="text-[10px] opacity-70 mt-2">↑ 12.4% this month</div>
                      </div>
                      {/* Quick actions */}
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {["💸","📊","🔔","⚙️"].map((e,i) => (
                          <div key={i} className="aspect-square rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">{e}</div>
                        ))}
                      </div>
                      {/* Transactions */}
                      <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Recent</div>
                      {[
                        { label:"Netflix", val:"-₹649", color:"#ef4444" },
                        { label:"Salary",  val:"+₹85,000", color:"#10b981" },
                        { label:"Amazon",  val:"-₹1,299", color:"#ef4444" },
                      ].map((item,i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-xs mr-2 font-bold text-slate-600">
                            {item.label[0]}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-slate-800">{item.label}</div>
                            <div className="text-[10px] text-slate-400">Today</div>
                          </div>
                          <div className="text-xs font-bold" style={{ color:item.color }}>{item.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full" />
              </div>

              {/* Floating badges */}
              <div className="badge-a absolute -right-12 top-14 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">60fps smooth</div>
                    <div className="text-[10px] text-slate-400">Optimized UI</div>
                  </div>
                </div>
              </div>
              <div className="badge-b absolute -left-14 bottom-24 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔒</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Security-first</div>
                    <div className="text-[10px] text-slate-400">OWASP aligned</div>
                  </div>
                </div>
              </div>
              <div className="badge-c absolute -right-8 bottom-14 bg-emerald-500 rounded-2xl shadow-xl px-4 py-2.5 border border-emerald-400">
                <div className="text-white text-xs font-bold">✓ Play Store Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white/80 backdrop-blur-sm py-3">
          <div className="ticker-wrap">
            <div className="ticker-inner">
              {[...Array(2)].flatMap(() =>
                ["Kotlin","Jetpack Compose","Flutter","React Native","Firebase","GraphQL","REST APIs","CI/CD","Play Store","Clean Architecture","MVVM","Room DB","Hilt DI","Coroutines","Material 3"]
              ).map((t,i) => (
                <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ─── TRUSTED / WHY ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <span className="section-label text-emerald-600 mb-4 block">Why Choose Us</span>
            <h2 className="font-fraunces text-4xl font-bold mb-5 leading-tight">
              Your Trusted Android <span className="gradient-heading">Development Partner</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg max-w-lg">
              We combine product thinking, engineering discipline and strong delivery practices to ship reliable Android apps that scale across devices and user loads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST.map((t,i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="trust-card rounded-2xl p-5 bg-white">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl mb-3">{t.icon}</div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">{t.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{t.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="relative">
              <div className="process-img-wrap shadow-2xl" style={{ height:"480px" }}>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
              {/* Sprint card overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900">Current Sprint</span>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">Sprint 4 / 8</span>
                  </div>
                  {[
                    { label:"UI Components",  pct:92 },
                    { label:"API Integration",pct:74 },
                    { label:"QA Coverage",    pct:88 },
                  ].map((item,i) => (
                    <div key={i} className="mb-2.5">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bar-fill rounded-full"
                          style={{
                            width:`${item.pct}%`,
                            background:"linear-gradient(90deg,#10b981,#0ea5e9)",
                            animationDelay:`${i*200}ms`
                          }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section id="capabilities" className="py-24 overflow-hidden"
        style={{ background:"linear-gradient(180deg,#f8fffe,#f0fdf8 50%,#f8fffe)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-emerald-600 mb-3 block">What We Build</span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Full-Spectrum <span className="gradient-heading">App Capabilities</span>
            </h2>
            <p className="text-slate-600 text-lg">From consumer apps to mission-critical enterprise mobile products — we cover every layer.</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((c,i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="cap-card rounded-3xl border border-slate-100 bg-white p-7 h-full shadow-sm"
                  style={{ "--hover-border": c.accent }}>
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center text-2xl mb-5 shadow-sm`}>
                    {c.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">{c.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag,j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{ background:c.tagBg, color:c.accent, border:`1px solid ${c.border}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label text-sky-600 mb-3 block">How We Work</span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Structured Process, <span className="gradient-heading">Zero Surprises</span>
            </h2>
            <p className="text-slate-600 text-lg">Four phases that reduce risk and deliver measurable progress at every milestone.</p>
          </Reveal>

          {/* Timeline connector */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background:"linear-gradient(180deg,#a7f3d0,#bae6fd,#ddd6fe,#fed7aa)" }} />

            <div className="space-y-20">
              {PROCESS.map((p,i) => {
                const flip = i % 2 !== 0;
                return (
                  <div key={p.step}
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flip ? "lg:[&>*:first-child]:order-last" : ""}`}>

                    <Reveal direction={flip ? "right" : "left"} delay={80}>
                      <div className="process-img-wrap shadow-xl">
                        <img src={p.img} alt={p.title} className="w-full object-cover" style={{ height:"300px" }} />
                        <div className="absolute inset-0" style={{ background:`linear-gradient(135deg,${p.color}18,transparent)`, pointerEvents:"none", borderRadius:"24px" }} />
                      </div>
                    </Reveal>

                    <Reveal direction={flip ? "left" : "right"} delay={160}>
                      <div className="relative">
                        {/* Step bubble */}
                        <div className="inline-flex items-center gap-2 mb-5">
                          <span className={`section-label px-3 py-1.5 rounded-full ${p.badgeCls}`}>
                            STEP {p.step}
                          </span>
                        </div>
                        <div className="text-4xl mb-4">{p.icon}</div>
                        <h3 className="font-fraunces text-2xl md:text-3xl font-bold mb-4 text-slate-900">{p.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{p.text}</p>

                        {/* Connector dot */}
                        <div className="hidden lg:block absolute top-8"
                          style={{ [flip ? "right" : "left"]: "-3.5rem" }}>
                          <div className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                            style={{ background:p.color }} />
                        </div>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section id="case-studies" className="py-24 overflow-hidden"
        style={{ background:"linear-gradient(180deg,#f8fffe,#fff)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label text-violet-600 mb-3 block">Case Studies</span>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Real Projects. <span className="gradient-heading">Real Results.</span>
            </h2>
            <p className="text-slate-600 text-lg">Selected work we shipped — outcomes, stack and lessons learned.</p>
          </Reveal>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10 border-b border-slate-100">
            {CASES.map((c,i) => (
              <button key={i} onClick={() => setActiveCase(i)}
                className={`tab-btn px-5 text-sm font-semibold text-slate-500 ${activeCase === i ? "is-active" : ""}`}>
                {c.title}
              </button>
            ))}
          </div>

          {/* Active pane */}
          {CASES.map((c,i) => (
            <div key={i} style={{ display:activeCase===i?"block":"none", animation:activeCase===i?"fade-slide .4s ease":"none" }}>
              <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mb-16">
                <div className="process-img-wrap shadow-2xl" style={{ height:"360px" }}>
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className={`section-label px-3 py-1.5 rounded-full text-xs ${c.badgeCls}`}>{c.category}</span>
                  <h3 className="font-fraunces text-3xl font-bold mt-4 mb-3 text-slate-900">{c.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{c.result}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {c.tags.map((t,j) => (
                      <span key={j} className="text-xs px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold"
                        style={{ animation:`tag-pop .4s ease ${j*100}ms both` }}>{t}</span>
                    ))}
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 group">
                    Read full case study
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c,i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="case-card rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm cursor-pointer"
                  onClick={() => setActiveCase(i)}>
                  <div className="h-44 overflow-hidden relative">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white font-bold text-sm">{c.title}</div>
                      <div className="text-white/70 text-xs">{c.category}</div>
                    </div>
                    {activeCase===i && (
                      <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        Viewing ✓
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">{c.result}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((t,j) => (
                        <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="section-label text-emerald-600 mb-4 block">Start Building</span>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Ready to build your<br /><span className="gradient-heading">Android app?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Tell us about your idea and we'll propose a clear roadmap and estimate within 48 hours — no commitment required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <a href="/contact" className="hero-cta-btn inline-flex items-center gap-2 px-9 py-4 rounded-2xl text-white font-bold text-lg shadow-xl">
                  Get a Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="mailto:info@albostechnologies.com"
                  className="outline-btn inline-flex items-center gap-2 px-9 py-4 rounded-2xl text-slate-700 font-bold text-lg">
                  Contact Sales
                </a>
              </div>
            </Reveal>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon:"📞", label:"Phone",        value:"+91 97666 50411",                  href:"tel:+919766650411" },
                { icon:"✉️", label:"Email",         value:"info@albostechnologies.com",        href:"mailto:info@albostechnologies.com" },
                { icon:"🕐", label:"Office Hours",  value:"Mon–Sat, 10AM–7PM IST",            href:null },
              ].map((card,i) => (
                <Reveal key={i} delay={i*80}>
                  <a href={card.href||"#"}
                    className={`block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm trust-card text-center ${card.href?"":"cursor-default"}`}>
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{card.label}</div>
                    <div className="text-sm font-semibold text-slate-800">{card.value}</div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}