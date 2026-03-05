import { waLink } from "../../utils/whatapp";

export default function WAButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      className="wa-pulse fixed bottom-7 right-7 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform hover:scale-110"
    >
      💬
    </a>
  );
}