// import STag from "./ui/STag";

// const MEMBERS = [
//   { emoji: "👨‍💼", bg: "from-blue-50 to-blue-100",     name: "Founder / CEO",      role: "Strategy & Partnerships" },
//   { emoji: "👨‍💻", bg: "from-emerald-50 to-teal-100",  name: "CTO / Lead Engineer", role: "Architecture & Engineering" },
//   { emoji: "👩‍🎨", bg: "from-amber-50 to-orange-100",  name: "Head of Design",      role: "UI/UX & Product Design" },
//   { emoji: "👩‍💼", bg: "from-purple-50 to-violet-100", name: "Head of Delivery",    role: "Project Management & QA" },
// ];

// export default function Team() {
//   return (
//     <section id="team" className="py-24 px-[5%] bg-white relative z-10">
//       {/* Header */}
//       <div className="flex justify-between items-end flex-wrap gap-6 mb-14 reveal">
//         <div>
//           <STag color="purple">The Team</STag>
//           <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
//             Real People.<br />
//             <span className="text-slate-400 font-bold">Real Accountability.</span>
//           </h2>
//         </div>
//         <p className="text-slate-500 max-w-[380px] text-sm leading-relaxed">
//           Replace with your actual team photos and LinkedIn links. Faces build trust — never skip this section.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-5 reveal">
//         {MEMBERS.map((m) => (
//           <div key={m.name} className="group text-center">
//             <div
//               className={`aspect-square rounded-2xl mb-4 bg-gradient-to-br ${m.bg} border border-slate-200
//                 group-hover:border-slate-300 group-hover:-translate-y-1 transition-all duration-200
//                 flex items-center justify-center text-5xl`}
//             >
//               {m.emoji}
//             </div>
//             <div className="font-display font-bold text-slate-800 text-sm">{m.name}</div>
//             <div className="text-xs text-slate-400 mb-2">{m.role}</div>
//             <a
//               href="#"
//               className="inline-flex items-center gap-1 text-blue-700 text-xs font-semibold hover:underline"
//             >
//               🔗 LinkedIn →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }