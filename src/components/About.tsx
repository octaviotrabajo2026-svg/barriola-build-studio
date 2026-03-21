import { useState } from "react";
import { motion } from "framer-motion";
import teamImg from "@/assets/team.jpg";

const paragraphs = [
  "Barriola Constructora nace en la ciudad de Gualeguay con una visión de crecimiento sostenido, trabajo constante y compromiso con cada proyecto. Sus inicios se remontan al año 2010, con una estructura inicial modesta orientada al movimiento de suelo y al mantenimiento de caminos rurales.",
  "En 2013 se produjo un punto de inflexión con la incorporación de nuevos socios y la consolidación de una estructura societaria de carácter familiar. Esta nueva etapa permitió ampliar la capacidad operativa, incorporar maquinaria y comenzar a ejecutar obras de mayor envergadura.",
  "A medida que la empresa fue creciendo, también fue incorporando una mirada cada vez más técnica en el desarrollo de sus proyectos. Desde sus comienzos, Barriola Constructora buscó el acompañamiento de profesionales de la ingeniería y la arquitectura, fortaleciendo la planificación, la calidad de ejecución y la capacidad de brindar soluciones eficientes en cada obra.",
  "Con el tiempo, la empresa amplió su campo de acción hacia obras hidráulicas, obras viales, movimiento de suelo a gran escala y desarrollos urbanos y privados, incluyendo la sistematización de tierras para loteos. Posteriormente, comenzó a participar en obras públicas, inicialmente a nivel municipal y provincial, muchas de ellas con financiamiento nacional, interviniendo en proyectos de urbanización e infraestructura urbana.",
  "De forma paralela, Barriola Constructora mantuvo una presencia constante en el sector privado, trabajando junto a empresas agropecuarias, desarrolladores e iniciativas urbanas. En distintas etapas de su desarrollo, también incorporó la fabricación de tubos de hormigón premoldeado como actividad complementaria.",
  "Hoy, Barriola Constructora cuenta con oficinas, taller y obrador propios, además de un parque de maquinaria en constante crecimiento. Su trabajo integra experiencia, capacidad operativa y criterio técnico, con el objetivo de brindar soluciones confiables y construir vínculos duraderos basados en la confianza y el cumplimiento.",
];

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="estudio" className="py-24 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Nosotros
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nuestra historia
            </h2>

            <div className="relative">
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? "max-h-[2000px]" : "max-h-[200px]"
                }`}
              >
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>

              {!expanded && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pearl to-transparent pointer-events-none" />
              )}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-primary font-semibold text-sm tracking-wide uppercase hover:brightness-110 transition-all"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={teamImg}
              alt="Equipo de Barriola Constructora"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
