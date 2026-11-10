# Colegio Normal Nacional Superior - Web & Portal Privado

Aplicación web institucional desarrollada con **React 19**, **JavaScript**, **React Router v7** y **Vite**.

Incluye tanto la **Landing Page pública** como un **Portal Privado de Profesores** protegido por autenticación con formularios de **Login** y **Registro**.

---

## 🏛️ Estructura de Páginas y Navegación

### 1. Landing Page Pública (`/`)
- **Header & Navbar:** Menú de navegación interactivo con scroll suave y estado dinámico de autenticación.
- **Hero Institucional:** Estadísticas de la institución (+125 años, 4 niveles educativos, +2.400 alumnos).
- **Identidad & Historia:** Pilares pedagógicos y monumento histórico.
- **Niveles Educativos:** Selector de Nivel Inicial, Primario, Secundario y Superior con vinculación directa al formulario de vacantes.
- **Instalaciones:** Biblioteca "Sarmiento", Laboratorios, Aulas Maker y Polideportivo con filtros por área.
- **Agenda & Avisos:** Calendario de eventos y descargas simuladas de normativas.
- **Inscripciones 2026:** Pasos de admisión y formulario interactivo con código de seguimiento (`CNNS-2026-XXXX`).
- **Preguntas Frecuentes (FAQ):** Acordeón interactivo.
- **Contacto:** Mapa, medios de transporte público y teléfonos.

### 2. Portal Privado de Profesores (`/profesores` - 🔒 Ruta Protegida)
- **Acceso Restringido:** Solo pueden acceder usuarios autenticados. Si un usuario no registrado o sin sesión intenta ingresar, es redirigido automáticamente a `/login` con aviso de ruta privada.
- **Texto breve explicativo:** Presentación oficial del claustro docente y canales de consulta.
- **Cuerpo Docente:** 10 profesores con cátedras, títulos de grado, niveles formativos, horarios de tutoría y biografía pedagógica.
- **Buscador & Filtros:** Búsqueda en tiempo real por nombre, materia o especialidad, y filtros por departamento (Ciencias Sociales, Exactas, Lengua, Formación Docente, etc.).
- **Interacción:** Modal funcional para enviar consultas pedagógicas y pedidos de tutoría directamente a cada profesor.

### 3. Formulario de Inicio de Sesión (`/login`)
- Acceso con email y contraseña.
- Mensajes de error claros.
- **Botón de credenciales de prueba** (1-clic para autocompletar con cuenta docente de demostración).
- Redirección automática a la página que el usuario intentaba visitar.

### 4. Formulario de Registro (`/registro`)
- Registro de nuevos usuarios con Nombre, Email, Rol institucional (*Estudiante, Docente, Personal, Familiar*) y Contraseña.
- Validación de contraseña (mínimo 6 caracteres y confirmación coincidente).
- Persistencia en `localStorage` (los usuarios registrados se mantienen en el navegador).
- Inicio de sesión automático tras el registro con redirección a `/profesores`.

---

## 🔑 Credenciales de Prueba Rápida

| Campo | Valor |
|---|---|
| **Correo** | `docente@cnns.edu.ar` |
| **Contraseña** | `password123` |

*(También puedes crear cualquier cuenta nueva desde el formulario de `/registro`)*

---

## 🚀 Cómo Iniciar el Proyecto

### Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL que muestra Vite (por ejemplo: `http://localhost:5173`).

### Compilar para producción
```bash
npm run build
```
