// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/albos.png";
// // ─── Service categories with icons ───────────────────────────────────────────
// const SERVICE_GROUPS = [
//   {
//     group: "Development",
//     color: "#4F6EF7",
//     services: [
//       { name: "Web Development", icon: "🌐", desc: "Scalable web apps & sites", path: "/services/website-development-services-company" },
//       { name: "Mobile App", icon: "📱", desc: "iOS & Android apps", path: "/services/android-app-development-services" },
//       { name: "API Development", icon: "⚡", desc: "RESTful & GraphQL APIs", path: "/services/api-development-services" },
//       { name: "Game Development", icon: "🎮", desc: "Mobile & web games", path: "/services/mobile-game-development-company" },
//     ],
//   },
//   {
//     group: "Innovation",
//     color: "#8B5CF6",
//     services: [
//       { name: "Blockchain & Web3", icon: "🔗", desc: "DApps & smart contracts", path: "/services/blockchain-development-company" },
//       { name: "IoT Development", icon: "🤖", desc: "Smart device solutions", path: "/services/iot-application-development-services" },
//       { name: "ERP & CRM", icon: "🏢", desc: "Enterprise systems", path: "/services/erp-crm" },
//       { name: "Hosting Services", icon: "☁️", desc: "Reliable cloud hosting", path: "/services/web-hosting-services" },
//     ],
//   },
//   {
//     group: "Growth",
//     color: "#10B981",
//     services: [
//       { name: "Digital Marketing", icon: "📈", desc: "SEO & performance", path: "/services/digital-marketing-seo" },
//       { name: "Social Media", icon: "💬", desc: "Brand awareness & growth", path: "/services/socialMedia-marketing" },
//       { name: "UI / UX Design", icon: "✦", desc: "Intuitive user experiences", path: "/services/uiux-design-company" },
//       { name: "Telecalling & Support", icon: "🎧", desc: "24/7 customer support", path: "/services/telecalling-support" },
//     ],
//   },
// ];

// const NAV_LINKS = [
//   { label: "Portfolio", to: "/portfolio" },
//   { label: "About", to: "/about" },
//   { label: "Contact", to: "/contact" },
// ];

// // Inline styles as JS objects to avoid Tailwind CDN limitations
// const styles = {
//   nav: (scrolled) => ({
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000,
//     height: "68px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 5%",
//     transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
//     background: scrolled
//       ? "rgba(255,255,255,0.97)"
//       : "rgba(255,255,255,0.85)",
//     backdropFilter: "blur(20px)",
//     WebkitBackdropFilter: "blur(20px)",
//     borderBottom: scrolled ? "1px solid rgba(15,23,42,0.08)" : "1px solid transparent",
//     boxShadow: scrolled ? "0 4px 24px rgba(15,23,42,0.06)" : "none",
//   }),
//   logo: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     textDecoration: "none",
//     fontFamily: "'Clash Display',   sans-serif",
//     fontWeight: 700,
//     fontSize: "20px",
//     letterSpacing: "-0.5px",
//     color: "#0F172A",
//   },
//   logoAccent: {
//     background: "linear-gradient(135deg, #4F6EF7, #8B5CF6)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
//   desktopMenu: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     listStyle: "none",
//     margin: 0,
//     padding: 0,
//   },
//   navLink: (isActive) => ({
//     padding: "8px 14px",
//     borderRadius: "8px",
//     fontSize: "14px",
//     fontWeight: isActive ? 600 : 500,
//     color: isActive ? "#0F172A" : "#64748B",
//     textDecoration: "none",
//     transition: "all 0.2s",
//     background: isActive ? "rgba(79,110,247,0.08)" : "transparent",
//   }),
//   servicesBtn: {
//     padding: "8px 14px",
//     borderRadius: "8px",
//     fontSize: "14px",
//     fontWeight: 500,
//     color: "#64748B",
//     background: "transparent",
//     border: "none",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//     transition: "all 0.2s",
//     fontFamily: "inherit",
//   },
//   chevron: (open) => ({
//     display: "inline-block",
//     width: "14px",
//     height: "14px",
//     transition: "transform 0.25s",
//     transform: open ? "rotate(180deg)" : "rotate(0deg)",
//     opacity: 0.6,
//   }),
//   megaMenu: (visible) => ({
//     position: "fixed",
//     top: "68px",
//     left: "50%",
//     transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-12px)",
//     width: "min(860px, 92vw)",
//     background: "#fff",
//     borderRadius: "20px",
//     boxShadow: "0 20px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.06)",
//     padding: "28px",
//     opacity: visible ? 1 : 0,
//     pointerEvents: visible ? "all" : "none",
//     transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
//     zIndex: 999,
//   }),
//   megaGrid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr",
//     gap: "8px",
//   },
//   groupLabel: (color) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     fontSize: "11px",
//     fontWeight: 700,
//     letterSpacing: "0.08em",
//     textTransform: "uppercase",
//     color: color,
//     marginBottom: "10px",
//     paddingBottom: "8px",
//     borderBottom: `1px solid ${color}22`,
//   }),
//   groupDot: (color) => ({
//     width: "6px",
//     height: "6px",
//     borderRadius: "50%",
//     background: color,
//     flexShrink: 0,
//   }),
//   serviceItem: {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "10px",
//     padding: "10px 12px",
//     borderRadius: "10px",
//     textDecoration: "none",
//     transition: "background 0.15s",
//     cursor: "pointer",
//   },
//   serviceIcon: {
//     fontSize: "18px",
//     lineHeight: 1,
//     marginTop: "1px",
//     flexShrink: 0,
//   },
//   serviceName: {
//     fontSize: "13.5px",
//     fontWeight: 600,
//     color: "#0F172A",
//     display: "block",
//     marginBottom: "1px",
//   },
//   serviceDesc: {
//     fontSize: "11.5px",
//     color: "#94A3B8",
//     display: "block",
//   },
//   megaFooter: {
//     marginTop: "20px",
//     paddingTop: "16px",
//     borderTop: "1px solid #F1F5F9",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   footerTag: {
//     fontSize: "12px",
//     color: "#94A3B8",
//     fontStyle: "italic",
//   },
//   cta: {
//     background: "linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%)",
//     color: "#fff",
//     padding: "9px 20px",
//     borderRadius: "10px",
//     fontSize: "13.5px",
//     fontWeight: 700,
//     textDecoration: "none",
//     letterSpacing: "0.01em",
//     transition: "all 0.2s",
//     boxShadow: "0 4px 14px rgba(79,110,247,0.35)",
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//   },
//   hamburger: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "5px",
//     background: "none",
//     border: "none",
//     cursor: "pointer",
//     padding: "8px",
//     borderRadius: "8px",
//   },
//   bar: (open, i) => ({
//     width: "22px",
//     height: "2px",
//     background: "#0F172A",
//     borderRadius: "2px",
//     transition: "all 0.3s",
//     transform:
//       open && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
//       open && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
//     opacity: open && i === 1 ? 0 : 1,
//   }),
//   mobileMenu: {
//     position: "fixed",
//     top: "68px",
//     left: 0,
//     right: 0,
//     background: "#fff",
//     borderBottom: "1px solid #F1F5F9",
//     boxShadow: "0 12px 32px rgba(15,23,42,0.1)",
//     padding: "16px 5% 24px",
//     zIndex: 998,
//     maxHeight: "85vh",
//     overflowY: "auto",
//   },
//   mobileServicesBtn: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "14px 0",
//     borderBottom: "1px solid #F1F5F9",
//     background: "none",
//     border: "none",
//     borderBottomWidth: "1px",
//     borderBottomStyle: "solid",
//     borderBottomColor: "#F1F5F9",
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#0F172A",
//     cursor: "pointer",
//     fontFamily: "inherit",
//   },
//   mobileServiceGroup: {
//     paddingLeft: "0",
//     paddingBottom: "4px",
//     borderBottom: "1px solid #F8FAFC",
//   },
//   mobileGroupLabel: (color) => ({
//     fontSize: "10px",
//     fontWeight: 700,
//     letterSpacing: "0.1em",
//     textTransform: "uppercase",
//     color: color,
//     padding: "14px 0 6px",
//     display: "block",
//   }),
//   mobileServiceLink: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     padding: "9px 0",
//     textDecoration: "none",
//     fontSize: "13.5px",
//     color: "#475569",
//     fontWeight: 500,
//   },
//   mobileNavLink: {
//     display: "block",
//     padding: "14px 0",
//     fontSize: "14px",
//     fontWeight: 500,
//     color: "#475569",
//     textDecoration: "none",
//     borderBottom: "1px solid #F1F5F9",
//   },
//   mobileCta: {
//     marginTop: "16px",
//     display: "block",
//     textAlign: "center",
//     background: "linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%)",
//     color: "#fff",
//     padding: "14px",
//     borderRadius: "12px",
//     fontSize: "14px",
//     fontWeight: 700,
//     textDecoration: "none",
//     boxShadow: "0 4px 20px rgba(79,110,247,0.3)",
//   },
// };

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);
//   const [megaOpen, setMegaOpen] = useState(false);
//   const megaRef = useRef(null);
//   const servicesBtnRef = useRef(null);
//   const closeTimer = useRef(null);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   // Close mega menu on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (
//         megaRef.current && !megaRef.current.contains(e.target) &&
//         servicesBtnRef.current && !servicesBtnRef.current.contains(e.target)
//       ) {
//         setMegaOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const handleServicesEnter = () => {
//     clearTimeout(closeTimer.current);
//     setMegaOpen(true);
//   };
//   const handleServicesLeave = () => {
//     closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
//   };

//   return (
//     <>
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
//         * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
//         .nav-link-hover:hover { background: rgba(79,110,247,0.06) !important; color: #0F172A !important; }
//         .services-btn-hover:hover { background: rgba(79,110,247,0.06) !important; color: #0F172A !important; }
//         .service-item-hover:hover { background: #F8FAFC !important; }
//         .cta-hover:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(79,110,247,0.45) !important; }
//         .mega-badge {
//           display: inline-flex; align-items: center; gap: 5px;
//           background: linear-gradient(135deg, #4F6EF7, #8B5CF6);
//           color: #fff; padding: 4px 10px; border-radius: 20px;
//           font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
//         }
//       `}</style>

//       <nav style={styles.nav(scrolled)}>
//        {/* Logo */}
//          <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Albos Technologies" className="h-10 w-auto" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul style={styles.desktopMenu}>

//           {/* Services with Mega Menu */}
//           <li style={{ position: "relative" }}>
//             <button
//               ref={servicesBtnRef}
//               onMouseEnter={handleServicesEnter}
//               onMouseLeave={handleServicesLeave}
//               onClick={() => setMegaOpen(!megaOpen)}
//               style={{ ...styles.servicesBtn, color: megaOpen ? "#0F172A" : "#64748B", background: megaOpen ? "rgba(79,110,247,0.06)" : "transparent" }}
//               className="services-btn-hover"
//             >
//               Services
//               <svg style={styles.chevron(megaOpen)} viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </li>

//           {NAV_LINKS.map(({ label, to }) => (
//             <li key={to}>
//               <NavLink
//                 to={to}
//                 className="nav-link-hover"
//                 style={({ isActive }) => styles.navLink(isActive)}
//               >
//                 {label}
//               </NavLink>
//             </li>
//           ))}

//           <li>
//             <Link to="/contact" style={styles.cta} className="cta-hover">
//               Get a Quote
//               <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
//                 <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           style={styles.hamburger}
//           className="md-hide"
//           aria-label="Menu"
//         >
//           {[0, 1, 2].map(i => (
//             <span key={i} style={styles.bar(mobileOpen, i)} />
//           ))}
//         </button>
//       </nav>

//       {/* Mega Dropdown */}
//       <div
//         ref={megaRef}
//         style={styles.megaMenu(megaOpen)}
//         onMouseEnter={handleServicesEnter}
//         onMouseLeave={handleServicesLeave}
//       >
//         {/* Header */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
//           <div>
//             <div style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", fontFamily: "  sans-serif", marginBottom: "4px" }}>
//               Our Services
//             </div>
//             <div style={{ fontSize: "12.5px", color: "#94A3B8" }}>
//               End-to-end digital solutions for modern businesses
//             </div>
//           </div>
//           <span className="mega-badge">12 Services</span>
//         </div>

//         {/* Grid */}
//         <div style={styles.megaGrid}>
//           {SERVICE_GROUPS.map((group) => (
//             <div key={group.group}>
//               <div style={styles.groupLabel(group.color)}>
//                 <span style={styles.groupDot(group.color)} />
//                 {group.group}
//               </div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
//                 {group.services.map((s) => (
//                   <Link
//                     key={s.path}
//                     to={s.path}
//                     onClick={() => setMegaOpen(false)}
//                     className="service-item-hover"
//                     style={styles.serviceItem}
//                   >
//                     <span style={styles.serviceIcon}>{s.icon}</span>
//                     <span>
//                       <span style={styles.serviceName}>{s.name}</span>
//                       <span style={styles.serviceDesc}>{s.desc}</span>
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div style={styles.megaFooter}>
//           <span style={styles.footerTag}>✦ Trusted by 200+ clients worldwide</span>
//           <Link to="/contact" style={{
//             fontSize: "13px", fontWeight: 600, color: "#4F6EF7",
//             textDecoration: "none", display: "flex", alignItems: "center", gap: "5px"
//           }} onClick={() => setMegaOpen(false)}>
//             Schedule a Free Consultation →
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div style={styles.mobileMenu}>

//           {/* Services Toggle */}
//           <button
//             style={styles.mobileServicesBtn}
//             onClick={() => setServiceOpen(!serviceOpen)}
//           >
//             <span>Services</span>
//             <svg style={styles.chevron(serviceOpen)} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
//               <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//             </svg>
//           </button>

//           {serviceOpen && (
//             <div>
//               {SERVICE_GROUPS.map((group) => (
//                 <div key={group.group} style={styles.mobileServiceGroup}>
//                   <span style={styles.mobileGroupLabel(group.color)}>{group.group}</span>
//                   {group.services.map((s) => (
//                     <Link
//                       key={s.path}
//                       to={s.path}
//                       onClick={() => setMobileOpen(false)}
//                       style={styles.mobileServiceLink}
//                     >
//                       <span>{s.icon}</span>
//                       <span>{s.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Nav links */}
//           {NAV_LINKS.map(({ label, to }) => (
//             <NavLink
//               key={to}
//               to={to}
//               onClick={() => setMobileOpen(false)}
//               style={styles.mobileNavLink}
//             >
//               {label}
//             </NavLink>
//           ))}

//           <Link to="/contact" onClick={() => setMobileOpen(false)} style={styles.mobileCta}>
//             Get a Quote →
//           </Link>
//         </div>
//       )}
//     </>
//   );
// }
























import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/albos-technologies-logo.png";

// ─── Flat service list (no group classification) ─────────────────────────────
const SERVICES = [
  { name: "Web Development", icon: "🌐", desc: "Modern, responsive and scalable websites", path: "/services/website-development-services-company" },
  { name: "Android App Development", icon: "📱", desc: "Custom Android apps for your business needs", path: "/services/android-app-development-services" },
  { name: "iOS App Development", icon: "🍎", desc: "High-performance native iOS applications", path: "/services/ios-app-development" },
  { name: "Embedded & IoT Development", icon: "🤖", desc: "Smart IoT systems and embedded solutions", path: "/services/iot-application-development-services" },
  { name: "API Development", icon: "⚡", desc: "Secure & scalable APIs for web & mobile", path: "/services/api-development-services" },
  { name: "Telecalling & Tech Support", icon: "🎧", desc: "24/7 customer & technical assistance", path: "/services/telecalling-support" },
  { name: "Social Media Marketing", icon: "📣", desc: "Meta, Google, LinkedIn ads & brand growth", path: "/services/socialMedia-marketing" },
  { name: "SEO Optimization", icon: "🔍", desc: "Boost search rankings & grow organically", path: "/services/digital-marketing-seo" },
  { name: "Game Development", icon: "🎮", desc: "2D, 3D & multiplayer game development", path: "/services/mobile-game-development-company" },
  { name: "Enterprise ERP / CRM LMS", icon: "🏢", desc: "Custom enterprise workflow solutions", path: "/services/erp-crm" },
  { name: "Blockchain Development", icon: "🔗", desc: "Crypto apps, smart contracts & Web3", path: "/services/blockchain-development-company" },
  { name: "Hosting & Domain Services", icon: "☁️", desc: "Cloud hosting, domains & server setup", path: "/services/web-hosting-services" },
  { name: "UI / UX Design", icon: "✦", desc: "Modern user interfaces & smooth experience", path: "/services/uiux-design-company" },
];

const NAV_LINKS = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        megaRef.current && !megaRef.current.contains(e.target) &&
        servicesBtnRef.current && !servicesBtnRef.current.contains(e.target)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleServicesEnter = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const handleServicesLeave = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 150); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }

        .albos-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: 68px; display: flex; align-items: center; justify-content: space-between;
          padding: 0 5%; transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .albos-nav.scrolled {
          background: rgba(255,255,255,0.97); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(15,23,42,0.08); box-shadow: 0 4px 24px rgba(15,23,42,0.06);
        }
        .albos-nav:not(.scrolled) {
          background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
        }

        /* Desktop menu */
        .albos-desktop-menu { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
        .albos-nav-link {
          padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 500;
          color: #64748B; text-decoration: none; transition: all 0.2s; display: block;
        }
        .albos-nav-link:hover, .albos-nav-link.active { background: rgba(79,110,247,0.07); color: #0F172A; font-weight: 600; }
        .albos-services-btn {
          padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 500;
          color: #64748B; background: transparent; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 5px; transition: all 0.2s; font-family: inherit;
        }
        .albos-services-btn:hover, .albos-services-btn.open { background: rgba(79,110,247,0.07); color: #0F172A; }
        .albos-chevron { width: 14px; height: 14px; transition: transform 0.25s; opacity: 0.6; }
        .albos-chevron.open { transform: rotate(180deg); }

        .albos-cta {
          background: linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%);
          color: #fff; padding: 9px 20px; border-radius: 10px; font-size: 13.5px; font-weight: 700;
          text-decoration: none; display: flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 14px rgba(79,110,247,0.35); transition: all 0.2s; white-space: nowrap;
        }
        .albos-cta:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(79,110,247,0.45); }

        /* Dropdown — 2-column grid */
        .albos-dropdown {
          position: fixed; top: 68px; left: 50%; transform: translateX(-50%) translateY(-10px);
          width: min(700px, 92vw);
          background: #fff; border-radius: 16px;
          box-shadow: 0 20px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.06);
          padding: 20px 20px 16px;
          opacity: 0; pointer-events: none;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1); z-index: 999;
        }
        .albos-dropdown.open { opacity: 1; pointer-events: all; transform: translateX(-50%) translateY(0); }

        .albos-dropdown-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4px;
        }
        .albos-service-item {
          display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px;
          border-radius: 10px; text-decoration: none; transition: background 0.15s; cursor: pointer;
        }
        .albos-service-item:hover { background: #F8FAFC; }
        .albos-service-icon { font-size: 17px; line-height: 1; margin-top: 2px; flex-shrink: 0; }
        .albos-service-name { font-size: 13px; font-weight: 600; color: #0F172A; display: block; margin-bottom: 1px; }
        .albos-service-desc { font-size: 11.5px; color: #94A3B8; display: block; }

        .albos-dropdown-footer {
          margin-top: 14px; padding-top: 12px; border-top: 1px solid #F1F5F9;
          display: flex; align-items: center; justify-content: space-between;
        }
        .albos-dropdown-footer-tag { font-size: 12px; color: #94A3B8; font-style: italic; }
        .albos-dropdown-footer-link {
          font-size: 13px; font-weight: 600; color: #4F6EF7; text-decoration: none;
          display: flex; align-items: center; gap: 4px;
        }
        .albos-dropdown-footer-link:hover { text-decoration: underline; }

        /* Hamburger */
        .albos-hamburger {
          display: none; flex-direction: column; gap: 5px; background: none; border: none;
          cursor: pointer; padding: 8px; border-radius: 8px;
        }
        .albos-bar {
          width: 22px; height: 2px; background: #0F172A; border-radius: 2px;
          transition: all 0.3s; display: block;
        }
        .albos-bar.b0.open { transform: rotate(45deg) translate(5px, 5px); }
        .albos-bar.b1.open { opacity: 0; }
        .albos-bar.b2.open { transform: rotate(-45deg) translate(5px, -5px); }

        /* Mobile overlay */
        .albos-mobile-overlay {
          display: none; position: fixed; inset: 0; top: 68px;
          background: #fff; z-index: 998;
          flex-direction: column; overflow-y: auto;
          padding: 0 5% 32px;
        }
        .albos-mobile-overlay.open { display: flex; }

        .albos-mobile-section-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 16px 0; border: none; border-bottom: 1px solid #F1F5F9;
          background: none; font-size: 15px; font-weight: 600; color: #0F172A;
          cursor: pointer; font-family: inherit;
        }
        .albos-mobile-services-list { padding: 6px 0 4px; border-bottom: 1px solid #F1F5F9; }
        .albos-mobile-service-link {
          display: flex; align-items: center; gap: 10px; padding: 10px 4px;
          text-decoration: none; font-size: 14px; color: #475569; font-weight: 500;
          border-bottom: 1px solid #F8FAFC;
        }
        .albos-mobile-service-link:last-child { border-bottom: none; }
        .albos-mobile-service-link:hover { color: #0F172A; }
        .albos-mobile-nav-link {
          display: block; padding: 16px 0; font-size: 15px; font-weight: 500;
          color: #475569; text-decoration: none; border-bottom: 1px solid #F1F5F9;
        }
        .albos-mobile-nav-link:hover { color: #0F172A; }
        .albos-mobile-cta {
          margin-top: 20px; display: block; text-align: center;
          background: linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%);
          color: #fff; padding: 15px; border-radius: 12px; font-size: 15px; font-weight: 700;
          text-decoration: none; box-shadow: 0 4px 20px rgba(79,110,247,0.3);
        }

        @media (max-width: 768px) {
          .albos-desktop-menu { display: none; }
          .albos-hamburger { display: flex; }
          .albos-dropdown { display: none; }
        }
        @media (min-width: 769px) {
          .albos-mobile-overlay { display: none !important; }
        }
      `}</style>

      <nav className={`albos-nav${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Albos Technologies" style={{ height: "40px", width: "auto" }} />
        </Link>

        {/* Desktop Menu */}
        <ul className="albos-desktop-menu">
          <li style={{ position: "relative" }}>
            <button
              ref={servicesBtnRef}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
              onClick={() => setMegaOpen(!megaOpen)}
              className={`albos-services-btn${megaOpen ? " open" : ""}`}
            >
              Services
              <svg className={`albos-chevron${megaOpen ? " open" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </li>

          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => `albos-nav-link${isActive ? " active" : ""}`}>
                {label}
              </NavLink>
            </li>
          ))}

          <li>
            <Link to="/contact" className="albos-cta">
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="albos-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className={`albos-bar b${i}${mobileOpen ? " open" : ""}`} />
          ))}
        </button>
      </nav>

      {/* Desktop Dropdown */}
      <div
        ref={megaRef}
        className={`albos-dropdown${megaOpen ? " open" : ""}`}
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
      >
        <div className="albos-dropdown-grid">
          {SERVICES.map((s) => (
            <Link
              key={s.path}
              to={s.path}
              onClick={() => setMegaOpen(false)}
              className="albos-service-item"
            >
              <span className="albos-service-icon">{s.icon}</span>
              <span>
                <span className="albos-service-name">{s.name}</span>
                {/* <span className="albos-service-desc">{s.desc}</span> */}
              </span>
            </Link>
          ))}
        </div>
        <div className="albos-dropdown-footer">
          <span className="albos-dropdown-footer-tag">Need help choosing? <Link to="/contact" className="albos-dropdown-footer-link" onClick={() => setMegaOpen(false)}>Contact us</Link></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`albos-mobile-overlay${mobileOpen ? " open" : ""}`}>
        {/* Services accordion */}
        <button
          className="albos-mobile-section-btn"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        >
          <span>Services</span>
          <svg className={`albos-chevron${mobileServicesOpen ? " open" : ""}`} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {mobileServicesOpen && (
          <div className="albos-mobile-services-list">
            {SERVICES.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                onClick={() => setMobileOpen(false)}
                className="albos-mobile-service-link"
              >
                <span style={{ fontSize: "16px" }}>{s.icon}</span>
                <span>{s.name}</span>
              </Link>
            ))}
          </div>
        )}

        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMobileOpen(false)}
            className="albos-mobile-nav-link"
          >
            {label}
          </NavLink>
        ))}

        <Link to="/contact" onClick={() => setMobileOpen(false)} className="albos-mobile-cta">
          Get a Quote →
        </Link>
      </div>
    </>
  );
}