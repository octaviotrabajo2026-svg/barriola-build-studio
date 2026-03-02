import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-barriola.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-dark py-10 border-t border-foreground/10"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Barriola Constructora" className="h-12 w-auto" />

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
