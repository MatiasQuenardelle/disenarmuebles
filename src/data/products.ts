import type { Product } from "./types";

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // BASES BOX SOMMIER — 5 diseños
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "base-box-genesis",
    name: "Base Box Funcional Génesis",
    subtitle: "Diseño minimalista — Dos muebles en uno",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box sommier y cajonera en uno. 2 cajones clásicos, 2 internos, 2 amplios, zapatero doble y baulera central. Ideal para optimizar espacio.",
    longDescription:
      "La Base Box Funcional Génesis es la solución definitiva para optimizar tu dormitorio: dos muebles en uno. Combina la función de sommier y cajonera con un diseño minimalista que maximiza cada centímetro. Incluye 2 cajones clásicos, 2 cajones internos, 2 cajones amplios, un zapatero doble y una baulera central sin fondo (con opción de agregar fondo). Fabricada íntegramente en MDF de 18mm con canto ABS, guías telescópicas reforzadas, pistón neumático con suspensión, herrajes metálicos y patitas de 2cm. Soporta hasta 600kg, se divide en 3 módulos que los módulos llegan listos, solo se apoyan entre sí.",
    features: [
      "2 cajones clásicos",
      "2 cajones internos",
      "2 cajones amplios",
      "Zapatero doble",
      "Baulera central sin fondo (opcional: se puede agregar fondo)",
      "Soporta 600kg",
      "Se divide en 3 módulos",
      "Los módulos llegan listos — solo se apoyan entre sí",
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
      { title: "Módulos Listos", description: "Los 3 módulos llegan listos para colocar" },
      { title: "3 Módulos", description: "Ingreso fácil por cualquier puerta o ascensor" },
    ],
    images: [
      { src: "/products/base-box-genesis/IMG_8447.jpeg", alt: "Base Box Génesis con cajones abiertos en showroom" },
      { src: "/products/base-box-genesis/IMG_2599.jpeg", alt: "Base Box Génesis completa con colchón" },
      { src: "/products/base-box-genesis/IMG_2602.jpeg", alt: "Base Box Génesis vista lateral" },
      { src: "/products/base-box-genesis/IMG_2606.jpeg", alt: "Base Box Génesis detalle cajones" },
      { src: "/products/base-box-genesis/IMG_1511.jpeg", alt: "Base Box Génesis en ambiente" },
      { src: "/products/base-box-genesis/IMG_1048.jpeg", alt: "Base Box Génesis vista general" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-luxury", "base-box-premium", "mesita-de-luz-desayunadora"],
    seo: {
      title: "Base Box Funcional Génesis | Diseñar Muebles",
      description:
        "Base box sommier y cajonera en uno. 2 cajones clásicos, 2 internos, 2 amplios, zapatero doble y baulera. MDF 18mm, 600kg de capacidad, garantía 12 meses.",
    },
  },
  {
    slug: "base-box-luxury",
    name: "Base Box Funcional Luxury",
    subtitle: "Línea premium con máximo almacenamiento",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box de línea premium con cajones de gran capacidad y baulera. Diseño moderno con múltiples opciones de color y terminación.",
    longDescription:
      "La Base Box Funcional Luxury es nuestra línea premium de almacenamiento. Con cajones de gran capacidad, guías telescópicas reforzadas y baulera con pistón neumático, ofrece el máximo espacio de guardado. Fabricada en MDF de 18mm con terminación premium, soporta hasta 600kg. Se divide en 4 módulos + tapa que los módulos llegan listos, solo se apoyan entre sí.",
    features: [
      "Cajones de gran capacidad",
      "Baulera con pistón neumático",
      "Guías telescópicas reforzadas",
      "Terminación premium en múltiples colores",
      "Soporta 600kg",
      "Se divide en 4 módulos + tapa",
      "Los módulos llegan listos — solo se apoyan entre sí",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto ABS", description: "Terminación resistente en todos los bordes" },
      { title: "Guías Telescópicas", description: "Reforzadas, apertura total y suave" },
      { title: "Pistón Neumático", description: "Apertura asistida de baulera" },
      { title: "Herrajes Metálicos", description: "Refuerzos de acero en puntos de estrés" },
    ],
    stats: [
      { value: "600kg", label: "Capacidad de carga" },
      { value: "12", label: "Meses de garantía" },
      { value: "4+1", label: "Módulos + tapa" },
    ],
    delivery: [
      { title: "Módulos Listos", description: "Los 4 módulos y la tapa llegan listos para colocar" },
      { title: "4 Módulos + Tapa", description: "Ingreso fácil por cualquier puerta o ascensor" },
    ],
    images: [
      { src: "/products/base-box-luxury/IMG_2441.jpeg", alt: "Base Box Luxury compartimentos abiertos vista superior" },
      { src: "/products/base-box-luxury/IMG_4737.jpeg", alt: "Base Box Luxury en ambiente decorado" },
      { src: "/products/base-box-luxury/IMG_5149.jpeg", alt: "Base Box Luxury vista lateral con cajones" },
      { src: "/products/base-box-luxury/IMG_3204.jpeg", alt: "Base Box Luxury detalle acabado" },
      { src: "/products/base-box-luxury/IMG_2632.jpeg", alt: "Base Box Luxury completa" },
      { src: "/products/base-box-luxury/IMG_0104.jpeg", alt: "Base Box Luxury vista general" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "base-box-premium", "respaldo-luxury"],
    seo: {
      title: "Base Box Funcional Luxury | Diseñar Muebles",
      description:
        "Base box línea premium con cajones y baulera. MDF 18mm, 600kg de capacidad, múltiples colores. Fabricación propia.",
    },
  },
  {
    slug: "base-box-premium",
    name: "Base Box Premium",
    subtitle: "Funcionalidad y diseño en madera",
    category: "base-box",
    isHero: true,
    shortDescription:
      "Base box con terminación símil madera premium. Cajones y baulera con el máximo almacenamiento en un diseño elegante.",
    longDescription:
      "La Base Box Premium combina funcionalidad extrema con una terminación símil madera de alta calidad. Con cajones laterales y baulera, ofrece gran capacidad de almacenamiento. Su diseño con terminación premium la hace destacar en cualquier dormitorio. Fabricada en MDF de 18mm con herrajes metálicos.",
    features: [
      "Terminación símil madera premium",
      "Cajones laterales con guías telescópicas",
      "Baulera con pistón neumático",
      "Estructura reforzada en MDF 18mm",
      "Soporta hasta 500kg",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura en MDF de alta densidad" },
      { title: "Melamina Premium", description: "Terminación símil madera de alta calidad" },
      { title: "Guías Telescópicas", description: "Apertura completa en todos los cajones" },
      { title: "Pistón Neumático", description: "Baulera con apertura asistida" },
    ],
    stats: [
      { value: "500kg", label: "Capacidad de carga" },
      { value: "12", label: "Meses de garantía" },
      { value: "2", label: "Módulos de transporte" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos directo a tu hogar" },
      { title: "2 Módulos", description: "Ingreso sencillo por puertas estándar" },
    ],
    images: [
      { src: "/products/base-box-premium/IMG_9737.jpeg", alt: "Base Box Premium en dormitorio decorado" },
      { src: "/products/base-box-premium/IMG_9738.jpeg", alt: "Base Box Premium detalle cajones abiertos" },
      { src: "/products/base-box-premium/IMG_9739.jpeg", alt: "Base Box Premium vista completa" },
      { src: "/products/base-box-premium/IMG_8568.jpeg", alt: "Base Box Premium en showroom" },
      { src: "/products/base-box-premium/IMG_8572.jpeg", alt: "Base Box Premium vista lateral" },
    ],
    sizes: ["2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "base-box-luxury", "mesita-de-luz-grecia"],
    seo: {
      title: "Base Box Premium | Diseñar Muebles",
      description:
        "Base box premium con terminación símil madera. Cajones y baulera, MDF 18mm. Fabricación propia.",
    },
  },
  {
    slug: "base-box-esencial",
    name: "Base Box Esencial",
    subtitle: "Funcionalidad sin complicaciones",
    category: "base-box",
    isHero: false,
    shortDescription:
      "Base box con baulera completa de apertura superior. La solución más práctica para ganar espacio.",
    longDescription:
      "La Base Box Esencial es nuestra opción más accesible sin sacrificar calidad. Con una gran baulera de apertura superior asistida por pistones neumáticos, ofrece un espacio de almacenamiento generoso debajo del colchón. Fabricada en MDF de 18mm con herrajes metálicos, soporta hasta 400kg.",
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
      { title: "Entrega a Domicilio", description: "Lo llevamos directo a tu hogar" },
      { title: "2 Módulos", description: "Fácil ingreso por cualquier acceso" },
    ],
    images: [],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "base-box-luxury", "mesita-de-luz-desayunadora"],
    seo: {
      title: "Base Box Esencial | Diseñar Muebles",
      description:
        "Base box con baulera completa. MDF premium, 400kg de capacidad, precio accesible. Entrega a domicilio.",
    },
  },
  {
    slug: "base-box-duo",
    name: "Base Box Funcional Dúo",
    subtitle: "Cajones y baulera en perfecta armonía",
    category: "base-box",
    isHero: false,
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
      { title: "Entrega a Domicilio", description: "Lo llevamos directo a tu hogar" },
      { title: "2 Módulos", description: "Ingreso sencillo a tu hogar" },
    ],
    images: [],
    sizes: ["2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["base-box-genesis", "base-box-luxury", "mesita-de-luz-desayunadora"],
    seo: {
      title: "Base Box Funcional Dúo | Diseñar Muebles",
      description:
        "Base box con 2 cajones y baulera lateral. MDF premium, 500kg de capacidad. Entrega a domicilio.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // RESPALDOS MADERA — 3 diseños (pendiente fotos)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "respaldo-madera-recto",
    name: "Respaldo Madera Recto",
    subtitle: "Líneas puras en madera natural",
    category: "respaldos-madera",
    isHero: false,
    shortDescription:
      "Respaldo de madera con diseño recto y minimalista. Terminación natural que aporta calidez al dormitorio.",
    longDescription:
      "El Respaldo Madera Recto combina la calidez de la madera con un diseño de líneas rectas y minimalistas. Fabricado en MDF de 18mm con terminación en melamina símil madera, aporta un toque natural y moderno a tu dormitorio.",
    features: [
      "Diseño recto minimalista",
      "Terminación símil madera premium",
      "Estructura de MDF 18mm",
      "Fijación a pared incluida",
      "Disponible en varios tonos de madera",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura sólida con terminación melamínica" },
      { title: "Melamina", description: "Terminación símil madera de alta resistencia" },
    ],
    stats: [
      { value: "60cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["1 Plaza (080)", "1½ Plaza (100)", "2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-madera-listones", "respaldo-madera-paneles", "base-box-genesis"],
    seo: {
      title: "Respaldo Madera Recto | Diseñar Muebles",
      description: "Respaldo de madera con diseño recto. MDF 18mm, terminación premium. Fabricación propia.",
    },
  },
  {
    slug: "respaldo-madera-listones",
    name: "Respaldo Madera Listones",
    subtitle: "Textura y profundidad en madera",
    category: "respaldos-madera",
    isHero: false,
    shortDescription:
      "Respaldo de madera con diseño de listones verticales. Textura visual que le da carácter a tu dormitorio.",
    longDescription:
      "El Respaldo Madera Listones presenta un diseño de listones verticales que aporta textura y profundidad visual. Cada listón está fabricado en MDF con terminación melamínica, creando un juego de luces y sombras.",
    features: [
      "Diseño de listones verticales",
      "Efecto visual de profundidad",
      "Terminación melamínica resistente",
      "Estructura de MDF reforzado",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "MDF 18mm", description: "Listones individuales en MDF de primera" },
      { title: "Melamina", description: "Terminación resistente a golpes y humedad" },
    ],
    stats: [
      { value: "70cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-madera-recto", "respaldo-madera-paneles", "base-box-premium"],
    seo: {
      title: "Respaldo Madera Listones | Diseñar Muebles",
      description: "Respaldo de madera con listones verticales. Diseño moderno, fabricación propia.",
    },
  },
  {
    slug: "respaldo-madera-paneles",
    name: "Respaldo Madera Paneles",
    subtitle: "Elegancia geométrica en madera",
    category: "respaldos-madera",
    isHero: false,
    shortDescription:
      "Respaldo de madera con diseño de paneles geométricos. Presencia visual imponente para tu dormitorio.",
    longDescription:
      "El Respaldo Madera Paneles combina paneles geométricos para crear un cabecero con presencia. Su diseño moderno en MDF con terminación melamínica de alta calidad transforma la estética de cualquier dormitorio.",
    features: [
      "Diseño de paneles geométricos",
      "Presencia visual destacada",
      "Terminación melamínica premium",
      "Estructura reforzada de MDF",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "MDF 18mm", description: "Paneles en MDF de primera calidad" },
      { title: "Melamina", description: "Terminación premium resistente" },
    ],
    stats: [
      { value: "80cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-madera-recto", "respaldo-madera-listones", "base-box-genesis"],
    seo: {
      title: "Respaldo Madera Paneles | Diseñar Muebles",
      description: "Respaldo de madera con paneles geométricos. Diseño moderno, fabricación propia.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // MESITAS DE LUZ — 5 diseños
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "mesita-de-luz-desayunadora",
    name: "Mesa de Luz Desayunadora",
    subtitle: "Con bandeja desayunadora deslizante",
    category: "mesitas-de-luz",
    isHero: true,
    shortDescription:
      "Mesa de luz con 2 cajones y bandeja desayunadora. Guías telescópicas, diseño minimalista en MDF de 18mm con canto PVC.",
    longDescription:
      "La Mesa de Luz Desayunadora combina almacenamiento y practicidad con su bandeja desayunadora deslizante única. Con 2 cajones con guías telescópicas y una bandeja extraíble ideal para desayunar en la cama o apoyar dispositivos. Fabricada en MDF de 18mm con terminación en canto PVC para las terminaciones y patitas de 2cm. Su diseño minimalista se adapta a cualquier dormitorio. Color a elección.",
    features: [
      "2 cajones con guías telescópicas",
      "Bandeja desayunadora deslizante",
      "Diseño minimalista",
      "Canto PVC en terminaciones",
      "Patitas de 2cm",
      "Color a elección",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto PVC", description: "Terminación resistente en todos los bordes" },
      { title: "Guías Telescópicas", description: "Apertura total y suave en cajones y bandeja" },
      { title: "Patitas 2cm", description: "Elevación del piso para ventilación y limpieza" },
    ],
    stats: [
      { value: "66cm", label: "Alto" },
      { value: "36cm", label: "Ancho / Prof." },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada y lista para usar" },
    ],
    images: [
      { src: "/products/mesita-desayunadora-new/IMG_2546.jpeg", alt: "Mesa de Luz Desayunadora vista frontal" },
      { src: "/products/mesita-desayunadora-new/IMG_4885.jpeg", alt: "Mesa de Luz Desayunadora en ambiente" },
      { src: "/products/mesita-desayunadora-new/IMG_4886.jpeg", alt: "Mesa de Luz Desayunadora showroom" },
      { src: "/products/mesita-desayunadora-new/IMG_4887.jpeg", alt: "Mesa de Luz Desayunadora detalle bandeja" },
      { src: "/products/mesita-desayunadora-new/IMG_4888.jpeg", alt: "Mesa de Luz Desayunadora vista lateral" },
      { src: "/products/mesita-desayunadora-new/IMG_8926.jpeg", alt: "Mesa de Luz Desayunadora en dormitorio" },
      { src: "/products/mesita-desayunadora-new/IMG_8927.jpeg", alt: "Mesa de Luz Desayunadora detalle cajones" },
      { src: "/products/mesita-desayunadora-new/IMG_8928.jpeg", alt: "Mesa de Luz Desayunadora detalle acabado" },
    ],
    sizes: ["66 x 36 x 36cm"],
    relatedSlugs: ["mesa-de-luz-clasica", "mesa-de-luz-moscu", "base-box-genesis"],
    seo: {
      title: "Mesa de Luz Desayunadora | Diseñar Muebles",
      description:
        "Mesa de luz con 2 cajones y bandeja desayunadora. MDF 18mm, canto PVC, guías telescópicas. Fabricación propia.",
    },
  },
  {
    slug: "mesa-de-luz-clasica",
    name: "Mesa de Luz Clásica",
    subtitle: "Funcionalidad atemporal",
    category: "mesitas-de-luz",
    isHero: false,
    shortDescription:
      "Mesa de luz con 1 cajón con guía telescópica y estante. Diseño minimalista en MDF de 18mm con canto PVC.",
    longDescription:
      "La Mesa de Luz Clásica ofrece un diseño minimalista y atemporal con un cajón con guía telescópica y un estante abierto inferior. Fabricada en MDF de 18mm con canto PVC para las terminaciones y patitas de 2cm. Color a elección.",
    features: [
      "1 cajón con guía telescópica",
      "Estante abierto",
      "Diseño minimalista",
      "Canto PVC en terminaciones",
      "Patitas de 2cm",
      "Color a elección",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto PVC", description: "Terminación resistente en todos los bordes" },
      { title: "Guía Telescópica", description: "Cajón con apertura suave y total" },
      { title: "Patitas 2cm", description: "Elevación del piso para ventilación y limpieza" },
    ],
    stats: [
      { value: "66cm", label: "Alto" },
      { value: "36cm", label: "Ancho / Prof." },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada" },
    ],
    images: [
      { src: "/products/mesa-de-luz-clasica/IMG_2551.jpeg", alt: "Mesa de Luz Clásica vista frontal" },
      { src: "/products/mesa-de-luz-clasica/IMG_2552.jpeg", alt: "Mesa de Luz Clásica cajón abierto" },
      { src: "/products/mesa-de-luz-clasica/IMG_2553.jpeg", alt: "Mesa de Luz Clásica detalle" },
      { src: "/products/mesa-de-luz-clasica/IMG_2554.jpeg", alt: "Mesa de Luz Clásica lateral" },
      { src: "/products/mesa-de-luz-clasica/IMG_2555.jpeg", alt: "Mesa de Luz Clásica en ambiente" },
      { src: "/products/mesa-de-luz-clasica/IMG_8461.jpeg", alt: "Mesa de Luz Clásica showroom" },
      { src: "/products/mesa-de-luz-clasica/IMG_8932.jpeg", alt: "Mesa de Luz Clásica en dormitorio" },
      { src: "/products/mesa-de-luz-clasica/clasica.png", alt: "Mesa de Luz Clásica producto" },
      { src: "/products/mesa-de-luz-clasica/clasica-2.jpeg", alt: "Mesa de Luz Clásica detalle acabado" },
      { src: "/products/mesa-de-luz-clasica/clasica-3.jpeg", alt: "Mesa de Luz Clásica vista general" },
    ],
    sizes: ["66 x 36 x 36cm"],
    relatedSlugs: ["mesita-de-luz-desayunadora", "mesa-de-luz-grecia", "mesa-de-luz-moscu"],
    seo: {
      title: "Mesa de Luz Clásica | Diseñar Muebles",
      description: "Mesa de luz clásica con cajón y estante. MDF 18mm, canto PVC, fabricación propia.",
    },
  },
  {
    slug: "mesa-de-luz-flotante",
    name: "Mesa de Luz Flotante",
    subtitle: "Diseño suspendido y minimalista",
    category: "mesitas-de-luz",
    isHero: false,
    shortDescription:
      "Mesa de luz flotante con 2 cajones y estante. Laqueada con poliuretano, se fija a la pared con escuadras.",
    longDescription:
      "La Mesa de Luz Flotante combina diseño minimalista con funcionalidad. Con 2 cajones con guía telescópica y un estante abierto, ofrece almacenamiento sin ocupar espacio en el piso. Fabricada en MDF de 18mm, laqueada con poliuretano. Cuenta con 2 escuadras para tomar a la pared. Color a elección.",
    features: [
      "2 cajones con guía telescópica",
      "Estante abierto",
      "Laqueado con poliuretano",
      "2 escuadras para fijar a la pared",
      "Diseño minimalista",
      "Color a elección",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura sólida en MDF de primera calidad" },
      { title: "Laqueado", description: "Terminación con poliuretano de alta calidad" },
      { title: "Guías Telescópicas", description: "Apertura suave y total en ambos cajones" },
      { title: "Escuadras", description: "2 escuadras incluidas para fijación a pared" },
    ],
    stats: [
      { value: "2", label: "Cajones" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Incluida", description: "2 escuadras para tomar a la pared incluidas" },
    ],
    images: [
      { src: "/products/mesa-de-luz-flotante/IMG_1045.jpeg", alt: "Mesa de Luz Flotante con cajón abierto" },
      { src: "/products/mesa-de-luz-flotante/IMG_1046.jpeg", alt: "Mesa de Luz Flotante montada en pared" },
      { src: "/products/mesa-de-luz-flotante/IMG_8936.jpeg", alt: "Mesa de Luz Flotante en dormitorio" },
      { src: "/products/mesa-de-luz-flotante/IMG_8937.jpeg", alt: "Mesa de Luz Flotante detalle acabado" },
      { src: "/products/mesa-de-luz-flotante/IMG_8938.jpeg", alt: "Mesa de Luz Flotante vista lateral" },
      { src: "/products/mesa-de-luz-flotante/flotante-3.jpeg", alt: "Mesa de Luz Flotante con cajón y estante" },
      { src: "/products/mesa-de-luz-flotante/flotante-4.jpeg", alt: "Mesa de Luz Flotante detalles de construcción" },
      { src: "/products/mesa-de-luz-flotante/flotante-wa-d83000.jpeg", alt: "Mesa de Luz Flotante en ambiente" },
      { src: "/products/mesa-de-luz-flotante/flotante-wa-0a8ea8.jpeg", alt: "Mesa de Luz Flotante vista general" },
    ],
    relatedSlugs: ["mesa-de-luz-laqueada", "mesita-de-luz-desayunadora", "mesa-de-luz-grecia"],
    seo: {
      title: "Mesa de Luz Flotante | Diseñar Muebles",
      description: "Mesa de luz flotante laqueada con 2 cajones y estante. Fijación a pared, MDF premium.",
    },
  },
  {
    slug: "mesa-de-luz-grecia",
    name: "Mesa de Luz Grecia",
    subtitle: "Elegancia y funcionalidad",
    category: "mesitas-de-luz",
    isHero: false,
    shortDescription:
      "Mesa de luz con 1 cajón con guía telescópica y estante. Diseño minimalista en MDF de 18mm con canto PVC.",
    longDescription:
      "La Mesa de Luz Grecia presenta un diseño minimalista y funcional con 1 cajón con guía telescópica y un estante abierto. Fabricada en MDF de 18mm con canto PVC para las terminaciones y patitas de 2cm. Combina perfectamente con la Cómoda Grecia para un dormitorio coordinado. Color a elección.",
    features: [
      "1 cajón con guía telescópica",
      "Estante abierto",
      "Línea Grecia — combina con Cómoda Grecia",
      "Canto PVC en terminaciones",
      "Patitas de 2cm",
      "Color a elección",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura en MDF de primera calidad" },
      { title: "Canto PVC", description: "Terminación resistente en todos los bordes" },
      { title: "Guía Telescópica", description: "Cajón con apertura suave y total" },
      { title: "Patitas 2cm", description: "Elevación del piso para ventilación y limpieza" },
    ],
    stats: [
      { value: "66cm", label: "Alto" },
      { value: "36cm", label: "Ancho / Prof." },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada" },
    ],
    images: [
      { src: "/products/mesa-de-luz-grecia/IMG_4687.jpeg", alt: "Mesa de Luz Grecia vista frontal" },
      { src: "/products/mesa-de-luz-grecia/IMG_4688.jpeg", alt: "Mesa de Luz Grecia lateral" },
      { src: "/products/mesa-de-luz-grecia/IMG_4689.jpeg", alt: "Mesa de Luz Grecia detalle" },
      { src: "/products/mesa-de-luz-grecia/IMG_5677.jpeg", alt: "Mesa de Luz Grecia en ambiente" },
      { src: "/products/mesa-de-luz-grecia/IMG_5678.jpeg", alt: "Mesa de Luz Grecia vista superior" },
      { src: "/products/mesa-de-luz-grecia/IMG_8929.jpeg", alt: "Mesa de Luz Grecia en dormitorio" },
      { src: "/products/mesa-de-luz-grecia/IMG_8930.jpeg", alt: "Mesa de Luz Grecia detalle cajón" },
      { src: "/products/mesa-de-luz-grecia/IMG_8931.jpeg", alt: "Mesa de Luz Grecia acabado" },
      { src: "/products/mesa-de-luz-grecia/IMG_8933.jpeg", alt: "Mesa de Luz Grecia showroom" },
      { src: "/products/mesa-de-luz-grecia/IMG_8934.jpeg", alt: "Mesa de Luz Grecia par en dormitorio" },
      { src: "/products/mesa-de-luz-grecia/IMG_8935.jpeg", alt: "Mesa de Luz Grecia vista general" },
    ],
    sizes: ["66 x 36 x 36cm"],
    relatedSlugs: ["mesa-de-luz-clasica", "comoda-grecia", "mesita-de-luz-desayunadora"],
    seo: {
      title: "Mesa de Luz Grecia | Diseñar Muebles",
      description: "Mesa de luz Grecia con cajón y estante. MDF 18mm, canto PVC, fabricación propia.",
    },
  },
  {
    slug: "mesa-de-luz-moscu",
    name: "Mesa de Luz Moscú",
    subtitle: "Compacta y funcional",
    category: "mesitas-de-luz",
    isHero: false,
    shortDescription:
      "Mesa de luz con 2 cajones con guías telescópicas. Diseño minimalista en MDF de 18mm con canto PVC.",
    longDescription:
      "La Mesa de Luz Moscú ofrece un diseño minimalista y compacto con 2 cajones con guías telescópicas y un nicho abierto. Fabricada en MDF de 18mm con canto PVC para las terminaciones y patitas de 2cm. Color a elección.",
    features: [
      "2 cajones con guías telescópicas",
      "Nicho abierto",
      "Diseño minimalista",
      "Canto PVC en terminaciones",
      "Patitas de 2cm",
      "Color a elección",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto PVC", description: "Terminación resistente en todos los bordes" },
      { title: "Guías Telescópicas", description: "Apertura total y suave en ambos cajones" },
      { title: "Patitas 2cm", description: "Elevación del piso para ventilación y limpieza" },
    ],
    stats: [
      { value: "66cm", label: "Alto" },
      { value: "36cm", label: "Ancho / Prof." },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos directo a tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada y lista para usar" },
    ],
    images: [
      { src: "/products/mesa-de-luz-moscu/moscu-1.jpeg", alt: "Mesa de Luz Moscú junto a cama" },
      { src: "/products/mesa-de-luz-moscu/moscu-2.jpeg", alt: "Mesa de Luz Moscú par vista frontal" },
      { src: "/products/mesa-de-luz-moscu/moscu-3.jpeg", alt: "Mesa de Luz Moscú en ambiente" },
      { src: "/products/mesa-de-luz-moscu/moscu-4.jpeg", alt: "Mesa de Luz Moscú detalle acabado" },
    ],
    sizes: ["66 x 36 x 36cm"],
    relatedSlugs: ["mesita-de-luz-desayunadora", "mesa-de-luz-clasica", "mesa-de-luz-grecia"],
    seo: {
      title: "Mesa de Luz Moscú | Diseñar Muebles",
      description: "Mesa de luz Moscú con 2 cajones y guías telescópicas. MDF 18mm, canto PVC, fabricación propia.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // RESPALDOS TAPIZADOS — 7 diseños
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "respaldo-tapizado-capitone",
    name: "Respaldo Tapizado Capitoné",
    subtitle: "Confort y sofisticación para tu cama",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo con tapizado capitoné clásico y tachas decorativas. Espuma de alta densidad y tela premium antimancha.",
    longDescription:
      "El Respaldo Tapizado Capitoné lleva tu dormitorio a otro nivel con su diseño clásico de botones hundidos y tachas decorativas en el borde. Relleno con espuma de alta densidad D33 y tapizado en tela premium antimancha. Disponible en múltiples colores.",
    features: [
      "Diseño capitoné con botones forrados",
      "Tachas decorativas en el borde",
      "Espuma de alta densidad D33",
      "Tela premium antimancha",
      "Estructura reforzada de MDF",
      "Fijación a pared incluida",
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
      { src: "/products/respaldo-capitone/IMG_2056.jpeg", alt: "Respaldo Capitoné en showroom" },
      { src: "/products/respaldo-capitone/IMG_2057.jpeg", alt: "Respaldo Capitoné detalle capitoné" },
      { src: "/products/respaldo-capitone/IMG_2363.jpeg", alt: "Respaldo Capitoné vista completa" },
      { src: "/products/respaldo-capitone/IMG_8537.jpeg", alt: "Respaldo Capitoné en dormitorio" },
      { src: "/products/respaldo-capitone/IMG_8546.jpeg", alt: "Respaldo Capitoné detalle tapizado" },
      { src: "/products/respaldo-capitone/IMG_8548.jpeg", alt: "Respaldo Capitoné en ambiente" },
    ],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-isola", "respaldo-tapizado-luxury", "base-box-luxury"],
    seo: {
      title: "Respaldo Tapizado Capitoné | Diseñar Muebles",
      description: "Respaldo capitoné con tachas decorativas, espuma D33 y tela antimancha.",
    },
  },
  {
    slug: "respaldo-tapizado-isola",
    name: "Respaldo Tapizado Isola",
    subtitle: "Marco decorativo con tachas",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo tapizado con diseño de marco interior delineado con tachas. Elegancia y presencia para tu dormitorio.",
    longDescription:
      "El Respaldo Tapizado Isola presenta un diseño único con un marco interior delineado por tachas decorativas. Su superficie tapizada en tela premium antimancha con espuma de alta densidad ofrece confort y un look sofisticado. Disponible en múltiples colores.",
    features: [
      "Diseño con marco de tachas decorativas",
      "Tela premium antimancha",
      "Espuma de alta densidad D28",
      "Look sofisticado y moderno",
      "Estructura de MDF reforzado",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "Tachas Decorativas", description: "Marco interior con tachas de acabado metálico" },
      { title: "Espuma D28", description: "Densidad media para confort" },
      { title: "Tela Premium", description: "Antimancha de alta durabilidad" },
    ],
    stats: [
      { value: "65cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [
      { src: "/products/respaldo-isola/IMG_2921.jpeg", alt: "Respaldo Isola detalle tachas" },
      { src: "/products/respaldo-isola/IMG_2922.jpeg", alt: "Respaldo Isola vista frontal" },
      { src: "/products/respaldo-isola/IMG_2926.jpeg", alt: "Respaldo Isola en cama" },
      { src: "/products/respaldo-isola/IMG_2928.jpeg", alt: "Respaldo Isola lateral" },
      { src: "/products/respaldo-isola/IMG_4166.jpeg", alt: "Respaldo Isola en ambiente decorado" },
      { src: "/products/respaldo-isola/IMG_7823.jpeg", alt: "Respaldo Isola en dormitorio" },
    ],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-capitone", "respaldo-tapizado-luxury", "base-box-genesis"],
    seo: {
      title: "Respaldo Tapizado Isola | Diseñar Muebles",
      description: "Respaldo tapizado Isola con marco de tachas decorativas. Tela premium, fabricación propia.",
    },
  },
  {
    slug: "respaldo-tapizado-luxury",
    name: "Respaldo Tapizado Luxury",
    subtitle: "Capitoné premium con máximo confort",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo tapizado de línea Luxury con capitoné profundo y tachas. El más elegante de nuestra línea.",
    longDescription:
      "El Respaldo Tapizado Luxury es el tope de línea en respaldos tapizados. Con un capitoné profundo de botones forrados y tachas decorativas perimetrales, ofrece la máxima elegancia. Tapizado en tela premium antimancha con espuma de alta densidad D33.",
    features: [
      "Capitoné profundo con botones forrados",
      "Tachas decorativas perimetrales",
      "Espuma de alta densidad D33",
      "Tela premium antimancha",
      "Estructura reforzada de MDF",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "Capitoné Profundo", description: "Botones hundidos con mayor relieve" },
      { title: "Espuma D33", description: "Alta densidad para máximo confort" },
      { title: "Tela Premium", description: "Antimancha, múltiples colores" },
    ],
    stats: [
      { value: "75cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [
      { src: "/products/respaldo-luxury/IMG_0116.jpeg", alt: "Respaldo Luxury capitoné detalle" },
      { src: "/products/respaldo-luxury/IMG_0117.jpeg", alt: "Respaldo Luxury vista frontal" },
      { src: "/products/respaldo-luxury/IMG_3735.jpeg", alt: "Respaldo Luxury en dormitorio" },
      { src: "/products/respaldo-luxury/IMG_7354.jpeg", alt: "Respaldo Luxury lateral" },
      { src: "/products/respaldo-luxury/IMG_7809.jpeg", alt: "Respaldo Luxury en ambiente" },
      { src: "/products/respaldo-luxury/IMG_9675.jpeg", alt: "Respaldo Luxury showroom" },
    ],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-capitone", "respaldo-tapizado-isola", "base-box-luxury"],
    seo: {
      title: "Respaldo Tapizado Luxury | Diseñar Muebles",
      description: "Respaldo tapizado Luxury con capitoné profundo y tachas. Tope de línea, fabricación propia.",
    },
  },
  {
    slug: "respaldo-tapizado-malaga",
    name: "Respaldo Tapizado Málaga",
    subtitle: "Diseño mediterráneo moderno",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo tapizado línea Málaga. Diseño moderno con líneas suaves y tela premium.",
    longDescription:
      "El Respaldo Tapizado Málaga presenta un diseño inspirado en la elegancia mediterránea con líneas suaves y armoniosas. Tapizado en tela premium antimancha con espuma de alta densidad.",
    features: [
      "Diseño de líneas suaves",
      "Tela premium antimancha",
      "Espuma de alta densidad",
      "Estructura de MDF reforzado",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "Espuma D28", description: "Densidad media para confort" },
      { title: "Tela Premium", description: "Antimancha de alta durabilidad" },
      { title: "MDF", description: "Estructura interna reforzada" },
    ],
    stats: [
      { value: "65cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-capitone", "respaldo-tapizado-isola", "respaldo-tapizado-luxury"],
    seo: {
      title: "Respaldo Tapizado Málaga | Diseñar Muebles",
      description: "Respaldo tapizado Málaga. Diseño mediterráneo, tela premium, fabricación propia.",
    },
  },
  {
    slug: "respaldo-tapizado-recto",
    name: "Respaldo Tapizado Recto",
    subtitle: "Elegancia simple para tu dormitorio",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo tapizado de líneas rectas. Diseño minimalista con tela premium.",
    longDescription:
      "El Respaldo Tapizado Recto aporta elegancia con sus líneas limpias y minimalistas. Tapizado en tela de alta resistencia sobre estructura de MDF, se fija fácilmente a la pared.",
    features: [
      "Tapizado en tela de alta resistencia",
      "Estructura interna de MDF reforzado",
      "Fijación a pared incluida",
      "Disponible en varios colores",
      "Altura: 60cm desde el colchón",
    ],
    specs: [
      { title: "Tela Premium", description: "Tapizado antimancha de alta durabilidad" },
      { title: "Espuma D28", description: "Relleno de espuma de densidad media" },
      { title: "MDF Interno", description: "Estructura interna rígida" },
    ],
    stats: [
      { value: "60cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["1 Plaza (080)", "1½ Plaza (100)", "2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-capitone", "respaldo-tapizado-isola", "base-box-genesis"],
    seo: {
      title: "Respaldo Tapizado Recto | Diseñar Muebles",
      description: "Respaldo tapizado de líneas rectas. Tela premium, fabricación propia.",
    },
  },
  {
    slug: "respaldo-tapizado-paneles",
    name: "Respaldo Tapizado Paneles",
    subtitle: "Diseño moderno con paneles tapizados",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo con paneles tapizados verticales. Diseño contemporáneo con textura visual única.",
    longDescription:
      "El Respaldo Tapizado Paneles presenta un diseño de paneles verticales tapizados que crea un efecto visual moderno. Cada panel está relleno con espuma de alta densidad y tapizado en tela premium.",
    features: [
      "Paneles verticales tapizados",
      "Espuma de alta densidad D28",
      "Tela premium antimancha",
      "Efecto visual de profundidad",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "Paneles", description: "Tapizado individual por panel" },
      { title: "Espuma D28", description: "Densidad media para confort" },
      { title: "Tela Premium", description: "Antimancha de alta durabilidad" },
    ],
    stats: [
      { value: "65cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-recto", "respaldo-tapizado-capitone", "base-box-genesis"],
    seo: {
      title: "Respaldo Tapizado Paneles | Diseñar Muebles",
      description: "Respaldo con paneles tapizados verticales. Diseño moderno, tela premium.",
    },
  },
  {
    slug: "respaldo-tapizado-curvo",
    name: "Respaldo Tapizado Curvo",
    subtitle: "Formas suaves para tu descanso",
    category: "respaldos-tapizados",
    isHero: false,
    shortDescription:
      "Respaldo tapizado con forma curva envolvente. Ideal para leer y descansar en la cama.",
    longDescription:
      "El Respaldo Tapizado Curvo presenta una forma envolvente con espuma de alta densidad que ofrece el soporte perfecto para leer o ver televisión en la cama. Tapizado en tela premium antimancha.",
    features: [
      "Diseño curvo envolvente",
      "Espuma de alta densidad D33",
      "Tela premium antimancha",
      "Soporte ideal para lectura",
      "Fijación a pared incluida",
    ],
    specs: [
      { title: "Curva Ergonómica", description: "Diseño pensado para el confort" },
      { title: "Espuma D33", description: "Alta densidad, máximo confort" },
      { title: "Tela Premium", description: "Antimancha, alta durabilidad" },
    ],
    stats: [
      { value: "75cm", label: "Altura visible" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Fijación Simple", description: "Se fija a la pared con tacos incluidos" },
    ],
    images: [],
    sizes: ["2 Plazas (140)", "Queen (160)", "King (180)"],
    relatedSlugs: ["respaldo-tapizado-luxury", "respaldo-tapizado-paneles", "base-box-luxury"],
    seo: {
      title: "Respaldo Tapizado Curvo | Diseñar Muebles",
      description: "Respaldo tapizado curvo envolvente. Espuma D33, tela premium.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // PRODUCTOS LAQUEADOS — productos con terminación laqueada
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "cama-triple-nido",
    name: "Cama Triple Nido",
    subtitle: "Tres camas en una — solución para espacios compartidos",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cama nido triple con terminación laqueada. Tres camas en el espacio de una, ideal para dormitorios infantiles.",
    longDescription:
      "La Cama Triple Nido permite alojar tres camas en el espacio de una sola. Con terminación laqueada de alta calidad, su diseño compacto es ideal para dormitorios infantiles o de huéspedes. Las camas inferiores se deslizan suavemente para usar y guardar.",
    features: [
      "3 camas en el espacio de 1",
      "Terminación laqueada premium",
      "Camas inferiores deslizantes",
      "Estructura reforzada",
      "Ideal para dormitorios infantiles",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación laqueada de alta calidad" },
      { title: "Estructura", description: "Madera y MDF reforzado" },
      { title: "Deslizante", description: "Sistema de rieles para camas inferiores" },
    ],
    stats: [
      { value: "3", label: "Camas" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Se entrega lista, sin complicaciones" },
    ],
    images: [
      { src: "/products/cama-triple-nido/IMG_0912.jpeg", alt: "Cama Triple Nido vista lateral" },
      { src: "/products/cama-triple-nido/IMG_0913.jpeg", alt: "Cama Triple Nido camas desplegadas" },
      { src: "/products/cama-triple-nido/IMG_0914.jpeg", alt: "Cama Triple Nido detalle" },
      { src: "/products/cama-triple-nido/IMG_0915.jpeg", alt: "Cama Triple Nido estructura" },
      { src: "/products/cama-triple-nido/IMG_0916.jpeg", alt: "Cama Triple Nido frontal" },
      { src: "/products/cama-triple-nido/IMG_0917.jpeg", alt: "Cama Triple Nido en ambiente" },
    ],
    sizes: ["1 Plaza (080x190)"],
    relatedSlugs: ["cama-vigo", "cucheta-entera", "cucheta-puente"],
    seo: {
      title: "Cama Triple Nido Laqueada | Diseñar Muebles",
      description: "Cama nido triple laqueada. 3 camas en 1, ideal para dormitorios infantiles. Fabricación propia.",
    },
  },
  {
    slug: "cama-vigo",
    name: "Cama Vigo",
    subtitle: "Diseño clásico laqueado para niños",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cama infantil línea Vigo con terminación laqueada. Diseño seguro y duradero con baranda lateral.",
    longDescription:
      "La Cama Vigo es una cama infantil con terminación laqueada de alta calidad. Su diseño incluye baranda lateral de seguridad y estructura reforzada. Perfecta para la transición de cuna a cama.",
    features: [
      "Terminación laqueada premium",
      "Baranda lateral de seguridad",
      "Estructura reforzada",
      "Diseño infantil seguro",
      "Combina con Cuna Vigo Funcional",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación laqueada atóxica" },
      { title: "Estructura", description: "Madera y MDF reforzado" },
      { title: "Baranda", description: "Lateral de seguridad removible" },
    ],
    stats: [
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Llega lista, sin complicaciones" },
    ],
    images: [
      { src: "/products/cama-vigo/IMG_4858.jpeg", alt: "Cama Vigo en showroom" },
      { src: "/products/cama-vigo/IMG_5081.jpeg", alt: "Cama Vigo vista lateral" },
      { src: "/products/cama-vigo/IMG_5084.jpeg", alt: "Cama Vigo detalle" },
      { src: "/products/cama-vigo/IMG_5085.jpeg", alt: "Cama Vigo estructura" },
      { src: "/products/cama-vigo/IMG_5453.jpeg", alt: "Cama Vigo frontal" },
      { src: "/products/cama-vigo/IMG_6700.jpeg", alt: "Cama Vigo en ambiente" },
    ],
    sizes: ["1 Plaza (080x190)"],
    relatedSlugs: ["cuna-vigo-funcional", "cama-triple-nido", "cucheta-entera"],
    seo: {
      title: "Cama Vigo Laqueada | Diseñar Muebles",
      description: "Cama infantil Vigo laqueada con baranda de seguridad. Fabricación propia.",
    },
  },
  {
    slug: "cucheta-entera",
    name: "Cucheta Entera",
    subtitle: "Dos camas en altura — máximo aprovechamiento",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cucheta entera laqueada con escalera lateral. Estructura reforzada para máxima seguridad.",
    longDescription:
      "La Cucheta Entera ofrece dos camas superpuestas con terminación laqueada de alta calidad. Su estructura reforzada y escalera lateral integrada garantizan seguridad y durabilidad. Ideal para dormitorios infantiles o juveniles.",
    features: [
      "2 camas superpuestas",
      "Terminación laqueada premium",
      "Escalera lateral integrada",
      "Barandas de seguridad superiores",
      "Estructura extra reforzada",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación laqueada de alta calidad" },
      { title: "Estructura", description: "Madera maciza y MDF reforzado" },
      { title: "Seguridad", description: "Barandas y escalera con antideslizante" },
    ],
    stats: [
      { value: "2", label: "Camas" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Llega lista, sin complicaciones" },
    ],
    images: [
      { src: "/products/cucheta-entera/IMG_4713.jpeg", alt: "Cucheta Entera en showroom" },
      { src: "/products/cucheta-entera/IMG_4714.jpeg", alt: "Cucheta Entera vista lateral" },
      { src: "/products/cucheta-entera/IMG_5625.jpeg", alt: "Cucheta Entera estructura" },
      { src: "/products/cucheta-entera/IMG_5689.jpeg", alt: "Cucheta Entera detalle escalera" },
      { src: "/products/cucheta-entera/IMG_6639.jpeg", alt: "Cucheta Entera en dormitorio" },
      { src: "/products/cucheta-entera/IMG_6643.jpeg", alt: "Cucheta Entera en ambiente" },
    ],
    sizes: ["1 Plaza (080x190)"],
    relatedSlugs: ["cucheta-puente", "cama-triple-nido", "cama-vigo"],
    seo: {
      title: "Cucheta Entera Laqueada | Diseñar Muebles",
      description: "Cucheta entera laqueada con escalera lateral. Estructura reforzada, fabricación propia.",
    },
  },
  {
    slug: "cucheta-puente",
    name: "Cucheta Puente",
    subtitle: "Diseño abierto con espacio debajo",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cucheta puente laqueada con amplio espacio debajo. Diseño abierto ideal para escritorio o juego.",
    longDescription:
      "La Cucheta Puente eleva la cama dejando un amplio espacio debajo que se puede usar como zona de estudio, juego o almacenamiento. Con terminación laqueada premium y estructura reforzada con barandas de seguridad.",
    features: [
      "Cama elevada tipo puente",
      "Amplio espacio inferior aprovechable",
      "Terminación laqueada premium",
      "Escalera lateral integrada",
      "Barandas de seguridad",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación laqueada de alta calidad" },
      { title: "Estructura", description: "Reforzada para máxima seguridad" },
      { title: "Espacio Inferior", description: "Libre para escritorio o almacenamiento" },
    ],
    stats: [
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Llega lista, sin complicaciones" },
    ],
    images: [
      { src: "/products/cucheta-puente/IMG_4347.jpeg", alt: "Cucheta Puente en showroom" },
      { src: "/products/cucheta-puente/IMG_4357.jpeg", alt: "Cucheta Puente vista lateral" },
      { src: "/products/cucheta-puente/IMG_4671.jpeg", alt: "Cucheta Puente espacio inferior" },
      { src: "/products/cucheta-puente/IMG_6903.jpeg", alt: "Cucheta Puente en ambiente" },
      { src: "/products/cucheta-puente/IMG_6906.jpeg", alt: "Cucheta Puente detalle escalera" },
      { src: "/products/cucheta-puente/IMG_6910.jpeg", alt: "Cucheta Puente en dormitorio" },
    ],
    sizes: ["1 Plaza (080x190)"],
    relatedSlugs: ["cucheta-entera", "cama-triple-nido", "cama-vigo"],
    seo: {
      title: "Cucheta Puente Laqueada | Diseñar Muebles",
      description: "Cucheta puente laqueada con espacio inferior libre. Estructura reforzada, fabricación propia.",
    },
  },
  {
    slug: "cuna-colecho",
    name: "Cuna Colecho",
    subtitle: "Dormí cerca de tu bebé con seguridad",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cuna colecho laqueada con lateral abatible. Se acopla a la cama de los padres para colecho seguro.",
    longDescription:
      "La Cuna Colecho permite dormir junto a tu bebé de forma segura. Su lateral abatible se acopla a la cama de los padres, y cuando crece se convierte en cuna independiente. Terminación laqueada atóxica y estructura reforzada.",
    features: [
      "Lateral abatible para colecho",
      "Se acopla a la cama de los padres",
      "Convertible en cuna independiente",
      "Terminación laqueada atóxica",
      "Estructura reforzada",
    ],
    specs: [
      { title: "Laqueado Atóxico", description: "Pintura segura para bebés" },
      { title: "Lateral Abatible", description: "Sistema de acople a cama adulta" },
      { title: "Estructura", description: "Madera reforzada" },
    ],
    stats: [
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Llega lista, sin complicaciones" },
    ],
    images: [
      { src: "/products/cuna-colecho/IMG_7336.jpeg", alt: "Cuna Colecho en showroom" },
      { src: "/products/cuna-colecho/IMG_7337.jpeg", alt: "Cuna Colecho lateral abierto" },
      { src: "/products/cuna-colecho/IMG_7340.jpeg", alt: "Cuna Colecho detalle" },
      { src: "/products/cuna-colecho/IMG_7341.jpeg", alt: "Cuna Colecho vista completa" },
    ],
    relatedSlugs: ["cuna-vigo-funcional", "cama-vigo", "cama-triple-nido"],
    seo: {
      title: "Cuna Colecho Laqueada | Diseñar Muebles",
      description: "Cuna colecho laqueada con lateral abatible. Laqueado atóxico, fabricación propia.",
    },
  },
  {
    slug: "cuna-vigo-funcional",
    name: "Cuna Vigo Funcional",
    subtitle: "Crece con tu bebé",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cuna funcional línea Vigo con cajones y cambiador. Se transforma en cama infantil cuando crece.",
    longDescription:
      "La Cuna Vigo Funcional es una cuna que crece con tu bebé. Incluye cajones inferiores de almacenamiento y cambiador integrado. Cuando tu hijo crece, se transforma en cama infantil. Terminación laqueada atóxica de alta calidad.",
    features: [
      "Cuna convertible en cama infantil",
      "Cajones inferiores de almacenamiento",
      "Cambiador integrado",
      "Terminación laqueada atóxica",
      "Estructura reforzada",
      "Combina con Cama Vigo",
    ],
    specs: [
      { title: "Laqueado Atóxico", description: "Pintura segura certificada para bebés" },
      { title: "Convertible", description: "De cuna a cama infantil" },
      { title: "Cajones", description: "Almacenamiento inferior integrado" },
    ],
    stats: [
      { value: "2 en 1", label: "Cuna + Cama" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Llega lista, sin complicaciones" },
    ],
    images: [
      { src: "/products/cuna-vigo-funcional/IMG_0902.jpeg", alt: "Cuna Vigo Funcional en showroom" },
      { src: "/products/cuna-vigo-funcional/IMG_0903.jpeg", alt: "Cuna Vigo Funcional lateral" },
      { src: "/products/cuna-vigo-funcional/IMG_0908.jpeg", alt: "Cuna Vigo Funcional cajones" },
      { src: "/products/cuna-vigo-funcional/IMG_0909.jpeg", alt: "Cuna Vigo Funcional cambiador" },
      { src: "/products/cuna-vigo-funcional/IMG_0919.jpeg", alt: "Cuna Vigo Funcional detalle" },
      { src: "/products/cuna-vigo-funcional/IMG_0920.jpeg", alt: "Cuna Vigo Funcional en ambiente" },
    ],
    relatedSlugs: ["cuna-colecho", "cama-vigo", "cama-triple-nido"],
    seo: {
      title: "Cuna Vigo Funcional Laqueada | Diseñar Muebles",
      description: "Cuna funcional convertible en cama. Cajones y cambiador, laqueado atóxico. Fabricación propia.",
    },
  },
  {
    slug: "comoda-laqueada",
    name: "Cómoda Laqueada",
    subtitle: "Elegancia en acabado laqueado",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Cómoda con terminación laqueada de alta calidad. Cajones amplios con guías telescópicas reforzadas. Disponible en 120, 140 y 160cm de ancho.",
    longDescription:
      "La Cómoda Laqueada ofrece almacenamiento con un acabado laqueado de alta calidad. Sus cajones amplios con guías telescópicas reforzadas y diseño elegante la hacen ideal para dormitorios que buscan un estilo refinado. Disponible en 120, 140 y 160cm de ancho. Misma calidad en todas las medidas.",
    features: [
      "Terminación laqueada premium",
      "Cajones con guías telescópicas reforzadas",
      "Diseño elegante y funcional",
      "Múltiples colores disponibles",
      "Estructura reforzada",
      "Disponible en 120, 140 y 160cm de ancho",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación multi-capa de alta calidad" },
      { title: "Guías Telescópicas", description: "Reforzadas, apertura total en todos los cajones" },
      { title: "MDF", description: "Estructura en MDF de primera" },
    ],
    stats: [
      { value: "120/140/160", label: "Ancho disponible (cm)" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada" },
    ],
    images: [
      { src: "/products/comoda-laqueada/IMG_4670.jpeg", alt: "Cómoda Laqueada vista frontal" },
      { src: "/products/comoda-laqueada/IMG_5615.jpeg", alt: "Cómoda Laqueada cajones abiertos" },
      { src: "/products/comoda-laqueada/IMG_5621.jpeg", alt: "Cómoda Laqueada lateral" },
      { src: "/products/comoda-laqueada/IMG_7839.jpeg", alt: "Cómoda Laqueada en dormitorio" },
      { src: "/products/comoda-laqueada/IMG_7841.jpeg", alt: "Cómoda Laqueada detalle acabado" },
      { src: "/products/comoda-laqueada/IMG_7845.jpeg", alt: "Cómoda Laqueada en ambiente" },
    ],
    sizes: ["120cm de ancho", "140cm de ancho", "160cm de ancho"],
    relatedSlugs: ["mesa-de-luz-laqueada", "rack-laqueado", "vajillero-monterrey"],
    seo: {
      title: "Cómoda Laqueada | Diseñar Muebles",
      description: "Cómoda laqueada con cajones telescópicos reforzados. Acabado premium, disponible en 120, 140 y 160cm.",
    },
  },
  {
    slug: "mesa-de-luz-laqueada",
    name: "Mesa de Luz Laqueada",
    subtitle: "Elegante con terminación laqueada",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Mesa de luz con 3 cajones con guías telescópicas. Laqueada con poliuretano, diseño minimalista en MDF de 18mm.",
    longDescription:
      "La Mesa de Luz Laqueada ofrece un diseño minimalista con 3 cajones con guías telescópicas. Fabricada en MDF de 18mm y laqueada con poliuretano de alta calidad. Cuenta con 2 escuadras para tomar a la pared. Combina con la Cómoda Laqueada y otros muebles de la línea laqueada. Color a elección.",
    features: [
      "3 cajones con guías telescópicas",
      "Laqueado con poliuretano",
      "2 escuadras para fijar a la pared",
      "Diseño minimalista",
      "Combina con la línea laqueada",
      "Color a elección",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Laqueado", description: "Terminación con poliuretano de alta calidad" },
      { title: "Guías Telescópicas", description: "Apertura suave y total en los 3 cajones" },
      { title: "Escuadras", description: "2 escuadras incluidas para fijación a pared" },
    ],
    stats: [
      { value: "3", label: "Cajones" },
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Envío hasta la puerta de tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada" },
    ],
    images: [
      { src: "/products/mesa-de-luz-laqueada/IMG_1749.jpeg", alt: "Mesa de Luz Laqueada frontal" },
      { src: "/products/mesa-de-luz-laqueada/IMG_1750.jpeg", alt: "Mesa de Luz Laqueada lateral" },
      { src: "/products/mesa-de-luz-laqueada/IMG_1751.jpeg", alt: "Mesa de Luz Laqueada detalle" },
      { src: "/products/mesa-de-luz-laqueada/IMG_5623.jpeg", alt: "Mesa de Luz Laqueada en ambiente" },
      { src: "/products/mesa-de-luz-laqueada/IMG_5624.jpeg", alt: "Mesa de Luz Laqueada showroom" },
    ],
    relatedSlugs: ["mesa-de-luz-flotante", "comoda-laqueada", "rack-laqueado"],
    seo: {
      title: "Mesa de Luz Laqueada | Diseñar Muebles",
      description: "Mesa de luz laqueada con 3 cajones y guías telescópicas. Laqueado con poliuretano, fabricación propia.",
    },
  },
  {
    slug: "rack-laqueado",
    name: "Rack TV Laqueado",
    subtitle: "Centro de entretenimiento con estilo",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Rack para TV con terminación laqueada. Diseño moderno con almacenamiento integrado para tu living.",
    longDescription:
      "El Rack TV Laqueado es el centro de entretenimiento ideal para tu living. Con terminación laqueada de alta calidad, ofrece espacio para TV, equipos electrónicos y almacenamiento en compartimentos con puertas. Su diseño moderno y funcional complementa cualquier ambiente.",
    features: [
      "Terminación laqueada premium",
      "Espacio para TV y equipos",
      "Compartimentos con puertas",
      "Pasacables integrados",
      "Diseño moderno y funcional",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación multi-capa resistente" },
      { title: "Estructura", description: "MDF reforzado" },
      { title: "Pasacables", description: "Orificios para cables integrados" },
    ],
    stats: [
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Listo para Usar", description: "Llega listo, sin complicaciones" },
    ],
    images: [
      { src: "/products/rack-laqueado/IMG_6997.jpeg", alt: "Rack TV Laqueado vista frontal" },
      { src: "/products/rack-laqueado/IMG_7007.jpeg", alt: "Rack TV Laqueado puertas abiertas" },
      { src: "/products/rack-laqueado/IMG_7011.jpeg", alt: "Rack TV Laqueado lateral" },
      { src: "/products/rack-laqueado/IMG_7716.jpeg", alt: "Rack TV Laqueado en living" },
      { src: "/products/rack-laqueado/IMG_7926.jpeg", alt: "Rack TV Laqueado en ambiente" },
    ],
    relatedSlugs: ["comoda-laqueada", "mesa-de-luz-laqueada", "vajillero-monterrey"],
    seo: {
      title: "Rack TV Laqueado | Diseñar Muebles",
      description: "Rack para TV laqueado con almacenamiento. Diseño moderno, fabricación propia.",
    },
  },
  {
    slug: "vajillero-monterrey",
    name: "Vajillero Monterrey",
    subtitle: "Exhibí y guardá con elegancia",
    category: "productos-laqueados",
    isHero: false,
    shortDescription:
      "Vajillero Monterrey con terminación laqueada. Estantes de exhibición con puertas de vidrio y almacenamiento inferior.",
    longDescription:
      "El Vajillero Monterrey combina exhibición y almacenamiento con una terminación laqueada de alta calidad. Su parte superior con puertas de vidrio permite exhibir vajilla y objetos decorativos, mientras que la parte inferior ofrece almacenamiento cerrado. Un mueble de gran presencia para tu comedor o living.",
    features: [
      "Terminación laqueada premium",
      "Puertas de vidrio superiores",
      "Almacenamiento inferior cerrado",
      "Estantes regulables",
      "Gran presencia visual",
    ],
    specs: [
      { title: "Laqueado", description: "Terminación de alta calidad multi-capa" },
      { title: "Vidrio", description: "Puertas superiores con vidrio templado" },
      { title: "Estantes", description: "Regulables en altura" },
    ],
    stats: [
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Listo para Usar", description: "Llega listo, sin complicaciones" },
    ],
    images: [
      { src: "/products/vajillero-monterrey/IMG_4852.jpeg", alt: "Vajillero Monterrey vista frontal" },
      { src: "/products/vajillero-monterrey/IMG_4854.jpeg", alt: "Vajillero Monterrey puertas abiertas" },
      { src: "/products/vajillero-monterrey/IMG_4856.jpeg", alt: "Vajillero Monterrey detalle" },
      { src: "/products/vajillero-monterrey/IMG_4857.jpeg", alt: "Vajillero Monterrey lateral" },
      { src: "/products/vajillero-monterrey/IMG_9908.jpeg", alt: "Vajillero Monterrey en ambiente" },
    ],
    relatedSlugs: ["rack-laqueado", "comoda-laqueada", "mesa-de-luz-laqueada"],
    seo: {
      title: "Vajillero Monterrey Laqueado | Diseñar Muebles",
      description: "Vajillero Monterrey laqueado con puertas de vidrio. Gran presencia, fabricación propia.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CÓMODAS — 1 diseño (Grecia) en 3 medidas
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "comoda-grecia",
    name: "Cómoda Grecia",
    subtitle: "Diseño minimalista con máximo almacenamiento",
    category: "comodas",
    isHero: true,
    shortDescription:
      "Cómoda de 6 cajones con guías telescópicas reforzadas. Diseño sin tiradores, líneas puras. Disponible en 120, 140 y 160cm de ancho.",
    longDescription:
      "La Cómoda Grecia combina un diseño minimalista sin tiradores con una gran capacidad de almacenamiento. Sus 6 cajones amplios con guías telescópicas reforzadas permiten una apertura total y suave. Fabricada íntegramente en MDF de 18mm con terminación en canto ABS resistente a golpes y humedad. Disponible en 120, 140 y 160cm de ancho, y en múltiples tonos de melamina. Misma calidad y guías telescópicas reforzadas en todas las medidas.",
    features: [
      "6 cajones amplios sin tiradores",
      "Guías telescópicas reforzadas",
      "Diseño minimalista de líneas puras",
      "Disponible en múltiples colores de melamina",
      "Disponible en 120, 140 y 160cm de ancho",
    ],
    specs: [
      { title: "MDF 18mm", description: "Estructura completa en MDF de primera calidad" },
      { title: "Canto ABS", description: "Terminación resistente a golpes y humedad en todos los bordes" },
      { title: "Guías Telescópicas", description: "Reforzadas, apertura total y suave en los 6 cajones" },
    ],
    stats: [
      { value: "6", label: "Cajones" },
      { value: "12", label: "Meses de garantía" },
      { value: "120/140/160", label: "Ancho disponible (cm)" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Lista para Usar", description: "Se entrega armada y lista para usar" },
    ],
    images: [
      { src: "/products/comoda-grecia/IMG_1103.jpeg", alt: "Cómoda Grecia vista frontal" },
      { src: "/products/comoda-grecia/IMG_1654.jpeg", alt: "Cómoda Grecia en ambiente" },
      { src: "/products/comoda-grecia/IMG_1656.jpeg", alt: "Cómoda Grecia showroom" },
      { src: "/products/comoda-grecia/IMG_7241.jpeg", alt: "Cómoda Grecia cajones abiertos" },
      { src: "/products/comoda-grecia/IMG_8655.jpeg", alt: "Cómoda Grecia detalle acabado" },
      { src: "/products/comoda-grecia/IMG_8950.jpeg", alt: "Cómoda Grecia en dormitorio" },
    ],
    sizes: ["120cm de ancho", "140cm de ancho", "160cm de ancho"],
    relatedSlugs: ["mesa-de-luz-grecia", "base-box-genesis", "mesita-de-luz-desayunadora"],
    seo: {
      title: "Cómoda Grecia 6 Cajones | Diseñar Muebles",
      description:
        "Cómoda Grecia de 6 cajones con guías telescópicas reforzadas. MDF 18mm, canto ABS, diseño minimalista. Disponible en 120, 140 y 160cm.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // SILLONES — 6 diseños (3 sofá cama + 3 comunes) — pendiente fotos
  // ═══════════════════════════════════════════════════════════════
  ...generateSillonesPlaceholders(),

  // ═══════════════════════════════════════════════════════════════
  // COLCHONES — genéricos (Taurus, Elegante, Deseo) + Canon detallados
  // ═══════════════════════════════════════════════════════════════
  ...generateColchonesProducts(),

  // ═══════════════════════════════════════════════════════════════
  // COLCHONES CANON — 6 modelos con datos reales
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "colchon-canon-exclusive",
    name: "Colchón Canon Exclusive",
    subtitle: "Canon — Espuma de alta densidad",
    category: "colchones",
    brand: "Canon",
    variant: "Espuma",
    isHero: true,
    shortDescription:
      "Colchón de espuma de poliuretano flexible de alta calidad. 30kg de densidad, soporta 100kg por plaza. Sistema Flip, tela Jacquard matelaseada con tratamiento antiacaros e ignífugo.",
    longDescription:
      "El Colchón Canon Exclusive ofrece espuma de poliuretano flexible de alta calidad con 30kg de densidad y capacidad de soporte de 100kg por plaza. Su sistema Flip permite rotarlo y utilizarlo de ambos lados para mayor vida útil. Confeccionado en Jacquard totalmente matelaseado, con tratamiento antiacaros e ignífugo. 25cm de altura para un descanso confortable y duradero. 5 años de garantía, tela antialérgica y antiacaros.",
    features: [
      "30kg de densidad",
      "Soporta 100kg por plaza",
      "Espuma de poliuretano flexible de alta calidad",
      "Sistema Flip — uso de ambos lados",
      "Tela Jacquard totalmente matelaseada",
      "Tratamiento antiacaros e ignífugo",
      "5 años de garantía",
      "Tela antialérgica y antiacaros",
    ],
    specs: [
      { title: "Tipo", description: "Espuma de poliuretano flexible" },
      { title: "Densidad", description: "30 kg" },
      { title: "Soporte", description: "100 kg por plaza" },
      { title: "Altura", description: "25 cm" },
      { title: "Tela", description: "Jacquard matelaseada" },
      { title: "Sistema", description: "Flip — rotable y reversible" },
    ],
    stats: [
      { value: "30kg", label: "Densidad" },
      { value: "100kg", label: "Soporte por plaza" },
      { value: "25cm", label: "Altura" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
    ],
    images: [
      { src: "/products/colchon-canon-exclusive/showcase.png", alt: "Colchón Canon Exclusive vista completa" },
      { src: "/products/colchon-canon-exclusive/info.png", alt: "Colchón Canon Exclusive especificaciones" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["colchon-canon-exclusive-pillow", "colchon-canon-renovation", "colchon-canon-princess"],
    seo: {
      title: "Colchón Canon Exclusive | Diseñar Muebles",
      description: "Colchón Canon Exclusive de espuma 30kg de densidad. Sistema Flip, tela Jacquard antiacaros. 5 años de garantía. Todas las medidas disponibles.",
    },
  },
  {
    slug: "colchon-canon-exclusive-pillow",
    name: "Colchón Canon Exclusive con Pillow",
    subtitle: "Canon — Espuma con Pillow Top",
    category: "colchones",
    brand: "Canon",
    variant: "Espuma",
    isHero: true,
    shortDescription:
      "Colchón de espuma de poliuretano flexible de alta calidad con Pillow Top. 30kg de densidad, soporta 100kg por plaza. Previene contracturas musculares.",
    longDescription:
      "El Colchón Canon Exclusive con Pillow combina espuma de poliuretano flexible de alta calidad con un Pillow Top que previene contracturas musculares. Con 30kg de densidad y capacidad de 100kg por plaza, ofrece un descanso superior. Sistema Flip para mayor vida útil, confeccionado en Jacquard belga totalmente matelaseado con tratamiento antiacaros e ignífugo. 29cm de altura. 5 años de garantía.",
    features: [
      "30kg de densidad",
      "Soporta 100kg por plaza",
      "Pillow Top — previene contracturas musculares",
      "Espuma de poliuretano flexible de alta calidad",
      "Sistema Flip — uso de ambos lados",
      "Tela Jacquard belga totalmente matelaseada",
      "Tratamiento antiacaros e ignífugo",
      "5 años de garantía",
    ],
    specs: [
      { title: "Tipo", description: "Espuma de poliuretano flexible con Pillow Top" },
      { title: "Densidad", description: "30 kg" },
      { title: "Soporte", description: "100 kg por plaza" },
      { title: "Altura", description: "29 cm" },
      { title: "Tela", description: "Jacquard belga matelaseada" },
      { title: "Sistema", description: "Flip — rotable y reversible" },
    ],
    stats: [
      { value: "30kg", label: "Densidad" },
      { value: "100kg", label: "Soporte por plaza" },
      { value: "29cm", label: "Altura" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
    ],
    images: [
      { src: "/products/colchon-canon-exclusive-pillow/showcase.png", alt: "Colchón Canon Exclusive con Pillow vista completa" },
      { src: "/products/colchon-canon-exclusive-pillow/info.png", alt: "Colchón Canon Exclusive con Pillow especificaciones" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["colchon-canon-exclusive", "colchon-canon-renovation", "colchon-canon-doral"],
    seo: {
      title: "Colchón Canon Exclusive con Pillow | Diseñar Muebles",
      description: "Colchón Canon Exclusive con Pillow Top. 30kg densidad, previene contracturas musculares. Jacquard belga, 5 años garantía.",
    },
  },
  {
    slug: "colchon-canon-renovation",
    name: "Colchón Canon Renovation",
    subtitle: "Canon — Alta densidad para soporte postural",
    category: "colchones",
    brand: "Canon",
    variant: "Espuma",
    isHero: true,
    shortDescription:
      "Colchón de espuma de poliuretano flexible de alta densidad. 35kg de densidad, soporta 120kg por plaza. Ideal para mantener la columna alineada y mejorar problemas posturales.",
    longDescription:
      "El Colchón Canon Renovation ofrece espuma de poliuretano flexible de alta densidad con 35kg de densidad y capacidad de soporte de 120kg por plaza. Ideal para mantener la columna alineada y mejorar problemas posturales. Sistema Flip para mayor vida útil. Tejido de punto suave al tacto con tratamiento ignífugo y proceso antiacaros. 26cm de altura. 5 años de garantía, tela antialérgica y antiacaros.",
    features: [
      "35kg de densidad",
      "Soporta 120kg por plaza",
      "Ideal para problemas posturales",
      "Mantiene la columna alineada",
      "Sistema Flip — uso de ambos lados",
      "Tejido de punto suave al tacto",
      "Tratamiento ignífugo y antiacaros",
      "5 años de garantía",
    ],
    specs: [
      { title: "Tipo", description: "Espuma de poliuretano flexible de alta densidad" },
      { title: "Densidad", description: "35 kg" },
      { title: "Soporte", description: "120 kg por plaza" },
      { title: "Altura", description: "26 cm" },
      { title: "Tela", description: "Tejido de punto suave al tacto" },
      { title: "Sistema", description: "Flip — rotable y reversible" },
    ],
    stats: [
      { value: "35kg", label: "Densidad" },
      { value: "120kg", label: "Soporte por plaza" },
      { value: "26cm", label: "Altura" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
    ],
    images: [
      { src: "/products/colchon-canon-renovation/showcase.png", alt: "Colchón Canon Renovation vista completa" },
      { src: "/products/colchon-canon-renovation/info.png", alt: "Colchón Canon Renovation especificaciones" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["colchon-canon-exclusive", "colchon-canon-exclusive-pillow", "colchon-canon-doral"],
    seo: {
      title: "Colchón Canon Renovation | Diseñar Muebles",
      description: "Colchón Canon Renovation 35kg densidad, 120kg soporte. Ideal para columna y postura. 5 años garantía. Todas las medidas.",
    },
  },
  {
    slug: "colchon-canon-princess",
    name: "Colchón Canon Princess",
    subtitle: "Canon — Confort accesible",
    category: "colchones",
    brand: "Canon",
    variant: "Espuma",
    isHero: false,
    shortDescription:
      "Colchón de espuma de poliuretano flexible de alta densidad. 24kg de densidad, soporta 80kg por plaza. Placa entera con tela Jacquard matelaseada.",
    longDescription:
      "El Colchón Canon Princess cuenta con una placa entera de espuma de poliuretano flexible de alta densidad con 24kg de densidad y soporte de 80kg por plaza. Sistema Flip que permite rotarlo y utilizarlo de ambos lados para mayor vida útil. Tela Jacquard totalmente matelaseada con tratamiento antiacaros. Altura de 20 a 23cm. 5 años de garantía, tela antialérgica y antiacaros.",
    features: [
      "24kg de densidad",
      "Soporta 80kg por plaza",
      "Placa entera de espuma de poliuretano flexible",
      "Sistema Flip — uso de ambos lados",
      "Tela Jacquard totalmente matelaseada",
      "Tratamiento antiacaros",
      "5 años de garantía",
      "Tela antialérgica y antiacaros",
    ],
    specs: [
      { title: "Tipo", description: "Espuma de poliuretano flexible" },
      { title: "Densidad", description: "24 kg" },
      { title: "Soporte", description: "80 kg por plaza" },
      { title: "Altura", description: "20–23 cm" },
      { title: "Tela", description: "Jacquard matelaseada" },
      { title: "Sistema", description: "Flip — rotable y reversible" },
    ],
    stats: [
      { value: "24kg", label: "Densidad" },
      { value: "80kg", label: "Soporte por plaza" },
      { value: "23cm", label: "Altura" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
    ],
    images: [
      { src: "/products/colchon-canon-princess/showcase.png", alt: "Colchón Canon Princess vista completa" },
      { src: "/products/colchon-canon-princess/info.png", alt: "Colchón Canon Princess especificaciones" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["colchon-canon-tropical", "colchon-canon-exclusive", "colchon-canon-renovation"],
    seo: {
      title: "Colchón Canon Princess | Diseñar Muebles",
      description: "Colchón Canon Princess 24kg densidad, 80kg soporte. Tela Jacquard matelaseada, 5 años garantía. Todas las medidas.",
    },
  },
  {
    slug: "colchon-canon-tropical",
    name: "Colchón Canon Tropical",
    subtitle: "Canon — Soporte equilibrado",
    category: "colchones",
    brand: "Canon",
    variant: "Espuma",
    isHero: false,
    shortDescription:
      "Colchón de espuma de poliuretano flexible con soporte equilibrado. 22kg de densidad, soporta 70kg por plaza. Tela de algodón matelaseada.",
    longDescription:
      "El Colchón Canon Tropical cuenta con una estructura de espuma de poliuretano flexible que brinda un soporte equilibrado y se adapta al cuerpo. Con 22kg de densidad y soporte de 70kg por plaza. Su superficie está revestida con tela de algodón totalmente matelaseada. Altura de 18cm. 5 años de garantía, tela antialérgica y antiacaros.",
    features: [
      "22kg de densidad",
      "Soporta 70kg por plaza",
      "Soporte equilibrado — se adapta al cuerpo",
      "Tela de algodón totalmente matelaseada",
      "Tela antialérgica y antiacaros",
      "5 años de garantía",
    ],
    specs: [
      { title: "Tipo", description: "Espuma de poliuretano flexible" },
      { title: "Densidad", description: "22 kg" },
      { title: "Soporte", description: "70 kg por plaza" },
      { title: "Altura", description: "18 cm" },
      { title: "Tela", description: "Algodón matelaseada" },
    ],
    stats: [
      { value: "22kg", label: "Densidad" },
      { value: "70kg", label: "Soporte por plaza" },
      { value: "18cm", label: "Altura" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
    ],
    images: [
      { src: "/products/colchon-canon-tropical/showcase.png", alt: "Colchón Canon Tropical vista completa" },
      { src: "/products/colchon-canon-tropical/info.png", alt: "Colchón Canon Tropical especificaciones" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["colchon-canon-princess", "colchon-canon-exclusive", "colchon-canon-renovation"],
    seo: {
      title: "Colchón Canon Tropical | Diseñar Muebles",
      description: "Colchón Canon Tropical 22kg densidad, soporte equilibrado. Tela de algodón matelaseada, 5 años garantía. Todas las medidas.",
    },
  },
  {
    slug: "colchon-canon-doral",
    name: "Colchón Canon Doral con Pillow Top",
    subtitle: "Canon — Resortes Bonnell con Pillow Top",
    category: "colchones",
    brand: "Canon",
    variant: "Resorte",
    isHero: true,
    shortDescription:
      "Colchón de resortes Bonnell con Pillow Top incorporado. Soporta 100kg por plaza. Sistema Flip, tapizado en tejido de punto matelaseado de gran calidad.",
    longDescription:
      "El Colchón Canon Doral con Pillow Top cuenta con un sistema de resortes Bonnell que brinda soporte firme y estable para el descanso diario. Soporta hasta 100kg por plaza, ofreciendo buena resistencia y durabilidad. El Pillow Top incorporado aporta una capa extra de confort mullido para un descanso más placentero. Sistema Flip que permite rotarlo y utilizarlo de ambos lados, prolongando su vida útil. Tapizado en tela de tejido de punto totalmente matelaseado, suave al tacto y de gran calidad. 33cm de altura. 5 años de garantía, tela antialérgica y antiacaros.",
    features: [
      "Sistema de resortes Bonnell",
      "Pillow Top incorporado — confort mullido extra",
      "Soporta 100kg por plaza",
      "Sistema Flip — uso de ambos lados",
      "Tapizado en tejido de punto matelaseado",
      "Suave al tacto y de gran calidad",
      "5 años de garantía",
      "Tela antialérgica y antiacaros",
    ],
    specs: [
      { title: "Tipo", description: "Resortes Bonnell con Pillow Top" },
      { title: "Soporte", description: "100 kg por plaza" },
      { title: "Altura", description: "33 cm" },
      { title: "Tela", description: "Tejido de punto matelaseado" },
      { title: "Sistema", description: "Flip — rotable y reversible" },
    ],
    stats: [
      { value: "Resorte", label: "Tipo" },
      { value: "100kg", label: "Soporte por plaza" },
      { value: "33cm", label: "Altura" },
    ],
    delivery: [
      { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
    ],
    images: [
      { src: "/products/colchon-canon-doral/info.png", alt: "Colchón Canon Doral con Pillow Top especificaciones" },
    ],
    sizes: ["1 Plaza (080x190)", "1½ Plaza (100x190)", "2 Plazas (140x190)", "Queen (160x200)", "King (180x200)"],
    relatedSlugs: ["colchon-canon-exclusive-pillow", "colchon-canon-renovation", "colchon-canon-exclusive"],
    seo: {
      title: "Colchón Canon Doral con Pillow Top | Diseñar Muebles",
      description: "Colchón Canon Doral de resortes Bonnell con Pillow Top. 100kg soporte, 33cm altura. 5 años garantía. Todas las medidas.",
    },
  },
];

// ─── Helper: Generate sillones placeholder products ───────────────
function generateSillonesPlaceholders(): Product[] {
  const models = [
    { slug: "sofa-cama-1", name: "Sofá Cama Modelo 1", subtype: "sofa-cama", desc: "Sofá cama con apertura fácil. Doble función: living de día, cama de noche." },
    { slug: "sofa-cama-2", name: "Sofá Cama Modelo 2", subtype: "sofa-cama", desc: "Sofá cama de diseño moderno con mecanismo reforzado." },
    { slug: "sofa-cama-3", name: "Sofá Cama Modelo 3", subtype: "sofa-cama", desc: "Sofá cama de gran tamaño con almacenamiento integrado." },
    { slug: "sillon-comun-1", name: "Sillón Modelo 1", subtype: "comun", desc: "Sillón de 2 cuerpos con tapizado premium." },
    { slug: "sillon-comun-2", name: "Sillón Modelo 2", subtype: "comun", desc: "Sillón de 3 cuerpos con diseño moderno." },
    { slug: "sillon-comun-3", name: "Sillón Modelo 3", subtype: "comun", desc: "Sillón compacto ideal para espacios reducidos." },
  ];

  return models.map((m, i) => ({
    slug: m.slug,
    name: m.name,
    subtitle: m.subtype === "sofa-cama" ? "Versatilidad para tu living" : "Confort para tu hogar",
    category: "sillones",
    subtype: m.subtype,
    isHero: false,
    shortDescription: m.desc,
    longDescription: `${m.name}: ${m.desc} Tapizado en tela premium de alta resistencia con estructura reforzada. Disponible en múltiples colores.`,
    features: [
      m.subtype === "sofa-cama" ? "Mecanismo de apertura fácil" : "Diseño confortable",
      "Tapizado en tela premium",
      "Estructura reforzada",
      "Múltiples colores disponibles",
      m.subtype === "sofa-cama" ? "Doble función: sillón y cama" : "Espuma de alta densidad",
    ],
    specs: [
      { title: "Tapizado", description: "Tela premium de alta resistencia" },
      { title: "Estructura", description: "Reforzada para uso diario" },
    ],
    stats: [
      { value: "12", label: "Meses de garantía" },
    ],
    delivery: [
      { title: "Entrega a Domicilio", description: "Lo llevamos hasta tu hogar" },
      { title: "Listo para Usar", description: "Llega listo, sin complicaciones" },
    ],
    images: [],
    relatedSlugs: models.filter((_, j) => j !== i).slice(0, 3).map((r) => r.slug),
    seo: {
      title: `${m.name} | Diseñar Muebles`,
      description: `${m.name}. ${m.desc} Fabricación propia.`,
    },
  }));
}

// ─── Helper: Generate colchones products ──────────────────────────
function generateColchonesProducts(): Product[] {
  const brands = [
    { key: "taurus", name: "Taurus" },
    { key: "elegante", name: "Elegante" },
    { key: "deseo", name: "Deseo" },
  ];
  const types = [
    { key: "espuma", name: "Espuma" },
    { key: "resorte", name: "Resorte" },
  ];
  const sizes = [
    "1 Plaza (080x190)",
    "1½ Plaza (100x190)",
    "2 Plazas (140x190)",
    "Queen (160x200)",
    "King (180x200)",
  ];

  const all: Product[] = [];

  for (const brand of brands) {
    for (const type of types) {
      const slug = `colchon-${brand.key}-${type.key}`;
      all.push({
        slug,
        name: `Colchón ${brand.name} ${type.name}`,
        subtitle: `${brand.name} — Línea ${type.name}`,
        category: "colchones",
        brand: brand.name,
        variant: type.name,
        isHero: false,
        shortDescription: `Colchón de ${type.key === "espuma" ? "espuma de alta densidad" : "resortes"} marca ${brand.name}. Confort y durabilidad garantizados.`,
        longDescription: `El Colchón ${brand.name} ${type.name} ofrece ${type.key === "espuma" ? "espuma de alta densidad que se adapta al cuerpo para un descanso óptimo" : "un sistema de resortes que brinda soporte firme y ventilación superior"}. Marca ${brand.name}, reconocida por su calidad y durabilidad. Disponible en todas las medidas estándar.`,
        features: [
          type.key === "espuma" ? "Espuma de alta densidad" : "Sistema de resortes",
          `Marca ${brand.name}`,
          "Disponible en todas las medidas",
          "Tela de alta calidad",
          type.key === "espuma" ? "Adaptación al cuerpo" : "Ventilación superior",
        ],
        specs: [
          { title: type.name, description: type.key === "espuma" ? "Espuma de alta densidad certificada" : "Sistema de resortes de acero" },
          { title: "Tela", description: "Jacquard de alta calidad" },
        ],
        stats: [
          { value: brand.name, label: "Marca" },
          { value: type.name, label: "Tipo" },
        ],
        delivery: [
          { title: "Envío a Domicilio", description: "Entrega en packaging original de fábrica" },
        ],
        images: [],
        sizes,
        relatedSlugs: brands
          .filter((b) => b.key !== brand.key)
          .slice(0, 2)
          .map((b) => `colchon-${b.key}-${type.key}`),
        seo: {
          title: `Colchón ${brand.name} ${type.name} | Diseñar Muebles`,
          description: `Colchón ${brand.name} de ${type.key}. Todas las medidas disponibles, envío a domicilio.`,
        },
      });
    }
  }

  return all;
}
