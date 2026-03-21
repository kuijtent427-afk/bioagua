import { motion } from "framer-motion";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/56925835836"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Contáctanos por WhatsApp"
  >
    <img src={whatsappLogo} alt="WhatsApp" className="h-9 w-9 object-contain" />
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-[#25D366]"
      animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
  </motion.a>
);

export default WhatsAppButton;
