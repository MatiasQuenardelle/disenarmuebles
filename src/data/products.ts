import type { Product } from "./types";

export const products: Product[] = [
  // ─── BASE BOX (Hero products) ───────────────────────────────
  {
    slug: "base-box-genesis",
    name: "Base Box Funcional Génesis",
    subtitle: "Diseño minimalista — Dos muebles en uno",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box sommier y cajonera en uno. 2 cajones clásicos, 2 internos, 2 amplios, zapatero doble y baulera central. Ideal para optimizar espacio.",
    longDescription:
      "La Base Box Funcional Génesis es la solución definitiva para optimizar tu dormitorio: dos muebles en uno. Combina la función de sommier y cajonera con un diseño minimalista que maximiza cada centímetro. Incluye 2 cajones clásicos, 2 cajones internos, 2 cajones amplios, un zapatero doble y una baulera central sin fondo (con opción de agregar fondo). Fabricada íntegramente en MDF de 18mm con canto ABS, guías telescópicas reforzadas, pistón neumático con suspensión, herrajes metálicos y patitas de 2cm. Soporta hasta 600kg, se divide en 3 módulos que se entregan armados — no requiere instalación, solo se apoyan los módulos entre sí.",
    features: [
      "2 cajones clásicos",
      "2 cajones internos",
      "2 cajones amplios",
      "Zapatero doble",
      "Baulera central sin fondo (opcional: se puede agregar fondo)",
      "Soporta 600kg",
      "Se divide en 3 módulos",
      "Se entregan armados — no requiere instalación",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto ABS", description: "Terminación resistente en todos los bordes" },
      { title: "Guías Telescópicas", description: "Reforzadas, apertura total y suave en todos los cajones" },
      { title: "Pistón Neumático", description: "Con suspensión para apertura asistida de baulera" },
      { title: "Herrajes Metálicos", description: "Refuerzos de acero en puntos de estrés" },
      { title: "Patitas 2cm", description: "Elevación del piso para ventilación y limpieza" },
    ],
    stats: [
      { value: "600kg", label: "Capacidad de carga" },
      { value: "12", label: "Meses de garantía" },
      { value: "3", label: "Módulos" },
    ],
    delivery: [
      { title: "Se Entregan Armados", description: "Los 3 módulos llegan listos, sin necesidad de armado" },
      { title: "Sin Instalación", description: "Solo se apoyan los módulos entre sí" },
      { title: "3 Módulos", description: "Ingreso fácil por cualquier puerta o ascensor" },
    ],
    images: [
      { src: "/products/genesis/hero.jpeg", alt: "Base Box Génesis vista principal" },
      { src: "/products/genesis/cajones-abiertos.jpeg", alt: "Cajones abiertos" },
      { src: "/products/genesis/baulera-abierta.jpeg", alt: "Baulera abierta" },
      { src: "/products/genesis/baulera-detalle.jpeg", alt: "Detalle de baulera" },
      { src: "/products/genesis/estructura-frontal.jpeg", alt: "Vista frontal" },
      { src: "/products/genesis/estructura-superior.jpeg", alt: "Vista superior" },
      { src: "/products/genesis/estructura-completa.jpeg", alt: "Estructura completa" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-evo", "respaldo-tapizado-recto", "mesa-de-luz-flotante"],
    seo: {
      title: "Base Box Funcional Génesis | Diseñar Muebles",
      description:
        "Base box sommier y cajonera en uno. 2 cajones clásicos, 2 internos, 2 amplios, zapatero doble y baulera. MDF 18mm, 600kg de capacidad, garantía 12 meses.",
    },
  },
  {
    slug: "base-box-evo",
    name: "Base Box Funcional Evo",
    subtitle: "Diseño moderno con máximo almacenamiento",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box con 4 cajones laterales y baulera frontal. Líneas rectas y terminación premium.",
    longDescription:
      "La Base Box Funcional Evo combina líneas modernas con funcionalidad extrema. Cuenta con 4 cajones laterales de gran capacidad con guías telescópicas y una baulera frontal con apertura asistida. Su diseño de líneas rectas y terminación en MDF laminado la convierte en la elección perfecta para dormitorios contemporáneos. Soporta hasta 500kg y se entrega armada.",
    features: [
      "4 cajones laterales con guías telescópicas",
      "Baulera frontal con pistón neumático",
      "Diseño de líneas rectas contemporáneo",
      "Terminación en MDF laminado",
      "Capacidad de carga: 500kg",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura en MDF de alta densidad con laminado" },
      { title: "Guías Telescópicas", description: "Apertura completa en todos los cajones" },
      { title: "Pistón Neumático", description: "Baulera frontal con apertura asistida" },
      { title: "Herrajes Metálicos", description: "Tornillería y refuerzos de acero" },
    ],
    stats: [
      { value: "500kg", label: "Capacidad de carga" },
      { value: "12", label: "Meses de garantía" },
      { value: "2", label: "Módulos de transporte" },
    ],
    delivery: [
      { title: "Entrega con Armado", description: "Lo llevamos y armamos en tu hogar" },
      { title: "Sin Instalación", description: "Listo para usar desde el primer día" },
      { title: "2 Módulos", description: "Ingreso sencillo por puertas estándar" },
    ],
    images: [
      { src: "/products/genesis/hero.jpeg", alt: "Base Box Evo vista principal" },
    ],
    sizes: ["2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "respaldo-tapizado-capitone", "mesa-de-luz-flotante"],
    seo: {
      title: "Base Box Funcional Evo | Diseñar Muebles",
      description:
        "Base box con 4 cajones y baulera frontal. Diseño moderno, MDF premium, 500kg de capacidad. Entrega con armado en Buenos Aires.",
    },
  },
  {
    slug: "base-box-esencial",
    name: "Base Box Esencial",
    subtitle: "Funcionalidad sin complicaciones",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box con baulera completa de apertura superior. La solución más práctica para ganar espacio.",
    longDescription:
      "La Base Box Esencial es nuestra opción más accesible sin sacrificar calidad. Con una gran baulera de apertura superior asistida por pistones neumáticos, ofrece un espacio de almacenamiento generoso debajo del colchón. Fabricada en MDF de 18mm con herrajes metálicos, soporta hasta 400kg. Ideal para quienes buscan funcionalidad y precio accesible.",
    features: [
      "Baulera completa con apertura superior",
      "Pistones neumáticos de alta resistencia",
      "Gran capacidad de almacenamiento",
      "Estructura reforzada en MDF 18mm",
      "Capacidad de carga: 400kg",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura sólida en MDF de primera calidad" },
      { title: "Pistones Neumáticos", description: "Doble pistón para apertura suave y segura" },
      { title: "Tapas Reforzadas", description: "Tapas con refuerzo interno para mayor durabilidad" },
      { title: "Herrajes Metálicos", description: "Bisagras y refuerzos de acero inoxidable" },
    ],
    stats: [
      { value: "400kg", label: "Capacidad de carga" },
      { value: "12", label: "Meses de garantía" },
      { value: "2", label: "Módulos de transporte" },
    ],
    delivery: [
      { title: "Entrega con Armado", description: "Lo llevamos y armamos en tu hogar" },
      { title: "Sin Instalación", description: "Listo para usar desde el primer día" },
      { title: "2 Módulos", description: "Fácil ingreso por cualquier acceso" },
    ],
    images: [
      { src: "/products/genesis/estructura-completa.jpeg", alt: "Base Box Esencial vista principal" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "respaldo-tapizado-recto", "protector-colchon-premium"],
    seo: {
      title: "Base Box Esencial | Diseñar Muebles",
      description:
        "Base box con baulera completa. MDF premium, 400kg de capacidad, precio accesible. Entrega con armado en Buenos Aires.",
    },
  },
  {
    slug: "base-box-duo",
    name: "Base Box Funcional Dúo",
    subtitle: "Cajones y baulera en perfecta armonía",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box con 2 cajones frontales y baulera lateral. El equilibrio ideal entre acceso rápido y gran almacenamiento.",
    longDescription:
      "La Base Box Funcional Dúo ofrece lo mejor de dos mundos: 2 cajones frontales con guías telescópicas para acceso rápido a lo que más usás, y una amplia baulera lateral con pistón neumático para guardar ropa de cama, mantas y objetos de temporada. Fabricada en MDF de 18mm con terminación premium, soporta hasta 500kg.",
    features: [
      "2 cajones frontales con guías telescópicas",
      "Baulera lateral con pistón neumático",
      "Acceso rápido + gran almacenamiento",
      "Terminación premium en MDF laminado",
      "Capacidad de carga: 500kg",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de alta densidad" },
      { title: "Guías Telescópicas", description: "Cajones con apertura total y suave" },
      { title: "Pistón Neumático", description: "Baulera lateral con apertura asistida" },
      { title: "Herrajes Premium", description: "Herrajes metálicos de alta resistencia" },
    ],
    stats: [
      { value: "500kg", label: "Capacidad de carga" },
      { value: "12", label: "Meses de garantía" },
      { value: "2", label: "Módulos de transporte" },
    ],
    delivery: [
      { title: "Entrega con Armado", description: "Lo llevamos y armamos en tu hogar" },
      { title: "Sin Instalación", description: "Listo para usar desde el primer día" },
      { title: "2 Módulos", description: "Ingreso sencillo a tu hogar" },
    ],
    images: [
      { src: "/products/genesis/cajones-abiertos.jpeg", alt: "Base Box Dúo vista principal" },
    ],
    sizes: ["2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "base-box-evo", "mesa-de-luz-flotante"],
    seo: {
      title: "Base Box Funcional Dúo | Diseñar Muebles",
      description:
        "Base box con 2 cajones y baulera lateral. MDF premium, 500kg de capacidad. Entrega con armado en Buenos Aires.",
    },
  },

  // ─── CÓMODAS ───────────────────────────────────────────────
  {
    slug: "comoda-cajonera",
    name: "Cómoda Cajonera",
    subtitle: "Diseño minimalista con máximo almacenamiento",
    category: "comodas",
    isHero: true,
    shortDescription:
      "Cómoda de 6 cajones con guías telescópicas reforzadas. Diseño sin tiradores, líneas puras. Disponible en dos medidas.",
    longDescription:
      "La Cómoda Cajonera combina un diseño minimalista sin tiradores con una gran capacidad de almacenamiento. Sus 6 cajones amplios con guías telescópicas reforzadas permiten una apertura total y suave. Fabricada íntegramente en MDF de 18mm con terminación en canto ABS resistente a golpes y humedad. Disponible en dos medidas: 120x36x85cm y 150x36x85cm, y en múltiples tonos de melamina para combinar con tu dormitorio.",
    features: [
      "6 cajones amplios sin tiradores",
      "Guías telescópicas reforzadas",
      "Diseño minimalista de líneas puras",
      "Disponible en múltiples colores de melamina",
      "Dos medidas disponibles",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto ABS", description: "Terminación resistente a golpes y humedad en todos los bordes" },
      { title: "Guías Telescópicas", description: "Reforzadas, apertura total y suave en los 6 cajones" },
    ],
    stats: [
      { value: "6", label: "Cajones" },
      { value: "12", label: "Meses de garantía" },
      { value: "2", label: "Medidas disponibles" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada, sin instalación" },
    ],
    images: [
      { src: "/products/comoda/IMG_7327.jpeg", alt: "Cómoda Cajonera vista frontal showroom" },
      { src: "/products/comoda/IMG_7320.jpeg", alt: "Cómoda Cajonera cajones abiertos" },
      { src: "/products/comoda/IMG_8657.jpeg", alt: "Cómoda Cajonera color oscuro" },
      { src: "/products/comoda/IMG_8662.jpeg", alt: "Cómoda Cajonera color oscuro lateral" },
      { src: "/products/comoda/IMG_1376.jpeg", alt: "Cómoda Cajonera color claro fábrica" },
      { src: "/products/comoda/IMG_8813.jpeg", alt: "Cómoda Cajonera color natural en ambiente" },
      { src: "/products/comoda/IMG_2542.jpeg", alt: "Cómoda Cajonera color claro showroom" },
      { src: "/products/comoda/IMG_8386.jpeg", alt: "Cómoda Cajonera publicación Instagram" },
    ],
    sizes: ["120 x 36 x 85cm (alto)", "150 x 36 x 85cm (alto)"],
    relatedSlugs: ["base-box-genesis", "mesa-de-luz-flotante", "respaldo-tapizado-recto"],
    seo: {
      title: "Cómoda Cajonera 6 Cajones | Diseñar Muebles",
      description:
        "Cómoda cajonera de 6 cajones con guías telescópicas reforzadas. MDF 18mm, canto ABS, diseño minimalista sin tiradores. Dos medidas: 120cm y 150cm.",
    },
  },

  // ─── RESPALDOS (Complementary products) ─────────────────────
  {
    slug: "respaldo-tapizado-recto",
    name: "Respaldo Tapizado Recto",
    subtitle: "Elegancia simple para tu dormitorio",
    category: "respaldos",
    isHero: false,
    shortDescription:
      "Respaldo tapizado de líneas rectas con tela de alta resistencia. Complemento ideal para base box.",
    longDescription:
      "El Respaldo Tapizado Recto aporta un toque de elegancia a tu dormitorio con sus líneas limpias y minimalistas. Tapizado en tela de alta resistencia sobre estructura de MDF, se fija fácilmente a la pared. Disponible en varios colores para combinar con tu decoración.",
    features: [
      "Tapizado en tela de alta resistencia",
      "Estructura interna de MDF reforzado",
      "Fijación a pared incluida",
      "Disponible en varios colores",
      "Altura: 60cm desde el colchón",
    ],
    specs: [
      { title: "Tela Premium", description: "Tapizado antimancha de alta durabilidad" },
      { title: "Espuma D28", description: "Relleno de espuma de densidad media para confort" },
      { title: "MDF Interno", description: "Estructura interna rígida de MDF" },
    ],
    stats: [
      { value: "60cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [
      { src: "/products/genesis/hero.jpeg", alt: "Respaldo Tapizado Recto" },
    ],
    sizes: ["1 Plaza (080)", "1½ Plaza (100)", "2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["base-box-genesis", "base-box-esencial", "mesa-de-luz-flotante"],
    seo: {
      title: "Respaldo Tapizado Recto | Diseñar Muebles",
      description:
        "Respaldo tapizado de líneas rectas. Tela premium, fijación a pared incluida. Diseñar Muebles, Buenos Aires.",
    },
  },
  {
    slug: "respaldo-tapizado-capitone",
    name: "Respaldo Tapizado Capitoné",
    subtitle: "Confort y sofisticación para tu cama",
    category: "respaldos",
    isHero: false,
    shortDescription:
      "Respaldo con tapizado capitoné clásico. Espuma de alta densidad y tela premium antimancha.",
    longDescription:
      "El Respaldo Tapizado Capitoné lleva tu dormitorio a otro nivel con su diseño clásico de botones hundidos. Relleno con espuma de alta densidad D33 y tapizado en tela premium antimancha. Su presencia visual transforma cualquier cama en una pieza central del dormitorio.",
    features: [
      "Diseño capitoné con botones forrados",
      "Espuma de alta densidad D33",
      "Tela premium antimancha",
      "Estructura reforzada de MDF",
      "Fijación a pared incluida",
      "Altura: 70cm desde el colchón",
    ],
    specs: [
      { title: "Capitoné", description: "Botones forrados en la misma tela" },
      { title: "Espuma D33", description: "Alta densidad para mayor confort y durabilidad" },
      { title: "Tela Antimancha", description: "Tratamiento especial repelente de líquidos" },
    ],
    stats: [
      { value: "70cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [
      { src: "/products/genesis/hero.jpeg", alt: "Respaldo Tapizado Capitoné" },
    ],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["base-box-evo", "base-box-duo", "mesa-de-luz-suspendida"],
    seo: {
      title: "Respaldo Tapizado Capitoné | Diseñar Muebles",
      description:
        "Respaldo capitoné con espuma D33 y tela antimancha. Diseño clásico para tu dormitorio. Diseñar Muebles, Buenos Aires.",
    },
  },

  // ─── MESAS DE LUZ (Complementary products) ─────────────────
  {
    slug: "mesita-de-luz-desayunadora",
    name: "Mesita de Luz Desayunadora",
    subtitle: "Compacta, funcional y con estilo",
    category: "mesas-de-luz",
    isHero: true,
    shortDescription:
      "Mesita de luz con 2 cajones y nicho abierto. Guías telescópicas reforzadas, diseño minimalista en MDF de 18mm.",
    longDescription:
      "La Mesita de Luz Desayunadora combina almacenamiento y practicidad en un formato compacto. Con 2 cajones con guías telescópicas reforzadas y un nicho abierto para tener a mano lo que más usás. Fabricada en MDF de 18mm con terminación en canto ABS, resistente y duradera. Su diseño minimalista sin tiradores se adapta a cualquier dormitorio. Medidas: 39cm de ancho x 36cm de profundidad x 70cm de alto.",
    features: [
      "2 cajones con guías telescópicas reforzadas",
      "Nicho abierto de acceso rápido",
      "Diseño minimalista sin tiradores",
      "Compacta: 39 x 36 x 70cm",
      "Disponible en múltiples colores de melamina",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto ABS", description: "Terminación resistente en todos los bordes" },
      { title: "Guías Telescópicas", description: "Reforzadas, apertura total y suave en ambos cajones" },
    ],
    stats: [
      { value: "39cm", label: "Ancho" },
      { value: "70cm", label: "Alto" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada, sin instalación" },
    ],
    images: [
      { src: "/products/mesita-desayunadora/IMG_8581.jpeg", alt: "Mesita de Luz Desayunadora en showroom" },
      { src: "/products/mesita-desayunadora/IMG_8926.jpeg", alt: "Mesita de Luz Desayunadora vista frontal" },
      { src: "/products/mesita-desayunadora/IMG_8927.jpeg", alt: "Mesita de Luz Desayunadora cajón abierto" },
      { src: "/products/mesita-desayunadora/IMG_8928.jpeg", alt: "Mesita de Luz Desayunadora detalle cajones" },
      { src: "/products/mesita-desayunadora/IMG_8582.jpeg", alt: "Mesita de Luz Desayunadora vista lateral" },
    ],
    sizes: ["39 x 36 x 70cm (alto)"],
    relatedSlugs: ["mesa-de-luz-flotante", "mesa-de-luz-suspendida", "base-box-genesis"],
    seo: {
      title: "Mesita de Luz Desayunadora | Diseñar Muebles",
      description:
        "Mesita de luz con 2 cajones y nicho abierto. MDF 18mm, canto ABS, guías telescópicas reforzadas. 39x36x70cm. Fabricación propia.",
    },
  },
  {
    slug: "mesa-de-luz-flotante",
    name: "Mesa de Luz Flotante",
    subtitle: "Diseño suspendido y minimalista",
    category: "mesas-de-luz",
    isHero: false,
    shortDescription:
      "Mesa de luz flotante con cajón y estante. Se fija a la pared, ideal para espacios reducidos.",
    longDescription:
      "La Mesa de Luz Flotante combina diseño minimalista con funcionalidad. Con un cajón con guía telescópica y un estante inferior abierto, ofrece almacenamiento sin ocupar espacio en el piso. Fabricada en MDF de 18mm con terminación laminada, se fija a la pared con sistema de fijación oculto.",
    features: [
      "Diseño flotante fijado a pared",
      "1 cajón con guía telescópica",
      "Estante inferior abierto",
      "Terminación en MDF laminado",
      "Sistema de fijación oculto incluido",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura sólida con terminación laminada" },
      { title: "Guía Telescópica", description: "Cajón con apertura suave y total" },
      { title: "Fijación Oculta", description: "Sistema de anclaje invisible a la pared" },
    ],
    stats: [
      { value: "45cm", label: "Ancho" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Incluida", description: "Kit de instalación y tacos incluidos" },
    ],
    images: [
      { src: "/products/genesis/baulera-detalle.jpeg", alt: "Mesa de Luz Flotante" },
    ],
    relatedSlugs: ["mesa-de-luz-suspendida", "base-box-genesis", "respaldo-tapizado-recto"],
    seo: {
      title: "Mesa de Luz Flotante | Diseñar Muebles",
      description:
        "Mesa de luz flotante con cajón y estante. Diseño minimalista, MDF premium. Diseñar Muebles, Buenos Aires.",
    },
  },
  {
    slug: "mesa-de-luz-suspendida",
    name: "Mesa de Luz Suspendida",
    subtitle: "Funcionalidad elevada",
    category: "mesas-de-luz",
    isHero: false,
    shortDescription:
      "Mesa de luz suspendida con dos cajones. Mayor capacidad de almacenamiento en diseño compacto.",
    longDescription:
      "La Mesa de Luz Suspendida eleva el almacenamiento junto a tu cama con dos cajones amplios con guías telescópicas. Su diseño suspendido facilita la limpieza y da sensación de amplitud. Fabricada en MDF de 18mm con herrajes metálicos de calidad.",
    features: [
      "2 cajones con guías telescópicas",
      "Diseño suspendido con fijación a pared",
      "Mayor capacidad que modelo flotante",
      "Terminación en MDF laminado",
      "Sistema de fijación reforzado",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF laminado" },
      { title: "Guías Telescópicas", description: "Doble cajón con apertura total" },
      { title: "Fijación Reforzada", description: "Sistema de anclaje para mayor peso" },
    ],
    stats: [
      { value: "50cm", label: "Ancho" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Incluida", description: "Kit de instalación reforzado incluido" },
    ],
    images: [
      { src: "/products/genesis/baulera-detalle.jpeg", alt: "Mesa de Luz Suspendida" },
    ],
    relatedSlugs: ["mesa-de-luz-flotante", "base-box-evo", "respaldo-tapizado-capitone"],
    seo: {
      title: "Mesa de Luz Suspendida | Diseñar Muebles",
      description:
        "Mesa de luz suspendida con 2 cajones. Diseño moderno, MDF premium. Diseñar Muebles, Buenos Aires.",
    },
  },

  // ─── ACCESORIOS (Complementary products) ────────────────────
  {
    slug: "protector-colchon-premium",
    name: "Protector de Colchón Premium",
    subtitle: "Protección total para tu colchón",
    category: "accesorios",
    isHero: false,
    shortDescription:
      "Protector impermeable y transpirable. Protege tu colchón de líquidos, ácaros y manchas.",
    longDescription:
      "El Protector de Colchón Premium es la barrera invisible que tu colchón necesita. Con membrana impermeable y transpirable, protege contra líquidos, ácaros, bacterias y manchas sin alterar la sensación del colchón. Su ajuste elástico se adapta a colchones de hasta 35cm de alto.",
    features: [
      "Membrana impermeable y transpirable",
      "Protección contra ácaros y bacterias",
      "Ajuste elástico hasta 35cm de alto",
      "Lavable en lavarropas",
      "No altera la sensación del colchón",
    ],
    specs: [
      { title: "Membrana TPU", description: "Impermeable y transpirable de alta calidad" },
      { title: "Tela Microfibra", description: "Suave al tacto, silenciosa" },
      { title: "Elástico Perimetral", description: "Ajuste seguro en todos los tamaños" },
    ],
    stats: [
      { value: "35cm", label: "Altura máxima de colchón" },
      { value: "6", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging sellado" },
    ],
    images: [
      { src: "/products/genesis/estructura-frontal.jpeg", alt: "Protector de Colchón Premium" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["almohada-viscoelastica", "base-box-genesis"],
    seo: {
      title: "Protector de Colchón Premium | Diseñar Muebles",
      description:
        "Protector impermeable y transpirable para colchón. Protección total, lavable. Diseñar Muebles, Buenos Aires.",
    },
  },
  {
    slug: "almohada-viscoelastica",
    name: "Almohada Viscoelástica",
    subtitle: "Descanso cervical óptimo",
    category: "accesorios",
    isHero: false,
    shortDescription:
      "Almohada de espuma viscoelástica con funda removible. Adaptación cervical para un descanso superior.",
    longDescription:
      "La Almohada Viscoelástica se adapta a la forma de tu cabeza y cuello para ofrecer el soporte cervical ideal. Su espuma de memoria de alta densidad mantiene la forma y recupera lentamente, distribuyendo la presión de manera uniforme. Incluye funda removible y lavable.",
    features: [
      "Espuma viscoelástica de alta densidad",
      "Adaptación cervical personalizada",
      "Funda removible y lavable",
      "Hipoalergénica",
      "Recuperación lenta de forma",
    ],
    specs: [
      { title: "Memory Foam", description: "Espuma viscoelástica de 50kg/m³" },
      { title: "Funda Removible", description: "Tela de algodón con cierre" },
      { title: "Hipoalergénica", description: "Libre de ácaros y bacterias" },
    ],
    stats: [
      { value: "70x40", label: "Medida (cm)" },
      { value: "6", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging sellado" },
    ],
    images: [
      { src: "/products/genesis/estructura-frontal.jpeg", alt: "Almohada Viscoelástica" },
    ],
    relatedSlugs: ["protector-colchon-premium"],
    seo: {
      title: "Almohada Viscoelástica | Diseñar Muebles",
      description:
        "Almohada viscoelástica con adaptación cervical. Espuma de memoria, funda lavable. Diseñar Muebles, Buenos Aires.",
    },
  },
];
