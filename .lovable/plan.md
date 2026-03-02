

## Plan: Reemplazar imagenes de portafolio por fotos reales

### Objetivo
Reemplazar las 6 imagenes principales de la seccion de portafolio (project-1 a project-6) por fotos reales de construccion obtenidas de Unsplash (licencia libre, uso gratuito).

### Enfoque
En lugar de importar archivos locales para las imagenes principales, usaremos URLs directas de Unsplash con el parametro de optimizacion de tamanio. Las imagenes de detalle (detail-1 a detail-5) se mantienen como estan.

### Cambios en `src/components/Projects.tsx`

1. **Eliminar imports de project-1 a project-6** (lineas 3-8)
2. **Crear constantes con URLs de Unsplash** para cada proyecto, seleccionando fotos reales que coincidan con la tematica:
   - Proyecto 1 (Hormigonado): foto real de vertido de hormigon
   - Proyecto 2 (Construccion de Muros): foto real de muros de contencion
   - Proyecto 3 (Cordones Cuneta): foto real de obra vial urbana
   - Proyecto 4 (Camino al Rio): foto real de infraestructura costera/ribereña
   - Proyecto 5 (Excavacion Profunda): foto real de excavadora en obra
   - Proyecto 6 (Obra Residencial): foto real de construccion residencial

3. **Actualizar el array `projects`** para usar las URLs en `img` y como primer elemento de `gallery`

### URLs de Unsplash seleccionadas
Se usaran URLs con formato `https://images.unsplash.com/photo-XXXXX?w=800&q=80` para optimizar la carga (800px de ancho, calidad 80%).

### Archivos modificados
- `src/components/Projects.tsx` - unico archivo a modificar

### Notas
- Las imagenes de detalle (detail-1 a detail-5) no se tocan
- El modal, la galeria y toda la funcionalidad existente se mantienen intactos
- Unsplash permite uso gratuito sin atribucion para proyectos comerciales

