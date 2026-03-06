import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-barriola.png";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Estudio", href: "#estudio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="#inicio">
          <img src={logo} alt="Barriola Constructora" className="h-20 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-surface-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
        >
          Consulta por WhatsApp
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-surface-dark-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-dark border-t border-foreground/10 px-4 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-surface-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide"
          >
            Consulta por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
