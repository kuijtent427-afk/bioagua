import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/56912345678"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contáctanos por WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl"
  >
    <MessageCircle className="h-7 w-7 fill-white stroke-white" />
  </a>
);

export default WhatsAppButton;