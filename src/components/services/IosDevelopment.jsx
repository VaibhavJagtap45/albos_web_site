// import React from 'react';

// const IosDevelopment = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full mx-auto pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 overflow-hidden">
//             <svg
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 fill-gray-400/30 stroke-gray-400/30 w-full h-full"
//             >
//               <defs>
//                 <pattern
//                   id="grid-pattern"
//                   width="40"
//                   height="40"
//                   patternUnits="userSpaceOnUse"
//                   x="-1"
//                   y="-1"
//                 >
//                   <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//               <svg x="-1" y="-1" className="overflow-visible">
//                 {/* rectangles omitted for brevity, but can be included if needed */}
//               </svg>
//             </svg>
//           </div>
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] md:w-[850px] md:h-[850px] lg:w-[1100px] lg:h-[1100px] xl:w-[1500px] xl:h-[1500px] bg-[radial-gradient(circle,rgba(150,150,255,0.25)_0%,transparent_70%)] opacity-70 pointer-events-none" />
//         </div>
//         <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
//           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] xl:text-[3.2rem] font-semibold leading-snug md:leading-tight mb-4 sm:mb-6">
//                 Build Premium, High-Performance iOS Applications
//               </h1>
//               <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-slate-700">
//                 We are a leading iOS app development company building high-performance,
//                 secure, and scalable iPhone and iPad applications. Our expert Swift and
//                 SwiftUI developers craft intuitive Apple-compliant apps that deliver
//                 exceptional user experiences and long-term business value.
//               </p>
//               <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
//                 <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 has-[>svg]:px-3 w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-2xl bg-blue-600 hover:bg-blue-700">
//                   Get a Free Quote
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-phone-call w-4 h-4"
//                     aria-hidden="true"
//                   >
//                     <path d="M13 2a9 9 0 0 1 9 9" />
//                     <path d="M13 6a5 5 0 0 1 5 5" />
//                     <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
//                   </svg>
//                 </button>
//                 <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[>svg]:px-3 w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800">
//                   View Our Work
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-video w-4 h-4"
//                     aria-hidden="true"
//                   >
//                     <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
//                     <rect x="2" y="6" width="14" height="12" rx="2" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1 flex justify-center w-full max-w-[240px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[520px] overflow-hidden">
//               <img
//                 alt="iOS App Development Service"
//                 width="520"
//                 height="520"
//                 src="/ios-app-development.svg"
//                 className="object-contain drop-shadow-2xl scale-95 sm:scale-100"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* A Trusted iOS App Development Partner */}
//       <section className="relative w-full py-24 bg-gradient-to-b from-white to-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-20">
//             <h2 className="text-4xl md:text-[2.5rem] font-semibold mb-4">
//               A Trusted iOS App Development Partner for Modern Businesses
//             </h2>
//             <p className="text-lg text-slate-700 leading-relaxed">
//               Businesses choose us not just for development, but for our deep understanding of the Apple ecosystem, focus on quality, and commitment to long-term success.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Card 1 */}
//             <div className="text-card-foreground flex flex-col gap-6 shadow-sm relative p-8 rounded-2xl border bg-white/70 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
//               <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-apple"
//                   aria-hidden="true"
//                 >
//                   <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
//                   <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Apple-Centric Development</h3>
//               <p className="text-slate-700 leading-relaxed">
//                 We follow Apple’s Human Interface Guidelines and platform best practices to build iOS apps that feel native, intuitive, and premium across iPhone, iPad, and Apple devices.
//               </p>
//             </div>
//             {/* Card 2 */}
//             <div className="text-card-foreground flex flex-col gap-6 shadow-sm relative p-8 rounded-2xl border bg-white/70 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
//               <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-star"
//                   aria-hidden="true"
//                 >
//                   <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">App Store Approval Expertise</h3>
//               <p className="text-slate-700 leading-relaxed">
//                 From privacy policies to performance optimization, we design and develop apps with App Store approval in mind — reducing rejections and launch delays.
//               </p>
//             </div>
//             {/* Card 3 */}
//             <div className="text-card-foreground flex flex-col gap-6 shadow-sm relative p-8 rounded-2xl border bg-white/70 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
//               <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-shield-check"
//                   aria-hidden="true"
//                 >
//                   <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
//                   <path d="m9 12 2 2 4-4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Security & Performance First</h3>
//               <p className="text-slate-700 leading-relaxed">
//                 Our iOS applications are engineered with strong data encryption, secure APIs, and performance optimization for reliability at scale.
//               </p>
//             </div>
//             {/* Card 4 */}
//             <div className="text-card-foreground flex flex-col gap-6 shadow-sm relative p-8 rounded-2xl border bg-white/70 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
//               <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-zap"
//                   aria-hidden="true"
//                 >
//                   <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Long-Term Product Partnership</h3>
//               <p className="text-slate-700 leading-relaxed">
//                 We don’t just ship apps. We partner with startups and enterprises to evolve, optimize, and scale iOS products over time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Why Businesses Choose Us */}
//       <section className="relative w-full py-28 bg-gradient-to-b from-white to-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h2 className="text-4xl md:text-[2.5rem] font-semibold mb-4">
//               Why Businesses Choose Us for iOS App Development
//             </h2>
//             <p className="text-lg text-slate-700 leading-relaxed">
//               As an experienced iOS app development company, we help startups and enterprises build secure, scalable, and Apple-compliant applications that deliver exceptional performance and long-term business growth.
//             </p>
//           </div>
//           <div className="space-y-32">
//             {/* Row 1 */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9"
//                   alt="High performance iOS app development using Swift"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//               <div>
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="28"
//                       height="28"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-rocket"
//                       aria-hidden="true"
//                     >
//                       <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//                       <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//                       <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//                       <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">Performance-Driven Native iOS Development</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   We build high-performance native iOS applications using Swift, SwiftUI, and Apple-recommended architectures to ensure smooth animations, fast load times, and flawless user experiences across all Apple devices.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• Optimized memory & CPU usage</li>
//                   <li>• Smooth transitions & native animations</li>
//                   <li>• Consistent performance at scale</li>
//                 </ul>
//               </div>
//             </div>
//             {/* Row 2 */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div className="lg:order-2">
//                 <img
//                   src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
//                   alt="Secure iOS application development and App Store compliance"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//               <div className="lg:order-1">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="28"
//                       height="28"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-shield-check"
//                       aria-hidden="true"
//                     >
//                       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
//                       <path d="m9 12 2 2 4-4" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">Enterprise-Grade Security & App Store Compliance</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   Security and compliance are built into every iOS app we develop. From encrypted data storage to secure API communication, we ensure your application meets Apple’s privacy standards and enterprise security requirements.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• Secure authentication & encrypted storage</li>
//                   <li>• Apple privacy & App Store guideline compliance</li>
//                   <li>• Reduced App Store rejection risks</li>
//                 </ul>
//               </div>
//             </div>
//             {/* Row 3 */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
//                   alt="Scalable and future-ready iOS app architecture"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//               <div>
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="28"
//                       height="28"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-layers"
//                       aria-hidden="true"
//                     >
//                       <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
//                       <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
//                       <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">Scalable, Future-Ready iOS Architecture</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   We design clean, modular, and scalable iOS architectures that grow seamlessly with your business — making future feature additions, integrations, and scaling effortless and cost-efficient.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• Modular & maintainable codebase</li>
//                   <li>• Easy upgrades & integrations</li>
//                   <li>• Lower long-term maintenance cost</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* End-to-End iOS App Development Services */}
//       <section className="relative w-full py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-28">
//             <h2 className="text-4xl md:text-[2.5rem] font-semibold mb-6">
//               End-to-End iOS App Development Services
//             </h2>
//             <p className="text-lg text-slate-700 leading-relaxed">
//               We provide full-cycle iOS app development services designed to help startups and enterprises build secure, scalable, and high-performing applications across the entire Apple ecosystem.
//             </p>
//           </div>
//           <div className="space-y-36">
//             {/* Native iOS App Development */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//               <div>
//                 <div className="flex items-center gap-5 mb-6">
//                   <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-smartphone"
//                       aria-hidden="true"
//                     >
//                       <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
//                       <path d="M12 18h.01" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">Native iOS App Development</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   We build high-performance native iOS applications using Swift, SwiftUI, and Objective-C to deliver seamless, secure, and App Store–ready experiences for iPhone and iPad users.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• Swift & SwiftUI development</li>
//                   <li>• iPhone & iPad applications</li>
//                   <li>• App Store submission & approval support</li>
//                 </ul>
//               </div>
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
//                   alt="Native iOS app development for iPhone and iPad"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//             </div>
//             {/* Cross-Platform iOS Development */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//               <div className="lg:order-2">
//                 <div className="flex items-center gap-5 mb-6">
//                   <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-layers"
//                       aria-hidden="true"
//                     >
//                       <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
//                       <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
//                       <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">Cross-Platform iOS Development</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   Launch your app faster with cross-platform development solutions that deliver native-like performance on iOS while reducing development time and cost.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• Flutter & React Native</li>
//                   <li>• Shared codebase with native bridges</li>
//                   <li>• Faster go-to-market strategy</li>
//                 </ul>
//               </div>
//               <div className="lg:order-1">
//                 <img
//                   src="https://images.unsplash.com/photo-1555099962-4199c345e5dd"
//                   alt="Cross-platform iOS app development using Flutter and React Native"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//             </div>
//             {/* iOS UI/UX Design & Prototyping */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//               <div>
//                 <div className="flex items-center gap-5 mb-6">
//                   <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-code-xml"
//                       aria-hidden="true"
//                     >
//                       <path d="m18 16 4-4-4-4" />
//                       <path d="m6 8-4 4 4 4" />
//                       <path d="m14.5 4-5 16" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">iOS UI/UX Design & Prototyping</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   Our designers craft intuitive, visually stunning iOS interfaces that follow Apple’s Human Interface Guidelines and deliver delightful user experiences.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• SwiftUI & UIKit design systems</li>
//                   <li>• Accessibility-first UX</li>
//                   <li>• Interactive prototypes & user flows</li>
//                 </ul>
//               </div>
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1545235617-9465d2a55698"
//                   alt="iOS UI UX design following Apple Human Interface Guidelines"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//             </div>
//             {/* Apple Watch & tvOS App Development */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//               <div className="lg:order-2">
//                 <div className="flex items-center gap-5 mb-6">
//                   <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-watch"
//                       aria-hidden="true"
//                     >
//                       <path d="M12 10v2.2l1.6 1" />
//                       <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
//                       <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
//                       <circle cx="12" cy="12" r="6" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">Apple Watch & tvOS App Development</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   Extend your digital experience across Apple Watch and Apple TV with fast, responsive, and context-aware applications designed for wearable and large-screen interactions.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• watchOS health & fitness apps</li>
//                   <li>• tvOS media & OTT platforms</li>
//                   <li>• Seamless Apple ecosystem integration</li>
//                 </ul>
//               </div>
//               <div className="lg:order-1">
//                 <img
//                   src="https://images.unsplash.com/photo-1510017803434-a899398421b3"
//                   alt="Apple Watch and Apple TV app development"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//             </div>
//             {/* iOS App Modernization & Migration */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//               <div>
//                 <div className="flex items-center gap-5 mb-6">
//                   <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-refresh-ccw"
//                       aria-hidden="true"
//                     >
//                       <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
//                       <path d="M3 3v5h5" />
//                       <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
//                       <path d="M16 16h5v5" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-semibold">iOS App Modernization & Migration</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 leading-relaxed mb-6">
//                   Modernize legacy iOS applications by migrating to Swift, upgrading UI, improving performance, and ensuring compatibility with the latest iOS versions and Apple devices.
//                 </p>
//                 <ul className="space-y-3 text-lg text-slate-700">
//                   <li>• Objective-C to Swift migration</li>
//                   <li>• UI & performance enhancements</li>
//                   <li>• Long-term maintenance & support</li>
//                 </ul>
//               </div>
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
//                   alt="iOS app modernization and migration services"
//                   width="700"
//                   height="500"
//                   className="rounded-3xl shadow-xl object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* iOS UI/UX Design Excellence */}
//       <section className="relative w-full py-36 bg-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-32">
//             <h2 className="text-4xl md:text-[2.5rem] font-semibold mb-6">
//               iOS UI/UX Design Excellence
//             </h2>
//             <p className="text-lg text-slate-700 leading-relaxed">
//               We design iOS experiences that feel effortless, intuitive, and unmistakably Apple — guided by Human Interface Guidelines, accessibility standards, and real user behavior.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
//             <div className="space-y-20">
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-eye"
//                     aria-hidden="true"
//                   >
//                     <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
//                     <circle cx="12" cy="12" r="3" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-2">User-Centered Experience Strategy</h3>
//                   <p className="text-lg text-slate-700 leading-relaxed">
//                     Every iOS interface starts with understanding user intent. We map user journeys, behaviors, and expectations before designing a single screen.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-layout-dashboard"
//                     aria-hidden="true"
//                   >
//                     <rect width="7" height="9" x="3" y="3" rx="1" />
//                     <rect width="7" height="5" x="14" y="3" rx="1" />
//                     <rect width="7" height="9" x="14" y="12" rx="1" />
//                     <rect width="7" height="5" x="3" y="16" rx="1" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Apple-Compliant Interface Design</h3>
//                   <p className="text-lg text-slate-700 leading-relaxed">
//                     Our designs strictly follow Apple’s Human Interface Guidelines to ensure consistency, clarity, and a truly native look and feel across all iOS devices.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-accessibility"
//                     aria-hidden="true"
//                   >
//                     <circle cx="16" cy="4" r="1" />
//                     <path d="m18 19 1-7-6 1" />
//                     <path d="m5 8 3-3 5.5 3-2.36 3.5" />
//                     <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
//                     <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Accessibility & Usability First</h3>
//                   <p className="text-lg text-slate-700 leading-relaxed">
//                     We design inclusive experiences with VoiceOver support, dynamic text sizing, contrast compliance, and intuitive navigation for all users.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-sparkles"
//                     aria-hidden="true"
//                   >
//                     <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
//                     <path d="M20 2v4" />
//                     <path d="M22 4h-4" />
//                     <circle cx="4" cy="20" r="2" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Micro-Interactions & Visual Polish</h3>
//                   <p className="text-lg text-slate-700 leading-relaxed">
//                     Thoughtful animations, transitions, and feedback make interactions feel natural, responsive, and delightful — without overwhelming the user.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative lg:sticky lg:top-32">
//               <img
//                 src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
//                 alt="iOS UI UX design following Apple Human Interface Guidelines"
//                 width="520"
//                 height="900"
//                 className="rounded-3xl shadow-2xl object-cover mx-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Our iOS App Development Process */}
//       <section className="relative w-full py-36 bg-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-28">
//             <h2 className="text-4xl md:text-[2.5rem] font-semibold mb-6">
//               Our iOS App Development Process
//             </h2>
//             <p className="text-lg text-slate-700 leading-relaxed">
//               We follow a transparent, structured, and Apple-aligned development process to transform your idea into a reliable, high-performing iOS application.
//             </p>
//           </div>
//           <div className="relative overflow-x-auto">
//             <div className="min-w-[1100px] grid grid-cols-6 gap-12 items-start">
//               {/* Discovery */}
//               <div className="text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-search"
//                     aria-hidden="true"
//                   >
//                     <path d="m21 21-4.34-4.34" />
//                     <circle cx="11" cy="11" r="8" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Discovery & Strategy</h3>
//                 <p className="text-slate-700 text-base">Requirements analysis, user research, platform feasibility, and technical planning.</p>
//               </div>
//               {/* UI/UX Design */}
//               <div className="text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-pencil-ruler"
//                     aria-hidden="true"
//                   >
//                     <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
//                     <path d="m8 6 2-2" />
//                     <path d="m18 16 2-2" />
//                     <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
//                     <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
//                     <path d="m15 5 4 4" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
//                 <p className="text-slate-700 text-base">Wireframes, visual design, and interactive prototypes aligned with Apple HIG.</p>
//               </div>
//               {/* iOS Development */}
//               <div className="text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-code-xml"
//                     aria-hidden="true"
//                   >
//                     <path d="m18 16 4-4-4-4" />
//                     <path d="m6 8-4 4 4 4" />
//                     <path d="m14.5 4-5 16" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">iOS Development</h3>
//                 <p className="text-slate-700 text-base">Swift & SwiftUI development with scalable architecture and clean code practices.</p>
//               </div>
//               {/* QA & Testing */}
//               <div className="text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-bug"
//                     aria-hidden="true"
//                   >
//                     <path d="M12 20v-9" />
//                     <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
//                     <path d="M14.12 3.88 16 2" />
//                     <path d="M21 21a4 4 0 0 0-3.81-4" />
//                     <path d="M21 5a4 4 0 0 1-3.55 3.97" />
//                     <path d="M22 13h-4" />
//                     <path d="M3 21a4 4 0 0 1 3.81-4" />
//                     <path d="M3 5a4 4 0 0 0 3.55 3.97" />
//                     <path d="M6 13H2" />
//                     <path d="m8 2 1.88 1.88" />
//                     <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">QA & Testing</h3>
//                 <p className="text-slate-700 text-base">Functional testing, performance checks, and real-device validation.</p>
//               </div>
//               {/* App Store Launch */}
//               <div className="text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-cloud-upload"
//                     aria-hidden="true"
//                   >
//                     <path d="M12 13v8" />
//                     <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
//                     <path d="m8 17 4-4 4 4" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">App Store Launch</h3>
//                 <p className="text-slate-700 text-base">App Store submission, compliance checks, and approval support.</p>
//               </div>
//               {/* Support & Growth */}
//               <div className="text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="26"
//                     height="26"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-life-buoy"
//                     aria-hidden="true"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <path d="m4.93 4.93 4.24 4.24" />
//                     <path d="m14.83 9.17 4.24-4.24" />
//                     <path d="m14.83 14.83 4.24 4.24" />
//                     <path d="m9.17 14.83-4.24 4.24" />
//                     <circle cx="12" cy="12" r="4" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Support & Growth</h3>
//                 <p className="text-slate-700 text-base">Updates, performance optimization, and long-term product evolution.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Flexible Engagement Models */}
//       <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
//               Flexible Engagement Models
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               Choose an engagement model that aligns with your project scope, budget, and long-term business goals. Our transparent and scalable collaboration models help startups and enterprises build software with confidence.
//             </p>
//           </div>
//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* Fixed Price */}
//             <div className="group relative rounded-3xl border bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
//               <div className="mb-6 flex items-center justify-between">
//                 <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
//                   Best for MVPs
//                 </span>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png"
//                   alt="Fixed price software development model"
//                   width="40"
//                   height="40"
//                   className="w-10 h-10"
//                 />
//               </div>
//               <h3 className="text-2xl font-semibold mb-4 text-slate-900">Fixed Price Model</h3>
//               <p className="text-slate-700 leading-relaxed mb-6">
//                 Ideal for projects with clearly defined requirements and timelines. We commit to a fixed scope, cost, and delivery schedule — ensuring predictable budgeting and zero surprises.
//               </p>
//               <ul className="space-y-3 text-sm text-slate-700">
//                 <li>✔ Clearly defined scope & milestones</li>
//                 <li>✔ Fixed budget & delivery timeline</li>
//                 <li>✔ Minimal client management effort</li>
//                 <li>✔ Ideal for MVPs & small projects</li>
//               </ul>
//             </div>
//             {/* Dedicated Team */}
//             <div className="group relative rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl">
//               <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full bg-blue-600 text-white">
//                 Most Popular
//               </span>
//               <div className="mb-6 flex items-center justify-between mt-4">
//                 <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
//                   Long-Term Partnership
//                 </span>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
//                   alt="Dedicated development team model"
//                   width="40"
//                   height="40"
//                   className="w-10 h-10"
//                 />
//               </div>
//               <h3 className="text-2xl font-semibold mb-4 text-slate-900">Dedicated Team Model</h3>
//               <p className="text-slate-700 leading-relaxed mb-6">
//                 A dedicated team of developers, designers, and QA engineers works exclusively on your product — acting as an extension of your in-house team. Perfect for scaling products and continuous development.
//               </p>
//               <ul className="space-y-3 text-sm text-slate-700">
//                 <li>✔ Full control over team & priorities</li>
//                 <li>✔ Monthly billing with flexible scaling</li>
//                 <li>✔ Best for SaaS & enterprise platforms</li>
//                 <li>✔ Continuous delivery & long-term support</li>
//               </ul>
//             </div>
//             {/* Time & Material */}
//             <div className="group relative rounded-3xl border bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
//               <div className="mb-6 flex items-center justify-between">
//                 <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
//                   Flexible Scope
//                 </span>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
//                   alt="Time and material software development model"
//                   width="40"
//                   height="40"
//                   className="w-10 h-10"
//                 />
//               </div>
//               <h3 className="text-2xl font-semibold mb-4 text-slate-900">Time & Material Model</h3>
//               <p className="text-slate-700 leading-relaxed mb-6">
//                 Designed for evolving requirements and complex systems. You pay only for the actual development time and effort, with complete transparency and agile execution.
//               </p>
//               <ul className="space-y-3 text-sm text-slate-700">
//                 <li>✔ Flexible scope & changing priorities</li>
//                 <li>✔ Pay-as-you-go (hourly or monthly)</li>
//                 <li>✔ Agile & iterative delivery approach</li>
//                 <li>✔ Ideal for R&D & innovation-driven projects</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Compliance, Security & Legal Assurance */}
//       <section className="relative py-32 bg-gradient-to-b from-white to-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               Compliance, Security & Legal Assurance
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We operate with strict security, compliance, and legal frameworks to ensure complete confidentiality, data protection, and intellectual property safety for every software development engagement.
//             </p>
//           </div>
//           <div className="grid lg:grid-cols-3 gap-16 items-start">
//             <div className="space-y-6">
//               <div className="flex items-start gap-4 rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow">
//                 <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
//                     alt="NDA protected software development"
//                     className="w-7 h-7"
//                     width="28"
//                     height="28"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">NDA Protected Engagement</h3>
//                   <p className="mt-1 text-sm text-slate-600 leading-relaxed">
//                     All discussions, documentation, and deliverables are secured under a legally binding NDA.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow">
//                 <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/942/942781.png"
//                     alt="Intellectual property ownership assurance"
//                     className="w-7 h-7"
//                     width="28"
//                     height="28"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">100% Intellectual Property Ownership</h3>
//                   <p className="mt-1 text-sm text-slate-600 leading-relaxed">
//                     You retain complete ownership of source code, data, and all project assets.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow">
//                 <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
//                     alt="ISO compliant software development"
//                     className="w-7 h-7"
//                     width="28"
//                     height="28"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">ISO-Aligned Security Practices</h3>
//                   <p className="mt-1 text-sm text-slate-600 leading-relaxed">
//                     Development workflows aligned with ISO 27001 security principles and controls.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow">
//                 <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/681/681662.png"
//                     alt="GDPR compliant application development"
//                     className="w-7 h-7"
//                     width="28"
//                     height="28"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">GDPR & Global Data Privacy</h3>
//                   <p className="mt-1 text-sm text-slate-600 leading-relaxed">
//                     Strict data privacy measures aligned with GDPR and international regulations.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:col-span-2 rounded-3xl border bg-white p-10 md:p-12 shadow-sm">
//               <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-900">
//                 Built for Enterprise Trust & Long-Term Partnerships
//               </h3>
//               <div className="space-y-6 text-slate-700 leading-relaxed">
//                 <p>
//                   At <strong>Albos Technologies</strong>, security and trust are embedded into every phase of our software development lifecycle. From initial discussions to deployment and long-term support, your business data and intellectual property remain fully protected.
//                 </p>
//                 <p>
//                   We follow industry-recognized best practices aligned with <strong>ISO 27001</strong>, <strong>GDPR</strong>, and enterprise security standards — including access controls, encrypted storage, secure APIs, audit trails, and role-based permissions.
//                 </p>
//                 <p>
//                   All legal, compliance, and security documentation is shared transparently under NDA, giving startups, enterprises, and regulated industries complete peace of mind.
//                 </p>
//               </div>
//               <div className="mt-12">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
//                 >
//                   Request NDA & Compliance Details
//                   <span aria-hidden="true">→</span>
//                 </a>
//                 <p className="mt-4 text-xs text-slate-500">
//                   NDA-protected discussion · No obligation · Enterprise-grade confidentiality
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Contract & NDA Assurance */}
//       <section className="relative py-28 bg-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-20">
//             <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
//               Contract & NDA Assurance
//             </h2>
//             <p className="mt-5 text-lg text-slate-700 leading-relaxed">
//               We operate with complete transparency, legal protection, and confidentiality. Every engagement is governed by strong contracts and strict non-disclosure agreements to protect your business, data, and intellectual property.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="rounded-2xl bg-white border p-7 hover:shadow-lg transition">
//               <div className="w-12 h-12 mb-5 rounded-xl bg-blue-100 flex items-center justify-center">🔒</div>
//               <h3 className="text-xl font-semibold mb-3">Non-Disclosure Agreement (NDA)</h3>
//               <p className="text-slate-700 leading-relaxed text-sm">
//                 Every project begins with a legally binding NDA to ensure complete confidentiality of your ideas, data, and business logic.
//               </p>
//             </div>
//             <div className="rounded-2xl bg-white border p-7 hover:shadow-lg transition">
//               <div className="w-12 h-12 mb-5 rounded-xl bg-green-100 flex items-center justify-center">🧠</div>
//               <h3 className="text-xl font-semibold mb-3">Intellectual Property Rights</h3>
//               <p className="text-slate-700 leading-relaxed text-sm">
//                 You retain 100% ownership of source code, designs, data, and deliverables upon project completion.
//               </p>
//             </div>
//             <div className="rounded-2xl bg-white border p-7 hover:shadow-lg transition">
//               <div className="w-12 h-12 mb-5 rounded-xl bg-purple-100 flex items-center justify-center">📄</div>
//               <h3 className="text-xl font-semibold mb-3">Transparent Contracts</h3>
//               <p className="text-slate-700 leading-relaxed text-sm">
//                 Clear documentation covering scope, milestones, timelines, payment terms, and exit clauses — no hidden surprises.
//               </p>
//             </div>
//             <div className="rounded-2xl bg-white border p-7 hover:shadow-lg transition">
//               <div className="w-12 h-12 mb-5 rounded-xl bg-amber-100 flex items-center justify-center">🛡️</div>
//               <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
//               <p className="text-slate-700 leading-relaxed text-sm">
//                 Secure development practices, access control, and compliance-ready processes aligned with enterprise security standards.
//               </p>
//             </div>
//           </div>
//           <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-600 p-10 text-white text-center">
//             <h3 className="text-2xl md:text-3xl font-semibold">Your Idea. Your Code. Your Ownership.</h3>
//             <p className="mt-4 max-w-2xl mx-auto text-white/90 leading-relaxed">
//               We believe trust is the foundation of successful partnerships. Our contracts are designed to protect your interests, ensure confidentiality, and build long-term collaboration.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-blue-700 font-semibold hover:bg-slate-100 transition"
//             >
//               Request NDA & Contract Details
//               <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>
//       </section>
//       {/* Industries We Serve */}
//       <section className="relative py-32 bg-white overflow-hidden">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Industries We Serve</h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We design and develop Android applications for multiple industries, helping businesses launch secure, scalable and performance-driven mobile solutions tailored to their domain-specific challenges.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {/* Enterprise & B2B */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//                 alt="Enterprise Android app development services"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Enterprise & B2B Solutions</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   ERP systems, internal tools, secure dashboards and large-scale enterprise Android applications.
//                 </p>
//               </div>
//             </div>
//             {/* Fintech & Banking */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
//                 alt="Fintech and banking Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Fintech & Banking</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Mobile banking apps, payment gateways, digital wallets and fintech platforms with bank-grade security.
//                 </p>
//               </div>
//             </div>
//             {/* Healthcare & MedTech */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
//                 alt="Healthcare and medical Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Healthcare & MedTech</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Telemedicine apps, EHR systems, patient monitoring and HIPAA-compliant healthcare platforms.
//                 </p>
//               </div>
//             </div>
//             {/* E-Commerce & Retail */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a"
//                 alt="Ecommerce Android app development company"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">E-Commerce & Retail</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   High-conversion shopping apps, inventory management, POS integration and omnichannel retail solutions.
//                 </p>
//               </div>
//             </div>
//             {/* On-Demand & Logistics */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
//                 alt="On-demand and logistics Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">On-Demand & Logistics</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Real-time booking, delivery tracking, fleet management and on-demand service Android apps.
//                 </p>
//               </div>
//             </div>
//             {/* IoT & Smart Devices */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1518770660439-4636190af475"
//                 alt="IoT and smart device Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">IoT & Smart Devices</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Android apps for smart devices, connected hardware, sensors and IoT ecosystems.
//                 </p>
//               </div>
//             </div>
//             {/* EdTech & eLearning */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
//                 alt="EdTech and eLearning Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">EdTech & eLearning</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Online learning apps, LMS platforms, virtual classrooms and education Android solutions.
//                 </p>
//               </div>
//             </div>
//             {/* Travel & Hospitality */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//                 alt="Travel and hospitality Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Travel & Hospitality</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Hotel booking apps, travel planning platforms, ticketing systems and hospitality solutions.
//                 </p>
//               </div>
//             </div>
//             {/* Media, OTT & Entertainment */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
//                 alt="OTT and entertainment Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Media, OTT & Entertainment</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Video streaming apps, OTT platforms, music apps and digital entertainment solutions.
//                 </p>
//               </div>
//             </div>
//             {/* Real Estate & PropTech */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
//                 alt="Real estate Android app development services"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Real Estate & PropTech</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Property listing apps, virtual tours, CRM systems and real estate management platforms.
//                 </p>
//               </div>
//             </div>
//             {/* Fitness, Wellness & Sports */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
//                 alt="Fitness and wellness Android app development"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Fitness, Wellness & Sports</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   Workout tracking apps, fitness coaching platforms, wearable integrations and wellness solutions.
//                 </p>
//               </div>
//             </div>
//             {/* Gaming & Interactive Experiences */}
//             <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
//                 alt="Android game development services"
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">Gaming & Interactive Experiences</h3>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   2D/3D Android games, real-time multiplayer gaming and immersive interactive experiences.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Ready to Grow Your Business? */}
//       <section className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-100 to-indigo-100 overflow-hidden">
//         <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
//           <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-300/30 blur-3xl rounded-full -top-32 sm:-top-40 -left-20 animate-pulse" />
//           <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-300/20 blur-3xl rounded-full bottom-0 right-0 animate-float" />
//         </div>
//         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
//               Ready to Grow Your Business?
//             </h2>
//             <p className="text-neutral-700 mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
//               Speak with our experts today. We help brands scale with powerful development, design, automation, and cloud solutions.
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 sm:mb-20 px-4">
//             <button className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-base sm:text-lg bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all">
//               Get a Free Quote
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-arrow-right w-5 h-5"
//                 aria-hidden="true"
//               >
//                 <path d="M5 12h14" />
//                 <path d="m12 5 7 7-7 7" />
//               </svg>
//             </button>
//             <a
//               href="tel:+91 9766650411"
//               className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-base sm:text-lg bg-green-600 text-white shadow-md shadow-green-600/20 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30 transition-all"
//             >
//               Call Sales
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-phone w-5 h-5"
//                 aria-hidden="true"
//               >
//                 <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
//               </svg>
//             </a>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0">
//             {/* Phone */}
//             <div className="p-6 sm:p-7 md:p-8 bg-white/100 backdrop-blur-xl rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500 group relative overflow-hidden h-full">
//               <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl group-hover:scale-110 transition-transform">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-phone w-6 h-6"
//                   aria-hidden="true"
//                 >
//                   <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
//                 </svg>
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mt-4 text-center leading-tight">
//                 Phone Number
//               </h3>
//               <p className="text-neutral-600 mt-2 text-center leading-relaxed text-sm sm:text-base break-words">
//                 +91 97666 50411
//               </p>
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
//             </div>
//             {/* Email */}
//             <div className="p-6 sm:p-7 md:p-8 bg-white/100 backdrop-blur-xl rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500 group relative overflow-hidden h-full">
//               <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl group-hover:scale-110 transition-transform">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-mail w-6 h-6"
//                   aria-hidden="true"
//                 >
//                   <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
//                   <rect x="2" y="4" width="20" height="16" rx="2" />
//                 </svg>
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mt-4 text-center leading-tight">
//                 Email Address
//               </h3>
//               <p className="text-neutral-600 mt-2 text-center leading-relaxed text-sm sm:text-base break-words">
//                 info@albostechnologies.com
//               </p>
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
//             </div>
//             {/* Office Location */}
//             <div className="p-6 sm:p-7 md:p-8 bg-white/100 backdrop-blur-xl rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500 group relative overflow-hidden h-full">
//               <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl group-hover:scale-110 transition-transform">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-map-pin w-6 h-6"
//                   aria-hidden="true"
//                 >
//                   <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
//                   <circle cx="12" cy="10" r="3" />
//                 </svg>
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mt-4 text-center leading-tight">
//                 Office Location
//               </h3>
//               <p className="text-neutral-600 mt-2 text-center leading-relaxed text-sm sm:text-base break-words">
//                 Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019
//               </p>
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
//             </div>
//             {/* Office Hours */}
//             <div className="p-6 sm:p-7 md:p-8 bg-white/100 backdrop-blur-xl rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500 group relative overflow-hidden h-full">
//               <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl group-hover:scale-110 transition-transform">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-clock w-6 h-6"
//                   aria-hidden="true"
//                 >
//                   <path d="M12 6v6l4 2" />
//                   <circle cx="12" cy="12" r="10" />
//                 </svg>
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mt-4 text-center leading-tight">
//                 Office Hours
//               </h3>
//               <p className="text-neutral-600 mt-2 text-center leading-relaxed text-sm sm:text-base break-words">
//                 Mon – Sat, 10:00 AM – 7:00 PM
//               </p>
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default IosDevelopment;












import { useState, useEffect, useRef } from "react";

/* ─── Scroll reveal hook ─────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, className = "", delay = 0, y = 32, x = 0, scale = 1 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : `translate(${x}px,${y}px) scale(${scale})`,
      transition: `opacity .75s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function CountUp({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, vis] = useInView();
  useEffect(() => {
    if (!vis) return;
    let cur = 0;
    const inc = to / (1600 / 16);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= to) { setN(to); clearInterval(t); } else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [vis, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ─── Data ────────────────────────────────────────────────── */
const TRUST_CARDS = [
  { icon: "🍎", color: "#0071e3", bg: "#e8f4ff", title: "Apple-Centric Development", desc: "We follow Apple's Human Interface Guidelines and platform best practices to build iOS apps that feel native, intuitive, and premium across iPhone, iPad, and Apple devices." },
  { icon: "⭐", color: "#6e3ff3", bg: "#f0ebff", title: "App Store Approval Expertise", desc: "From privacy policies to performance optimization, we design and develop apps with App Store approval in mind — reducing rejections and launch delays." },
  { icon: "🛡️", color: "#28c76f", bg: "#e8faf0", title: "Security & Performance First", desc: "Our iOS applications are engineered with strong data encryption, secure APIs, and performance optimization for reliability at scale." },
  { icon: "🤝", color: "#ff6b35", bg: "#fff1ec", title: "Long-Term Product Partnership", desc: "We don't just ship apps. We partner with startups and enterprises to evolve, optimize, and scale iOS products over time." },
];

const WHY_ROWS = [
  {
    icon: "🚀", color: "#0071e3", bg: "#e8f4ff",
    title: "Performance-Driven Native iOS Development",
    desc: "We build high-performance native iOS applications using Swift, SwiftUI, and Apple-recommended architectures to ensure smooth animations, fast load times, and flawless user experiences across all Apple devices.",
    bullets: ["Optimized memory & CPU usage", "Smooth transitions & native animations", "Consistent performance at scale"],
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
  {
    icon: "🔐", color: "#28c76f", bg: "#e8faf0",
    title: "Enterprise-Grade Security & App Store Compliance",
    desc: "Security and compliance are built into every iOS app we develop. From encrypted data storage to secure API communication, we ensure your application meets Apple's privacy standards and enterprise security requirements.",
    bullets: ["Secure authentication & encrypted storage", "Apple privacy & App Store guideline compliance", "Reduced App Store rejection risks"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    flip: true,
  },
  {
    icon: "⚡", color: "#6e3ff3", bg: "#f0ebff",
    title: "Scalable, Future-Ready iOS Architecture",
    desc: "We design clean, modular, and scalable iOS architectures that grow seamlessly with your business — making future feature additions, integrations, and scaling effortless and cost-efficient.",
    bullets: ["Modular & maintainable codebase", "Easy upgrades & integrations", "Lower long-term maintenance cost"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
];

const SERVICES = [
  {
    icon: "📱", color: "#0071e3", bg: "#e8f4ff",
    title: "Native iOS App Development",
    desc: "High-performance native iOS applications using Swift, SwiftUI, and Objective-C — seamless, secure, and App Store–ready for iPhone and iPad.",
    bullets: ["Swift & SwiftUI development", "iPhone & iPad applications", "App Store submission & approval support"],
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
  {
    icon: "⚡", color: "#6e3ff3", bg: "#f0ebff",
    title: "Cross-Platform iOS Development",
    desc: "Launch faster with cross-platform development that delivers native-like performance on iOS while reducing development time and cost.",
    bullets: ["Flutter & React Native", "Shared codebase with native bridges", "Faster go-to-market strategy"],
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=900&auto=format&fit=crop",
    flip: true,
  },
  {
    icon: "🎨", color: "#28c76f", bg: "#e8faf0",
    title: "iOS UI/UX Design & Prototyping",
    desc: "Intuitive, visually stunning iOS interfaces that follow Apple's Human Interface Guidelines and deliver delightful user experiences.",
    bullets: ["SwiftUI & UIKit design systems", "Accessibility-first UX", "Interactive prototypes & user flows"],
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
  {
    icon: "⌚", color: "#ff6b35", bg: "#fff1ec",
    title: "Apple Watch & tvOS App Development",
    desc: "Extend your digital experience across Apple Watch and Apple TV with fast, responsive, and context-aware applications.",
    bullets: ["watchOS health & fitness apps", "tvOS media & OTT platforms", "Seamless Apple ecosystem integration"],
    img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=900&auto=format&fit=crop",
    flip: true,
  },
  {
    icon: "🔄", color: "#ff9f0a", bg: "#fff8e8",
    title: "iOS App Modernization & Migration",
    desc: "Modernize legacy iOS applications by migrating to Swift, upgrading UI, improving performance, and ensuring compatibility with the latest iOS versions.",
    bullets: ["Objective-C to Swift migration", "UI & performance enhancements", "Long-term maintenance & support"],
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
    flip: false,
  },
];

const DESIGN_FEATURES = [
  { icon: "👁️", color: "#0071e3", bg: "#e8f4ff", title: "User-Centered Experience Strategy", desc: "Every iOS interface starts with understanding user intent. We map user journeys, behaviors, and expectations before designing a single screen." },
  { icon: "📐", color: "#6e3ff3", bg: "#f0ebff", title: "Apple-Compliant Interface Design", desc: "Our designs strictly follow Apple's Human Interface Guidelines to ensure consistency, clarity, and a truly native look and feel across all iOS devices." },
  { icon: "♿", color: "#28c76f", bg: "#e8faf0", title: "Accessibility & Usability First", desc: "We design inclusive experiences with VoiceOver support, dynamic text sizing, contrast compliance, and intuitive navigation for all users." },
  { icon: "✨", color: "#ff6b35", bg: "#fff1ec", title: "Micro-Interactions & Visual Polish", desc: "Thoughtful animations, transitions, and feedback make interactions feel natural, responsive, and delightful — without overwhelming the user." },
];

const PROCESS_STEPS = [
  { step: "01", icon: "🔍", color: "#0071e3", bg: "#e8f4ff", title: "Discovery & Strategy", desc: "Requirements analysis, user research, platform feasibility, and technical planning." },
  { step: "02", icon: "✏️", color: "#6e3ff3", bg: "#f0ebff", title: "UI/UX Design", desc: "Wireframes, visual design, and interactive prototypes aligned with Apple HIG." },
  { step: "03", icon: "⚙️", color: "#28c76f", bg: "#e8faf0", title: "iOS Development", desc: "Swift & SwiftUI development with scalable architecture and clean code practices." },
  { step: "04", icon: "🧪", color: "#ff9f0a", bg: "#fff8e8", title: "QA & Testing", desc: "Functional testing, performance checks, and real-device validation." },
  { step: "05", icon: "☁️", color: "#5ac8fa", bg: "#e8f7ff", title: "App Store Launch", desc: "App Store submission, compliance checks, and approval support." },
  { step: "06", icon: "🛟", color: "#ff6b35", bg: "#fff1ec", title: "Support & Growth", desc: "Updates, performance optimization, and long-term product evolution." },
];

const ENGAGEMENT_MODELS = [
  {
    tag: "Best for MVPs", tagColor: "#0071e3", tagBg: "#e8f4ff",
    title: "Fixed Price Model",
    desc: "Ideal for projects with clearly defined requirements and timelines. We commit to a fixed scope, cost, and delivery schedule — ensuring predictable budgeting.",
    items: ["Clearly defined scope & milestones", "Fixed budget & delivery timeline", "Minimal client management effort", "Ideal for MVPs & small projects"],
    featured: false,
  },
  {
    tag: "★ Most Popular", tagColor: "#fff", tagBg: "#0071e3",
    title: "Dedicated Team Model",
    desc: "A dedicated team works exclusively on your product — acting as an extension of your in-house team. Perfect for scaling products and continuous development.",
    items: ["Full control over team & priorities", "Monthly billing with flexible scaling", "Best for SaaS & enterprise platforms", "Continuous delivery & long-term support"],
    featured: true,
  },
  {
    tag: "Flexible Scope", tagColor: "#6e3ff3", tagBg: "#f0ebff",
    title: "Time & Material Model",
    desc: "Designed for evolving requirements. You pay only for actual development time and effort, with complete transparency and agile execution.",
    items: ["Flexible scope & changing priorities", "Pay-as-you-go (hourly or monthly)", "Agile & iterative delivery approach", "Ideal for R&D & innovation-driven projects"],
    featured: false,
  },
];

const INDUSTRIES = [
  { title: "Enterprise & B2B Solutions", desc: "ERP systems, internal tools, secure dashboards and large-scale enterprise iOS applications.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" },
  { title: "Fintech & Banking", desc: "Mobile banking apps, payment gateways, digital wallets and fintech platforms with bank-grade security.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
  { title: "Healthcare & MedTech", desc: "Telemedicine apps, EHR systems, patient monitoring and HIPAA-compliant healthcare platforms.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
  { title: "E-Commerce & Retail", desc: "High-conversion shopping apps, inventory management, POS integration and omnichannel retail solutions.", img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=800&auto=format&fit=crop" },
  { title: "On-Demand & Logistics", desc: "Real-time booking, delivery tracking, fleet management and on-demand service iOS apps.", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop" },
  { title: "IoT & Smart Devices", desc: "iOS apps for smart devices, connected hardware, sensors and IoT ecosystems.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
  { title: "EdTech & eLearning", desc: "Online learning apps, LMS platforms, virtual classrooms and education iOS solutions.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
  { title: "Travel & Hospitality", desc: "Hotel booking apps, travel planning platforms, ticketing systems and hospitality solutions.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" },
  { title: "Media, OTT & Entertainment", desc: "Video streaming apps, OTT platforms, music apps and digital entertainment solutions.", img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop" },
];

const NDA_CARDS = [
  { icon: "🔒", bg: "#e8f4ff", title: "NDA Protected Engagement", desc: "All discussions, documentation, and deliverables are secured under a legally binding NDA." },
  { icon: "🧠", bg: "#e8faf0", title: "100% IP Ownership", desc: "You retain complete ownership of source code, data, and all project assets." },
  { icon: "📄", bg: "#f0ebff", title: "Transparent Contracts", desc: "Clear scope, milestones, timelines, payment terms, and exit clauses — no hidden surprises." },
  { icon: "🛡️", bg: "#fff8e8", title: "Security & Compliance", desc: "Secure development practices and compliance-ready processes aligned with enterprise standards." },
];

/* ─── Component ──────────────────────────────────────────── */
export default function IosDevelopment() {
  return (
    <div className="w-full bg-white text-slate-900 antialiased" style={{ fontFamily: "'Mona Sans', 'Geist', sans-serif" }}>

      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Lora:ital,wght@0,400;0,600;1,500&display=swap');

        .font-bricolage { font-family: 'Bricolage Grotesque', sans-serif; }
        .font-lora      { font-family: 'Lora', Georgia, serif; }

        @keyframes hero-in   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes float-a   { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-16px) rotate(1deg)} }
        @keyframes float-b   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float-c   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes spin-rev  { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
        @keyframes shimmer   { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes pan-blue  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes ticker    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes bar-in    { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes pop-in    { 0%{transform:scale(.8);opacity:0} 60%{transform:scale(1.04)} 100%{transform:scale(1);opacity:1} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(0,113,227,.4)} 50%{box-shadow:0 0 0 10px rgba(0,113,227,0)} }
        @keyframes img-reveal{ from{clip-path:inset(0 100% 0 0);opacity:0} to{clip-path:inset(0 0% 0 0);opacity:1} }
        @keyframes count-pop { 0%{transform:scale(.7) translateY(6px);opacity:0} 70%{transform:scale(1.05)} 100%{transform:scale(1) translateY(0);opacity:1} }

        .grad-text {
          background: linear-gradient(135deg, #0071e3 0%, #5ac8fa 40%, #6e3ff3 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pan-blue 5s ease infinite;
        }
        .shimmer-btn {
          background: linear-gradient(90deg,#0052cc,#0071e3,#5ac8fa,#0071e3,#0052cc);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          transition: transform .2s, box-shadow .2s;
        }
        .shimmer-btn:hover { transform:translateY(-2px); box-shadow:0 14px 36px rgba(0,113,227,.35); }

        .glass-card {
          background: rgba(255,255,255,.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.7);
        }

        .apple-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
          border: 1.5px solid #f0f0f5;
        }
        .apple-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(0,113,227,.1);
          border-color: rgba(0,113,227,.2);
        }

        .service-img {
          border-radius: 24px;
          overflow: hidden;
          transition: box-shadow .4s;
        }
        .service-img:hover { box-shadow: 0 32px 64px rgba(0,0,0,.14); }
        .service-img img { transition: transform .6s cubic-bezier(.22,1,.36,1); }
        .service-img:hover img { transform: scale(1.05); }

        .industry-card {
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .35s;
        }
        .industry-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 28px 56px rgba(0,0,0,.18); }
        .industry-card img { transition: transform .7s cubic-bezier(.22,1,.36,1); }
        .industry-card:hover img { transform: scale(1.08); }

        .engagement-card {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
          border: 1.5px solid #f0f0f5;
        }
        .engagement-card:hover { transform: translateY(-8px); }

        .process-step {
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
          border: 1.5px solid #f0f0f5;
        }
        .process-step:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(0,0,0,.08); }

        .design-item {
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          border: 1.5px solid #f0f0f5;
        }
        .design-item:hover { transform: translateX(8px); box-shadow: 0 12px 32px rgba(0,113,227,.08); border-color: rgba(0,113,227,.2); }

        .contact-card {
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, border-color .3s;
          border: 1.5px solid #f0f0f5;
          overflow: hidden;
        }
        .contact-card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(0,113,227,.1); border-color: rgba(0,113,227,.25); }
        .contact-card .shimmer-sweep {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity .3s;
        }
        .contact-card:hover .shimmer-sweep { opacity: 1; transform: translateX(100%); transition: transform .7s ease, opacity .3s; }

        .dot-pattern {
          background-image: radial-gradient(circle, rgba(0,113,227,.1) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .ticker-wrap { overflow: hidden; white-space: nowrap; }
        .ticker-inner { display: inline-block; animation: ticker 22s linear infinite; }

        .highlight-rail { height: 3px; background: linear-gradient(90deg,#0071e3,#5ac8fa,#6e3ff3); animation: shimmer 2s linear infinite; background-size:200% auto; }

        .outline-btn {
          border: 2px solid #e5e7eb;
          transition: all .25s;
        }
        .outline-btn:hover { border-color: #93c5fd; color: #0071e3; background: #f0f7ff; }

        .bullet-check {
          display: flex; align-items: center; gap: 10px;
        }
        .bullet-check::before {
          content: '';
          width: 20px; height: 20px; flex-shrink: 0;
          border-radius: 50%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230071e3' fill-opacity='.12'/%3E%3Cpath d='M5.5 10.5l3 3 5-6' stroke='%230071e3' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/contain no-repeat;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden dot-pattern bg-white">
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-48 left-1/4 w-[700px] h-[700px] rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse,rgba(0,113,227,.2),transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse,rgba(110,63,243,.18),transparent 70%)", filter: "blur(70px)", animation: "float-b 10s ease-in-out infinite" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15"
            style={{ background: "radial-gradient(ellipse,rgba(90,200,250,.2),transparent 70%)", filter: "blur(60px)", animation: "float-c 12s ease-in-out 3s infinite" }} />
        </div>

        {/* Decorative rings */}
        <div className="absolute right-20 top-16 w-80 h-80 opacity-8 hidden xl:block pointer-events-none">
          <svg viewBox="0 0 300 300" className="w-full h-full" style={{ animation: "spin-slow 30s linear infinite" }}>
            <circle cx="150" cy="150" r="140" fill="none" stroke="url(#ring1)" strokeWidth="1" strokeDasharray="10 6" />
            <defs><linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0071e3" /><stop offset="100%" stopColor="#6e3ff3" /></linearGradient></defs>
          </svg>
        </div>
        <div className="absolute right-32 top-28 w-56 h-56 opacity-8 hidden xl:block pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: "spin-rev 22s linear infinite" }}>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#5ac8fa" strokeWidth="1.2" strokeDasharray="6 10" />
          </svg>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 lg:gap-20 items-center w-full">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 mb-8"
              style={{ animation: "pop-in .6s cubic-bezier(.34,1.56,.64,1) .1s both", fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }} />
              Premium iOS Development
            </div>

            <h1 className="font-bricolage text-5xl sm:text-6xl md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.06] mb-6"
              style={{ animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .15s both" }}>
              Build Premium,<br />
              <span className="grad-text">High-Performance</span><br />
              iOS Applications
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10"
              style={{ animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .3s both" }}>
              We build high-performance, secure, and scalable iPhone and iPad applications. Our expert Swift and SwiftUI developers craft intuitive Apple-compliant apps that deliver exceptional user experiences and long-term business value.
            </p>

            <div className="flex flex-wrap gap-4 mb-14" style={{ animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .45s both" }}>
              <button className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base shadow-xl">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              </button>
              <button className="outline-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-700 text-base">
                View Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4" style={{ animation: "hero-in .8s cubic-bezier(.22,1,.36,1) .6s both" }}>
              {[
                { val: 300, suffix: "+", label: "iOS Apps Shipped" },
                { val: 99, suffix: "%", label: "App Store Approval Rate" },
                { val: 8, suffix: "+", label: "Years iOS Expertise" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-center hover:shadow-md hover:border-blue-200 transition-all"
                  style={{ animation: `count-pop .6s cubic-bezier(.34,1.56,.64,1) ${700 + i * 100}ms both` }}>
                  <div className="font-bricolage text-3xl font-bold text-blue-600"><CountUp to={s.val} suffix={s.suffix} /></div>
                  <div className="text-xs text-slate-500 mt-1 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — iOS Phone Mockup */}
          <div className="flex justify-center items-center relative">
            <div className="relative" style={{ animation: "float-a 6s ease-in-out infinite" }}>
              {/* Phone */}
              <div className="relative w-[260px] mx-auto">
                <div className="rounded-[2.8rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden"
                  style={{ boxShadow: "0 50px 100px rgba(0,0,0,.25), 0 0 0 1px rgba(255,255,255,.08) inset" }}>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-full z-10" />
                  <div className="h-[520px] overflow-hidden"
                    style={{ background: "linear-gradient(160deg,#f0f7ff,#f5f0ff)" }}>
                    <div className="p-5 pt-10">
                      {/* Status bar */}
                      <div className="flex items-center justify-between mb-6 text-[10px] font-semibold text-slate-700">
                        <span>9:41</span>
                        <div className="flex gap-1 items-center">
                          <svg width="14" height="10" viewBox="0 0 14 10"><rect x="0" y="3" width="3" height="7" rx="1" fill="#1c1c1e"/><rect x="4" y="2" width="3" height="8" rx="1" fill="#1c1c1e"/><rect x="8" y="0" width="3" height="10" rx="1" fill="#1c1c1e"/><rect x="12" y="1" width="2" height="8" rx="1" fill="#1c1c1e" opacity=".3"/></svg>
                          <span>●●●</span>
                          <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="1" width="18" height="9" rx="2" stroke="#1c1c1e" strokeWidth="1" fill="none"/><rect x="1.5" y="2.5" width="13" height="6" rx="1" fill="#0071e3"/><rect x="19" y="3" width="2" height="5" rx="1" fill="#1c1c1e" opacity=".4"/></svg>
                        </div>
                      </div>

                      {/* App header */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-slate-400">Welcome back 👋</div>
                          <div className="font-bricolage font-bold text-slate-900 text-sm">iOS Portfolio</div>
                        </div>
                        <div className="w-9 h-9 rounded-full shadow-md overflow-hidden"
                          style={{ background: "linear-gradient(135deg,#0071e3,#5ac8fa)" }}>
                          <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">A</div>
                        </div>
                      </div>

                      {/* Featured card */}
                      <div className="rounded-2xl p-4 mb-4 text-white relative overflow-hidden"
                        style={{ background: "linear-gradient(135deg,#0071e3,#6e3ff3)" }}>
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full"
                          style={{ background: "radial-gradient(circle,#fff,transparent)", transform: "translate(30%,-30%)" }} />
                        <div className="text-[10px] opacity-80 mb-1 font-medium">Today's Highlights</div>
                        <div className="font-bricolage text-xl font-bold">24 Active Projects</div>
                        <div className="text-[10px] opacity-75 mt-2 flex items-center gap-1">↑ 3 new this week</div>
                      </div>

                      {/* Quick stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[
                          { label: "Apps", val: "148", color: "#0071e3" },
                          { label: "Rating", val: "4.9★", color: "#ff9f0a" },
                          { label: "Users", val: "2M+", color: "#28c76f" },
                        ].map((item, i) => (
                          <div key={i} className="rounded-xl bg-white/80 p-2.5 text-center shadow-sm">
                            <div className="font-bold text-sm" style={{ color: item.color }}>{item.val}</div>
                            <div className="text-[9px] text-slate-400 mt-0.5">{item.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Recent apps list */}
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Recent Apps</div>
                      {[
                        { name: "FinVault", cat: "Banking", color: "#0071e3" },
                        { name: "HealthPulse", cat: "Healthcare", color: "#28c76f" },
                        { name: "ShopX Pro", cat: "E-Commerce", color: "#ff9f0a" },
                      ].map((app, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-2 border-b border-slate-100 last:border-0">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm shrink-0"
                            style={{ background: `linear-gradient(135deg,${app.color},${app.color}99)` }}>
                            {app.name[0]}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-slate-800">{app.name}</div>
                            <div className="text-[10px] text-slate-400">{app.cat}</div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-14 top-20 glass-card rounded-2xl shadow-xl px-4 py-3" style={{ animation: "float-b 4s ease-in-out .5s infinite" }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div><div className="text-xs font-bold text-slate-800">Swift 5.9</div><div className="text-[10px] text-slate-400">Latest SDK</div></div>
                </div>
              </div>
              <div className="absolute -right-12 top-32 glass-card rounded-2xl shadow-xl px-4 py-3" style={{ animation: "float-c 5s ease-in-out 1s infinite" }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍎</span>
                  <div><div className="text-xs font-bold text-slate-800">HIG Compliant</div><div className="text-[10px] text-slate-400">Apple Certified</div></div>
                </div>
              </div>
              <div className="absolute -right-8 bottom-20 rounded-2xl shadow-xl px-4 py-2.5"
                style={{ background: "linear-gradient(135deg,#0071e3,#5ac8fa)", animation: "float-b 6s ease-in-out .8s infinite" }}>
                <div className="text-white text-xs font-bold">✓ App Store Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm border-t border-slate-100 py-3 ticker-wrap">
          <div className="ticker-inner">
            {[...Array(2)].flatMap(() =>
              ["Swift", "SwiftUI", "Objective-C", "Xcode", "Core Data", "ARKit", "HealthKit", "CloudKit", "TestFlight", "App Store Connect", "UIKit", "Combine", "Metal", "MapKit", "StoreKit"]
            ).map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6 text-xs text-slate-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />{t}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 highlight-rail" />
      </section>

      {/* ─── TRUSTED PARTNER ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(0,113,227,.1),transparent)", filter: "blur(60px)" }} />

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">Why Choose Us</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              A Trusted iOS Development<br /><span className="grad-text">Partner for Modern Businesses</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">Businesses choose us not just for development, but for our deep understanding of the Apple ecosystem, focus on quality, and commitment to long-term success.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_CARDS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="apple-card rounded-3xl bg-white p-7 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                    style={{ background: c.bg }}>
                    {c.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-slate-900 text-base mb-3">{c.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BUSINESSES CHOOSE US ─── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">Why We're Different</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Why Businesses Choose Us<br /><span className="grad-text">for iOS App Development</span>
            </h2>
            <p className="text-lg text-slate-600">We help startups and enterprises build secure, scalable, and Apple-compliant applications that deliver exceptional performance.</p>
          </Reveal>

          <div className="space-y-24">
            {WHY_ROWS.map((row, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${row.flip ? "lg:[&>*:first-child]:order-last" : ""}`}>
                <Reveal direction={row.flip ? 40 : 40} x={row.flip ? 40 : -40} y={0} delay={80}>
                  <div className="service-img shadow-2xl" style={{ height: "400px" }}>
                    <img src={row.img} alt={row.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ borderRadius: "24px", background: `linear-gradient(135deg,${row.color}15,transparent)`, pointerEvents: "none" }} />
                  </div>
                </Reveal>
                <Reveal x={row.flip ? -40 : 40} y={0} delay={160}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0" style={{ background: row.bg }}>
                        {row.icon}
                      </div>
                      <h3 className="font-bricolage text-2xl font-bold text-slate-900 leading-tight">{row.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-7">{row.desc}</p>
                    <div className="space-y-3">
                      {row.bullets.map((b, j) => (
                        <div key={j} className="bullet-check text-slate-700 font-medium">{b}</div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── END-TO-END SERVICES ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">Our Services</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              End-to-End iOS App<br /><span className="grad-text">Development Services</span>
            </h2>
            <p className="text-lg text-slate-600">Full-cycle iOS app development services designed to help you build secure, scalable, high-performing applications across the entire Apple ecosystem.</p>
          </Reveal>

          <div className="space-y-24">
            {SERVICES.map((s, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${s.flip ? "lg:[&>*:first-child]:order-last" : ""}`}>
                <Reveal x={s.flip ? 40 : -40} y={0} delay={80}>
                  <div className="service-img shadow-2xl" style={{ height: "380px" }}>
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </Reveal>
                <Reveal x={s.flip ? -40 : 40} y={0} delay={160}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm flex-shrink-0" style={{ background: s.bg }}>
                        {s.icon}
                      </div>
                      <h3 className="font-bricolage text-2xl font-bold text-slate-900">{s.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-7">{s.desc}</p>
                    <div className="space-y-3">
                      {s.bullets.map((b, j) => <div key={j} className="bullet-check text-slate-700 font-medium">{b}</div>)}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DESIGN EXCELLENCE ─── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">Design Philosophy</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              iOS UI/UX <span className="grad-text">Design Excellence</span>
            </h2>
            <p className="text-lg text-slate-600">We design iOS experiences that feel effortless, intuitive, and unmistakably Apple — guided by Human Interface Guidelines and real user behavior.</p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              {DESIGN_FEATURES.map((d, i) => (
                <Reveal key={i} delay={i * 80} x={-30} y={0}>
                  <div className="design-item rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm" style={{ background: d.bg }}>
                        {d.icon}
                      </div>
                      <div>
                        <h3 className="font-bricolage font-bold text-slate-900 text-base mb-2">{d.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal x={40} y={0} delay={200}>
              <div className="lg:sticky lg:top-32">
                <div className="service-img shadow-2xl rounded-3xl overflow-hidden" style={{ height: "560px" }}>
                  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=700&auto=format&fit=crop"
                    alt="iOS UI UX Design" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(0,113,227,.1),transparent)", pointerEvents: "none" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label text-blue-600 mb-4 block">Development Process</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Our iOS App<br /><span className="grad-text">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600">A transparent, structured, and Apple-aligned process to transform your idea into a reliable, high-performing iOS application.</p>
          </Reveal>

          {/* Horizontal connector */}
          <div className="hidden lg:block relative mb-4">
            <div className="absolute top-8 left-[8%] right-[8%] h-px opacity-20"
              style={{ background: "linear-gradient(90deg,#0071e3,#5ac8fa,#6e3ff3,#28c76f,#ff9f0a,#ff6b35)" }} />
            <div className="absolute top-8 left-[8%] right-[8%] h-px bar-in opacity-40"
              style={{ background: "linear-gradient(90deg,#0071e3,#5ac8fa,#6e3ff3,#28c76f,#ff9f0a,#ff6b35)", transformOrigin: "left", animationDelay: "300ms" }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="process-step rounded-3xl bg-white p-6 shadow-sm h-full relative group">
                  <span className="absolute -top-3 left-4 px-3 py-1 rounded-full text-white text-[10px] font-bold shadow"
                    style={{ background: `linear-gradient(135deg,${p.color},${p.color}cc)` }}>
                    {p.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mt-2 mb-4 shadow-sm"
                    style={{ background: p.bg }}>
                    {p.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-slate-900 text-sm mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">Work With Us</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Flexible <span className="grad-text">Engagement Models</span>
            </h2>
            <p className="text-lg text-slate-600">Choose an engagement model that aligns with your project scope, budget, and long-term business goals.</p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className={`engagement-card rounded-3xl p-8 h-full relative ${m.featured ? "shadow-2xl" : "bg-white shadow-sm"}`}
                  style={m.featured ? { background: "linear-gradient(160deg,#0052cc,#0071e3,#5ac8fa)", border: "none" } : {}}>
                  {m.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-white text-blue-600 font-bold text-xs shadow-lg">
                      ★ Most Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                      style={{ background: m.featured ? "rgba(255,255,255,.2)" : m.tagBg, color: m.featured ? "#fff" : m.tagColor }}>
                      {m.tag}
                    </span>
                    <div className={`text-2xl ${m.featured ? "opacity-80" : ""}`}>
                      {i === 0 ? "🎯" : i === 1 ? "👥" : "⏱️"}
                    </div>
                  </div>
                  <h3 className={`font-bricolage text-2xl font-bold mb-3 ${m.featured ? "text-white" : "text-slate-900"}`}>{m.title}</h3>
                  <p className={`leading-relaxed mb-6 text-sm ${m.featured ? "text-blue-100" : "text-slate-600"}`}>{m.desc}</p>
                  <div className="space-y-2.5">
                    {m.items.map((item, j) => (
                      <div key={j} className={`flex items-center gap-2 text-sm ${m.featured ? "text-blue-100" : "text-slate-600"}`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${m.featured ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPLIANCE & SECURITY ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">Trust & Security</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Compliance, Security<br /><span className="grad-text">&amp; Legal Assurance</span>
            </h2>
            <p className="text-lg text-slate-600">We operate with strict security, compliance, and legal frameworks to ensure complete confidentiality and data protection.</p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              {[
                { icon: "🔒", bg: "#e8f4ff", title: "NDA Protected Engagement", desc: "All discussions and deliverables are secured under a legally binding NDA." },
                { icon: "🧠", bg: "#e8faf0", title: "100% IP Ownership", desc: "You retain complete ownership of source code, data, and all project assets." },
                { icon: "🏛️", bg: "#f0ebff", title: "ISO-Aligned Security", desc: "Development workflows aligned with ISO 27001 security principles and controls." },
                { icon: "🌍", bg: "#fff8e8", title: "GDPR & Global Data Privacy", desc: "Strict data privacy measures aligned with GDPR and international regulations." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 70} x={-30} y={0}>
                  <div className="apple-card rounded-2xl bg-white p-5 shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm" style={{ background: item.bg }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bricolage font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="lg:col-span-2" x={40} y={0} delay={200}>
              <div className="rounded-3xl border border-slate-100 bg-white p-10 md:p-12 shadow-sm">
                <h3 className="font-bricolage text-2xl md:text-3xl font-bold mb-7 text-slate-900">Built for Enterprise Trust &amp; Long-Term Partnerships</h3>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>At <strong className="text-slate-900">Albos Technologies</strong>, security and trust are embedded into every phase of our software development lifecycle. Your business data and intellectual property remain fully protected from initial discussions to deployment.</p>
                  <p>We follow industry-recognized best practices aligned with <strong className="text-slate-900">ISO 27001</strong>, <strong className="text-slate-900">GDPR</strong>, and enterprise security standards — including access controls, encrypted storage, secure APIs, and role-based permissions.</p>
                  <p>All legal, compliance, and security documentation is shared transparently under NDA, giving startups, enterprises, and regulated industries complete peace of mind.</p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="/contact" className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg">
                    Request NDA &amp; Compliance Details →
                  </a>
                  <p className="text-xs text-slate-400">NDA-protected · No obligation · Enterprise-grade confidentiality</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* NDA Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {NDA_CARDS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="apple-card rounded-2xl bg-white p-7 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm" style={{ background: c.bg }}>
                    {c.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-slate-900 text-sm mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ownership banner */}
          <Reveal className="mt-12" delay={100}>
            <div className="rounded-3xl p-10 text-center text-white overflow-hidden relative"
              style={{ background: "linear-gradient(135deg,#0052cc,#0071e3,#5ac8fa)" }}>
              <div className="absolute inset-0 opacity-10"
                style={{ background: "radial-gradient(circle at 20% 50%,#fff,transparent 50%), radial-gradient(circle at 80% 50%,#6e3ff3,transparent 50%)" }} />
              <div className="relative z-10">
                <h3 className="font-bricolage text-2xl md:text-3xl font-bold mb-4">Your Idea. Your Code. Your Ownership.</h3>
                <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">We believe trust is the foundation of successful partnerships. Our contracts are designed to protect your interests, ensure confidentiality, and build long-term collaboration.</p>
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition shadow-lg">
                  Request NDA &amp; Contract Details →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f8f9ff,#fff)" }}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-blue-600 mb-4 block">Industries</span>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Industries <span className="grad-text">We Serve</span>
            </h2>
            <p className="text-lg text-slate-600">We design and develop iOS applications for multiple industries — delivering secure, scalable and performance-driven mobile solutions.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="industry-card relative h-[340px] rounded-3xl overflow-hidden shadow-lg cursor-default">
                  <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,.82) 0%,rgba(0,0,0,.35) 55%,transparent 100%)" }} />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <h3 className="font-bricolage font-bold text-white text-lg mb-2">{ind.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#f0f7ff 0%,#f5f0ff 50%,#f0f9ff 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(ellipse,rgba(0,113,227,.18),transparent)", filter: "blur(60px)", animation: "float-a 9s ease-in-out infinite" }} />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-25" style={{ background: "radial-gradient(ellipse,rgba(110,63,243,.16),transparent)", filter: "blur(60px)", animation: "float-b 7s ease-in-out 2s infinite" }} />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-blue-600 mb-5 block">Let's Build Together</span>
            <h2 className="font-bricolage text-4xl md:text-6xl font-bold mb-5 leading-tight">
              Ready to Grow<br /><span className="grad-text">Your Business?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
              Speak with our experts today. We help brands scale with powerful iOS development, design, automation, and cloud solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="shimmer-btn px-10 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl">
                Get a Free Quote
              </button>
              <a href="tel:+919766650411" className="outline-btn inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-slate-700 font-semibold text-lg">
                📞 Call Sales
              </a>
            </div>
          </Reveal>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: "📞", label: "Phone", val: "+91 97666 50411", href: "tel:+919766650411" },
              { icon: "✉️", label: "Email", val: "info@albostechnologies.com", href: "mailto:info@albostechnologies.com" },
              { icon: "📍", label: "Office", val: "Kunal Plaza, Pune MH 411019", href: null },
              { icon: "🕐", label: "Office Hours", val: "Mon–Sat · 10 AM–7 PM IST", href: null },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <a href={c.href || "#"}
                  className={`contact-card block p-7 bg-white rounded-2xl shadow-sm text-center relative ${!c.href ? "cursor-default" : ""}`}>
                  <div className="shimmer-sweep" />
                  <div className="text-3xl mb-3 relative z-10">{c.icon}</div>
                  <div className="section-label text-slate-400 mb-1 relative z-10">{c.label}</div>
                  <div className="text-sm font-semibold text-slate-800 leading-snug relative z-10">{c.val}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}