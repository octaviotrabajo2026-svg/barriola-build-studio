

## Plan: 4 modificaciones solicitadas

### 1. Mapa — link "Abrir en Maps"
Debajo del iframe del mapa en `Contact.tsx`, agregar un link/botón "Abrir en Google Maps" que apunte a la URL exacta proporcionada:
`https://www.google.com/maps/place/Barriola+Constructora/...`

### 2. Navbar — agregar "Servicios"
En `Navbar.tsx`, agregar `{ label: "Servicios", href: "#servicios" }` al array `navItems` entre "Estudio" y "Proyectos".

### 3. Servicios con modal de detalles (como Proyectos)
Refactorizar `Services.tsx` para que cada servicio tenga:
- Una imagen placeholder (se pueden subir después)
- Un botón "Ver detalles" con hover overlay (igual que en Projects)
- Un modal con galería de imágenes, descripción extendida y navegación entre fotos
- Se reutiliza el mismo patrón de modal/galería de `Projects.tsx`

Cada servicio tendrá campos: `img`, `title`, `description`, `gallery[]`, `fullDescription`.

### 4. Stats — cambiar "120+ Clientes satisfechos" por "100%"
En `Stats.tsx`, cambiar el tercer stat de `{ value: 120, suffix: "+", label: "Clientes satisfechos" }` a `{ value: 100, suffix: "%", label: "Clientes satisfechos" }`.

### Archivos a modificar
- `src/components/Contact.tsx` — agregar link al mapa
- `src/components/Navbar.tsx` — agregar item "Servicios"
- `src/components/Services.tsx` — rediseño completo con cards + modal
- `src/components/Stats.tsx` — cambiar valor del counter

