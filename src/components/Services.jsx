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
//     desc:
//       "React, Next.js, Node.js, Laravel, Django. Full-stack products from MVP to enterprise — SEO-ready, performance-optimised, security-hardened.",
//     tags: ["React / Next.js", "Node.js", "Laravel", "Django"],
//     path: "/services/website-development-services-company",
//   },
//   {
//     n: "02 / FEATURED",
//     icon: "📱",
//     title: "Mobile App Development",
//     desc:
//       "Native Android (Kotlin) & iOS (Swift) + cross-platform Flutter. Beautiful UX, smooth performance, Play Store & App Store ready.",
//     tags: ["Flutter", "Kotlin", "Swift", "React Native"],
//     path: "/services/android-app-development-services",
//   },
//   {
//     n: "03 / FEATURED",
//     icon: "⛓️",
//     title: "Blockchain & Web3",
//     desc:
//       "Smart contracts, DeFi platforms, custom wallets, DApps on Ethereum, Solana, and Polygon. Audit-ready architecture from day one.",
//     tags: ["Solidity", "Ethereum", "Solana", "DeFi"],
//     path: "/services/blockchain-development-company",
//   },
// ];

// const ALSO_SERVICES = [
//   {
//     icon: "🔗",
//     title: "API & Integrations",
//     desc: "Custom REST & GraphQL APIs, microservices, and backend automation pipelines.",
//     path: "/services/api-development-services",
//   },
//   {
//     icon: "🔌",
//     title: "IoT & Embedded",
//     desc: "Firmware, sensors, wireless protocols, edge computing, and cloud-device pipelines.",
//     path: "/services/iot-application-development-services",
//   },
//   {
//     icon: "🎮",
//     title: "Game Development",
//     desc: "2D/3D, AR/VR, multiplayer games — Unity and Unreal Engine across all platforms.",
//     path: "/services/mobile-game-development-company",
//   },
//   {
//     icon: "📈",
//     title: "Digital Marketing & SEO",
//     desc: "Meta Ads, Google Ads, LinkedIn B2B, technical SEO, and performance growth campaigns.",
//     path: "/services/digital-marketing-seo",
//   },
//   {
//     icon: "🏢",
//     title: "ERP & CRM Systems",
//     desc: "Custom enterprise platforms, workflow automation, role-based dashboards.",
//     path: "/services/erp-crm",
//   },
//   {
//     icon: "☎️",
//     title: "Telecalling & Support",
//     desc: "24/7 multilingual inbound/outbound support — English, Hindi, Marathi, Gujarati.",
//     path: "/services/telecalling-support",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-24 px-[5%] bg-stone-50 relative z-10">
//       {/* Header */}
//       <div className="flex justify-between items-end flex-wrap gap-6 mb-14 reveal">
//         <div>
//           <STag color="gold">What We Build</STag>
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
//               ${i < 2 ? "md:border-r border-b md:border-b-0 border-slate-200" : ""}`}
//           >
//             <div className="text-[10px] font-bold text-slate-400 tracking-widest mb-5">{s.n}</div>
//             <div className="text-3xl mb-3">{s.icon}</div>
//             <h3 className="font-display font-bold text-slate-800 text-lg mb-2 tracking-tight">{s.title}</h3>
//             <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
//             <div className="flex flex-wrap gap-1.5">
//               {s.tags.map((t) => (
//                 <Tag key={t} variant="gold">
//                   {t}
//                 </Tag>
//               ))}
//             </div>
//             <div className="mt-4 text-sm text-blue-600 group-hover:underline">Learn more →</div>
//           </Link>
//         ))}
//       </div>

//       {/* Also available */}
//       <div className="text-center mb-4">
//         <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">— Also Available —</span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 reveal">
//         {ALSO_SERVICES.map((s) => (
//           <Link
//             key={s.title}
//             to={s.path}
//             className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200"
//           >
//             <div className="text-2xl mb-3">{s.icon}</div>
//             <h3 className="font-display font-bold text-slate-800 text-base mb-1.5 tracking-tight">{s.title}</h3>
//             <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
//             <div className="mt-4 text-sm text-blue-600 group-hover:underline">Explore →</div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";
import STag from "./ui/STag";
import Tag from "./ui/Tag";

/**
 * MAIN_SERVICES: each item now has a `path` property.
 * Naming convention: /services/<kebab-case-name>
 */
const MAIN_SERVICES = [
  {
    n: "01 / FEATURED",
    icon: "🌐",
    title: "Web App Development",
    desc: "React, Next.js, Node.js, Laravel, Django. Full-stack products from MVP to enterprise — SEO-ready, performance-optimised, security-hardened.",
    tags: ["React / Next.js", "Node.js", "Laravel", "Django"],
    path: "/services/website-development-services-company",
  },
  {
    n: "02 / FEATURED",
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native Android (Kotlin) & iOS (Swift) + cross-platform Flutter. Beautiful UX, smooth performance, Play Store & App Store ready.",
    tags: ["Flutter", "Kotlin", "Swift", "React Native"],
    path: "/services/android-app-development-services",
  },
  {
    n: "03 / FEATURED",
    icon: "⛓️",
    title: "Blockchain & Web3",
    desc: "Smart contracts, DeFi platforms, custom wallets, DApps on Ethereum, Solana, and Polygon. Audit-ready architecture from day one.",
    tags: ["Solidity", "Ethereum", "Solana", "DeFi"],
    path: "/services/blockchain-development-company",
  },

  {
    n: "04 / SERVICE",
    icon: "🔗",
    title: "API & Integrations",
    desc: "Custom REST & GraphQL APIs, microservices, and backend automation pipelines.",
    tags: ["REST APIs", "GraphQL", "Microservices"],
    path: "/services/api-integrations",
  },
  {
    n: "05 / SERVICE",
    icon: "🔌",
    title: "IoT & Embedded",
    desc: "Firmware, sensors, wireless protocols, edge computing, and cloud-device pipelines.",
    tags: ["IoT", "Embedded", "Edge Computing"],
    path: "/services/iot-embedded-development",
  },
  {
    n: "06 / SERVICE",
    icon: "🎮",
    title: "Game Development",
    desc: "2D/3D, AR/VR, multiplayer games — Unity and Unreal Engine across all platforms.",
    tags: ["Unity", "Unreal", "AR/VR"],
    path: "/services/game-development",
  },
  {
    n: "07 / SERVICE",
    icon: "📈",
    title: "Digital Marketing & SEO",
    desc: "Meta Ads, Google Ads, LinkedIn B2B, technical SEO, and performance growth campaigns.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
    path: "/services/digital-marketing-seo",
  },
  {
    n: "08 / SERVICE",
    icon: "🏢",
    title: "ERP & CRM Systems",
    desc: "Custom enterprise platforms, workflow automation, role-based dashboards.",
    tags: ["ERP", "CRM", "Automation"],
    path: "/services/erp-crm-development",
  },
  {
    n: "09 / SERVICE",
    icon: "☎️",
    title: "Telecalling & Support",
    desc: "24/7 multilingual inbound/outbound support — English, Hindi, Marathi, Gujarati.",
    tags: ["Customer Support", "Inbound", "Outbound"],
    path: "/services/telecalling-support",
  },
];

const ALSO_SERVICES = [
  {
    icon: "🔗",
    title: "API & Integrations",
    desc: "Custom REST & GraphQL APIs, microservices, and backend automation pipelines.",
    path: "/services/api-development-services",
  },
  {
    icon: "🔌",
    title: "IoT & Embedded",
    desc: "Firmware, sensors, wireless protocols, edge computing, and cloud-device pipelines.",
    path: "/services/iot-application-development-services",
  },
  {
    icon: "🎮",
    title: "Game Development",
    desc: "2D/3D, AR/VR, multiplayer games — Unity and Unreal Engine across all platforms.",
    path: "/services/mobile-game-development-company",
  },
  {
    icon: "📈",
    title: "Digital Marketing & SEO",
    desc: "Meta Ads, Google Ads, LinkedIn B2B, technical SEO, and performance growth campaigns.",
    path: "/services/digital-marketing-seo",
  },
  {
    icon: "🏢",
    title: "ERP & CRM Systems",
    desc: "Custom enterprise platforms, workflow automation, role-based dashboards.",
    path: "/services/erp-crm",
  },
  {
    icon: "☎️",
    title: "Telecalling & Support",
    desc: "24/7 multilingual inbound/outbound support — English, Hindi, Marathi, Gujarati.",
    path: "/services/telecalling-support",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-[5%] bg-stone-50 relative z-10">
      {/* Header */}

      <div className="flex flex-col items-center text-center gap-6 mb-14 reveal">
        <div>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
            Core Services We're
            <br />
            <span className="text-slate-400 font-bold">Known For</span>
          </h2>
        </div>
      </div>

      {/* Main 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl overflow-hidden mb-5 reveal">
        {MAIN_SERVICES.map((s, i) => (
          <Link
            key={s.title}
            to={s.path}
            className={`group block svc-top-hover bg-white p-8 transition-colors duration-200 hover:bg-slate-50
        ${(i % 3 !== 2 ? "md:border-r " : "") + (i < MAIN_SERVICES.length - 3 ? "border-b " : "")}border-slate-200`}
          >
            <div className="text-[10px] font-bold text-slate-400 tracking-widest mb-5">
              {s.n}
            </div>

            <div className="text-3xl mb-3">{s.icon}</div>

            <h3 className="font-display font-bold text-slate-800 text-lg mb-2 tracking-tight">
              {s.title}
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {s.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <Tag key={t} variant="gold">
                  {t}
                </Tag>
              ))}
            </div>

            <div className="mt-4 text-sm text-blue-600 group-hover:underline">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
        </section>
  );
}
