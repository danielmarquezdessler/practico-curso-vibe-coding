# Colegio Normal Nacional Superior - Landing Page

Landing page institucional desarrollada en **React** y **JavaScript**, construida con **Vite** y estilizada con CSS moderno y componentes modulares.

## 🏛️ Características Principales

- **Diseño Institucional y Moderno:** Paleta de colores oficial (azul marino institucional, acentos dorados y fondo limpio), tipografía académica legible y diseño 100% responsivo para móviles, tablets y computadoras de escritorio.
- **Barra Superior & Navegación:** Contactos rápidos, horarios, menú interactivo con scroll suave y menú desplegable para móviles.
- **Sección Hero:** Presentación institucional con escudo, lema de la institución, botones de llamado a la acción y panel de estadísticas destacadas (+125 años de historia, 4 niveles educativos, +2.400 alumnos y +95% inserción universitaria/docente).
- **Identidad & Historia:** Reseña histórica de la tradición normalista, monumento histórico y los 4 pilares formativos (Excelencia Pedagógica, Inclusión Pública, Ciencia y Arte, Formación Ciudadana).
- **Niveles Educativos Articulados (Pestañas Interactivas):**
  - **Nivel Inicial:** Jardín de Infantes (Salas de 3, 4 y 5 años).
  - **Nivel Primario:** Escuela Primaria Graduada (1° a 7° Grado).
  - **Nivel Secundario:** Bachillerato con orientaciones en Ciencias Sociales, Ciencias Naturales y Economía.
  - **Nivel Superior:** Instituto de Formación Docente y Técnica (Profesorados y Tecnicaturas).
  - *Interacción directa:* Al hacer clic en "Solicitar Vacante" en cualquier nivel, el formulario de inscripción se pre-selecciona automáticamente con dicho nivel.
- **Campus e Instalaciones:** Biblioteca Histórica "Sarmiento", Laboratorios Científicos, Aulas Maker & Robótica, Complejo Deportivo, Aula Magna y Gabinete Psicopedagógico con filtros por categorías.
- **Agenda Escolar & Recursos Descargables:** Próximos eventos (Expo Ciencias, Charlas informativas, Actos) y botones simulados de descarga de reglamentos y calendarios.
- **Proceso de Inscripción 2026 & Formulario Funcional:**
  - Guía visual en 4 pasos (Preinscripción, Documentación, Entrevista, Matriculación).
  - Formulario interactivo con validación de campos, selección de nivel y generación de código oficial de seguimiento (ej. `CNNS-2026-XXXX`).
- **Preguntas Frecuentes (FAQ):** Acordeón interactivo para resolver dudas sobre títulos, gratuidad, orientaciones y deportes.
- **Contacto & Ubicación:** Información detallada de sedes, líneas de transporte público, correos directos por secretaría y formulario de consulta rápida.
- **Pie de Página (Footer):** Enlaces rápidos, datos oficiales y botón para volver arriba con suavidad.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL que muestra Vite (usualmente `http://localhost:5173`).

### 2. Generar versión para producción
```bash
npm run build
```

### 3. Previsualizar la versión compilada
```bash
npm run preview
```

---

## 📁 Estructura del Código

```text
├── index.html                   # Plantilla HTML con fuentes de Google Fonts
├── package.json                 # Dependencias (React 19, Lucide React, Vite)
├── src/
│   ├── main.jsx                 # Punto de entrada de la aplicación
│   ├── App.jsx                  # Componente principal que orquesta las secciones
│   ├── App.css                  # Estilos detallados y responsivos de las secciones
│   ├── index.css                # Variables de diseño (Design Tokens) y reset
│   ├── data/
│   │   └── schoolData.js        # Información centralizada y estructurada del colegio
│   └── components/
│       ├── Navbar.jsx           # Navegación con menú responsive y scroll
│       ├── Hero.jsx             # Portada de bienvenida y estadísticas
│       ├── About.jsx            # Historia, misión y pilares formativos
│       ├── Levels.jsx           # Selector interactivo de niveles educativos
│       ├── Facilities.jsx       # Instalaciones y filtros por categorías
│       ├── NewsAndEvents.jsx    # Calendario escolar y avisos
│       ├── Admissions.jsx       # Pasos de admisión y formulario interactivo
│       ├── FAQ.jsx              # Acordeón de preguntas frecuentes
│       ├── Contact.jsx          # Ubicación, medios de transporte y contactos
│       └── Footer.jsx           # Pie de página institucional
```
