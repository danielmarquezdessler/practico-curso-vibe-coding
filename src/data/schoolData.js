export const schoolData = {
  name: "Colegio Normal Nacional Superior",
  shortName: "CNNS",
  motto: "Tradición, Saber y Compromiso Formando el Futuro",
  foundationYear: 1898,
  address: "Av. de Mayo 1420, Ciudad Histórica",
  phone: "+54 (11) 4381-8900",
  email: "contacto@normalnacionalsuperior.edu.ar",
  schedule: "Lunes a Viernes de 7:30 a 22:30 hs",

  stats: [
    { value: "+125", label: "Años de Historia", sub: "Fundado en 1898" },
    { value: "4", label: "Niveles Educativos", sub: "Inicial a Nivel Superior" },
    { value: "+2.400", label: "Estudiantes Activos", sub: "En todos los turnos" },
    { value: "+95%", label: "Inserción Universitaria", sub: "Y docente en egresados" }
  ],

  pillars: [
    {
      id: "pedagogia",
      title: "Excelencia Pedagógica",
      description: "Más de un siglo formando docentes y líderes que transforman la educación con pensamiento reflexivo e innovación didáctica."
    },
    {
      id: "inclusion",
      title: "Educación Pública e Inclusiva",
      description: "Espacio plural, gratuito y democrático donde cada estudiante encuentra acompañamiento psicopedagógico y estímulo a su potencial."
    },
    {
      id: "ciencia",
      title: "Ciencia, Arte y Tecnología",
      description: "Laboratorios de ciencias experimentales, robótica, aulas digitales, talleres artísticos y orquesta juvenil."
    },
    {
      id: "valores",
      title: "Formación Ciudadana y Ética",
      description: "Promovemos el debate democrático, la convivencia pacífica, la solidaridad y el compromiso comunitario activo."
    }
  ],

  levels: [
    {
      id: "inicial",
      name: "Nivel Inicial",
      subtitle: "Jardín de Infantes 'Granaderos'",
      ageRange: "Salas de 3, 4 y 5 años",
      turnos: "Turno Mañana (8:00 a 12:00) y Tarde (13:00 a 17:00)",
      description: "Un ambiente seguro, afectivo y estimulante donde el juego, el descubrimiento y la creatividad sientan las bases del aprendizaje para toda la vida.",
      highlights: [
        "Iniciación al pensamiento matemático y lectoescritura lúdica",
        "Aulas de música, plástica y expresión corporal",
        "Patios de juegos seguros y sector de huerta escolar",
        "Gabinete de orientación y acompañamiento a familias"
      ]
    },
    {
      id: "primario",
      name: "Nivel Primario",
      subtitle: "Escuela Primaria Graduada",
      ageRange: "1° a 7° Grado",
      turnos: "Jornada Simple y Talleres Optativos en contraturno",
      description: "Formación sólida en competencias troncales, desarrollo de habilidades del siglo XXI y estímulo permanente a la curiosidad científica y humanística.",
      highlights: [
        "Alfabetización avanzada, oratoria y proyectos de lectura",
        "Enseñanza intensiva de inglés desde 1° grado",
        "Club de ciencias, feria escolar y laboratorio de informática",
        "Campamentos educativos y torneos intercolegiales"
      ]
    },
    {
      id: "secundario",
      name: "Nivel Secundario",
      subtitle: "Bachillerato Nacional con Orientaciones",
      ageRange: "1° a 5° / 6° Año",
      turnos: "Turno Mañana y Turno Tarde",
      description: "Rigurosidad académica combinada con pensamiento crítico y formación ciudadana. Orientaciones preparatorias para la educación universitaria.",
      highlights: [
        "Orientaciones en Ciencias Sociales, Ciencias Naturales y Economía",
        "Programa de tutorías académicas y orientación vocacional",
        "Participación en Modelos de Naciones Unidas y Olimpiadas",
        "Pasantías pre-universitarias y convenios con universidades"
      ]
    },
    {
      id: "superior",
      name: "Nivel Superior",
      subtitle: "Instituto de Formación Docente y Técnica",
      ageRange: "Nivel Terciario / Superior",
      turnos: "Turno Vespertino / Noche (18:00 a 22:30)",
      description: "Cuna de maestras y profesores. Carreras docentes y tecnicaturas superiores con reconocimiento nacional y prácticas en escuelas asociadas.",
      highlights: [
        "Profesorado de Educación Primaria e Inicial",
        "Profesorado de Lengua y Literatura / Ciencias Sociales",
        "Tecnicatura Superior en Gestión de Organizaciones Educativas",
        "Centro de Investigación Educativa y formación continua"
      ]
    }
  ],

  facilities: [
    {
      title: "Biblioteca Histórica 'Sarmiento'",
      category: "Académica",
      detail: "Más de 35.000 títulos, incunables pedagógicos, hemeroteca y sala de estudio silencioso con puestos digitales.",
      badge: "Patrimonio Cultural"
    },
    {
      title: "Laboratorios de Ciencias & Física",
      category: "Científica",
      detail: "Espacio equipado para experimentación en química, biología, geología y física instrumental.",
      badge: "Equipamiento Moderno"
    },
    {
      title: "Aulas Maker & Robótica",
      category: "Tecnología",
      detail: "Impresoras 3D, kits de Arduino, programación aplicada y conectividad por fibra óptica en todos los ambientes.",
      badge: "Innovación STEM"
    },
    {
      title: "Complejo Polideportivo",
      category: "Deportes",
      detail: "Canchas de vóley, básquet, fútbol de salón y gimnasio cubierto para educación física y torneos intercolegiales.",
      badge: "Deporte y Salud"
    },
    {
      title: "Aula Magna & Teatro Histórico",
      category: "Cultura",
      detail: "Auditorio con capacidad para 450 personas con acústica acústicamente tratada para conciertos y actos solemnes.",
      badge: "Capacidad 450 personas"
    },
    {
      title: "Gabinete Psicopedagógico",
      category: "Bienestar",
      detail: "Equipo interdisciplinario de psicólogos, psicopedagogos y trabajadores sociales al servicio de la comunidad.",
      badge: "Apoyo Integral"
    }
  ],

  upcomingEvents: [
    {
      date: "18 NOV",
      title: "Expo Anual de Ciencias y Proyectos STEM",
      place: "Patios Centrales y Laboratorio",
      category: "Académico"
    },
    {
      date: "25 NOV",
      title: "Charla Informativa Ingreso Ciclo Lectivo 2026",
      place: "Aula Magna (Presencial y Streaming)",
      category: "Admisiones"
    },
    {
      date: "04 DIC",
      title: "Concierto de Cierre: Orquesta y Coro del Normal",
      place: "Auditorio Central",
      category: "Cultural"
    },
    {
      date: "12 DIC",
      title: "Acto de Colación de Egresados Secundario y Superior",
      place: "Salón de Actos",
      category: "Institucional"
    }
  ],

  faqs: [
    {
      question: "¿Cuáles son las orientaciones del Nivel Secundario?",
      answer: "Ofrecemos tres bachilleratos oficiales de alta demanda: Ciencias Sociales y Humanidades, Ciencias Naturales, y Economía y Administración. Todos cuentan con formación en idiomas y tecnologías digitales."
    },
    {
      question: "¿Cómo es el proceso de inscripción y asignación de vacantes?",
      answer: "El proceso se realiza de manera transparente. Comienza con una pre-inscripción online en este sitio web, seguida de la presentación de documentación física y una entrevista de articulación familiar o académica."
    },
    {
      question: "¿Qué títulos otorga el Nivel Superior y qué validez poseen?",
      answer: "Otorga títulos docentes oficiales de validez nacional (Profesor/a de Educación Primaria, Profesor/a de Educación Inicial y Tecnicaturas Superiores). Permiten ejercer en instituciones públicas y privadas de todo el país."
    },
    {
      question: "¿Cuentan con actividades extracurriculares y deportes?",
      answer: "Sí, disponemos de talleres de ajedrez, orquesta infanto-juvenil, club de debate, robótica y entrenamiento en fútbol, vóley y atletismo en contraturno."
    },
    {
      question: "¿La institución es arancelada?",
      answer: "El Colegio Normal Nacional Superior es una institución educativa pública de gestión estatal. No se cobran aranceles mensuales. Existe una Asociación Cooperadora voluntaria que colabora con mejoras continuas."
    }
  ]
};

