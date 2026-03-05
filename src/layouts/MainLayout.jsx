import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WAButton from "../components/ui/WAButton";
import { useScrollTop } from "../hooks/useScrollTop";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * MainLayout wraps every page with:
 *  - Sticky Navbar
 *  - Page content (children)
 *  - Footer
 *  - Floating WhatsApp button
 *  - Scroll-to-top on route change
 *  - Scroll reveal observer
 */
export default function MainLayout({ children }) {
  useScrollTop();
  useScrollReveal([children]); // re-run observer when page content changes

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WAButton />
    </div>
  );
}