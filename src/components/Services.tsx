import { motion } from "framer-motion";
import { Shovel, Road, Mountain, Droplets, Truck, Home } from "lucide-react";

const services = [
  {
    icon: Shovel,
    title: "Movimiento de Suelos",
    description:
      "Excavaciones, rellenos, compactación y nivelación de terrenos con maquinaria pesada de última generación.",
  },
  {
    icon: Road,
    title: "Obras Viales",
    description:
      "Construcción y mantenimiento de caminos, cordones cuneta, badenes y pavimentación urbana y rural.",
  },
  {
    icon: Mountain,
    title: "Nivelación de Terrenos",
    description:
      "Limpieza, desmonte y preparación de terrenos para uso agrícola, industrial o residencial.",
  },
  {
    icon: Droplets,
    title: "Alcantarillas",
    description:
      "Venta, transporte y colocación de alcantarillas de hormigón para obras hidráulicas y viales.",
  },
  {
    icon: Truck,
    title: "Venta de Suelos y Áridos",
    description:
      "Provisión de tosca, arena, piedra y otros materiales con entrega en obra en toda la región.",
  },
  {
    icon: Home,
    title: "Sistematización del Campo",
    description:
      "Diseño y ejecución de sistematización de campos para optimizar el drenaje y la producción agropecuaria.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center"
        >
          Servicios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Lo que hacemos
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-pearl border border-border p-8 hover:border-primary transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-surface-dark flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  size={26}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
