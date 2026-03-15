import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-barriola-new.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-dark py-10 border-t border-foreground/10"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <img 
          src={logo} 
          alt="Barriola Constructora" 
          className="h-28 md:h-32 w-auto object-contain" 
        />

        <a
          href="https://www.instagram.com/barriolaconstructora"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cement hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>

        <p className="text-cement text-xs">
          © 2024 Barriola Constructora. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;