// import React, { useState } from "react";

// export default function HostingPage() {
//   const [domain, setDomain] = useState("");

//   const PricingCard = ({ title, price, features, icon }) => (
//     <div className="bg-white rounded-md shadow hover:shadow-xl border transition-all flex flex-col p-8">
//       <div className="flex flex-col items-center">
//         {icon && <img src={icon} alt="icon" className="w-14 h-14" />}
//         <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
//         <span className="mt-3 bg-blue-600 text-white px-4 py-1 rounded-xl text-lg">{price}</span>
//       </div>
//       <ul className="mt-6 space-y-2 text-slate-700 text-lg list-none pl-0">
//         {features.map((f, idx) => (
//           <li key={idx} className="before:content-['•'] before:mr-2">{f}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       {/* Hero (navbar intentionally skipped) */}
//       <section className="relative w-full pt-16 pb-20 overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 overflow-hidden">
//             <svg
//               aria-hidden
//               className="pointer-events-none absolute inset-0 w-full h-full fill-gray-300/30 stroke-gray-300/30"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <defs>
//                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                   <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//             </svg>
//           </div>

//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] md:w-[850px] md:h-[850px] bg-[radial-gradient(circle,rgba(150,150,255,0.25)_0%,transparent_70%)] opacity-70 pointer-events-none" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
//           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
//                 Reliable Web Hosting & Domain Services
//               </h1>
//               <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-slate-700">
//                 High-performance hosting powered by SSD/NVMe, cloud redundancy, enterprise-grade
//                 security, and 24/7 support. Perfect for startups, businesses, and large-scale
//                 applications.
//               </p>

//               <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
//                 <button className="inline-flex items-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
//                   Get a Free Quote
//                 </button>
//                 <button className="inline-flex items-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900 text-white font-medium hover:bg-neutral-800">
//                   View Our Work
//                 </button>
//               </div>
//             </div>

//             <div className="flex-1 flex justify-center w-full max-w-[520px] overflow-hidden">
//               <img
//                 alt="Datacenter Web Hosting"
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/web-hosting-service-illustration-svg-download-png-4363159.png"
//                 className="object-contain drop-shadow-2xl w-full h-auto scale-95 sm:scale-100"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Shared Hosting */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-3">Shared Web Hosting</h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
//             Affordable & fast hosting for small businesses, blogs, and websites — with easy control
//             panels and secure infrastructure.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             <PricingCard
//               title="Starter Shared Hosting"
//               price="₹149/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/1048/1048943.png"
//               features={["1 Website", "10 GB SSD Storage", "Free SSL Certificate", "Basic Malware Scan", "Unmetered Bandwidth"]}
//             />

//             <PricingCard
//               title="Advanced Shared Hosting"
//               price="₹249/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/3103/3103446.png"
//               features={["5 Websites", "50 GB SSD Storage", "Free SSL + Daily Backup", "Premium Malware Scan", "Free Domain for 1 Year"]}
//             />

//             <PricingCard
//               title="Premium Shared Hosting"
//               price="₹399/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/1048/1048903.png"
//               features={["Unlimited Websites", "100 GB NVMe SSD Storage", "Free CDN + WAF Firewall", "Priority Support", "Staging + Git Deployment"]}
//             />
//           </div>
//         </div>
//       </section>

//       {/* VPS Hosting */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-3">VPS Hosting</h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
//             Powerful virtual private servers with full root access, NVMe SSD performance, and
//             scalable CPU/RAM resources.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             <PricingCard
//               title="Basic VPS"
//               price="₹799/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/843/843196.png"
//               features={["2 CPU Cores", "2 GB RAM", "40 GB NVMe SSD", "1 TB Bandwidth"]}
//             />

//             <PricingCard
//               title="Professional VPS"
//               price="₹1299/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/1997/1997562.png"
//               features={["4 CPU Cores", "8 GB RAM", "120 GB NVMe SSD", "3 TB Bandwidth"]}
//             />

//             <PricingCard
//               title="Ultra VPS"
//               price="₹1999/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/1548/1548438.png"
//               features={["8 CPU Cores", "16 GB RAM", "200 GB NVMe SSD", "Unlimited Bandwidth"]}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Dedicated */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-3">Dedicated Server Hosting</h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
//             Enterprise-grade bare-metal servers for mission-critical workloads, high traffic apps,
//             and AI/ML workloads.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             <PricingCard
//               title="Intel Xeon Basic"
//               price="₹4999/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/236/236831.png"
//               features={["Intel Xeon E3", "16 GB RAM", "2×512 GB SSD", "1 Gbps Port"]}
//             />

//             <PricingCard
//               title="Intel Xeon Pro"
//               price="₹7999/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/201/201623.png"
//               features={["Xeon E5 Dual", "32 GB RAM", "2×1 TB NVMe", "DDoS Protection"]}
//             />

//             <PricingCard
//               title="AMD EPYC Enterprise"
//               price="₹12999/mo"
//               icon="https://cdn-icons-png.flaticon.com/512/3208/3208753.png"
//               features={["AMD EPYC 32-Core", "64 GB RAM", "4×1 TB NVMe", "Private Networking"]}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Domain Registration */}
//       <section className="py-24 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-3">Domain Registration & Management</h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Secure your online identity with top-level domains. Fast search, easy setup, and
//             complete DNS control.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//             <input
//               placeholder="Search your domain..."
//               value={domain}
//               onChange={(e) => setDomain(e.target.value)}
//               className="px-6 py-4 rounded-2xl border text-lg shadow-sm w-full sm:w-[400px]"
//             />
//             <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700">
//               Search Domain
//             </button>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-14 justify-center">
//             {[
//               [".com", "₹699/year"],
//               [".in", "₹499/year"],
//               [".net", "₹849/year"],
//               [".org", "₹799/year"],
//               [".dev", "₹999/year"],
//               [".ai", "₹6499/year"],
//             ].map(([tld, price]) => (
//               <div key={tld} className="bg-white rounded-2xl shadow p-6 text-center">
//                 <h3 className="text-xl font-semibold">{tld}</h3>
//                 <p className="text-lg text-blue-600 font-bold mt-2">{price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA / Contact */}
//       <section className="relative w-full py-16 bg-gradient-to-br from-sky-100 to-indigo-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold">Ready to Grow Your Business?</h2>
//             <p className="text-neutral-700 mt-3 text-base sm:text-lg">Speak with our experts today.</p>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 px-4">
//             <button className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold bg-blue-600 text-white shadow hover:bg-blue-700">
//               Get a Free Quote
//             </button>
//             <a href="tel:+919766650411" className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold bg-green-600 text-white shadow hover:bg-green-700">
//               Call Sales
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               ["Phone Number", "+91 97666 50411"],
//               ["Email Address", "info@albostechnologies.com"],
//               ["Office Location", "Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019"],
//               ["Office Hours", "Mon – Sat, 10:00 AM – 7:00 PM"],
//             ].map(([title, desc], i) => (
//               <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
//                 <h3 className="text-lg font-semibold mt-4 text-center">{title}</h3>
//                 <p className="text-neutral-600 mt-2 text-center text-sm sm:text-base">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// }






import React, { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --bg:      #f7f5f0;
  --white:   #ffffff;
  --ink:     #0f1117;
  --mid:     #64748b;
  --muted:   #94a3b8;
  --line:    #e2ddd6;
  --blue:    #1d4ed8;
  --blue2:   #3b82f6;
  --blue-lt: #eff6ff;
  --cyan:    #06b6d4;
  --green:   #10b981;
  --r:       14px;
}

*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

.host-root {
  font-family:  sans-serif;
  background: var(--bg);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

@keyframes fadeUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes slideX  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
@keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes ripple  { 0%{transform:scale(1);opacity:.4} 100%{transform:scale(2.6);opacity:0} }

.rv { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
.rv.on { opacity:1; transform:translateY(0); }

.lift { transition:transform .28s cubic-bezier(.22,1,.36,1),box-shadow .28s,border-color .22s; }
.lift:hover { transform:translateY(-7px); box-shadow:0 28px 56px -14px rgba(29,78,216,.15); border-color:var(--blue) !important; }

.h-ul { position:relative; display:inline; }
.h-ul::after {
  content:''; position:absolute; bottom:-5px; left:0; right:0; height:4px;
  background:linear-gradient(90deg,var(--blue),var(--cyan));
  border-radius:4px; transform-origin:left; transform:scaleX(0);
  animation:slideX .85s cubic-bezier(.22,1,.36,1) 1.05s forwards;
}

.floater { animation:floatY 6s ease-in-out infinite; }

.ticker-wrap { overflow:hidden; }
.ticker-inner { display:flex; width:max-content; animation:marquee 26s linear infinite; }

.btn-blue {
  position:relative; overflow:hidden;
  background:var(--blue); color:#fff;
  padding:14px 28px; border-radius:10px;
  font-family:sans-serif; font-weight:700; font-size:.9rem;
  border:none; cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:8px;
  transition:transform .22s,box-shadow .22s;
}
.btn-blue::after {
  content:''; position:absolute; inset:0; background:rgba(255,255,255,.16);
  transform:translateX(-110%) skewX(-15deg);
  transition:transform .5s cubic-bezier(.22,1,.36,1);
}
.btn-blue:hover::after { transform:translateX(110%) skewX(-15deg); }
.btn-blue:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(29,78,216,.38); }

.btn-dark {
  background:var(--ink); color:#fff;
  padding:14px 28px; border-radius:10px;
  font-family:sans-serif; font-weight:700; font-size:.9rem;
  border:none; cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; gap:8px;
  transition:transform .22s,background .22s,box-shadow .22s;
}
.btn-dark:hover { background:#1e2230; transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.2); }

.slabel {
  font-size:.7rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase;
  color:var(--blue); display:flex; align-items:center; gap:10px; margin-bottom:10px;
}
.slabel::before { content:''; width:24px; height:2px; background:var(--blue); flex-shrink:0; }

.live-dot { width:8px; height:8px; border-radius:50%; background:var(--green); position:relative; display:inline-block; }
.live-dot::after { content:''; position:absolute; inset:-4px; border-radius:50%; background:var(--green); animation:ripple 1.8s ease-out infinite; }

.d-input {
  flex:1; padding:14px 20px; border-radius:10px;
  border:1.5px solid var(--line); font-family:sans-serif;
  font-size:.95rem; background:var(--white); color:var(--ink);
  outline:none; transition:border-color .2s,box-shadow .2s;
}
.d-input:focus { border-color:var(--blue); box-shadow:0 0 0 3px rgba(29,78,216,.1); }
.d-input::placeholder { color:var(--muted); }

.ribbon {
  position:absolute; top:16px; right:0;
  background:linear-gradient(90deg,var(--blue),var(--cyan));
  color:#fff; font-size:.65rem; font-weight:700; letter-spacing:.1em;
  text-transform:uppercase; padding:4px 14px 4px 10px;
  border-radius:4px 0 0 4px;
}

.c-icon {
  width:48px; height:48px; border-radius:12px;
  background:var(--blue-lt); display:flex; align-items:center; justify-content:center;
  transition:background .2s,transform .2s; flex-shrink:0;
}
.c-card:hover .c-icon { background:var(--blue); transform:scale(1.08); }
.c-card:hover .c-icon svg { stroke:#fff; }
.c-card {
  padding:24px; border-radius:var(--r); border:1px solid var(--line);
  background:var(--white); display:flex; flex-direction:column; gap:12px;
  transition:transform .26s cubic-bezier(.22,1,.36,1),box-shadow .26s,border-color .2s;
}
.c-card:hover { transform:translateY(-5px); box-shadow:0 20px 40px -10px rgba(29,78,216,.12); border-color:var(--blue); }

.domain-pill {
  padding:20px 14px; border-radius:12px; border:1px solid var(--line);
  background:var(--white); text-align:center;
  transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s,border-color .2s;
}
.domain-pill:hover { transform:translateY(-5px) scale(1.03); box-shadow:0 16px 40px -8px rgba(29,78,216,.14); border-color:var(--blue); }
`;

/* ─── hook ─────────────────────────────────────────────── */
function useRv(thr = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("on"); obs.disconnect(); }
    }, { threshold: thr });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── pricing card ──────────────────────────────────────── */
function PricingCard({ title, price, features, icon, popular, accent = "#1d4ed8", delay = 0 }) {
  const r = useRv();
  return (
    <div ref={r} className="rv lift" style={{
      padding:"28px", borderRadius:"var(--r)", border:`1px solid ${popular ? accent+"44" : "var(--line)"}`,
      background:"var(--white)", display:"flex", flexDirection:"column",
      position:"relative", transitionDelay:`${delay}ms`,
      boxShadow: popular ? `0 4px 24px ${accent}18` : "none",
    }}>
      {popular && (
        <div className="ribbon">Popular</div>
      )}

      {/* header */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:20, borderBottom:"1px solid var(--line)", marginBottom:20 }}>
        <div style={{
          width:60, height:60, borderRadius:14,
          background:`linear-gradient(135deg,${accent}1a,${accent}08)`,
          display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12,
        }}>
          <img src={icon} alt={title} style={{ width:36, height:36, objectFit:"contain" }}/>
        </div>
        <h3 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.15rem", fontWeight:400, textAlign:"center", marginBottom:10 }}>{title}</h3>
        <div style={{
          background:`linear-gradient(135deg,${accent},${accent}bb)`,
          color:"#fff", padding:"6px 20px", borderRadius:999,
          fontWeight:700, fontSize:"1.05rem",
        }}>{price}</div>
      </div>

      {/* features */}
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10, flex:1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:".875rem", color:"var(--mid)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop:1, flexShrink:0 }}>
              <circle cx="8" cy="8" r="8" fill={accent} fillOpacity=".1"/>
              <path d="M5 8l2 2 4-4" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className="btn-blue" style={{
        marginTop:24, justifyContent:"center",
        background:`linear-gradient(90deg,${accent},${accent}cc)`,
      }}>Get Started →</button>
    </div>
  );
}

/* ─── section wrapper ───────────────────────────────────── */
function Section({ id, bg = "var(--white)", label, title, sub, children }) {
  const hRef = useRv();
  return (
    <section id={id} style={{ padding:"88px 24px", background:bg }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div ref={hRef} className="rv" style={{ textAlign:"center", marginBottom:52 }}>
          <div className="slabel" style={{ justifyContent:"center" }}>{label}</div>
          <h2 style={{
            fontFamily:"'DM Serif Display',serif",
            fontSize:"clamp(2rem,4vw,2.9rem)", fontWeight:400,
            letterSpacing:"-.01em", marginBottom:12, lineHeight:1.15,
          }}>{title}</h2>
          <p style={{ color:"var(--mid)", maxWidth:540, margin:"0 auto", lineHeight:1.75 }}>{sub}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── hero ──────────────────────────────────────────────── */
const Hero = () => (
  <section style={{ position:"relative", padding:"96px 24px 80px", background:"var(--white)", overflow:"hidden" }}>
    <div style={{
      position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
      backgroundImage:"linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
      backgroundSize:"48px 48px", opacity:.35,
    }}/>
    <div style={{
      position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
      background:"radial-gradient(ellipse 65% 55% at 78% 15%,rgba(29,78,216,.06),transparent 65%), radial-gradient(ellipse 45% 40% at 12% 85%,rgba(6,182,212,.05),transparent 60%)",
    }}/>

    <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
      <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:48, justifyContent:"space-between" }}>

        {/* text */}
        <div style={{ flex:"1 1 420px", minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20, opacity:0, animation:"fadeIn .5s .1s forwards" }}>
            <span className="live-dot"/>
            <span style={{ fontSize:".72rem", fontWeight:700, color:"var(--green)", letterSpacing:".1em", textTransform:"uppercase" }}>
              99.9% Uptime Guaranteed
            </span>
          </div>

          <h1 style={{
            fontFamily:"'DM Serif Display',serif",
            fontSize:"clamp(2.5rem,5.5vw,4.2rem)",
            fontWeight:400, lineHeight:1.08, letterSpacing:"-.02em", marginBottom:22,
          }}>
            <span style={{ display:"inline", opacity:0, animation:"fadeUp .65s cubic-bezier(.22,1,.36,1) .3s forwards" }}>Reliable </span>
            <span style={{ display:"inline", opacity:0, animation:"fadeUp .65s cubic-bezier(.22,1,.36,1) .42s forwards" }}>
              <span className="h-ul">Web Hosting</span>
            </span>
            <br/>
            <span style={{ display:"inline", opacity:0, animation:"fadeUp .65s cubic-bezier(.22,1,.36,1) .56s forwards" }}>
              {"& Domain Services"}
            </span>
          </h1>

          <p style={{
            fontSize:"1.05rem", color:"var(--mid)", lineHeight:1.75, maxWidth:500, marginBottom:36,
            opacity:0, animation:"fadeUp .7s .9s forwards",
          }}>
            High-performance hosting powered by SSD/NVMe, cloud redundancy, enterprise-grade security, and 24/7 support. Perfect for startups, businesses, and large-scale applications.
          </p>

          <div style={{ display:"flex", flexWrap:"wrap", gap:12, opacity:0, animation:"fadeUp .6s 1.05s forwards" }}>
            <button className="btn-blue">✦ Get a Free Quote</button>
            <button className="btn-dark">View Plans →</button>
          </div>

          <div style={{ marginTop:36, display:"flex", flexWrap:"wrap", gap:28, opacity:0, animation:"fadeIn .6s 1.3s forwards" }}>
            {[["NVMe","Storage"],["99.9%","Uptime SLA"],["24/7","Support"],["Free","SSL Certs"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.5rem", color:"var(--blue)", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:".67rem", color:"var(--muted)", fontWeight:600, marginTop:3, letterSpacing:".07em", textTransform:"uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* illustration */}
        <div style={{ flex:"1 1 300px", display:"flex", justifyContent:"center", opacity:0, animation:"fadeIn .9s .65s forwards" }}>
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", inset:-40, borderRadius:"50%", background:"radial-gradient(circle,rgba(29,78,216,.07),transparent 70%)" }}/>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-hosting-service-illustration-svg-download-png-4363159.png"
              alt="Web Hosting"
              className="floater"
              style={{ width:"100%", maxWidth:460, filter:"drop-shadow(0 24px 48px rgba(29,78,216,.12))" }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── ticker ────────────────────────────────────────────── */
const Ticker = () => {
  const items = ["Shared Hosting","VPS Servers","Dedicated Servers","Domain Registration","Free SSL","DDoS Protection","NVMe SSD","99.9% Uptime","24/7 Support","CDN Included"];
  return (
    <div style={{ borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)", padding:"13px 0", background:"var(--ink)" }}>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...items,...items].map((t,i) => (
            <span key={i} style={{ padding:"0 28px", fontSize:".72rem", fontWeight:600, color:"rgba(255,255,255,.38)", whiteSpace:"nowrap", letterSpacing:".12em", textTransform:"uppercase" }}>
              {t} <span style={{ color:"var(--blue2)", margin:"0 4px" }}>▸</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── shared hosting ────────────────────────────────────── */
const SharedHosting = () => (
  <Section label="Shared Hosting" title="Affordable Web Hosting" bg="var(--white)"
    sub="Fast hosting for small businesses, blogs, and websites — with easy control panels and secure infrastructure.">
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
      <PricingCard delay={0}   title="Starter"  price="₹149/mo" accent="#2563eb"
        icon="https://cdn-icons-png.flaticon.com/512/1048/1048943.png"
        features={["1 Website","10 GB SSD Storage","Free SSL Certificate","Basic Malware Scan","Unmetered Bandwidth"]}/>
      <PricingCard delay={80}  title="Advanced" price="₹249/mo" accent="#0891b2" popular
        icon="https://cdn-icons-png.flaticon.com/512/3103/3103446.png"
        features={["5 Websites","50 GB SSD Storage","Free SSL + Daily Backup","Premium Malware Scan","Free Domain for 1 Year"]}/>
      <PricingCard delay={160} title="Premium"  price="₹399/mo" accent="#7c3aed"
        icon="https://cdn-icons-png.flaticon.com/512/1048/1048903.png"
        features={["Unlimited Websites","100 GB NVMe SSD","Free CDN + WAF Firewall","Priority Support","Staging + Git Deployment"]}/>
    </div>
  </Section>
);

/* ─── vps ────────────────────────────────────────────────── */
const VpsHosting = () => (
  <Section label="VPS Hosting" title="Virtual Private Servers" bg="var(--bg)"
    sub="Powerful virtual servers with full root access, NVMe SSD performance, and scalable CPU/RAM resources.">
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
      <PricingCard delay={0}   title="Basic VPS"        price="₹799/mo"   accent="#059669"
        icon="https://cdn-icons-png.flaticon.com/512/843/843196.png"
        features={["2 CPU Cores","2 GB RAM","40 GB NVMe SSD","1 TB Bandwidth","Full Root Access"]}/>
      <PricingCard delay={80}  title="Professional VPS" price="₹1,299/mo" accent="#d97706" popular
        icon="https://cdn-icons-png.flaticon.com/512/1997/1997562.png"
        features={["4 CPU Cores","8 GB RAM","120 GB NVMe SSD","3 TB Bandwidth","Managed Firewall"]}/>
      <PricingCard delay={160} title="Ultra VPS"        price="₹1,999/mo" accent="#dc2626"
        icon="https://cdn-icons-png.flaticon.com/512/1548/1548438.png"
        features={["8 CPU Cores","16 GB RAM","200 GB NVMe SSD","Unlimited Bandwidth","Priority Support"]}/>
    </div>
  </Section>
);

/* ─── dedicated ──────────────────────────────────────────── */
const Dedicated = () => (
  <Section label="Dedicated Servers" title="Bare-Metal Performance" bg="var(--white)"
    sub="Enterprise-grade servers for mission-critical workloads, high-traffic apps, and AI/ML operations.">
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
      <PricingCard delay={0}   title="Intel Xeon Basic"      price="₹4,999/mo"  accent="#0369a1"
        icon="https://cdn-icons-png.flaticon.com/512/236/236831.png"
        features={["Intel Xeon E3","16 GB RAM","2×512 GB SSD","1 Gbps Port","Full Root Access"]}/>
      <PricingCard delay={80}  title="Intel Xeon Pro"        price="₹7,999/mo"  accent="#7c3aed" popular
        icon="https://cdn-icons-png.flaticon.com/512/201/201623.png"
        features={["Xeon E5 Dual","32 GB RAM","2×1 TB NVMe","DDoS Protection","Managed Firewall"]}/>
      <PricingCard delay={160} title="AMD EPYC Enterprise"   price="₹12,999/mo" accent="#be185d"
        icon="https://cdn-icons-png.flaticon.com/512/3208/3208753.png"
        features={["AMD EPYC 32-Core","64 GB RAM","4×1 TB NVMe","Private Networking","99.99% SLA"]}/>
    </div>
  </Section>
);

/* ─── domains ────────────────────────────────────────────── */
const Domains = () => {
  const [domain, setDomain] = useState("");
  const hRef = useRv();
  const tlds = [
    [".com","₹699/yr","#2563eb"],
    [".in", "₹499/yr","#059669"],
    [".net","₹849/yr","#7c3aed"],
    [".org","₹799/yr","#d97706"],
    [".dev","₹999/yr","#0891b2"],
    [".ai", "₹6,499/yr","#be185d"],
  ];

  return (
    <section style={{ padding:"88px 24px", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div ref={hRef} className="rv" style={{ textAlign:"center", marginBottom:44 }}>
          <div className="slabel" style={{ justifyContent:"center" }}>Domain Registration</div>
          <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(2rem,4vw,2.9rem)", fontWeight:400, letterSpacing:"-.01em", marginBottom:12 }}>
            Secure Your Online Identity
          </h2>
          <p style={{ color:"var(--mid)", maxWidth:500, margin:"0 auto", lineHeight:1.75 }}>
            Fast search, easy setup, and complete DNS control for all top-level domains.
          </p>
        </div>

        {/* search */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center", marginBottom:44 }}>
          <input className="d-input" placeholder="Search your domain (e.g. mybusiness.com)…"
            value={domain} onChange={e => setDomain(e.target.value)} style={{ maxWidth:420 }}/>
          <button className="btn-blue">🔍 Search Domain</button>
        </div>

        {/* tld grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:14 }}>
          {tlds.map(([tld, price, color], i) => {
            const r = useRv();
            return (
              <div key={tld} ref={r} className="rv domain-pill" style={{ transitionDelay:`${i*55}ms` }}>
                <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.7rem", fontWeight:400, color }}>{tld}</div>
                <div style={{ fontSize:".85rem", fontWeight:700, color:"var(--blue)", marginTop:6 }}>{price}</div>
                <button style={{
                  marginTop:12, padding:"6px 16px", borderRadius:8,
                  background:color+"14", color, border:`1px solid ${color}30`,
                  fontSize:".72rem", fontWeight:700, cursor:"pointer",
                  transition:"background .2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = color+"2a"}
                  onMouseLeave={e => e.currentTarget.style.background = color+"14"}
                >Register</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── contact ────────────────────────────────────────────── */
const ContactSection = () => {
  const hRef = useRv();
  const contacts = [
    { label:"Phone",        val:"+91 97666 50411",
      svg:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> },
    { label:"Email",        val:"info@albostechnologies.com",
      svg:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg> },
    { label:"Location",     val:"Office 78, 5th Floor, Kunal Plaza, Pune 411019",
      svg:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> },
    { label:"Office Hours", val:"Mon – Sat, 10:00 AM – 7:00 PM",
      svg:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg> },
  ];

  return (
    <section style={{ padding:"88px 24px 96px", background:"var(--white)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        {/* CTA banner */}
        <div ref={hRef} className="rv" style={{
          borderRadius:20, padding:"56px 44px",
          background:"linear-gradient(135deg,#0f2463 0%,#1d4ed8 55%,#0891b2 100%)",
          color:"#fff", marginBottom:48,
          display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:28,
          position:"relative", overflow:"hidden",
        }}>
          <div style={{ position:"absolute", top:-80, right:-80, width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,.04)" }}/>
          <div style={{ position:"absolute", bottom:-50, left:240, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,.03)" }}/>
          <div style={{ position:"relative" }}>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:400, marginBottom:10 }}>
              Ready to Grow Your Business?
            </div>
            <p style={{ color:"rgba(255,255,255,.7)", maxWidth:440, lineHeight:1.7, fontSize:".95rem" }}>
              Speak with our hosting experts today. Launch fast, stay secure, scale effortlessly.
            </p>
          </div>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap", position:"relative" }}>
            <button style={{
              padding:"14px 28px", borderRadius:10, background:"#fff", color:"var(--blue)",
              fontWeight:700, fontSize:".9rem", border:"none", cursor:"pointer",
              transition:"transform .2s,box-shadow .2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,.18)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}
            >✦ Get a Free Quote</button>
            <a href="tel:+919766650411" style={{
              padding:"14px 28px", borderRadius:10,
              background:"rgba(255,255,255,.1)", color:"#fff",
              border:"1.5px solid rgba(255,255,255,.25)",
              fontWeight:600, fontSize:".9rem", textDecoration:"none",
              display:"inline-block", transition:"background .2s",
            }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.2)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.1)"}
            >📞 Call Sales</a>
          </div>
        </div>

        {/* contact cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
          {contacts.map(({ label, val, svg }, i) => {
            const r = useRv();
            return (
              <div key={label} ref={r} className="rv c-card" style={{ transitionDelay:`${i*70}ms` }}>
                <div className="c-icon">{svg}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:".88rem", marginBottom:4 }}>{label}</div>
                  <div style={{ fontSize:".83rem", color:"var(--mid)", lineHeight:1.6 }}>{val}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function HostingPage() {
  return (
    <>
      <style>{CSS}</style>
      <div className="host-root">
        <Hero />
        <Ticker />
        <SharedHosting />
        <VpsHosting />
        <Dedicated />
        <Domains />
        <ContactSection />
      </div>
    </>
  );
}