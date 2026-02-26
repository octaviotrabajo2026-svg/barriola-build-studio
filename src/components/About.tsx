import teamImg from "@/assets/team.jpg";

const About = () => {
  return (
    <section id="estudio" className="py-24 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              El Estudio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experiencia que se traduce en resultados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En <strong className="text-foreground">Barriola Constructora</strong> contamos con años de trayectoria en el rubro de la construcción en la región de Entre Ríos. Nos especializamos en movimiento de suelos, obras viales y civiles, limpieza y nivelación de terrenos, venta y colocación de alcantarillas, venta de suelos y áridos, y sistematización del campo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro compromiso es entregar cada proyecto con los más altos estándares de calidad, cumpliendo plazos y superando expectativas. Trabajamos con maquinaria de última generación y un equipo humano altamente capacitado.
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={teamImg}
              alt="Equipo de Barriola Constructora"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
