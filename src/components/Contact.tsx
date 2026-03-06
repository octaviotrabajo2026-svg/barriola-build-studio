import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", localidad: "", mensaje: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      toast.error("Por favor completá todos los campos obligatorios.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/xwpkgjvr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nombre,
          email: form.email,
          localidad: form.localidad,
          message: form.mensaje,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ nombre: "", email: "", localidad: "", mensaje: "" });
        toast.success("¡Mensaje enviado con éxito!");
      } else {
        throw new Error("Error en el envío");
      }
    } catch {
      toast.error("Hubo un error al enviar. Intentá de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center"
        >
          Contacto
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Hablemos de tu proyecto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {(["nombre", "email", "localidad"] as const).map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                required={field !== "localidad"}
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
              disabled={sending || sent}
              className="bg-primary text-primary-foreground px-8 py-3 font-semibold text-sm tracking-widest uppercase hover:brightness-110 transition-all w-full md:w-auto disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {sending && <Loader2 className="animate-spin" size={16} />}
              {sent && <CheckCircle size={16} />}
              {sent ? "Enviado" : sending ? "Enviando..." : "Enviar Consulta"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
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

            <div className="mt-6 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.8!2d-59.3153313!3d-33.1324954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0aafecd1e7035cb%3A0xa4c90447ac4f5bb1!2sBarriola+Constructora!5e0!3m2!1ses!2sar!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Barriola Constructora"
              />
              <a
                href="https://www.google.com/maps/place/Barriola+Constructora/@-33.1324954,-59.3153313,17z/data=!3m1!4b1!4m6!3m5!1s0xa0aafecd1e7035cb:0xa4c90447ac4f5bb1!8m2!3d-33.1324999!4d-59.3127564!16s%2Fg%2F11p0nmnc74?hl=es&entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-surface-dark text-surface-dark-foreground py-2.5 text-sm font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
