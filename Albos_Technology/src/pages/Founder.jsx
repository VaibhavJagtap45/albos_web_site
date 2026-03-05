
// import React from 'react';
// import founderImg from '/src/assets/founder.jpeg';

// const Founder = ({ imageSrc = founderImg }) => {
//   return (
//     <section className="max-w-6xl mx-auto p-6">
//       <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Image column */}
//           <div className="w-full md:w-1/2">
//             <img
//               src={imageSrc}
//               alt="ChandraPrakash Singh Tomar - Founder"
//               className="w-full h-72 md:h-full object-cover block rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
//             />
//           </div>

//           {/* Text column */}
//           <div className="w-full md:w-1/2 p-6 md:p-10">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900 dark:text-gray-100">
//               ChandraPrakash Singh Tomar
//             </h2>

//             <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
//               ChandraPrakash Singh Tomar is the founder and driving force behind Albos Technologies, a professional IT solutions
//               company established in 2014. With over a decade of hands-on experience in the IT industry, he has successfully
//               delivered 5,000+ projects for corporate clients and startups across diverse industries, with a strong specialization
//               in the gaming sector.
//             </p>

//             <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
//               Under his leadership, Albos Technologies has built a reputation for fast support, affordable pricing, and high-quality
//               work. The focus has always been on understanding client needs and delivering reliable, scalable, and future-ready
//               software solutions.
//             </p>

//             <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
//               ChandraPrakash believes in long-term partnerships rather than one-time projects. Every solution is backed by strong
//               after-sales support and maintenance, ensuring clients feel confident and supported even after project delivery.
//             </p>

//             <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
//               With deep expertise in software development and application development, he ensures that every project meets professional
//               standards, business goals, and technical excellence. His approach is simple—deliver quality work on time, provide honest
//               guidance, and help clients grow through technology.
//             </p>

//             <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
//               Today, ChandraPrakash Singh Tomar continues to lead Albos Technologies with a clear vision: to be a trusted technology
//               partner for businesses seeking dependable, efficient, and cost-effective IT solutions.
//             </p>

//             <div className="flex gap-3">
//               <a
//                 href="#contact"
//                 className="inline-block px-4 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
//               >
//                 Contact
//               </a>

//               <a
//                 href="#learn"
//                 className="inline-block px-4 py-2 rounded-lg border border-slate-200 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
//               >
//                 Learn more
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founder;


import React from "react";
import logo from "../assets/albos.png";
import founderImg from "../assets/founder.jpeg";

/* ---------------- Badge ---------------- */
const Badge = ({ text, icon }) => (
  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 border border-sky-200 shadow-sm">
    {icon && <span className="text-sky-500">{icon}</span>}
    {text}
  </span>
);

/* ---------------- Info Card ---------------- */
const InfoCard = ({ title, children, icon }) => (
  <div className="group rounded-xl border border-sky-100 bg-white/90 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-2 mb-2">
      {icon && <span className="text-sky-600 text-lg">{icon}</span>}
      <h4 className="text-sky-800 font-semibold text-sm uppercase tracking-wide">
        {title}
      </h4>
    </div>

    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
      {children}
    </p>
  </div>
);

/* ---------------- Component ---------------- */
const Founder = ({ imageSrc = founderImg }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">

      <div className="relative rounded-3xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 border border-sky-100 shadow-xl overflow-visible">

        {/* Gradient Orbs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl" />

        {/* Logo */}
        <img
          src={logo}
          alt="Albos Technologies"
          className="hidden md:block absolute top-6 right-6 w-24 opacity-80 z-10"
        />

        {/* ===== GRID ===== */}
        {/* IMPORTANT: lg not md */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start z-20">

          {/* ===================================================== */}
          {/* LEFT SIDE : IMAGE + PROFILE CARD */}
          {/* ===================================================== */}
          <div className="relative">

            {/* Image wrapper */}
            <div className="p-4 md:p-6 lg:p-0">

          {/* Responsive natural image container */}
<div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-sky-50 flex items-center justify-center">

  <img
    src={imageSrc}
    alt="ChandraPrakash Singh Tomar - Founder & CEO"
    className="max-h-[520px] w-auto h-auto object-contain transform hover:scale-105 transition-transform duration-[1200ms] ease-out"
  />

</div>
            </div>

            {/* PROFILE CARD */}
            {/* mobile -> below image | desktop -> floating */}
            <div className="relative mt-6 lg:-mt-28 mx-4 md:mx-8">

              <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-sky-100 shadow-xl p-6 md:p-7">

                {/* name */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                      ChandraPrakash Singh Tomar
                    </h3>

                    <p className="text-sky-600 font-medium text-sm mt-1 flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                      Founder & CEO — Albos Technologies
                    </p>
                  </div>

                  <div className="bg-sky-100 rounded-full p-2 shrink-0">
                    <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                </div>

                {/* description */}
                <p className="text-sm text-slate-600 mt-5 leading-relaxed border-l-2 border-sky-200 pl-4 italic">
                  Visionary leader with 10+ years in software and application development.
                  Specialises in building scalable solutions and delivering high-quality
                  products with strong after-sales support.
                </p>

                {/* badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge icon="⭐" text="10+ Years" />
                  <Badge icon="🚀" text="5000+ Projects" />
                  <Badge icon="🎮" text="Gaming Specialist" />
                  <Badge icon="🏆" text="Industry Expert" />
                </div>

              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT SIDE : CONTENT */}
          {/* ===================================================== */}
          <div className="px-5 md:px-10 pb-10 lg:pt-14 flex flex-col gap-6">

            <div className="space-y-2">
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full inline-block">
                Leadership
              </span>

              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-sky-800 bg-clip-text text-transparent">
                About the Founder
              </h2>
            </div>

            <div className="grid gap-4">
              <InfoCard title="Professional Journey" icon="📋">
                Founded Albos Technologies in 2014 and successfully delivered solutions
                for startups and enterprises with scalable architecture and performance-focused systems.
              </InfoCard>

              <InfoCard title="Leadership Philosophy" icon="💡">
                Quick support, honest guidance, transparent pricing, and long-term maintenance
                ensure lasting client relationships and trust.
              </InfoCard>

              <InfoCard title="Vision & Mission" icon="🎯">
                To become a trusted technology partner delivering reliable,
                efficient, and cost-effective digital solutions for growing businesses.
              </InfoCard>

              <InfoCard title="Core Values" icon="💎">
                Excellence, integrity, innovation, and commitment to client success guide every project.
              </InfoCard>
            </div>

            {/* footer stats */}
            <div className="mt-6 pt-6 border-t border-sky-100">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">

                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-sky-400 rounded-full" /> Founded 2014
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full" /> Fast Support
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" /> Future-ready
                  </span>
                </div>

                <span className="font-medium text-slate-600">
                  Trusted by 500+ clients
                </span>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;