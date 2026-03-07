
// import React from "react";
// import { Link } from "react-router-dom";
// import STag from "./ui/STag";
// import Tag from "./ui/Tag";

// /**
//  * MAIN_SERVICES: each item now has a `path` property.
//  * Naming convention: /services/<kebab-case-name>
//  */
// const MAIN_SERVICES = [
//   {
//     n: "01 / FEATURED",
//     icon: "🌐",
//     title: "Web App Development",
//     desc: "React, Next.js, Node.js, Laravel, Django. Full-stack products from MVP to enterprise — SEO-ready, performance-optimised, security-hardened.",
//     tags: ["React / Next.js", "Node.js", "Laravel", "Django"],
//     path: "/services/website-development-services-company",
//   },
//   {
//     n: "02 / FEATURED",
//     icon: "📱",
//     title: "Mobile App Development",
//     desc: "Native Android (Kotlin) & iOS (Swift) + cross-platform Flutter. Beautiful UX, smooth performance, Play Store & App Store ready.",
//     tags: ["Flutter", "Kotlin", "Swift", "React Native"],
//     path: "/services/android-app-development-services",
//   },
//   {
//     n: "03 / FEATURED",
//     icon: "⛓️",
//     title: "Blockchain & Web3",
//     desc: "Smart contracts, DeFi platforms, custom wallets, DApps on Ethereum, Solana, and Polygon. Audit-ready architecture from day one.",
//     tags: ["Solidity", "Ethereum", "Solana", "DeFi"],
//     path: "/services/blockchain-development-company",
//   },

//   {
//     n: "04 / SERVICE",
//     icon: "🔗",
//     title: "API & Integrations",
//     desc: "Custom REST & GraphQL APIs, microservices, and backend automation pipelines.",
//     tags: ["REST APIs", "GraphQL", "Microservices"],
//     path: "/services/api-integrations",
//   },
//   {
//     n: "05 / SERVICE",
//     icon: "🔌",
//     title: "IoT & Embedded",
//     desc: "Firmware, sensors, wireless protocols, edge computing, and cloud-device pipelines.",
//     tags: ["IoT", "Embedded", "Edge Computing"],
//     path: "/services/iot-embedded-development",
//   },
//   {
//     n: "06 / SERVICE",
//     icon: "🎮",
//     title: "Game Development",
//     desc: "2D/3D, AR/VR, multiplayer games — Unity and Unreal Engine across all platforms.",
//     tags: ["Unity", "Unreal", "AR/VR"],
//     path: "/services/game-development",
//   },
//   {
//     n: "07 / SERVICE",
//     icon: "📈",
//     title: "Digital Marketing & SEO",
//     desc: "Meta Ads, Google Ads, LinkedIn B2B, technical SEO, and performance growth campaigns.",
//     tags: ["SEO", "Google Ads", "Meta Ads"],
//     path: "/services/digital-marketing-seo",
//   },
//   {
//     n: "08 / SERVICE",
//     icon: "🏢",
//     title: "ERP & CRM Systems",
//     desc: "Custom enterprise platforms, workflow automation, role-based dashboards.",
//     tags: ["ERP", "CRM", "Automation"],
//     path: "/services/erp-crm-development",
//   },
//   {
//     n: "09 / SERVICE",
//     icon: "☎️",
//     title: "Telecalling & Support",
//     desc: "24/7 multilingual inbound/outbound support — English, Hindi, Marathi, Gujarati.",
//     tags: ["Customer Support", "Inbound", "Outbound"],
//     path: "/services/telecalling-support",
//   },
// ];


// export default function Services() {
//   return (
//     <section id="services" className="py-24 px-[5%] bg-stone-50 relative z-10">
//       {/* Header */}

//       <div className="flex flex-col items-center text-center gap-6 mb-14 reveal">
//         <div>
//           <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
//             Core Services We're
//             <br />
//             <span className="text-slate-400 font-bold">Known For</span>
//           </h2>
//         </div>
//       </div>

//       {/* Main 3 */}
//       <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl overflow-hidden mb-5 reveal">
//         {MAIN_SERVICES.map((s, i) => (
//           <Link
//             key={s.title}
//             to={s.path}
//             className={`group block svc-top-hover bg-white p-8 transition-colors duration-200 hover:bg-slate-50
//         ${(i % 3 !== 2 ? "md:border-r " : "") + (i < MAIN_SERVICES.length - 3 ? "border-b " : "")}border-slate-200`}
//           >
//             <div className="text-[10px] font-bold text-slate-400 tracking-widest mb-5">
//               {s.n}
//             </div>

//             <div className="text-3xl mb-3">{s.icon}</div>

//             <h3 className="font-display font-bold text-slate-800 text-lg mb-2 tracking-tight">
//               {s.title}
//             </h3>

//             <p className="text-slate-500 text-sm leading-relaxed mb-4">
//               {s.desc}
//             </p>

//             <div className="flex flex-wrap gap-1.5">
//               {s.tags.map((t) => (
//                 <Tag key={t} variant="gold">
//                   {t}
//                 </Tag>
//               ))}
//             </div>

//             <div className="mt-4 text-sm text-blue-600 group-hover:underline">
//               Learn more →
//             </div>
//           </Link>
//         ))}
//       </div>
//         </section>
//   );
// }





// import React from "react";
// import { Link } from "react-router-dom";
// import STag from "./ui/STag";
// import Tag from "./ui/Tag";

// /**
//  * Services page with prefetch on hover/focus/touch.
//  *
//  * Each item has:
//  *  - path: router path (must match AppRoutes)
//  *  - preload: function that dynamically imports the page chunk
//  *
//  * NOTE: Ensure these import paths match the lazy imports in AppRoutes.
//  */

// const MAIN_SERVICES = [
//   {
//     n: "01 / FEATURED",
//     icon: "🌐",
//     title: "Web App Development",
//     desc:
//       "React, Next.js, Node.js, Laravel, Django. Full-stack products from MVP to enterprise — SEO-ready, performance-optimised, security-hardened.",
//     tags: ["React / Next.js", "Node.js", "Laravel", "Django"],
//     path: "/services/website-development-services-company",
//     preload: () => import("../components/services/WebDevelopement"),
//   },
//   {
//     n: "02 / FEATURED",
//     icon: "📱",
//     title: "Mobile App Development",
//     desc:
//       "Native Android (Kotlin) & iOS (Swift) + cross-platform Flutter. Beautiful UX, smooth performance, Play Store & App Store ready.",
//     tags: ["Flutter", "Kotlin", "Swift", "React Native"],
//     path: "/services/android-app-development-services",
//     preload: () => import("../components/services/AppDevelopement"),
//   },
//   {
//     n: "03 / FEATURED",
//     icon: "⛓️",
//     title: "Blockchain & Web3",
//     desc:
//       "Smart contracts, DeFi platforms, custom wallets, DApps on Ethereum, Solana, and Polygon. Audit-ready architecture from day one.",
//     tags: ["Solidity", "Ethereum", "Solana", "DeFi"],
//     path: "/services/blockchain-development-company",
//     preload: () => import("../components/services/BlockchainAndWeb3"),
//   },
//   {
//     n: "04 / SERVICE",
//     icon: "🔗",
//     title: "API & Integrations",
//     desc: "Custom REST & GraphQL APIs, microservices, and backend automation pipelines.",
//     tags: ["REST APIs", "GraphQL", "Microservices"],
//     path: "/services/api-integrations",
//     // route file name used in AppRoutes: ApiDevlopment
//     preload: () => import("../components/services/ApiDevlopment"),
//   },
//   {
//     n: "05 / SERVICE",
//     icon: "🔌",
//     title: "IoT & Embedded",
//     desc:
//       "Firmware, sensors, wireless protocols, edge computing, and cloud-device pipelines.",
//     tags: ["IoT", "Embedded", "Edge Computing"],
//     path: "/services/iot-embedded-development",
//     preload: () => import("../components/services/IotDevelopmentPage"),
//   },
//   {
//     n: "06 / SERVICE",
//     icon: "🎮",
//     title: "Game Development",
//     desc:
//       "2D/3D, AR/VR, multiplayer games — Unity and Unreal Engine across all platforms.",
//     tags: ["Unity", "Unreal", "AR/VR"],
//     path: "/services/game-development",
//     preload: () => import("../components/services/GameDevelopment"),
//   },
//   {
//     n: "07 / SERVICE",
//     icon: "📈",
//     title: "Digital Marketing & SEO",
//     desc:
//       "Meta Ads, Google Ads, LinkedIn B2B, technical SEO, and performance growth campaigns.",
//     tags: ["SEO", "Google Ads", "Meta Ads"],
//     path: "/services/digital-marketing-seo",
//     preload: () => import("../components/services/DigitalMarketing"),
//   },
//   {
//     n: "08 / SERVICE",
//     icon: "🏢",
//     title: "ERP & CRM Systems",
//     desc: "Custom enterprise platforms, workflow automation, role-based dashboards.",
//     tags: ["ERP", "CRM", "Automation"],
//     path: "/services/erp-crm-development",
//     preload: () => import("../components/services/ErpCrmSystem"),
//   },
//   {
//     n: "09 / SERVICE",
//     icon: "☎️",
//     title: "Telecalling & Support",
//     desc:
//       "24/7 multilingual inbound/outbound support — English, Hindi, Marathi, Gujarati.",
//     tags: ["Customer Support", "Inbound", "Outbound"],
//     path: "/services/telecalling-support",
//     preload: () => import("../components/services/TelecallingAndSupportServices"),
//   },
// ];

// export default function Services() {
//   // safe prefetch wrapper — ignore errors (network/dup imports)
//   const handlePrefetch = (preload) => () => {
//     if (typeof preload === "function") {
//       try {
//         preload().catch(() => {
//           /* ignore preload errors */
//         });
//       } catch (e) {
//         // ignore synchronous errors
//       }
//     }
//   };

//   return (
//     <section id="services" className="py-24 px-[5%] bg-stone-50 relative z-10">
//       {/* Header */}
//       <div className="flex flex-col items-center text-center gap-6 mb-14 reveal">
//         <div>
//           <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
//             Core Services We're
//             <br />
//             <span className="text-slate-400 font-bold">Known For</span>
//           </h2>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl overflow-hidden mb-5 reveal">
//         {MAIN_SERVICES.map((s, i) => {
//           const borders =
//             (i % 3 !== 2 ? "md:border-r " : "") +
//             (i < MAIN_SERVICES.length - 3 ? "border-b " : "");

//           return (
//             <Link
//               key={s.title}
//               to={s.path}
//               onMouseEnter={handlePrefetch(s.preload)}
//               onFocus={handlePrefetch(s.preload)} // keyboard users
//               onTouchStart={handlePrefetch(s.preload)} // mobile quick-tap prefetch
//               className={`group block svc-top-hover bg-white p-8 transition-colors duration-200 hover:bg-slate-50 ${borders} border-slate-200`}
//               aria-label={`Learn more about ${s.title}`}
//             >
//               <div className="text-[10px] font-bold text-slate-400 tracking-widest mb-5">
//                 {s.n}
//               </div>

//               <div className="text-3xl mb-3" aria-hidden>
//                 {s.icon}
//               </div>

//               <h3 className="font-display font-bold text-slate-800 text-lg mb-2 tracking-tight">
//                 {s.title}
//               </h3>

//               <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>

//               <div className="flex flex-wrap gap-1.5">
//                 {s.tags.map((t) => (
//                   <Tag key={t} variant="gold">
//                     {t}
//                   </Tag>
//                 ))}
//               </div>

//               <div className="mt-4 text-sm text-blue-600 group-hover:underline">
//                 Learn more →
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// }











import React from "react";
import { Link } from "react-router-dom";
import Tag from "./ui/Tag";

const MAIN_SERVICES = [
  {
    n: "01 / FEATURED",
    icon: "🌐",
    title: "Web App Development",
    desc: "React, Next.js, Node.js, Laravel, Django.",
    tags: ["React / Next.js", "Node.js", "Laravel", "Django"],
    path: "/services/website-development-services-company",
    preload: () => import("../components/services/WebDevelopement"),
  },
  {
    n: "02 / FEATURED",
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native Android (Kotlin) & iOS (Swift) + Flutter.",
    tags: ["Flutter", "Kotlin", "Swift", "React Native"],
    path: "/services/android-app-development-services",
    preload: () => import("../components/services/AppDevelopement"),
  },
  {
    n: "03 / FEATURED",
    icon: "⛓️",
    title: "Blockchain & Web3",
    desc: "Smart contracts, DeFi platforms, custom wallets.",
    tags: ["Solidity", "Ethereum", "Solana", "DeFi"],
    path: "/services/blockchain-development-company",
    preload: () => import("../components/services/BlockchainAndWeb3"),
  },
  {
    n: "04 / SERVICE",
    icon: "🔗",
    title: "API & Integrations",
    desc: "Custom REST & GraphQL APIs.",
    tags: ["REST APIs", "GraphQL", "Microservices"],
    path: "/services/api-development-services",
    preload: () => import("../components/services/ApiDevlopment"),
  },
  {
    n: "05 / SERVICE",
    icon: "🔌",
    title: "IoT & Embedded",
    desc: "Sensors, firmware and edge computing.",
    tags: ["IoT", "Embedded", "Edge"],
    path: "/services/iot-application-development-services",
    preload: () => import("../components/services/IotDevelopmentPage"),
  },
  {
    n: "06 / SERVICE",
    icon: "🎮",
    title: "Game Development",
    desc: "2D/3D, AR/VR, multiplayer games.",
    tags: ["Unity", "Unreal", "AR/VR"],
    path: "/services/mobile-game-development-company",
    preload: () => import("../components/services/GameDevelopment"),
  },
  {
    n: "07 / SERVICE",
    icon: "📈",
    title: "Digital Marketing & SEO",
    desc: "Google Ads, SEO, performance marketing.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
    path: "/services/digital-marketing-seo",
    preload: () => import("../components/services/DigitalMarketing"),
  },
  {
    n: "08 / SERVICE",
    icon: "🏢",
    title: "ERP & CRM Systems",
    desc: "Enterprise workflow automation platforms.",
    tags: ["ERP", "CRM", "Automation"],
    path: "/services/erp-crm",
    preload: () => import("../components/services/ErpCrmSystem"),
  },
  {
    n: "09 / SERVICE",
    icon: "☎️",
    title: "Telecalling & Support",
    desc: "24/7 inbound and outbound support.",
    tags: ["Customer Support", "Inbound", "Outbound"],
    path: "/services/telecalling-support",
    preload: () => import("../components/services/TelecallingAndSupportServices"),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-[5%] bg-stone-50">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="font-display font-black text-4xl md:text-5xl">
          Core Services We're
          <br />
          <span className="text-slate-400">Known For</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl overflow-hidden">

        {MAIN_SERVICES.map((s, i) => (
          <Link
            key={s.title}
            to={s.path}
            onMouseEnter={s.preload}
            className={`group block bg-white p-8 transition hover:bg-slate-50
            ${(i % 3 !== 2 ? "md:border-r " : "") +
            (i < MAIN_SERVICES.length - 3 ? "border-b " : "")}
            border-slate-200`}
          >

            <div className="text-[10px] font-bold text-slate-400 mb-4">
              {s.n}
            </div>

            <div className="text-3xl mb-3">{s.icon}</div>

            <h3 className="font-bold text-slate-800 text-lg mb-2">
              {s.title}
            </h3>

            <p className="text-slate-500 text-sm mb-4">
              {s.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <Tag key={tag} variant="gold">
                  {tag}
                </Tag>
              ))}
            </div>

            <div className="mt-4 text-blue-600 text-sm group-hover:underline">
              Learn more →
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}