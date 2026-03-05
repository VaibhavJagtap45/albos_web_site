// import React from 'react';
// import {Phone,  Mail,  MapPin,  Clock,  ArrowRight,  CircleCheckBig, ShieldCheck, Cpu, Network, FileLock, Radio, Cloud,CloudCog, ChartLine, Layers, MemoryStick, Settings, BatteryCharging, Microchip, Activity, Signal, Wifi, Bluetooth, Database, RefreshCcw, Users, Globe, Link, MessageSquare, Boxes, Shield, PhoneCall, Video, } from 'lucide-react';
// const IoTDevelopmentPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}


//       {/* Hero Section */}
//       <section className="relative w-full mx-auto pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 overflow-hidden">
//             <svg className="pointer-events-none absolute inset-0 fill-gray-400/30 stroke-gray-400/30 w-full h-full">
//               <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
//               </pattern>
//               <rect width="100%" height="100%" fill="url(#pattern)" />
//             </svg>
//           </div>
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] md:w-[850px] md:h-[850px] lg:w-[1100px] lg:h-[1100px] xl:w-[1500px] xl:h-[1500px] bg-[radial-gradient(circle,rgba(150,150,255,0.25)_0%,transparent_70%)] opacity-70 pointer-events-none" />
//         </div>
        
//         <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
//           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] xl:text-[3.2rem] font-semibold leading-snug md:leading-tight mb-4 sm:mb-6">
//                 IoT & Embedded Development Services
//               </h1>
//               <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-slate-700">
//                 We build secure, scalable IoT and embedded systems — from low-power firmware and custom hardware to cloud platforms, device management, and AI-driven automation for industries and smart products.
//               </p>
//               <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
//                 <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all">
//                   Get a Free Quote
//                   <PhoneCall className="w-4 h-4" />
//                 </button>
//                 <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-2xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all">
//                   View Our Work
//                   <Video className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1 flex justify-center w-full max-w-[240px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[520px] overflow-hidden">
//               <img 
//                 alt="IoT & Embedded Development" 
//                 width={520} 
//                 height={520} 
//                 src="/iot-application-development-services-services.svg"
//                 className="object-contain drop-shadow-2xl scale-95 sm:scale-100"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trusted Partner Section */}
//       <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               A Trusted Embedded & IoT Engineering Partner for
//               <span className="text-blue-600"> Mission-Critical Systems</span>
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We help startups, enterprises, and industrial organizations design and scale embedded systems and IoT solutions that are secure, reliable, and built for real-world production environments.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
//                 Engineering Confidence Beyond Prototypes
//               </h3>
//               <p className="text-slate-700 leading-relaxed mb-6">
//                 Embedded and IoT systems operate in complex, often high-risk environments. Our engineering approach focuses on long-term reliability, scalability, and security — not just proof-of-concepts.
//               </p>
//               <p className="text-slate-700 leading-relaxed mb-8">
//                 From firmware and hardware bring-up to cloud-scale IoT platforms, we ensure every solution is production-ready, maintainable, and compliant with enterprise standards.
//               </p>
//               <ul className="space-y-3 text-slate-700">
//                 <li className="flex items-start gap-3">
//                   <CircleCheckBig className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>Designed for industrial and enterprise deployments</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CircleCheckBig className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>Tested for scalability, fault tolerance, and uptime</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CircleCheckBig className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>Aligned with security and compliance best practices</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Embedded and IoT engineering team working on industrial systems"
//                 className="rounded-3xl shadow-2xl object-cover w-full h-auto"
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//             <FeatureCard 
//               icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
//               title="Security by Design"
//               description="Security embedded across firmware, devices, communication, and cloud layers."
//             />
//             <FeatureCard 
//               icon={<Cpu className="w-6 h-6 text-green-600" />}
//               title="Deep Embedded Expertise"
//               description="RTOS, device drivers, hardware bring-up, and low-power optimization."
//             />
//             <FeatureCard 
//               icon={<Network className="w-6 h-6 text-purple-600" />}
//               title="Scalable IoT Systems"
//               description="Architected for thousands to millions of connected devices."
//             />
//             <FeatureCard 
//               icon={<FileLock className="w-6 h-6 text-orange-600" />}
//               title="NDA & IP Protection"
//               description="Complete ownership of source code, data, and project assets."
//             />
//           </div>
//         </div>
//       </section>

//       {/* What We Do Section */}
//       <section className="relative py-32 bg-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               What We Do in Embedded & IoT Development
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We deliver end-to-end embedded systems and IoT development services that connect hardware, firmware, cloud platforms, and applications into reliable, scalable solutions.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
//             <ServiceCard 
//               icon={<Cpu className="w-7 h-7 text-blue-600" />}
//               title="Embedded Systems Engineering"
//               description="Firmware development for microcontrollers and processors, including RTOS, bare-metal programming, device drivers, and low-power optimization."
//               iconBg="bg-blue-100"
//             />
//             <ServiceCard 
//               icon={<Radio className="w-7 h-7 text-green-600" />}
//               title="Device Connectivity & Communication"
//               description="Reliable device-to-device and device-to-cloud connectivity using modern wireless technologies and IoT protocols."
//               iconBg="bg-green-100"
//             />
//             <ServiceCard 
//               icon={<CloudCog className="w-7 h-7 text-purple-600" />}
//               title="IoT Cloud Platforms"
//               description="Scalable cloud infrastructure for device management, data ingestion, OTA updates, and secure backend services."
//               iconBg="bg-purple-100"
//             />
//             <ServiceCard 
//               icon={<ChartLine className="w-7 h-7 text-orange-600" />}
//               title="Monitoring, Analytics & Automation"
//               description="Real-time dashboards, analytics, alerts, and automation systems that turn IoT data into actionable insights."
//               iconBg="bg-orange-100"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Embedded Systems Development Services */}
//       <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               Embedded Systems Development Services
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We design and develop robust embedded systems by combining low-level firmware engineering, hardware expertise, and performance optimization for production-grade devices.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//             <div className="space-y-14">
//               <EmbeddedServiceItem 
//                 icon={<Cpu className="w-7 h-7 text-blue-600" />}
//                 title="Firmware Development (Bare-Metal & RTOS)"
//                 description="Development of reliable, efficient firmware for microcontrollers and processors using bare-metal programming or real-time operating systems (RTOS)."
//               />
//               <EmbeddedServiceItem 
//                 icon={<MemoryStick className="w-7 h-7 text-green-600" />}
//                 title="Device Drivers & BSP Development"
//                 description="Custom driver development for sensors, peripherals, communication modules, and board support packages tailored to your hardware design."
//               />
//               <EmbeddedServiceItem 
//                 icon={<Settings className="w-7 h-7 text-purple-600" />}
//                 title="Hardware Bring-Up & Board Validation"
//                 description="End-to-end hardware bring-up including bootloader setup, peripheral validation, debugging, and performance tuning on custom and reference boards."
//               />
//               <EmbeddedServiceItem 
//                 icon={<BatteryCharging className="w-7 h-7 text-orange-600" />}
//                 title="Low-Power & Performance Optimization"
//                 description="Power-efficient firmware design, sleep-mode optimization, memory tuning, and performance profiling for battery-powered and industrial embedded devices."
//               />
//             </div>
//             <div className="space-y-10">
//               <img 
//                 src="https://images.unsplash.com/photo-1551703616-e5a729ff0185?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Embedded firmware and hardware development"
//                 className="rounded-3xl shadow-xl object-cover w-full h-auto"
//               />
//               <div className="grid grid-cols-2 gap-6 text-sm text-slate-700">
//                 <div>• ARM Cortex-M / Cortex-A</div>
//                 <div>• ESP32 / STM32 / PIC</div>
//                 <div>• FreeRTOS / Zephyr</div>
//                 <div>• Bootloaders & OTA Ready</div>
//                 <div>• I2C / SPI / UART</div>
//                 <div>• Debugging & Profiling</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* IoT Application & Platform Development */}
//       <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               IoT Application & Platform Development Services
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We design and build secure, cloud-native IoT platforms that transform raw device data into real-time intelligence through scalable backend systems, dashboards, and mobile applications.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
//                 From Connected Devices to Actionable Business Insights
//               </h3>
//               <p className="text-slate-700 leading-relaxed mb-6">
//                 Modern IoT solutions go far beyond device connectivity. We help organizations build end-to-end IoT platforms that securely ingest data, process it in real time, and present meaningful insights through intuitive web and mobile apps.
//               </p>
//               <p className="text-slate-700 leading-relaxed mb-8">
//                 Our IoT platforms are designed for long-term scalability, enterprise security, and seamless integration with existing systems — enabling smarter decisions and automated actions.
//               </p>
//               <ul className="space-y-3 text-slate-700">
//                 <li className="flex items-start gap-3">
//                   <ShieldCheck className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>Secure device-to-cloud data pipelines</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <ShieldCheck className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>Real-time processing and analytics</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <ShieldCheck className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>Enterprise-grade scalability and reliability</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
//                 alt="IoT cloud platform with real-time analytics dashboard"
//                 className="rounded-3xl shadow-2xl object-cover w-full h-auto"
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
//             <IoTPlatformFeature 
//               icon={<Cloud className="w-7 h-7 text-blue-600" />}
//               title="Cloud-Native IoT Platforms"
//               description="Scalable cloud architectures for device ingestion, processing, storage, and integration with enterprise systems."
//             />
//             <IoTPlatformFeature 
//               icon={<Database className="w-7 h-7 text-green-600" />}
//               title="Real-Time Data Processing"
//               description="High-throughput pipelines for real-time monitoring, alerts, automation, and event-driven workflows."
//             />
//             <IoTPlatformFeature 
//               icon={<RefreshCcw className="w-7 h-7 text-purple-600" />}
//               title="Device Management & OTA"
//               description="Remote device provisioning, configuration management, firmware updates, and fleet health monitoring."
//             />
//             <IoTPlatformFeature 
//               icon={<ChartLine className="w-7 h-7 text-orange-600" />}
//               title="Analytics & Visualization"
//               description="Interactive dashboards, reports, and visualizations tailored to operators, engineers, and decision-makers."
//             />
//             <IoTPlatformFeature 
//               icon={<Users className="w-7 h-7 text-indigo-600" />}
//               title="Role-Based Access Control"
//               description="Secure multi-user access with roles, permissions, audit logs, and activity tracking."
//             />
//             <IoTPlatformFeature 
//               icon={<ShieldCheck className="w-7 h-7 text-red-600" />}
//               title="Enterprise Security & Compliance"
//               description="End-to-end encryption, device authentication, secure APIs, and compliance-ready architectures."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Hardware & Platform Expertise */}
//       <section className="relative bg-white">
//         <div className="py-28 bg-gradient-to-b from-slate-50 to-white">
//           <div className="max-w-screen-xl mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               Hardware & Platform Expertise
//             </h2>
//             <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
//               From silicon to systems, we engineer embedded and IoT hardware platforms that are reliable, scalable, and ready for real-world deployment across industries.
//             </p>
//           </div>
//         </div>
        
//         <HardwareSection 
//           icon={<Microchip className="w-8 h-8 text-blue-600" />}
//           title="Microcontrollers & System-on-Chips"
//           description="We develop firmware and system software for a wide range of microcontrollers and SoCs, optimized for low power consumption, real-time performance, and hardware reliability."
//           tags="ARM Cortex-M / Cortex-A • STM32 • ESP32 • NXP • PIC"
//           imageSrc="https://images.unsplash.com/photo-1677480409111-88694019301c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           imageAlt="Microcontroller and embedded hardware development board"
//         />
        
//         <HardwareSection 
//           icon={<Cpu className="w-8 h-8 text-green-600" />}
//           title="Single Board Computers & Edge Platforms"
//           description="For gateway and edge-compute use cases, we work with Linux-based SBCs and custom boards that handle data aggregation, processing, and secure connectivity."
//           tags="Raspberry Pi • BeagleBone • Jetson • Custom SBCs"
//           imageSrc="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           imageAlt="Single board computer and edge computing device"
//           reverse
//         />
        
//         <HardwareSection 
//           icon={<Activity className="w-8 h-8 text-purple-600" />}
//           title="Sensors, Actuators & Control Systems"
//           description="We integrate a wide range of sensors and actuators to enable precise monitoring, automation, and control across industrial and consumer IoT applications."
//           tags="Temperature • Motion • Pressure • GPS • Relays • Motors"
//           imageSrc="https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           imageAlt="IoT sensors and industrial automation components"
//         />
        
//         <HardwareSection 
//           icon={<Radio className="w-8 h-8 text-orange-400" />}
//           title="IoT Gateways & Industrial Edge Devices"
//           description="Our gateways bridge devices and cloud platforms by handling protocol translation, edge analytics, and secure data transmission in harsh environments."
//           tags="Industrial Gateways • Edge Nodes • Custom Enclosures"
//           imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           imageAlt="Industrial IoT gateway and edge computing device"
//           reverse
//           dark
//         />
//       </section>

//       {/* IoT Connectivity Section */}
//       <section className="relative py-32 bg-gradient-to-b from-white to-slate-50">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               IoT Connectivity & Communication Solutions
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We design reliable, secure, and scalable communication architectures that ensure seamless data exchange between devices, gateways, and cloud platforms — even in mission-critical environments.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-28">
//             <ConnectivityCard 
//               icon={<Bluetooth className="w-8 h-8 text-green-600" />}
//               title="Short-Range & Low-Power Communication"
//               description="Ideal for wearables, medical devices, provisioning flows, and battery-powered sensors where energy efficiency and proximity are critical."
//               tags="Bluetooth • BLE • NFC"
//             />
//             <ConnectivityCard 
//               icon={<Wifi className="w-8 h-8 text-blue-600" />}
//               title="Local & Industrial Network Connectivity"
//               description="High-throughput and low-latency connectivity for gateways, edge devices, and industrial systems operating within LAN environments."
//               tags="Wi-Fi • Ethernet • Industrial LAN"
//             />
//             <ConnectivityCard 
//               icon={<Radio className="w-8 h-8 text-purple-600" />}
//               title="Long-Range & LPWAN Networks"
//               description="Designed for remote deployments where devices must operate for years on battery power with long-distance communication."
//               tags="LoRaWAN • NB-IoT • Sub-GHz RF"
//             />
//             <ConnectivityCard 
//               icon={<Signal className="w-8 h-8 text-orange-400" />}
//               title="Cellular & Global Connectivity"
//               description="Mission-critical IoT solutions requiring global coverage, high reliability, and seamless mobility across regions."
//               tags="LTE • 4G • 5G • Private Cellular"
//               dark
//             />
//           </div>
          
//           <div className="max-w-screen-2xl mx-auto">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
//                 <Layers className="w-6 h-6" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
//                 Communication Protocol Stack
//               </h3>
//             </div>
//             <p className="text-slate-700 leading-relaxed mb-12 max-w-3xl">
//               Beyond connectivity, we implement efficient and secure communication protocols that enable reliable data exchange across constrained devices, gateways, and cloud platforms.
//             </p>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <ProtocolCard 
//                 icon={<MessageSquare className="w-6 h-6 text-blue-600" />}
//                 title="MQTT / MQTT-SN"
//                 description="Lightweight publish-subscribe protocol optimized for low-bandwidth, high-latency IoT environments."
//               />
//               <ProtocolCard 
//                 icon={<Link className="w-6 h-6 text-green-600" />}
//                 title="CoAP"
//                 description="REST-based protocol designed for constrained devices and low-power networks."
//               />
//               <ProtocolCard 
//                 icon={<Globe className="w-6 h-6 text-purple-600" />}
//                 title="HTTP / HTTPS"
//                 description="Widely adopted web protocols for secure API-based communication and integrations."
//               />
//               <ProtocolCard 
//                 icon={<Cpu className="w-6 h-6 text-orange-600" />}
//                 title="Modbus (RTU / TCP)"
//                 description="Industrial communication standard for PLCs, sensors, and automation systems."
//               />
//               <ProtocolCard 
//                 icon={<Network className="w-6 h-6 text-indigo-600" />}
//                 title="CAN / CANopen"
//                 description="Robust real-time communication protocol used in automotive and industrial control systems."
//               />
//               <ProtocolCard 
//                 icon={<Boxes className="w-6 h-6 text-teal-600" />}
//                 title="OPC-UA"
//                 description="Secure, platform-independent protocol for industrial interoperability and data modeling."
//               />
//             </div>
            
//             <div className="mt-14 rounded-2xl bg-slate-50 border p-6 flex items-start gap-4">
//               <ShieldCheck className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//               <p className="text-sm text-slate-700 leading-relaxed">
//                 All communication protocols are implemented with end-to-end encryption, authentication mechanisms, secure key management, and enterprise-grade security best practices.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* IoT Architecture Section */}
//       <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
//               IoT Architecture & System Design
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We design robust IoT architectures that seamlessly connect devices, gateways, cloud platforms, and applications — ensuring scalability, security, reliability, and long-term maintainability.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//             <div className="space-y-10">
//               <ArchitectureLayer 
//                 icon={<Cpu className="w-7 h-7 text-blue-600" />}
//                 title="Device & Firmware Layer"
//                 description="Embedded devices running optimized firmware handle sensor data acquisition, local processing, and secure communication with gateways or cloud endpoints."
//                 iconBg="bg-blue-100"
//               />
//               <ArchitectureLayer 
//                 icon={<Radio className="w-7 h-7 text-green-600" />}
//                 title="Connectivity & Gateway Layer"
//                 description="Gateways aggregate data, translate protocols, and ensure reliable communication across Wi-Fi, LPWAN, and cellular networks."
//                 iconBg="bg-green-100"
//               />
//               <ArchitectureLayer 
//                 icon={<Cloud className="w-7 h-7 text-purple-600" />}
//                 title="Cloud & Data Processing Layer"
//                 description="Cloud services ingest, process, store, and analyze device data at scale while supporting real-time monitoring and analytics."
//                 iconBg="bg-purple-100"
//               />
//               <ArchitectureLayer 
//                 icon={<Layers className="w-7 h-7 text-orange-600" />}
//                 title="Application & Integration Layer"
//                 description="Web and mobile applications provide dashboards, automation controls, alerts, and integrations with enterprise systems."
//                 iconBg="bg-orange-100"
//               />
//             </div>
//             <div className="space-y-10">
//               <ArchitectureFeature 
//                 icon={<Shield className="w-6 h-6 text-blue-600" />}
//                 title="Security by Architecture"
//                 description="Secure boot, device authentication, encrypted data transmission, and access control are built into every architectural layer."
//               />
//               <ArchitectureFeature 
//                 icon={<RefreshCcw className="w-6 h-6 text-green-600" />}
//                 title="OTA Updates & Lifecycle Management"
//                 description="Our architectures support remote firmware updates, configuration changes, and device lifecycle management without physical access."
//               />
//               <ArchitectureFeature 
//                 icon={<Cloud className="w-6 h-6 text-purple-600" />}
//                 title="Scalability & High Availability"
//                 description="Designed to scale from pilot deployments to millions of connected devices with fault tolerance and high-availability cloud infrastructure."
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Engagement Models */}
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
//             <EngagementCard 
//               badge="Best for MVPs"
//               iconSrc="https://cdn-icons-png.flaticon.com/512/3135/3135673.png"
//               title="Fixed Price Model"
//               description="Ideal for projects with clearly defined requirements and timelines. We commit to a fixed scope, cost, and delivery schedule — ensuring predictable budgeting and zero surprises."
//               features={[
//                 "Clearly defined scope & milestones",
//                 "Fixed budget & delivery timeline",
//                 "Minimal client management effort",
//                 "Ideal for MVPs & small projects"
//               ]}
//             />
//             <EngagementCard 
//               badge="Most Popular"
//               badge2="Long-Term Partnership"
//               iconSrc="https://cdn-icons-png.flaticon.com/512/921/921347.png"
//               title="Dedicated Team Model"
//               description="A dedicated team of developers, designers, and QA engineers works exclusively on your product — acting as an extension of your in-house team. Perfect for scaling products and continuous development."
//               features={[
//                 "Full control over team & priorities",
//                 "Monthly billing with flexible scaling",
//                 "Best for SaaS & enterprise platforms",
//                 "Continuous delivery & long-term support"
//               ]}
//               highlighted
//             />
//             <EngagementCard 
//               badge="Flexible Scope"
//               iconSrc="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
//               title="Time & Material Model"
//               description="Designed for evolving requirements and complex systems. You pay only for the actual development time and effort, with complete transparency and agile execution."
//               features={[
//                 "Flexible scope & changing priorities",
//                 "Pay-as-you-go (hourly or monthly)",
//                 "Agile & iterative delivery approach",
//                 "Ideal for R&D & innovation-driven projects"
//               ]}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Compliance Section */}
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
//               <ComplianceItem 
//                 iconSrc="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
//                 title="NDA Protected Engagement"
//                 description="All discussions, documentation, and deliverables are secured under a legally binding NDA."
//               />
//               <ComplianceItem 
//                 iconSrc="https://cdn-icons-png.flaticon.com/512/942/942781.png"
//                 title="100% Intellectual Property Ownership"
//                 description="You retain complete ownership of source code, data, and all project assets."
//               />
//               <ComplianceItem 
//                 iconSrc="https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
//                 title="ISO-Aligned Security Practices"
//                 description="Development workflows aligned with ISO 27001 security principles and controls."
//               />
//               <ComplianceItem 
//                 iconSrc="https://cdn-icons-png.flaticon.com/512/681/681662.png"
//                 title="GDPR & Global Data Privacy"
//                 description="Strict data privacy measures aligned with GDPR and international regulations."
//               />
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
//                 <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md">
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

//       {/* Contract & NDA Section */}
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
//             <ContractCard 
//               emoji="🔒"
//               title="Non-Disclosure Agreement (NDA)"
//               description="Every project begins with a legally binding NDA to ensure complete confidentiality of your ideas, data, and business logic."
//               bgColor="bg-blue-100"
//             />
//             <ContractCard 
//               emoji="🧠"
//               title="Intellectual Property Rights"
//               description="You retain 100% ownership of source code, designs, data, and deliverables upon project completion."
//               bgColor="bg-green-100"
//             />
//             <ContractCard 
//               emoji="📄"
//               title="Transparent Contracts"
//               description="Clear documentation covering scope, milestones, timelines, payment terms, and exit clauses — no hidden surprises."
//               bgColor="bg-purple-100"
//             />
//             <ContractCard 
//               emoji="🛡️"
//               title="Security & Compliance"
//               description="Secure development practices, access control, and compliance-ready processes aligned with enterprise security standards."
//               bgColor="bg-amber-100"
//             />
//           </div>
          
//           <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-600 p-10 text-white text-center">
//             <h3 className="text-2xl md:text-3xl font-semibold">
//               Your Idea. Your Code. Your Ownership.
//             </h3>
//             <p className="mt-4 max-w-2xl mx-auto text-white/90 leading-relaxed">
//               We believe trust is the foundation of successful partnerships. Our contracts are designed to protect your interests, ensure confidentiality, and build long-term collaboration.
//             </p>
//             <a href="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-blue-700 font-semibold hover:bg-slate-100 transition">
//               Request NDA & Contract Details
//               <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section className="relative py-32 bg-white overflow-hidden">
//         <div className="max-w-screen-2xl mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center mb-24">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
//               Industries We Serve
//             </h2>
//             <p className="mt-6 text-lg text-slate-700 leading-relaxed">
//               We design and develop IoT and embedded solutions for multiple industries, helping businesses launch secure, scalable and performance-driven systems tailored to their domain-specific challenges.
//             </p>
//           </div>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               title="Enterprise & B2B Solutions"
//               description="ERP systems, internal tools, secure dashboards and large-scale enterprise applications."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
//               title="Fintech & Banking"
//               description="Mobile banking apps, payment gateways, digital wallets and fintech platforms with bank-grade security."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
//               title="Healthcare & MedTech"
//               description="Telemedicine apps, EHR systems, patient monitoring and HIPAA-compliant healthcare platforms."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a"
//               title="E-Commerce & Retail"
//               description="High-conversion shopping apps, inventory management, POS integration and omnichannel retail solutions."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
//               title="On-Demand & Logistics"
//               description="Real-time booking, delivery tracking, fleet management and on-demand service apps."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
//               title="IoT & Smart Devices"
//               description="Applications for smart devices, connected hardware, sensors and IoT ecosystems."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7"
//               title="EdTech & eLearning"
//               description="Online learning apps, LMS platforms, virtual classrooms and education solutions."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//               title="Travel & Hospitality"
//               description="Hotel booking apps, travel planning platforms, ticketing systems and hospitality solutions."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
//               title="Media, OTT & Entertainment"
//               description="Video streaming apps, OTT platforms, music apps and digital entertainment solutions."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
//               title="Real Estate & PropTech"
//               description="Property listing apps, virtual tours, CRM systems and real estate management platforms."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
//               title="Fitness, Wellness & Sports"
//               description="Workout tracking apps, fitness coaching platforms, wearable integrations and wellness solutions."
//             />
//             <IndustryCard 
//               imageSrc="https://images.unsplash.com/photo-1511512578047-dfb367046420"
//               title="Gaming & Interactive Experiences"
//               description="2D/3D games, real-time multiplayer gaming and immersive interactive experiences."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="relative w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-100 to-indigo-100 overflow-hidden">
//         <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
//           <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-300/30 blur-3xl rounded-full -top-32 sm:-top-40 -left-20 animate-pulse"></div>
//           <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-300/20 blur-3xl rounded-full bottom-0 right-0"></div>
//         </div>
        
//         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
//               Ready to Build Your IoT Solution?
//             </h2>
//             <p className="text-neutral-700 mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
//               Speak with our embedded and IoT experts today. We help brands build powerful connected systems.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 sm:mb-20 px-4">
//             <button className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-base sm:text-lg bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all">
//               Get a Free Quote
//               <ArrowRight className="w-5 h-5" />
//             </button>
//             <a href="tel:+919766650411" className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-base sm:text-lg bg-green-600 text-white shadow-md shadow-green-600/20 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30 transition-all">
//               Call Sales
//               <Phone className="w-5 h-5" />
//             </a>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0">
//             <ContactCard 
//               icon={<Phone className="w-6 h-6" />}
//               title="Phone Number"
//               value="+91 97666 50411"
//             />
//             <ContactCard 
//               icon={<Mail className="w-6 h-6" />}
//               title="Email Address"
//               value="info@albostechnologies.com"
//             />
//             <ContactCard 
//               icon={<MapPin className="w-6 h-6" />}
//               title="Office Location"
//               value="Office no. 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019"
//             />
//             <ContactCard 
//               icon={<Clock className="w-6 h-6" />}
//               title="Office Hours"
//               value="Mon – Sat, 10:00 AM – 7:00 PM"
//             />
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// };
// // Helper Components
// const FeatureCard = ({ icon, title, description }) => (
//   <div className="flex items-start gap-4">
//     <div className="flex-shrink-0">{icon}</div>
//     <div>
//       <h4 className="font-semibold text-slate-900">{title}</h4>
//       <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
//     </div>
//   </div>
// );
// const ServiceCard = ({ icon, title, description, iconBg }) => (
//   <div>
//     <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}>
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
//     <p className="text-slate-600 leading-relaxed">{description}</p>
//   </div>
// );
// const EmbeddedServiceItem = ({ icon, title, description }) => (
//   <div>
//     <div className="flex items-center gap-4 mb-4">
//       {icon}
//       <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
//     </div>
//     <p className="text-slate-700 leading-relaxed max-w-xl">{description}</p>
//   </div>
// );
// const IoTPlatformFeature = ({ icon, title, description }) => (
//   <div>
//     <div className="mb-4">{icon}</div>
//     <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
//     <p className="text-slate-600 leading-relaxed">{description}</p>
//   </div>
// );
// const HardwareSection = ({ icon, title, description, tags, imageSrc, imageAlt, reverse = false, dark = false }) => {
//   const content = (
//     <>
//       <div className={dark ? "text-white" : ""}>
//         <div className="mb-6">{icon}</div>
//         <h3 className={`text-2xl md:text-3xl font-semibold mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
//           {title}
//         </h3>
//         <p className={`leading-relaxed mb-6 ${dark ? "text-slate-300" : "text-slate-700"}`}>
//           {description}
//         </p>
//         <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
//           {tags}
//         </p>
//       </div>
//     </>
//   );

//   return (
//     <div className={dark ? "py-24 bg-slate-900" : "py-24"}>
//       <div className="max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
//         {reverse ? (
//           <>
//             <img src={imageSrc} alt={imageAlt} className="rounded-3xl shadow-xl object-cover w-full h-auto" />
//             {content}
//           </>
//         ) : (
//           <>
//             {content}
//             <img src={imageSrc} alt={imageAlt} className="rounded-3xl shadow-xl object-cover w-full h-auto" />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
// const ConnectivityCard = ({ icon, title, description, tags, dark = false }) => (
//   <div className={`group rounded-3xl border ${dark ? "bg-slate-900 text-white" : "bg-white"} p-8 hover:shadow-2xl transition`}>
//     <div className="mb-5">{icon}</div>
//     <h3 className={`text-xl font-semibold mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
//       {title}
//     </h3>
//     <p className={`leading-relaxed mb-4 ${dark ? "text-slate-300" : "text-slate-700"}`}>
//       {description}
//     </p>
//     <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
//       {tags}
//     </p>
//   </div>
// );
// const ProtocolCard = ({ icon, title, description }) => (
//   <div className="rounded-2xl border bg-white p-6 hover:shadow-lg transition">
//     <div className="mb-4">{icon}</div>
//     <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
//     <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
//   </div>
// );
// const ArchitectureLayer = ({ icon, title, description, iconBg }) => (
//   <div className="flex items-start gap-6">
//     <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-xl font-semibold text-slate-900 mb-1">{title}</h3>
//       <p className="text-slate-600 leading-relaxed">{description}</p>
//     </div>
//   </div>
// );
// const ArchitectureFeature = ({ icon, title, description }) => (
//   <div className="rounded-3xl border bg-white p-8 shadow-sm">
//     <div className="flex items-center gap-4 mb-4">
//       {icon}
//       <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
//     </div>
//     <p className="text-slate-700 leading-relaxed">{description}</p>
//   </div>
// );
// const EngagementCard = ({ badge, badge2, iconSrc, title, description, features, highlighted = false }) => {
//   const cardClass = highlighted 
//     ? "group relative rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl" 
//     : "group relative rounded-3xl border bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1";

//   return (
//     <div className={cardClass}>
//       {badge2 && (
//         <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full bg-blue-600 text-white">
//           {badge}
//         </span>
//       )}
//       <div className="mb-6 flex items-center justify-between">
//         <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge2 ? 'bg-green-100 text-green-700 mt-4' : badge === 'Best for MVPs' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
//           {badge2 || badge}
//         </span>
//         <img src={iconSrc} alt={title} className="w-10 h-10" />
//       </div>
//       <h3 className="text-2xl font-semibold mb-4 text-slate-900">{title}</h3>
//       <p className="text-slate-700 leading-relaxed mb-6">{description}</p>
//       <ul className="space-y-3 text-sm text-slate-700">
//         {features.map((feature, index) => (
//           <li key={index}>✔ {feature}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const ComplianceItem = ({ iconSrc, title, description }) => (
//   <div className="flex items-start gap-4 rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow">
//     <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
//       <img src={iconSrc} alt={title} className="w-7 h-7" />
//     </div>
//     <div>
//       <h3 className="font-semibold text-slate-900">{title}</h3>
//       <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
//     </div>
//   </div>
// );
// const ContractCard = ({ emoji, title, description, bgColor }) => (
//   <div className="rounded-2xl bg-white border p-7 hover:shadow-lg transition">
//     <div className={`w-12 h-12 mb-5 rounded-xl ${bgColor} flex items-center justify-center text-xl`}>
//       {emoji}
//     </div>
//     <h3 className="text-xl font-semibold mb-3">{title}</h3>
//     <p className="text-slate-700 leading-relaxed text-sm">{description}</p>
//   </div>
// );
// const IndustryCard = ({ imageSrc, title, description }) => (
//   <div className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//     <img 
//       src={imageSrc} 
//       alt={title}
//       className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//     <div className="absolute inset-0 p-8 flex flex-col justify-end">
//       <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//       <p className="text-sm text-white/90 leading-relaxed">{description}</p>
//     </div>
//   </div>
// );
// const ContactCard = ({ icon, title, value }) => (
//   <div className="p-6 sm:p-7 md:p-8 bg-white/100 backdrop-blur-xl rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500 group relative overflow-hidden h-full">
//     <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl group-hover:scale-110 transition-transform">
//       {icon}
//     </div>
//     <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mt-4 text-center leading-tight">{title}</h3>
//     <p className="text-neutral-600 mt-2 text-center leading-relaxed text-sm sm:text-base break-words">{value}</p>
//     <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></span>
//   </div>
// );

// export default IoTDevelopmentPage;







import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, MapPin, Clock, ArrowRight, CircleCheckBig, ShieldCheck,
  Cpu, Network, FileLock, Radio, Cloud, CloudCog, ChartLine, Layers,
  MemoryStick, Settings, BatteryCharging, Microchip, Activity, Signal,
  Wifi, Bluetooth, Database, RefreshCcw, Users, Globe, Link, MessageSquare,
  Boxes, Shield, PhoneCall, Video,
} from "lucide-react";

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --blue: #2563eb; --blue-light: #dbeafe; --blue-mid: #93c5fd;
      --ink: #0f172a; --ink-2: #334155; --ink-3: #64748b;
      --surface: #ffffff; --surface-2: #f8fafc; --surface-3: #f1f5f9;
      --border: #e2e8f0; --green: #16a34a; --purple: #7c3aed; --orange: #ea580c;
    }
    body { font-family: 'DM Sans', sans-serif; background: #fff; color: var(--ink); }
    h1,h2,h3,h4,h5 { font-family: 'Syne', sans-serif; }

    .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
    .reveal.visible { opacity: 1; transform: none; }
    .reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
    .reveal-left.visible { opacity: 1; transform: none; }
    .reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
    .reveal-right.visible { opacity: 1; transform: none; }

    .d1{transition-delay:.05s}.d2{transition-delay:.15s}.d3{transition-delay:.25s}.d4{transition-delay:.35s}.d5{transition-delay:.45s}.d6{transition-delay:.55s}

    @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(1deg)} }
    .float-img { animation: float 6s ease-in-out infinite; }

    @keyframes blobPulse { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.12)} }
    .blob { animation: blobPulse 8s ease-in-out infinite; }

    .grid-bg {
      background-image: linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
      background-size: 44px 44px;
    }

    @keyframes shimmer { 0%{transform:translateX(-100%) skewX(-15deg)} 100%{transform:translateX(200%) skewX(-15deg)} }
    .shimmer-card { position: relative; overflow: hidden; }
    .shimmer-card::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.6) 50%,transparent 100%); transform:translateX(-100%) skewX(-15deg); pointer-events:none; }
    .shimmer-card:hover::after { animation: shimmer 0.7s ease; }

    @keyframes heroIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
    .hero-h { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.1s both; }
    .hero-p { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.3s both; }
    .hero-btns { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.5s both; }
    .hero-img { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0.2s both; }
    .hero-badge { animation: heroIn 0.9s cubic-bezier(.22,1,.36,1) 0s both; }

    @keyframes badgePop { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
    .badge-pop { animation: badgePop 0.4s cubic-bezier(.34,1.56,.64,1) 0.05s both; }

    .grad-border { background: linear-gradient(white,white) padding-box, linear-gradient(135deg,#2563eb,#7c3aed) border-box; border: 2px solid transparent; }

    .lift { transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease; }
    .lift:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(37,99,235,0.12); }

    .industry-card img { transition: transform 0.7s cubic-bezier(.22,1,.36,1); }
    .industry-card:hover img { transform: scale(1.08); }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #93c5fd; border-radius: 3px; }
  `}</style>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(end / 60);
        const t = setInterval(() => {
          start += step;
          if (start >= end) { setVal(end); clearInterval(t); } else setVal(start);
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const IoTDevelopmentPage = () => {
  useReveal();

  return (
    <div style={{ minHeight: "100vh", background: "#fff", overflowX: "hidden" }}>
      <FontLink />

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "96px 0 80px", overflow: "hidden" }} className="grid-bg">
        <div className="blob" style={{ position:"absolute", left:"55%", top:"50%", width:700, height:700, background:"radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none", zIndex:0 }} />
        <div style={{ position:"absolute", top:-80, left:-80, width:320, height:320, background:"radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:48 }}>
            <div style={{ flex:"1 1 380px" }}>
              <div className="badge-pop" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#dbeafe", color:"#1d4ed8", borderRadius:999, padding:"6px 16px", fontSize:13, fontWeight:600, marginBottom:24, fontFamily:"DM Sans, sans-serif" }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:"#2563eb", display:"inline-block" }} />
                Embedded &amp; IoT Engineering
              </div>
              <h1 className="hero-h" style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:800, lineHeight:1.12, letterSpacing:"-0.03em", color:"var(--ink)", marginBottom:24 }}>
                IoT &amp; Embedded<br />
                <span style={{ background:"linear-gradient(135deg,#2563eb 0%,#7c3aed 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Development Services</span>
              </h1>
              <p className="hero-p" style={{ fontSize:"1.1rem", color:"var(--ink-2)", lineHeight:1.7, maxWidth:520, marginBottom:36 }}>
                We build secure, scalable IoT and embedded systems — from low-power firmware and custom hardware to cloud platforms, device management, and AI-driven automation.
              </p>
              <div className="hero-btns" style={{ display:"flex", flexWrap:"wrap", gap:14 }}>
                <button style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 28px", borderRadius:14, border:"none", background:"linear-gradient(135deg,#2563eb,#1d4ed8)", color:"#fff", fontWeight:600, fontSize:"1rem", cursor:"pointer", boxShadow:"0 8px 24px rgba(37,99,235,0.3)", transition:"all 0.25s", fontFamily:"DM Sans, sans-serif" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(37,99,235,0.4)"}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.3)"}}>
                  Get a Free Quote <PhoneCall size={16} />
                </button>
                <button style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 28px", borderRadius:14, border:"1.5px solid var(--border)", background:"#fff", color:"var(--ink)", fontWeight:600, fontSize:"1rem", cursor:"pointer", transition:"all 0.25s", fontFamily:"DM Sans, sans-serif" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="#2563eb";e.currentTarget.style.color="#2563eb"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--ink)"}}>
                  View Our Work <Video size={16} />
                </button>
              </div>
            </div>
            <div className="hero-img" style={{ flex:"1 1 300px", display:"flex", justifyContent:"center" }}>
              <div className="float-img" style={{ position:"relative" }}>
                <div style={{ position:"absolute", inset:-20, background:"radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%)", borderRadius:"50%" }} />
                <img src="/iot-application-development-services-services.svg" alt="IoT Illustration"
                  style={{ width:"min(420px,90vw)", position:"relative", zIndex:1, filter:"drop-shadow(0 24px 48px rgba(37,99,235,0.2))" }} />
              </div>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="reveal" style={{ maxWidth:1280, margin:"64px auto 0", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:1, background:"var(--border)", borderRadius:20, overflow:"hidden", boxShadow:"0 4px 24px rgba(0,0,0,0.06)" }}>
            {[{n:200,s:"+",label:"Projects Delivered"},{n:50,s:"+",label:"IoT Deployments"},{n:98,s:"%",label:"Client Satisfaction"},{n:8,s:"+",label:"Years Experience"}].map((stat,i)=>(
              <div key={i} style={{ background:"#fff", padding:"28px 24px", textAlign:"center" }}>
                <div style={{ fontSize:"2rem", fontWeight:800, fontFamily:"Syne,sans-serif", color:"#2563eb", lineHeight:1 }}><Counter end={stat.n} suffix={stat.s} /></div>
                <div style={{ fontSize:"0.85rem", color:"var(--ink-3)", marginTop:6, fontWeight:500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED PARTNER ── */}
      <section style={{ padding:"100px 0", background:"var(--surface-2)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:780, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", color:"var(--ink)", marginBottom:20 }}>
              A Trusted Partner for{" "}
              <span style={{ color:"#2563eb", borderBottom:"3px solid #93c5fd", paddingBottom:2 }}>Mission-Critical Systems</span>
            </h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>We help startups, enterprises, and industrial organizations design and scale embedded systems and IoT solutions that are secure, reliable, and built for real-world production.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:40, alignItems:"center", marginBottom:72 }}>
            <div className="reveal-left">
              <h3 style={{ fontSize:"1.5rem", fontWeight:700, color:"var(--ink)", marginBottom:16 }}>Engineering Confidence Beyond Prototypes</h3>
              <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:14 }}>Embedded and IoT systems operate in complex, often high-risk environments. Our engineering approach focuses on long-term reliability, scalability, and security — not just proof-of-concepts.</p>
              <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:28 }}>From firmware and hardware bring-up to cloud-scale IoT platforms, we ensure every solution is production-ready and compliant with enterprise standards.</p>
              {["Designed for industrial and enterprise deployments","Tested for scalability, fault tolerance, and uptime","Aligned with security and compliance best practices"].map((t,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:12 }}>
                  <CircleCheckBig size={18} color="#2563eb" style={{ marginTop:2, flexShrink:0 }} />
                  <span style={{ color:"var(--ink-2)", fontSize:"0.95rem" }}>{t}</span>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <img src="https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1471&auto=format&fit=crop" alt="Engineering team" style={{ borderRadius:24, width:"100%", objectFit:"cover", boxShadow:"0 24px 64px rgba(0,0,0,0.12)" }} />
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:24 }}>
            {[
              {icon:<ShieldCheck size={22} color="#2563eb"/>,title:"Security by Design",desc:"Security embedded across firmware, devices, communication, and cloud layers.",bg:"#dbeafe"},
              {icon:<Cpu size={22} color="#16a34a"/>,title:"Deep Embedded Expertise",desc:"RTOS, device drivers, hardware bring-up, and low-power optimization.",bg:"#dcfce7"},
              {icon:<Network size={22} color="#7c3aed"/>,title:"Scalable IoT Systems",desc:"Architected for thousands to millions of connected devices.",bg:"#ede9fe"},
              {icon:<FileLock size={22} color="#ea580c"/>,title:"NDA & IP Protection",desc:"Complete ownership of source code, data, and project assets.",bg:"#ffedd5"},
            ].map((f,i)=>(
              <div key={i} className={`reveal shimmer-card lift d${i+1}`} style={{ background:"#fff", border:"1.5px solid var(--border)", borderRadius:20, padding:"28px 24px", display:"flex", gap:16, alignItems:"flex-start" }}>
                <div style={{ width:44, height:44, borderRadius:12, background:f.bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily:"Syne,sans-serif", fontWeight:700, color:"var(--ink)", marginBottom:6 }}>{f.title}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--ink-3)", lineHeight:1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ padding:"100px 0", background:"#fff" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:700, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>What We Do in Embedded &amp; IoT</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>End-to-end development that connects hardware, firmware, cloud, and applications into reliable, scalable solutions.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:28 }}>
            {[
              {icon:<Cpu size={28} color="#2563eb"/>,bg:"#dbeafe",title:"Embedded Systems Engineering",desc:"Firmware for MCUs, RTOS, bare-metal programming, device drivers, and low-power optimization."},
              {icon:<Radio size={28} color="#16a34a"/>,bg:"#dcfce7",title:"Device Connectivity",desc:"Reliable device-to-device and device-to-cloud connectivity using modern wireless technologies."},
              {icon:<CloudCog size={28} color="#7c3aed"/>,bg:"#ede9fe",title:"IoT Cloud Platforms",desc:"Scalable cloud infrastructure for device management, data ingestion, OTA updates, and secure backends."},
              {icon:<ChartLine size={28} color="#ea580c"/>,bg:"#ffedd5",title:"Monitoring & Analytics",desc:"Real-time dashboards, analytics, alerts, and automation systems that turn IoT data into actionable insights."},
            ].map((s,i)=>(
              <div key={i} className={`reveal shimmer-card lift d${i+1}`} style={{ background:"#fff", border:"1.5px solid var(--border)", borderRadius:24, padding:"36px 28px" }}>
                <div style={{ width:60, height:60, borderRadius:16, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:24 }}>{s.icon}</div>
                <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.1rem", marginBottom:12, color:"var(--ink)" }}>{s.title}</h3>
                <p style={{ color:"var(--ink-3)", lineHeight:1.65, fontSize:"0.92rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SERVICES ── */}
      <section style={{ padding:"100px 0", background:"var(--surface-2)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:700, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>Embedded Systems Development</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Robust embedded systems built by combining low-level firmware engineering, hardware expertise, and performance optimization.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:48, alignItems:"start" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:32 }}>
              {[
                {icon:<Cpu size={26} color="#2563eb"/>,title:"Firmware Development (Bare-Metal & RTOS)",desc:"Reliable, efficient firmware for microcontrollers using bare-metal programming or real-time operating systems."},
                {icon:<MemoryStick size={26} color="#16a34a"/>,title:"Device Drivers & BSP Development",desc:"Custom driver development for sensors, peripherals, communication modules, and board support packages."},
                {icon:<Settings size={26} color="#7c3aed"/>,title:"Hardware Bring-Up & Board Validation",desc:"End-to-end hardware bring-up including bootloader setup, peripheral validation, debugging, and performance tuning."},
                {icon:<BatteryCharging size={26} color="#ea580c"/>,title:"Low-Power & Performance Optimization",desc:"Power-efficient firmware design, sleep-mode optimization, memory tuning, and performance profiling."},
              ].map((item,i)=>(
                <div key={i} className={`reveal d${i+1}`} style={{ display:"flex", gap:18 }}>
                  <div style={{ width:50, height:50, borderRadius:14, background:"#fff", border:"1.5px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1rem", marginBottom:8, color:"var(--ink)" }}>{item.title}</h3>
                    <p style={{ fontSize:"0.88rem", color:"var(--ink-3)", lineHeight:1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <img src="https://images.unsplash.com/photo-1551703616-e5a729ff0185?q=80&w=1473&auto=format&fit=crop" alt="Embedded hardware" style={{ borderRadius:24, width:"100%", objectFit:"cover", boxShadow:"0 20px 56px rgba(0,0,0,0.1)", marginBottom:28 }} />
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {["ARM Cortex-M/A","ESP32 / STM32","FreeRTOS / Zephyr","OTA Bootloaders","I2C / SPI / UART","Debugging & Profiling"].map((t,i)=>(
                  <div key={i} style={{ background:"#fff", border:"1.5px solid var(--border)", borderRadius:10, padding:"10px 14px", fontSize:"0.82rem", fontWeight:500, color:"var(--ink-2)", display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:"#2563eb", flexShrink:0 }} />{t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IOT PLATFORM ── */}
      <section style={{ padding:"100px 0", background:"#fff" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:780, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>IoT Application &amp; Platform Development</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Secure, cloud-native IoT platforms that transform raw device data into real-time intelligence.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:40, alignItems:"center", marginBottom:72 }}>
            <div className="reveal-left">
              <h3 style={{ fontSize:"1.5rem", fontWeight:700, color:"var(--ink)", marginBottom:16 }}>From Connected Devices to Actionable Insights</h3>
              <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:28 }}>Modern IoT solutions go far beyond device connectivity. We help organizations build end-to-end IoT platforms that securely ingest data, process it in real time, and present meaningful insights through intuitive web and mobile apps.</p>
              {["Secure device-to-cloud data pipelines","Real-time processing and analytics","Enterprise-grade scalability and reliability"].map((t,i)=>(
                <div key={i} style={{ display:"flex", gap:10, marginBottom:12, alignItems:"flex-start" }}>
                  <ShieldCheck size={17} color="#2563eb" style={{ marginTop:2, flexShrink:0 }} />
                  <span style={{ color:"var(--ink-2)", fontSize:"0.95rem" }}>{t}</span>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="IoT cloud analytics" style={{ borderRadius:24, width:"100%", objectFit:"cover", boxShadow:"0 24px 64px rgba(0,0,0,0.12)" }} />
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:24 }}>
            {[
              {icon:<Cloud size={26} color="#2563eb"/>,bg:"#dbeafe",title:"Cloud-Native IoT Platforms",desc:"Scalable cloud architectures for device ingestion, processing, storage, and enterprise integration."},
              {icon:<Database size={26} color="#16a34a"/>,bg:"#dcfce7",title:"Real-Time Data Processing",desc:"High-throughput pipelines for real-time monitoring, alerts, and event-driven workflows."},
              {icon:<RefreshCcw size={26} color="#7c3aed"/>,bg:"#ede9fe",title:"Device Management & OTA",desc:"Remote provisioning, configuration management, firmware updates, and fleet health monitoring."},
              {icon:<ChartLine size={26} color="#ea580c"/>,bg:"#ffedd5",title:"Analytics & Visualization",desc:"Interactive dashboards, reports, and visualizations for operators and decision-makers."},
              {icon:<Users size={26} color="#0891b2"/>,bg:"#cffafe",title:"Role-Based Access Control",desc:"Secure multi-user access with roles, permissions, audit logs, and activity tracking."},
              {icon:<ShieldCheck size={26} color="#dc2626"/>,bg:"#fee2e2",title:"Enterprise Security",desc:"End-to-end encryption, device authentication, secure APIs, and compliance-ready architectures."},
            ].map((f,i)=>(
              <div key={i} className={`reveal shimmer-card lift d${(i%3)+1}`} style={{ border:"1.5px solid var(--border)", borderRadius:20, padding:"28px 24px", background:"#fff" }}>
                <div style={{ width:50, height:50, borderRadius:14, background:f.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }}>{f.icon}</div>
                <h4 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, marginBottom:8, color:"var(--ink)" }}>{f.title}</h4>
                <p style={{ fontSize:"0.86rem", color:"var(--ink-3)", lineHeight:1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARDWARE EXPERTISE ── */}
      <section style={{ padding:"100px 0", background:"var(--surface-2)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:700, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>Hardware &amp; Platform Expertise</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>From silicon to systems, we engineer embedded and IoT hardware platforms ready for real-world deployment.</p>
          </div>
          {[
            {icon:<Microchip size={28} color="#2563eb"/>,title:"Microcontrollers & System-on-Chips",desc:"Firmware and system software for a wide range of MCUs and SoCs, optimized for low power consumption, real-time performance, and hardware reliability.",tags:"ARM Cortex-M / Cortex-A • STM32 • ESP32 • NXP • PIC",img:"https://images.unsplash.com/photo-1677480409111-88694019301c?q=80&w=1470&auto=format&fit=crop",reverse:false},
            {icon:<Cpu size={28} color="#16a34a"/>,title:"Single Board Computers & Edge Platforms",desc:"For gateway and edge-compute use cases, we work with Linux-based SBCs and custom boards that handle data aggregation, processing, and secure connectivity.",tags:"Raspberry Pi • BeagleBone • Jetson • Custom SBCs",img:"https://images.unsplash.com/photo-1568332339712-fa479d5494fa?q=80&w=1470&auto=format&fit=crop",reverse:true},
            {icon:<Activity size={28} color="#7c3aed"/>,title:"Sensors, Actuators & Control Systems",desc:"We integrate a wide range of sensors and actuators to enable precise monitoring, automation, and control across industrial and consumer IoT applications.",tags:"Temperature • Motion • Pressure • GPS • Relays • Motors",img:"https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1470&auto=format&fit=crop",reverse:false},
            {icon:<Radio size={28} color="#ea580c"/>,title:"IoT Gateways & Industrial Edge Devices",desc:"Our gateways bridge devices and cloud platforms by handling protocol translation, edge analytics, and secure data transmission in harsh environments.",tags:"Industrial Gateways • Edge Nodes • Custom Enclosures",img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",reverse:true},
          ].map((hw,i)=>(
            <div key={i} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:48, alignItems:"center", marginBottom:80 }}>
              {hw.reverse ? (
                <>
                  <div className="reveal-left d1"><img src={hw.img} alt={hw.title} style={{ borderRadius:24, width:"100%", objectFit:"cover", boxShadow:"0 16px 48px rgba(0,0,0,0.1)" }} /></div>
                  <div className="reveal-right d2">
                    <div style={{ marginBottom:16 }}>{hw.icon}</div>
                    <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.4rem", marginBottom:14, color:"var(--ink)" }}>{hw.title}</h3>
                    <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:16 }}>{hw.desc}</p>
                    <p style={{ fontSize:"0.85rem", color:"var(--ink-3)", fontStyle:"italic" }}>{hw.tags}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="reveal-left d1">
                    <div style={{ marginBottom:16 }}>{hw.icon}</div>
                    <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.4rem", marginBottom:14, color:"var(--ink)" }}>{hw.title}</h3>
                    <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:16 }}>{hw.desc}</p>
                    <p style={{ fontSize:"0.85rem", color:"var(--ink-3)", fontStyle:"italic" }}>{hw.tags}</p>
                  </div>
                  <div className="reveal-right d2"><img src={hw.img} alt={hw.title} style={{ borderRadius:24, width:"100%", objectFit:"cover", boxShadow:"0 16px 48px rgba(0,0,0,0.1)" }} /></div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONNECTIVITY ── */}
      <section style={{ padding:"100px 0", background:"#fff" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:780, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>IoT Connectivity &amp; Communication</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Reliable, secure, and scalable communication architectures for seamless data exchange across mission-critical environments.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:24, marginBottom:72 }}>
            {[
              {icon:<Bluetooth size={28} color="#16a34a"/>,bg:"#dcfce7",title:"Short-Range & Low-Power",desc:"Ideal for wearables, medical devices, and battery-powered sensors where energy efficiency is critical.",tags:"Bluetooth • BLE • NFC"},
              {icon:<Wifi size={28} color="#2563eb"/>,bg:"#dbeafe",title:"Local & Industrial Network",desc:"High-throughput, low-latency connectivity for gateways and edge devices within LAN environments.",tags:"Wi-Fi • Ethernet • Industrial LAN"},
              {icon:<Radio size={28} color="#7c3aed"/>,bg:"#ede9fe",title:"Long-Range & LPWAN",desc:"Remote deployments where devices must operate for years on battery power with long-distance communication.",tags:"LoRaWAN • NB-IoT • Sub-GHz RF"},
              {icon:<Signal size={28} color="#ea580c"/>,bg:"#ffedd5",title:"Cellular & Global",desc:"Mission-critical IoT requiring global coverage, high reliability, and seamless mobility across regions.",tags:"LTE • 4G • 5G • Private Cellular"},
            ].map((c,i)=>(
              <div key={i} className={`reveal shimmer-card lift d${i+1}`} style={{ border:"1.5px solid var(--border)", borderRadius:24, padding:"32px 24px", background:"#fff" }}>
                <div style={{ width:56, height:56, borderRadius:16, background:c.bg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>{c.icon}</div>
                <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1rem", marginBottom:10, color:"var(--ink)" }}>{c.title}</h3>
                <p style={{ fontSize:"0.88rem", color:"var(--ink-3)", lineHeight:1.65, marginBottom:14 }}>{c.desc}</p>
                <p style={{ fontSize:"0.8rem", color:"var(--blue)", fontWeight:600 }}>{c.tags}</p>
              </div>
            ))}
          </div>
          {/* Protocol Stack */}
          <div className="reveal" style={{ background:"var(--surface-2)", borderRadius:28, padding:"48px 40px", border:"1.5px solid var(--border)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
              <div style={{ width:46, height:46, borderRadius:12, background:"#dbeafe", display:"flex", alignItems:"center", justifyContent:"center" }}><Layers size={22} color="#2563eb" /></div>
              <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.3rem", color:"var(--ink)" }}>Communication Protocol Stack</h3>
            </div>
            <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:36, maxWidth:640 }}>Efficient and secure protocols for reliable data exchange across constrained devices, gateways, and cloud platforms.</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
              {[
                {icon:<MessageSquare size={20} color="#2563eb"/>,title:"MQTT / MQTT-SN",desc:"Lightweight pub-sub protocol for low-bandwidth, high-latency IoT environments."},
                {icon:<Link size={20} color="#16a34a"/>,title:"CoAP",desc:"REST-based protocol for constrained devices and low-power networks."},
                {icon:<Globe size={20} color="#7c3aed"/>,title:"HTTP / HTTPS",desc:"Widely adopted secure protocols for API-based communication."},
                {icon:<Cpu size={20} color="#ea580c"/>,title:"Modbus (RTU / TCP)",desc:"Industrial standard for PLCs, sensors, and automation systems."},
                {icon:<Network size={20} color="#0891b2"/>,title:"CAN / CANopen",desc:"Robust real-time protocol for automotive and industrial control."},
                {icon:<Boxes size={20} color="#0d9488"/>,title:"OPC-UA",desc:"Secure, platform-independent protocol for industrial interoperability."},
              ].map((p,i)=>(
                <div key={i} className={`shimmer-card lift d${(i%3)+1}`} style={{ background:"#fff", border:"1.5px solid var(--border)", borderRadius:16, padding:"20px" }}>
                  <div style={{ marginBottom:10 }}>{p.icon}</div>
                  <div style={{ fontWeight:700, fontSize:"0.9rem", color:"var(--ink)", marginBottom:6, fontFamily:"Syne,sans-serif" }}>{p.title}</div>
                  <p style={{ fontSize:"0.8rem", color:"var(--ink-3)", lineHeight:1.55 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop:24, background:"#f0fdf4", border:"1.5px solid #bbf7d0", borderRadius:12, padding:"14px 18px", display:"flex", gap:10, alignItems:"flex-start" }}>
              <ShieldCheck size={16} color="#16a34a" style={{ marginTop:2, flexShrink:0 }} />
              <p style={{ fontSize:"0.83rem", color:"#166534", lineHeight:1.6 }}>All protocols implemented with end-to-end encryption, authentication mechanisms, and enterprise-grade security best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section style={{ padding:"100px 0", background:"var(--surface-2)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:700, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>IoT Architecture &amp; System Design</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Robust IoT architectures connecting devices, gateways, cloud platforms, and applications — ensuring scalability, security, and reliability.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:40 }}>
            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              {[
                {icon:<Cpu size={26} color="#2563eb"/>,bg:"#dbeafe",title:"Device & Firmware Layer",desc:"Embedded devices handle sensor data acquisition, local processing, and secure communication."},
                {icon:<Radio size={26} color="#16a34a"/>,bg:"#dcfce7",title:"Connectivity & Gateway Layer",desc:"Gateways aggregate data, translate protocols, and ensure reliable communication."},
                {icon:<Cloud size={26} color="#7c3aed"/>,bg:"#ede9fe",title:"Cloud & Data Processing Layer",desc:"Cloud services ingest, process, store, and analyze device data at scale."},
                {icon:<Layers size={26} color="#ea580c"/>,bg:"#ffedd5",title:"Application & Integration Layer",desc:"Web and mobile apps provide dashboards, automation controls, and enterprise integrations."},
              ].map((layer,i)=>(
                <div key={i} className={`reveal d${i+1}`} style={{ display:"flex", gap:18, alignItems:"flex-start", background:"#fff", border:"1.5px solid var(--border)", borderRadius:20, padding:"24px 20px" }}>
                  <div style={{ width:50, height:50, borderRadius:14, background:layer.bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{layer.icon}</div>
                  <div>
                    <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"0.95rem", marginBottom:6, color:"var(--ink)" }}>{layer.title}</h3>
                    <p style={{ fontSize:"0.85rem", color:"var(--ink-3)", lineHeight:1.6 }}>{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
              {[
                {icon:<Shield size={22} color="#2563eb"/>,title:"Security by Architecture",desc:"Secure boot, device authentication, encrypted data transmission, and access control are built into every architectural layer."},
                {icon:<RefreshCcw size={22} color="#16a34a"/>,title:"OTA Updates & Lifecycle Management",desc:"Our architectures support remote firmware updates, configuration changes, and device lifecycle management without physical access."},
                {icon:<Cloud size={22} color="#7c3aed"/>,title:"Scalability & High Availability",desc:"Designed to scale from pilot deployments to millions of connected devices with fault tolerance and high-availability infrastructure."},
              ].map((feat,i)=>(
                <div key={i} className={`reveal d${i+2}`} style={{ background:"#fff", border:"1.5px solid var(--border)", borderRadius:20, padding:"28px 24px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>{feat.icon}<h4 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, color:"var(--ink)" }}>{feat.title}</h4></div>
                  <p style={{ fontSize:"0.88rem", color:"var(--ink-3)", lineHeight:1.65 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section style={{ padding:"100px 0", background:"#fff" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:680, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>Flexible Engagement Models</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Choose an engagement model that aligns with your project scope, budget, and long-term business goals.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:28 }}>
            {[
              {badge:"Best for MVPs",badgeColor:"#dbeafe",badgeText:"#1d4ed8",title:"Fixed Price Model",desc:"Ideal for projects with clearly defined requirements. We commit to a fixed scope, cost, and delivery schedule — ensuring predictable budgeting.",features:["Clearly defined scope & milestones","Fixed budget & delivery timeline","Minimal client management effort","Ideal for MVPs & small projects"],highlighted:false},
              {badge:"Most Popular",badgeColor:"#2563eb",badgeText:"#fff",title:"Dedicated Team Model",desc:"A dedicated team works exclusively on your product — acting as an extension of your in-house team. Perfect for scaling products and continuous development.",features:["Full control over team & priorities","Monthly billing with flexible scaling","Best for SaaS & enterprise platforms","Continuous delivery & long-term support"],highlighted:true},
              {badge:"Flexible Scope",badgeColor:"#ede9fe",badgeText:"#6d28d9",title:"Time & Material Model",desc:"Designed for evolving requirements. You pay only for actual development time and effort, with complete transparency and agile execution.",features:["Flexible scope & changing priorities","Pay-as-you-go (hourly or monthly)","Agile & iterative delivery approach","Ideal for R&D & innovation-driven projects"],highlighted:false},
            ].map((eng,i)=>(
              <div key={i} className={`reveal shimmer-card lift d${i+1}`} style={{ background:eng.highlighted?"linear-gradient(160deg,#1e40af 0%,#1d4ed8 100%)":"#fff", border:eng.highlighted?"none":"1.5px solid var(--border)", borderRadius:28, padding:"40px 32px", boxShadow:eng.highlighted?"0 24px 64px rgba(37,99,235,0.3)":"none", color:eng.highlighted?"#fff":"var(--ink)" }}>
                <div style={{ display:"inline-block", background:eng.badgeColor, color:eng.badgeText, borderRadius:999, padding:"5px 14px", fontSize:"0.78rem", fontWeight:700, marginBottom:24, fontFamily:"DM Sans,sans-serif" }}>{eng.badge}</div>
                <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"1.3rem", marginBottom:14 }}>{eng.title}</h3>
                <p style={{ fontSize:"0.9rem", lineHeight:1.7, marginBottom:28, opacity:eng.highlighted?0.85:1, color:eng.highlighted?"#fff":"var(--ink-2)" }}>{eng.desc}</p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {eng.features.map((f,j)=>(
                    <div key={j} style={{ display:"flex", alignItems:"center", gap:10, fontSize:"0.85rem", color:eng.highlighted?"rgba(255,255,255,0.9)":"var(--ink-2)" }}>
                      <span style={{ width:18, height:18, borderRadius:"50%", background:eng.highlighted?"rgba(255,255,255,0.2)":"#dbeafe", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:10, color:eng.highlighted?"#fff":"#2563eb", fontWeight:700 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding:"100px 0", background:"var(--surface-2)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:700, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>Industries We Serve</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Delivering IoT and embedded solutions across industries with domain-specific expertise.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:24 }}>
            {[
              {img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d",title:"Enterprise & B2B",desc:"ERP systems, internal tools, secure dashboards and large-scale enterprise applications."},
              {img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",title:"Fintech & Banking",desc:"Payment gateways, digital wallets and fintech platforms with bank-grade security."},
              {img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",title:"Healthcare & MedTech",desc:"Patient monitoring and HIPAA-compliant healthcare platforms."},
              {img:"https://images.unsplash.com/photo-1515168833906-d2a3b82b302a",title:"E-Commerce & Retail",desc:"High-conversion shopping apps, inventory management and POS integration."},
              {img:"https://images.unsplash.com/photo-1518770660439-4636190af475",title:"IoT & Smart Devices",desc:"Applications for smart devices, connected hardware, sensors and IoT ecosystems."},
              {img:"https://images.unsplash.com/photo-1509062522246-3755977927d7",title:"EdTech & eLearning",desc:"Online learning apps, LMS platforms, and virtual classrooms."},
              {img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa",title:"Real Estate & PropTech",desc:"Property listing apps, virtual tours, CRM and real estate management."},
              {img:"https://images.unsplash.com/photo-1554284126-aa88f22d8b74",title:"Fitness & Wellness",desc:"Workout tracking apps, wearable integrations and wellness solutions."},
              {img:"https://images.unsplash.com/photo-1511512578047-dfb367046420",title:"Gaming & Interactive",desc:"2D/3D games, real-time multiplayer and immersive interactive experiences."},
            ].map((ind,i)=>(
              <div key={i} className={`reveal industry-card d${(i%3)+1}`} style={{ position:"relative", height:320, borderRadius:24, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.1)", cursor:"pointer" }}>
                <img src={ind.img} alt={ind.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(15,23,42,0.85) 0%,rgba(15,23,42,0.2) 60%,transparent 100%)" }} />
                <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"28px 24px" }}>
                  <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, color:"#fff", fontSize:"1.05rem", marginBottom:6 }}>{ind.title}</h3>
                  <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.85)", lineHeight:1.55 }}>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section style={{ padding:"100px 0", background:"#fff" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:700, margin:"0 auto 72px" }}>
            <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, letterSpacing:"-0.03em", marginBottom:20 }}>Compliance, Security &amp; Legal Assurance</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Strict security, compliance, and legal frameworks to ensure confidentiality, data protection, and IP safety.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:40, alignItems:"start" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                {emoji:"🔒",title:"NDA Protected Engagement",desc:"All discussions, documentation, and deliverables are secured under a legally binding NDA."},
                {emoji:"🧠",title:"100% IP Ownership",desc:"You retain complete ownership of source code, data, and all project assets upon completion."},
                {emoji:"🛡️",title:"ISO-Aligned Security",desc:"Development workflows aligned with ISO 27001 security principles and controls."},
                {emoji:"🌍",title:"GDPR & Data Privacy",desc:"Strict data privacy measures aligned with GDPR and international regulations."},
              ].map((c,i)=>(
                <div key={i} className={`reveal shimmer-card d${i+1}`} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"20px 18px", border:"1.5px solid var(--border)", borderRadius:16, background:"#fff", transition:"box-shadow 0.2s", cursor:"default" }}
                  onMouseEnter={e=>e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.1)"}
                  onMouseLeave={e=>e.currentTarget.style.boxShadow=""}>
                  <div style={{ fontSize:"1.4rem", flexShrink:0 }}>{c.emoji}</div>
                  <div>
                    <div style={{ fontFamily:"Syne,sans-serif", fontWeight:700, color:"var(--ink)", marginBottom:4 }}>{c.title}</div>
                    <p style={{ fontSize:"0.84rem", color:"var(--ink-3)", lineHeight:1.6 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal-right grad-border" style={{ borderRadius:28, padding:"48px 40px", background:"#fff" }}>
              <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.5rem", marginBottom:24, color:"var(--ink)" }}>Built for Enterprise Trust &amp; Long-Term Partnerships</h3>
              <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:16, fontSize:"0.95rem" }}>At <strong>Albos Technologies</strong>, security and trust are embedded into every phase of our development lifecycle. Your data and IP remain fully protected.</p>
              <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:16, fontSize:"0.95rem" }}>We follow industry-recognized best practices aligned with <strong>ISO 27001</strong>, <strong>GDPR</strong>, and enterprise security standards.</p>
              <p style={{ color:"var(--ink-2)", lineHeight:1.75, marginBottom:36, fontSize:"0.95rem" }}>All legal, compliance, and security documentation is shared transparently under NDA, giving enterprises complete peace of mind.</p>
              <a href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 28px", borderRadius:50, background:"#2563eb", color:"#fff", fontWeight:700, fontFamily:"DM Sans,sans-serif", textDecoration:"none", fontSize:"0.95rem", boxShadow:"0 8px 24px rgba(37,99,235,0.3)", transition:"all 0.25s" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
                onMouseLeave={e=>e.currentTarget.style.transform=""}>
                Request NDA &amp; Compliance Details <ArrowRight size={16} />
              </a>
              <p style={{ fontSize:"0.75rem", color:"var(--ink-3)", marginTop:12 }}>NDA-protected · No obligation · Enterprise-grade confidentiality</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ padding:"0 32px 80px", maxWidth:1280, margin:"0 auto" }}>
        <div className="reveal" style={{ borderRadius:32, background:"linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#4f46e5 100%)", padding:"80px 60px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:-60, right:-60, width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,0.06)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:-40, left:-40, width:200, height:200, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }} />
          <h2 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(1.6rem,3vw,2.4rem)", color:"#fff", marginBottom:16, position:"relative" }}>Your Idea. Your Code. Your Ownership.</h2>
          <p style={{ color:"rgba(255,255,255,0.85)", fontSize:"1.05rem", lineHeight:1.75, maxWidth:580, margin:"0 auto 40px", position:"relative" }}>We believe trust is the foundation of successful partnerships. Our contracts are designed to protect your interests, ensure confidentiality, and build long-term collaboration.</p>
          <a href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"16px 36px", borderRadius:50, background:"#fff", color:"#1d4ed8", fontWeight:700, fontFamily:"DM Sans,sans-serif", textDecoration:"none", fontSize:"1rem", boxShadow:"0 8px 32px rgba(0,0,0,0.2)", transition:"all 0.25s", position:"relative" }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.3)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.2)"}}>
            Request NDA &amp; Contract Details <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section style={{ padding:"80px 0 100px", background:"linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 50%,#ede9fe 100%)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="reveal" style={{ textAlign:"center", maxWidth:680, margin:"0 auto 56px" }}>
            <h2 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(1.8rem,3.5vw,2.6rem)", color:"var(--ink)", marginBottom:16 }}>Ready to Build Your IoT Solution?</h2>
            <p style={{ fontSize:"1.05rem", color:"var(--ink-2)", lineHeight:1.75 }}>Speak with our embedded and IoT experts today. We help brands build powerful connected systems.</p>
          </div>
          <div className="reveal" style={{ display:"flex", flexWrap:"wrap", gap:16, justifyContent:"center", marginBottom:56 }}>
            <button style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"16px 32px", borderRadius:14, border:"none", background:"linear-gradient(135deg,#2563eb,#1d4ed8)", color:"#fff", fontWeight:700, fontSize:"1rem", cursor:"pointer", boxShadow:"0 8px 24px rgba(37,99,235,0.3)", fontFamily:"DM Sans,sans-serif", transition:"all 0.25s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e=>e.currentTarget.style.transform=""}>
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <a href="tel:+919766650411" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"16px 32px", borderRadius:14, background:"#16a34a", color:"#fff", fontWeight:700, fontSize:"1rem", textDecoration:"none", fontFamily:"DM Sans,sans-serif", boxShadow:"0 8px 24px rgba(22,163,74,0.3)", transition:"all 0.25s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e=>e.currentTarget.style.transform=""}>
              Call Sales <Phone size={16} />
            </a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20 }}>
            {[
              {icon:<Phone size={22} color="#2563eb"/>,title:"Phone Number",value:"+91 97666 50411"},
              {icon:<Mail size={22} color="#2563eb"/>,title:"Email Address",value:"info@albostechnologies.com"},
              {icon:<MapPin size={22} color="#2563eb"/>,title:"Office Location",value:"Office 78, 5th floor, Kunal Plaza, Pune, Maharashtra 411019"},
              {icon:<Clock size={22} color="#2563eb"/>,title:"Office Hours",value:"Mon – Sat, 10:00 AM – 7:00 PM"},
            ].map((c,i)=>(
              <div key={i} className={`reveal shimmer-card d${i+1}`} style={{ background:"rgba(255,255,255,0.9)", border:"1.5px solid rgba(255,255,255,0.8)", borderRadius:20, padding:"32px 24px", textAlign:"center", backdropFilter:"blur(12px)", boxShadow:"0 4px 20px rgba(37,99,235,0.08)", transition:"box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(37,99,235,0.15)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 4px 20px rgba(37,99,235,0.08)"}}>
                <div style={{ width:52, height:52, borderRadius:14, background:"#dbeafe", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>{c.icon}</div>
                <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1rem", color:"var(--ink)", marginBottom:8 }}>{c.title}</h3>
                <p style={{ fontSize:"0.88rem", color:"var(--ink-2)", lineHeight:1.6 }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTDevelopmentPage;