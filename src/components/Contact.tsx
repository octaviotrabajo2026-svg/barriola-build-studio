import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", localidad: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.nombre} de ${form.localidad}. ${form.mensaje}`;
    window.open(`https://wa.me/5493444468203?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">
          Contacto
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Hablemos de tu proyecto
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {(["nombre", "email", "localidad"] as const).map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                required
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full border border-border bg-pearl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
            ))}
            <textarea
              placeholder="Mensaje"
              rows={5}
              required
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="w-full border border-border bg-pearl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 font-semibold text-sm tracking-widest uppercase hover:brightness-110 transition-all w-full md:w-auto"
            >
              Enviar Consulta
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-foreground">Dirección</h4>
                <p className="text-muted-foreground text-sm">Av. de la Soberanía 315, Gualeguay, Entre Ríos 2840</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-foreground">Teléfono</h4>
                <a href="tel:3444468203" className="text-muted-foreground text-sm hover:text-primary transition-colors">3444468203</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:of.barriola@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">of.barriola@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-foreground">Horarios</h4>
                <div className="text-muted-foreground text-sm space-y-0.5">
                  <p>Lunes a Viernes: 7:00 – 15:00</p>
                  <p>Sábado: 7:30 – 12:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.8!2d-58.52!3d-33.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba63c1d0000001%3A0x1!2sAv.+de+la+Soberan%C3%ADa+315%2C+Gualeguay%2C+Entre+R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Barriola Constructora"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
