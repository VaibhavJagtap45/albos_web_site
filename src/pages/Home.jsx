import Hero          from "../components/Hero";
import TrustBar      from "../components/TrustBar";
import Services      from "../components/Services";
import Process       from "../components/Process";
import Portfolio     from "../components/Portfolio";
import WhyUs        from "../components/Whyus";
import TechMarquee  from "../components/Techmarquee";
import Testimonials from "../components/Testimonials";
import Contact      from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <TechMarquee />
      <Testimonials />
      <Contact />
    </>
  );
}