// // import React from "react";

// // // GameDevelopment.jsx
// // // A React + Tailwind component converted from the provided HTML.
// // // - Replace image paths (logo, gifs, wallpapers) with your local imports or public URLs as needed.
// // // - This file uses arrays + map() to keep the JSX concise while preserving design and Tailwind classes.

// // const logo = "/albos-technologies-logo.png"; // update path if you store assets locally
// // const heroImage = "/mobile-game-development-company-service.gif";

// // const features = [
// //   {
// //     title: "Expert Game Designers",
// //     desc: "We craft immersive game worlds, characters, mechanics, and addictive gameplay loops.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png",
// //   },
// //   {
// //     title: "Unity & Unreal Specialists",
// //     desc: "AAA-quality 3D rendering, simulations, physics, VFX & optimized performance.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
// //   },
// //   {
// //     title: "Multiplayer & Cloud Gaming",
// //     desc: "Photon, Mirror, GameLift & scalable matchmaking systems.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
// //   },
// //   {
// //     title: "Cross-Platform Deployment",
// //     desc: "Android, iOS, PC, Mac, WebGL, VR/AR & console support.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/3028/3028313.png",
// //   },
// //   {
// //     title: "3D Modeling & Animation",
// //     desc: "Characters, environments, cinematic animations & rigging.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/1998/1998670.png",
// //   },
// //   {
// //     title: "RMG Security & Compliance",
// //     desc: "Wallet systems, RNG security, anti-cheat & safe transactions.",
// //     icon: "https://cdn-icons-png.flaticon.com/512/565/565547.png",
// //   },
// // ];

// // const categories = [
// //   {
// //     title: "Unity & Unreal Engine Games",
// //     desc: "AAA-quality 3D experiences, high-performance physics, VFX, simulations & cross-platform gameplay.",
// //     image: "/game-soldier-wallpaper.jpg",
// //     badge: "Unity / Unreal",
// //     icon: "https://cdn-icons-png.flaticon.com/512/5969/5969029.png",
// //   },
// //   {
// //     title: "Real Games (Teen Patti, Rummy, Ludo)",
// //     desc: "Fully secure RMG platforms with wallets, RNG engines, private tables & multiplayer rooms.",
// //     image: "/real-money-game-development.jpg",
// //     badge: "RMG",
// //     icon: "https://cdn-icons-png.flaticon.com/512/3657/3657505.png",
// //   },
// //   {
// //     title: "Multiplayer Online Games",
// //     desc: "Real-time battles, ranking systems, tournaments, matchmaking & voice chat.",
// //     image: "/multiplayer-game-development.jpg",
// //     badge: "Multiplayer",
// //     icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
// //   },
// //   // add more categories as needed
// // ];

// // const processSteps = [
// //   { step: "01", title: "Game Concept & Documentation", desc: "Gameplay mechanics, rules, characters, environments, monetization, and feature planning." },
// //   { step: "02", title: "UI/UX + Art & Asset Creation", desc: "2D/3D assets, environments, animations, UI screens and design systems." },
// //   { step: "03", title: "Gameplay Mechanics", desc: "Movement, physics, combat, scoring, AI, power-ups, and real-time systems." },
// //   { step: "04", title: "Development (Unity / Unreal)", desc: "Core development, multiplayer systems, backend integration, wallet systems & APIs." },
// //   { step: "05", title: "QA & Optimization", desc: "Performance testing, device optimization, bug fixes, latency reduction." },
// //   { step: "06", title: "Monetization Setup", desc: "Ads, in-app purchases, subscriptions, coins/chips systems, RMG payouts." },
// //   { step: "07", title: "Publishing & LiveOps", desc: "App store deployment, continuous updates, analytics, A/B testing & support." },
// // ];

// // const techStack = [
// //   { name: "Unity Engine", desc: "Cross-platform 2D/3D game engine.", icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png" },
// //   { name: "Unreal Engine", desc: "AAA visuals & cinematic graphics.", icon: "https://cdn-icons-png.flaticon.com/512/5969/5969029.png" },
// //   { name: "Blender / Maya", desc: "Modeling, rigging & animation.", icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
// //   { name: "Photon Engine", desc: "Real-time multiplayer & rooms.", icon: "https://cdn-icons-png.flaticon.com/128/4230/4230863.png" },
// //   { name: "AWS GameLift", desc: "Dedicated game servers & matchmaking.", icon: "https://icon.icepanel.io/AWS/svg/Games/GameLift.svg" },
// //   { name: "Node.js / Go / Python", desc: "Backends, APIs & live ops.", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
// //   { name: "Redis / MongoDB", desc: "Real-time state, leaderboards & caching.", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
// //   { name: "Wallet & Payment Systems", desc: "Secure RMG transactions & payouts.", icon: "https://cdn-icons-png.flaticon.com/512/565/565547.png" },
// // ];

// // const portfolio = [
// //   { title: "Fantasy 3D RPG", image: "https://img.freepik.com/free-photo/fantasy-game-landscape_23-2149995570.jpg", badge: "Unity 3D" },
// //   { title: "Casino Slot Machine", image: "https://img.freepik.com/premium-photo/modern-casino-slot-interface_1020493-296388.jpg", badge: "RMG / Casino" },
// //   { title: "Hyper Casual Shooter", image: "https://img.freepik.com/free-photo/cartoon-style-space-shooter-game_23-2151624218.jpg", badge: "Hyper Casual" },
// //   { title: "VR Adventure Game", image: "https://img.freepik.com/free-photo/virtual-reality-game-scene_23-2150712333.jpg", badge: "VR / Unreal" },
// // ];

// // export default function GameDevelopment() {
// //   return (
// //     <div className="min-h-screen bg-white text-slate-900">
// //       {/* Header */}


// //       {/* Hero */}
// //       <section className="relative w-full pt-20 pb-16 overflow-hidden">
// //         <div className="absolute inset-0 -z-10">
// //           <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(150,150,255,0.06)_0%,transparent_60%)] pointer-events-none" />
// //         </div>
// //         <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
// //           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
// //             <div className="flex-1 text-center md:text-left">
// //               <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-semibold mb-4">Professional game development Services</h1>
// //               <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-slate-700">We provide full-stack game development services, including design, development, multiplayer, backend, art, and cloud gaming solutions.</p>

// //               <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
// //                 <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-medium">Get a Free Quote</a>
// //                 <a href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-neutral-900 text-white font-medium">View Our Work</a>
// //               </div>
// //             </div>

// //             <div className="flex-1 flex justify-center max-w-[520px]">
// //               <img src={heroImage} alt="Game Development Services" className="object-contain drop-shadow-2xl scale-95 sm:scale-100" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose */}
// //       <section className="w-full py-24 bg-white">
// //         <div className="max-w-screen-2xl mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-2xl md:text-3xl font-extrabold">Why Choose Our Game Studio?</h2>
// //             <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">A full-stack gaming studio delivering world-class game design, development, multiplayer, backend, art production, RMG solutions, and cloud gaming infrastructure.</p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// //             {features.map((f, idx) => (
// //               <div key={idx} className="flex flex-col gap-6 p-8 rounded-md border border-blue-100 shadow-sm hover:shadow-lg transition-all">
// //                 <div className="flex flex-col items-center text-center">
// //                   <div className="p-4 rounded-sm bg-blue-50 mb-4">
// //                     <img src={f.icon} alt={f.title} width={40} height={40} className="object-contain" />
// //                   </div>
// //                   <div className="text-xl font-semibold">{f.title}</div>
// //                 </div>
// //                 <p className="text-slate-600 text-md text-center mt-3">{f.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Categories */}
// //       <section className="w-full py-24 bg-gradient-to-b from-blue-50 to-indigo-50">
// //         <div className="max-w-screen-2xl mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-extrabold">Game Development Categories</h2>
// //             <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">From hyper-casual games to AAA titles — we craft high-performance games optimized for stunning visuals, rich gameplay, and cross-platform compatibility.</p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
// //             {categories.map((c, i) => (
// //               <div key={i} className="bg-white rounded-md overflow-hidden shadow-lg border border-blue-100 transition-all">
// //                 <div className="relative h-56 w-full overflow-hidden">
// //                   <img src={c.image} alt={c.title} className="object-cover w-full h-full" />
// //                 </div>
// //                 <div className="p-7">
// //                   <div className="flex items-center gap-4 mb-4">
// //                     <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
// //                       <img src={c.icon} alt={c.title} width={38} height={38} />
// //                     </div>
// //                     <h3 className="text-md font-bold">{c.title}</h3>
// //                   </div>
// //                   <p className="text-md text-slate-700">{c.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process */}
// //       <section className="py-24 bg-white">
// //         <div className="max-w-screen-2xl mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-2xl md:text-3xl font-extrabold">Our Game Development Process</h2>
// //             <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">A professional, structured development cycle designed for high-performance games with premium visuals, smooth mechanics, and scalable multiplayer systems.</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
// //             {processSteps.map((p, idx) => (
// //               <div key={idx} className="p-8 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-lg transition-all">
// //                 <div className="flex items-center gap-4 mb-4">
// //                   <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-100 text-2xl font-extrabold text-blue-700 border border-blue-300">{p.step}</div>
// //                   <h3 className="text-xl font-bold">{p.title}</h3>
// //                 </div>
// //                 <p className="pt-4 text-md text-slate-600">{p.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Tech Stack */}
// //       <section className="py-24 bg-gradient-to-b from-indigo-50 to-blue-50">
// //         <div className="max-w-screen-2xl mx-auto px-6 text-center">
// //           <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Technology Stack</h2>
// //           <p className="text-lg md:text-xl text-slate-600 mb-20 max-w-3xl mx-auto">We build high-performance games using industry-leading engines, 3D tools, multiplayer frameworks, backend servers, and modern infrastructure.</p>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
// //             {techStack.map((t, i) => (
// //               <div key={i} className="p-8 rounded-xl bg-white border border-blue-100 shadow-sm text-center">
// //                 <div className="p-5 rounded-2xl bg-blue-50 inline-block">
// //                   <img src={t.icon} alt={t.name} width={60} height={60} />
// //                 </div>
// //                 <h3 className="text-xl font-semibold mt-5">{t.name}</h3>
// //                 <p className="text-slate-600 text-sm mt-3">{t.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Portfolio */}
// //       <section className="py-24 bg-white">
// //         <div className="max-w-screen-2xl mx-auto px-6 text-center">
// //           <h2 className="text-2xl md:text-3xl font-bold">Our Game Portfolio</h2>
// //           <p className="text-lg text-slate-600 mt-3 mb-16 max-w-3xl mx-auto">A showcase of our work across multiple genres — from hyper casual games to VR, casino, metaverse & AAA-style experiences.</p>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
// //             {portfolio.map((p, i) => (
// //               <div key={i} className="rounded-md overflow-hidden shadow-lg border border-gray-100">
// //                 <div className="relative h-48 w-full">
// //                   <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
// //                 </div>
// //                 <div className="p-5">
// //                   <h3 className="text-xl font-semibold">{p.title}</h3>
// //                   <span className="inline-flex mt-3 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs">{p.badge}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="relative w-full py-16 bg-gradient-to-br from-sky-100 to-indigo-100">
// //         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
// //           <p className="text-neutral-700 mt-3 sm:mt-4">Speak with our experts today. We help brands scale with powerful development, design, automation, and cloud solutions.</p>

// //           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
// //             <a href="/contact" className="px-6 py-4 rounded-xl bg-blue-600 text-white font-semibold">Get a Free Quote</a>
// //             <a href="tel:+919766650411" className="px-6 py-4 rounded-xl bg-green-600 text-white font-semibold">Call Sales</a>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
// //             <div className="p-6 rounded-2xl bg-white border shadow-sm text-center">
// //               <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-blue-700">📞</div>
// //               <h3 className="text-lg font-semibold mt-4">Phone Number</h3>
// //               <p className="text-sm mt-2">+91 97666 50411</p>
// //             </div>
// //             <div className="p-6 rounded-2xl bg-white border shadow-sm text-center">
// //               <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-blue-700">✉️</div>
// //               <h3 className="text-lg font-semibold mt-4">Email Address</h3>
// //               <p className="text-sm mt-2">info@albostechnologies.com</p>
// //             </div>
// //             <div className="p-6 rounded-2xl bg-white border shadow-sm text-center">
// //               <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-blue-700">📍</div>
// //               <h3 className="text-lg font-semibold mt-4">Office Location</h3>
// //               <p className="text-sm mt-2">Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019</p>
// //             </div>
// //             <div className="p-6 rounded-2xl bg-white border shadow-sm text-center">
// //               <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-blue-700">⏰</div>
// //               <h3 className="text-lg font-semibold mt-4">Office Hours</h3>
// //               <p className="text-sm mt-2">Mon – Sat, 10:00 AM – 7:00 PM</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

   
// //     </div>
// //   );
// // }

















// import React from "react";
// import { motion } from "framer-motion";

// // GameDevelopment.enhanced.jsx
// // Enhanced UI + animations for the original component.
// // - Uses Framer Motion for entrance/hover animations
// // - Uses live Unsplash images for cards (replace with your own or local assets if needed)
// // - Tailwind classes for clean responsive layout and subtle glassmorphism
// // - Default export is the React component

// const logo = "/albos-technologies-logo.png"; // replace with your local asset if needed
// const heroImage = "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=1200&q=60";

// const features = [
//   {
//     title: "Expert Game Designers",
//     desc: "We craft immersive game worlds, characters, mechanics, and addictive loops.",
//     icon: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png",
//   },
//   {
//     title: "Unity & Unreal Specialists",
//     desc: "AAA-quality 3D rendering, simulations, VFX & optimized performance.",
//     icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
//   },
//   {
//     title: "Multiplayer & Cloud Gaming",
//     desc: "Photon, Mirror, GameLift & scalable matchmaking systems.",
//     icon: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
//   },
//   {
//     title: "Cross-Platform Deployment",
//     desc: "Android, iOS, PC, Mac, WebGL, VR/AR & console support.",
//     icon: "https://cdn-icons-png.flaticon.com/512/3028/3028313.png",
//   },
// ];

// const categories = [
//   {
//     title: "Unity & Unreal Engine",
//     desc: "AAA-quality 3D experiences, high performance & cinematic visuals.",
//     image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=60",
//     badge: "Unity / Unreal",
//   },
//   {
//     title: "Real Money Games",
//     desc: "RNG, wallet integration, private rooms & secure payouts.",
//     image: "https://images.unsplash.com/photo-1613714502401-8bcf3f1a1b6a?auto=format&fit=crop&w=1200&q=60",
//     badge: "RMG",
//   },
//   {
//     title: "Multiplayer Online",
//     desc: "Real-time battles, ranking systems, tournaments & voice chat.",
//     image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=60",
//     badge: "Multiplayer",
//   },
// ];

// const portfolio = [
//   { title: "Fantasy 3D RPG", image: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1200&q=60", badge: "Unity 3D" },
//   { title: "Casino Slots UX", image: "https://images.unsplash.com/photo-1526378723359-0b7a01a5a9f6?auto=format&fit=crop&w=1200&q=60", badge: "RMG" },
//   { title: "Hyper Casual Shooter", image: "https://images.unsplash.com/photo-1526318472351-c75fcf070ee2?auto=format&fit=crop&w=1200&q=60", badge: "Hyper Casual" },
//   { title: "VR Adventure", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=60", badge: "VR / Unreal" },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 14 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// };

// export default function GameDevelopmentEnhanced() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-900 antialiased">
//       {/* Hero */}
//       <section className="relative w-full pt-20 pb-16 overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.06)_0%,transparent_30%),radial-gradient(circle_at_90%_80%,rgba(14,165,233,0.04)_0%,transparent_35%)] pointer-events-none" />
//         </div>

//         <div className="relative z-10 max-w-screen-2xl mx-auto px-6">
//           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
//             <motion.div className="flex-1 text-center md:text-left"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <img src={logo} alt="logo" className="w-12 h-12 object-contain rounded-md shadow-sm bg-white/60 p-1" />
//                 <span className="text-sm font-medium text-slate-500">Albos Technologies</span>
//               </div>

//               <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-extrabold leading-tight mb-4">Studio-grade game development for every platform</h1>
//               <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-slate-600">We deliver design, development, multiplayer systems, backend infra and LiveOps — from hyper-casual prototypes to AAA titles.</p>

//               <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
//                 <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transform transition">Get a Free Quote</a>
//                 <a href="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-slate-200 bg-white text-slate-800 font-medium shadow-sm hover:shadow-md transition">View Portfolio</a>
//               </div>
//             </motion.div>

//             <motion.div className="flex-1 flex justify-center max-w-[560px]"
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.12, duration: 0.6 }}
//             >
//               <motion.div whileHover={{ scale: 1.02 }} className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-gradient-to-br from-white/30 to-white/10">
//                 <img src={heroImage} alt="Game hero" className="object-cover w-full h-64 md:h-72 lg:h-80" loading="lazy" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="w-full py-20">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-extrabold">Why partner with our studio?</h2>
//             <p className="text-slate-600 mt-3 max-w-2xl mx-auto">End-to-end game production, live services, compliance and monetization strategy — built for scale.</p>
//           </div>

//           <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((f, i) => (
//               <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all flex flex-col items-start gap-3">
//                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100">
//                   <img src={f.icon} alt="icon" className="w-9 h-9 object-contain" />
//                 </div>
//                 <h3 className="text-lg font-semibold">{f.title}</h3>
//                 <p className="text-sm text-slate-600">{f.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Categories (cards use "live" images) */}
//       <section className="w-full py-20 bg-gradient-to-b from-sky-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold">Game Development Categories</h2>
//             <p className="text-slate-600 mt-3 max-w-3xl mx-auto">From prototypes to live ops — pick the category that fits your product vision.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((c, i) => (
//               <motion.article key={i} whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }} className="relative rounded-2xl overflow-hidden border bg-white shadow">
//                 <div className="relative h-56 w-full bg-slate-200">
//                   <img src={c.image} alt={c.title} className="object-cover w-full h-full" loading="lazy" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center justify-between gap-3 mb-3">
//                     <div>
//                       <h3 className="text-lg font-semibold">{c.title}</h3>
//                       <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
//                     </div>
//                     <div className="inline-flex items-center gap-2">
//                       <span className="inline-flex px-3 py-1 rounded-full bg-indigo-600 text-white text-xs">{c.badge}</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center gap-3">
//                     <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm shadow hover:scale-[1.02] transition transform" href="/contact">Start a Project</a>
//                     <a className="text-sm text-indigo-600 underline" href="/portfolio">Explore Similar</a>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 bg-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-extrabold">Our process — fast, iterative & measurable</h2>
//             <p className="text-slate-600 mt-3 max-w-2xl mx-auto">We ship prototypes quickly, power test with real users and iterate using analytics and A/B tests.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { step: "01", title: "Concept & Docs", desc: "Design pillars, user flows, monetization & tech choices." },
//               { step: "02", title: "Prototyping", desc: "Playable prototype, rapid testing & validation." },
//               { step: "03", title: "LiveOps & Scale", desc: "Server infra, analytics, A/B tests & continuous delivery." },
//             ].map((p) => (
//               <motion.div key={p.step} variants={fadeUp} className="p-6 rounded-xl bg-gradient-to-br from-white to-sky-50 border border-slate-100 shadow-sm">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">{p.step}</div>
//                   <div>
//                     <h4 className="font-semibold">{p.title}</h4>
//                     <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio (live images + hover reveal) */}
//       <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-3xl font-extrabold">Selected portfolio</h2>
//           <p className="text-slate-600 mt-3 max-w-3xl mx-auto">A snapshot of recent products and prototypes.</p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//             {portfolio.map((p, i) => (
//               <motion.figure key={i} whileHover={{ scale: 1.03 }} className="relative rounded-xl overflow-hidden shadow-lg border bg-white">
//                 <img src={p.image} alt={p.title} className="object-cover w-full h-44" loading="lazy" />
//                 <figcaption className="p-4 text-left">
//                   <div className="flex items-center justify-between">
//                     <h3 className="font-semibold">{p.title}</h3>
//                     <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">{p.badge}</span>
//                   </div>
//                   <div className="mt-3 flex items-center gap-3">
//                     <a href="/portfolio" className="text-sm text-indigo-600 hover:underline">View Case</a>
//                     <a href="/contact" className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs">Start Conversation</a>
//                   </div>
//                 </figcaption>
//               </motion.figure>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative w-full py-16 bg-gradient-to-br from-indigo-50 to-sky-50">
//         <div className="max-w-screen-2xl mx-auto px-6 text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to launch your game?</h2>
//           <p className="text-neutral-700 mt-3 sm:mt-4">We handle development, live ops and monetization — tell us your goals and we'll build a roadmap.</p>

//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow">Get a Quote</a>
//             <a href="tel:+919766650411" className="px-6 py-3 rounded-xl border border-indigo-100 bg-white text-indigo-700 font-semibold">Call Sales</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





















































import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// GameDevelopment.enhanced.jsx
// Rewritten with reliable Unsplash images, related visuals, and richer card animations:
// - Tilt effect on cards using framer-motion motion values
// - Stronger hover/press animations and staggered entrance
// - Accessible, lazy-loaded images and semantic markup
// - Replace logo path with your local asset if available

const logo = "/albos-technologies-logo.png"; // replace with local path if needed

// const heroImage = "https://images.unsplash.com/photo-1581276879432-15a69f75d7e8?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b5a9b3f8ef4b2d3f4f6c6c232f6c8b3"; // game development abstract
const heroImage = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80";
const features = [
  {
    title: "Expert Game Designers",
    desc: "Immersive worlds, characters and loop design to retain players.",
    icon: "https://cdn-icons-png.flaticon.com/512/4208/4208394.png",
  },
  {
    title: "Unity & Unreal Specialists",
    desc: "Performance, VFX and cinematic visuals for every platform.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
  },
  {
    title: "Multiplayer & Cloud Gaming",
    desc: "Scalable matchmaking, state sync and low-latency gameplay.",
    icon: "https://cdn-icons-png.flaticon.com/512/7374/7374304.png",
  },
  {
    title: "3D Art & Animation",
    desc: "Characters, rigs, cutscenes and optimized LOD assets.",
    icon: "https://cdn-icons-png.flaticon.com/512/1998/1998670.png",
  },
];

const categories = [
  {
    title: "AAA / Cinematic Games",
    desc: "High-fidelity visuals, cinematic narratives and large worlds.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1400&q=80",
    badge: "AAA",
  },
  {
    title: "Hyper Casual & Mobile",
    desc: "Fast prototyping, UA-ready features and P0 retention focus.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    badge: "Mobile",
  },
  {
    title: "RMG & Casino",
    desc: "Secure RNG, wallet integrations, and payout systems.",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop", 
    badge: "RMG",
  }
];

const portfolio = [
  { 
    title: "Fantasy 3D RPG", 
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop", 
    badge: "Unity" 
  },
  { 
    title: "Casino UX Revamp", 
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop", 
    badge: "RMG" 
  },
  { 
    title: "Space Shooter", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop", 
    badge: "Hyper Casual" 
  },
  { 
    title: "VR Exploration", 
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop", 
    badge: "VR" 
  },
];
// motion variants
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

function TiltCard({ children }) {
  // tilt effect using framer-motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
    const newX = (px - 0.5) * 100; // -50 -> 50
    const newY = (py - 0.5) * 100; // -50 -> 50
    x.set(newX);
    y.set(newY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, x, y }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function GameDevelopmentEnhanced() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HERO */}
      <header className="relative pt-20 pb-10">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
             
              <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold leading-tight">Studio-grade game development & LiveOps</motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-slate-600 max-w-2xl">From prototypes to AAA titles — design, build, scale and operate live games with a focus on performance, monetization and retention.</motion.p>

              <div className="mt-6 flex gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">Get a Free Quote</a>
                <a href="/portfolio" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-800">View Portfolio</a>
              </div>

              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <dt className="text-lg font-semibold">100+</dt>
                  <dd className="text-xs text-slate-600">Projects Delivered</dd>
                </div>
                <div className="p-4 bg-sky-50 rounded-lg">
                  <dt className="text-lg font-semibold">50M+</dt>
                  <dd className="text-xs text-slate-600">Active Players</dd>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <dt className="text-lg font-semibold">99.9%</dt>
                  <dd className="text-xs text-slate-600">Uptime SLA</dd>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg">
                  <dt className="text-lg font-semibold">10+</dt>
                  <dd className="text-xs text-slate-600">LiveOps Engineers</dd>
                </div>
              </dl>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex-1 max-w-md w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <img src={heroImage} alt="Game studio hero" className="object-cover w-full h-64 sm:h-72 md:h-80" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-6">
          <motion.div variants={list} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={fade} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-sky-50 inline-flex items-center justify-center">
                    <img src={f.icon} alt="" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES WITH TILT */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold">Game Development Categories</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">We ship genre-focused teams and pipelines — choose the category that matches your vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((c, idx) => (
              <motion.div key={idx} variants={fade} className="relative">
                <TiltCard>
                  <motion.article whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.995 }} className="rounded-2xl overflow-hidden bg-white border shadow-lg">
                    <div className="relative h-56 w-full bg-slate-200">
                      <img src={c.image} alt={c.title} className="object-cover w-full h-full" loading="lazy" />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{c.title}</h3>
                          <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-600 text-white text-xs">{c.badge}</span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm shadow-sm">Start a Project</a>
                        <a href="/portfolio" className="text-sm text-indigo-600 underline">Explore</a>
                      </div>
                    </div>
                  </motion.article>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold">Our Process</h2>
            <p className="text-slate-600 mt-2">Rapid prototyping, player-tested iterations and data-led LiveOps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fade} className="p-6 rounded-xl bg-gradient-to-br from-white to-sky-50 border shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">01</div>
                <div>
                  <h4 className="font-semibold">Concept & Docs</h4>
                  <p className="text-sm text-slate-600 mt-1">Design pillars, flow & monetization brief.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fade} className="p-6 rounded-xl bg-gradient-to-br from-white to-sky-50 border shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">02</div>
                <div>
                  <h4 className="font-semibold">Prototype & Test</h4>
                  <p className="text-sm text-slate-600 mt-1">Playable prototypes and rapid user validation.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fade} className="p-6 rounded-xl bg-gradient-to-br from-white to-sky-50 border shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">03</div>
                <div>
                  <h4 className="font-semibold">LiveOps & Scale</h4>
                  <p className="text-sm text-slate-600 mt-1">Server infra, A/B experiments and retention loops.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Selected Portfolio</h2>
          <p className="text-slate-600 mt-2">Recent projects across genres and platforms.</p>

          <motion.div variants={list} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {portfolio.map((p, i) => (
              <motion.figure key={i} variants={fade} whileHover={{ scale: 1.03, y: -6 }} className="relative rounded-xl overflow-hidden shadow-lg border bg-white">
                <img src={p.image} alt={p.title} className="object-cover w-full h-44" loading="lazy" />
                <figcaption className="p-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">{p.badge}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <a href="/portfolio" className="text-sm text-indigo-600 hover:underline">View Case</a>
                    <a href="/contact" className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs">Start Conversation</a>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to launch your game?</h2>
          <p className="text-neutral-700 mt-3 sm:mt-4">Tell us your goals — we will map a roadmap, team and timeline to ship.</p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow">Get a Quote</a>
            <a href="tel:+919766650411" className="px-6 py-3 rounded-xl border border-indigo-100 bg-white text-indigo-700 font-semibold">Call Sales</a>
          </div>
        </div>
      </section>
    </div>
  );
}
