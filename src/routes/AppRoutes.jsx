import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home          from "../pages/Home";
import About         from "../pages/About";
import ServicesPage  from "../pages/Servicespage";
import PortfolioPage from "../pages/Portfoliopage";
import ContactPage   from "../pages/ContactPage";
import WebDevelopement from "../components/services/WebDevelopement";
import AppDevelopment from "../components/services/AppDevelopement";
import IosDevelopment from "../components/services/IosDevelopment";
import ApiDevlopment  from "../components/services/ApiDevlopment";
import BlockchainAndWeb3  from "../components/services/BlockchainAndWeb3";
import GameDevelopment  from "../components/services/GameDevelopment";
import HostingPage  from "../components/services/HostingPage";
import SocialMediaMarketing  from "../components/services/SocialMediaMarketing";
import TelecallingAndSupportServices  from "../components/services/TelecallingAndSupportServices";
import UIUXPage  from "../components/services/UIUXPage";
import ErpCrmSystem  from "../components/services/ErpCrmSystem";
import DigitalMarketing  from "../components/services/DigitalMarketing";
import  IoTDevelopmentPage from "../components/services/IotDevelopmentPage";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/services"  element={<ServicesPage />} />
          <Route path="/services/website-development-services-company" element={<WebDevelopement />} />
          <Route path="/services/android-app-development-services" element={<AppDevelopment />} />
          <Route path="/services/ios-app-development" element={<IosDevelopment />} />
          
          <Route path="/services/api-development-services" element={<ApiDevlopment />} />
          <Route path="/services/blockchain-development-company" element={<BlockchainAndWeb3 />} />
          <Route path="/services/mobile-game-development-company" element={<GameDevelopment />} />
          <Route path="/services/web-hosting-services" element={<HostingPage />} />
          <Route path="/services/socialMedia-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/telecalling-support" element={<TelecallingAndSupportServices />} />
          <Route path="/services/uiux-design-company" element={<UIUXPage />} />
          {/* <Route path="/services/uiux-design-company" element={<UIUXPage />} /> */}
          <Route path="/services/digital-marketing-seo" element={<DigitalMarketing />} />
          <Route path="/services/erp-crm" element={<ErpCrmSystem />} />
          {/* <Route path="/services/uiux-design-company" element={<UIUXPage />} /> */}
          <Route path="/services/iot-application-development-services" element={<IoTDevelopmentPage />} />
          
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          {/* 404 fallback */}
          <Route path="*"          element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}