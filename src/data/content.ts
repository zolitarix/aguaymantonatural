/**
 * CONTENIDO EDITABLE DEL SITIO
 * Textos institucionales iniciales, productos, servicios, noticias,
 * valores, galería y preguntas frecuentes.
 */

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import empaque from "@/assets/producto-empaque.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import noticia1 from "@/assets/noticia-1.jpg";
import noticia2 from "@/assets/noticia-2.jpg";

export const imagenes = {
  hero1,
  hero2,
  hero3,
  empaque,
  galeria1,
  galeria2,
  noticia1,
  noticia2,
};

export const slides = [
  {
    imagen: hero1,
    alt: "Aguaymanto fresco seleccionado en cajas de madera bajo luz natural",
    titulo: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    texto:
      "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    acciones: [
      { label: "Conocer nuestros productos", to: "/productos" },
      { label: "Solicitar cotización", to: "/contacto" },
    ],
  },
  {
    imagen: hero2,
    alt: "Plantación de aguaymanto en un valle andino del Perú al amanecer",
    titulo: "Del campo peruano a nuevos mercados",
    texto:
      "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    acciones: [{ label: "Conoce nuestra empresa", to: "/quienes-somos" }],
  },
  {
    imagen: hero3,
    alt: "Manos de una productora peruana cosechando aguaymanto en una canasta",
    titulo: "Natural, versátil y de excelente calidad",
    texto:
      "Un fruto andino apreciado por su sabor, su versatilidad y su presentación.",
    acciones: [{ label: "Ver productos", to: "/productos" }],
  },
];

export const historia = [
  {
    numero: "01",
    titulo: "Nuestros inicios",
    texto: "Inicio de las actividades de la empresa.",
  },
  {
    numero: "02",
    titulo: "Crecimiento",
    texto: "Desarrollo de nuestras operaciones y ampliación de clientes.",
  },
  {
    numero: "03",
    titulo: "Consolidación",
    texto: "Fortalecimiento de nuestros procesos y productos.",
  },
  {
    numero: "04",
    titulo: "Proyección",
    texto: "Expansión hacia nuevos mercados y oportunidades comerciales.",
  },
];

export const misionVision = {
  mision:
    "Producir y comercializar aguaymanto de calidad, trabajando con responsabilidad, eficiencia y compromiso para satisfacer las necesidades de nuestros clientes y generar valor de manera sostenible.",
  vision:
    "Ser una empresa reconocida por la calidad de nuestros productos, la confiabilidad de nuestro servicio y nuestra capacidad para generar oportunidades en nuevos mercados.",
};

export const valores = [
  {
    titulo: "Calidad",
    texto: "Trabajamos para ofrecer productos que cumplan altos estándares.",
    icono: "Award",
  },
  {
    titulo: "Compromiso",
    texto: "Cumplimos nuestros compromisos con clientes y colaboradores.",
    icono: "Handshake",
  },
  {
    titulo: "Responsabilidad",
    texto: "Actuamos responsablemente en nuestras operaciones.",
    icono: "ShieldCheck",
  },
  {
    titulo: "Integridad",
    texto: "Construimos relaciones basadas en confianza y transparencia.",
    icono: "Scale",
  },
  {
    titulo: "Innovación",
    texto: "Buscamos mejorar continuamente nuestros procesos.",
    icono: "Lightbulb",
  },
  {
    titulo: "Sostenibilidad",
    texto: "Promovemos prácticas responsables con nuestro entorno.",
    icono: "Leaf",
  },
] as const;

export const compromiso = [
  {
    titulo: "Calidad",
    texto:
      "Cuidamos la selección, la presentación y el manejo del producto en cada etapa de nuestro trabajo.",
    icono: "BadgeCheck",
  },
  {
    titulo: "Personas",
    texto:
      "Valoramos a quienes trabajan con nosotros y a los clientes que confían en nuestro servicio.",
    icono: "Users",
  },
  {
    titulo: "Medio ambiente",
    texto:
      "Promovemos prácticas agrícolas y comerciales responsables con el entorno.",
    icono: "Sprout",
  },
] as const;

export const productos = [
  {
    slug: "aguaymanto-fresco",
    nombre: "Aguaymanto fresco",
    descripcion:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    imagen: hero1,
    alt: "Aguaymanto fresco con cáliz en caja de madera",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: [
      "Selección por tamaño y color",
      "Manejo cuidadoso del fruto",
      "Empaque adecuado para su traslado",
    ],
    cta: "Solicitar información",
  },
  {
    slug: "aguaymanto-distribucion",
    nombre: "Aguaymanto para distribución",
    descripcion:
      "Presentaciones orientadas a clientes comerciales y distribuidores.",
    imagen: empaque,
    alt: "Aguaymanto empacado en envases y cajas para distribución comercial",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: [
      "Volúmenes según requerimiento",
      "Coordinación de entregas",
      "Atención comercial directa",
    ],
    cta: "Consultar",
  },
  {
    slug: "presentaciones-especiales",
    nombre: "Presentaciones especiales",
    descripcion:
      "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    imagen: galeria1,
    alt: "Selección y clasificación de aguaymanto en planta de proceso",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: [
      "Evaluación de requerimientos",
      "Alternativas de empaque",
      "Sujeto a disponibilidad",
    ],
    cta: "Consultar presentación",
  },
];

export const atributosCalidad = [
  { titulo: "Selección cuidadosa", texto: "Revisamos el fruto antes de su despacho." },
  { titulo: "Frescura", texto: "Cuidamos los tiempos de manejo del producto." },
  { titulo: "Presentación", texto: "Buscamos una presentación uniforme y atractiva." },
  { titulo: "Control de calidad", texto: "Verificamos el producto durante el proceso." },
  { titulo: "Empaque adecuado", texto: "Utilizamos empaques apropiados para el traslado." },
  { titulo: "Atención al cliente", texto: "Acompañamos al cliente en cada pedido." },
];

export const servicios = [
  {
    titulo: "Venta de aguaymanto",
    texto: "Venta de producto para clientes particulares y comerciales.",
    icono: "ShoppingBasket",
  },
  {
    titulo: "Venta al por mayor",
    texto: "Atención de pedidos de mayor volumen.",
    icono: "Boxes",
  },
  {
    titulo: "Atención a restaurantes",
    texto:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icono: "ChefHat",
  },
  {
    titulo: "Atención a tiendas y distribuidores",
    texto:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icono: "Store",
  },
  {
    titulo: "Pedidos personalizados",
    texto:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icono: "ClipboardList",
  },
  {
    titulo: "Asesoría comercial",
    texto:
      "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icono: "MessagesSquare",
  },
] as const;

export const razones = [
  {
    titulo: "Producto seleccionado",
    texto: "Trabajamos para ofrecer una presentación adecuada y consistente.",
  },
  { titulo: "Calidad", texto: "Priorizamos la calidad en cada etapa." },
  {
    titulo: "Atención personalizada",
    texto: "Escuchamos las necesidades de cada cliente.",
  },
  { titulo: "Compromiso", texto: "Buscamos relaciones comerciales duraderas." },
  {
    titulo: "Origen peruano",
    texto: "Nuestro producto tiene origen en el campo peruano.",
  },
];

export type Noticia = {
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string;
  fechaTexto: string;
  autor: string;
  resumen: string;
  imagen: string;
  alt: string;
  contenido: string[];
};

/** Contenido de ejemplo: editable o eliminable. */
export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    titulo: "El aguaymanto peruano y su presencia en nuevos mercados",
    categoria: "Mercado",
    fecha: "2026-03-12",
    fechaTexto: "12 de marzo de 2026",
    autor: "[AUTOR]",
    resumen:
      "El interés comercial por el aguaymanto continúa creciendo. Repasamos por qué este fruto andino despierta atención dentro y fuera del país.",
    imagen: noticia1,
    alt: "Cajas de aguaymanto peruano exhibidas en un puesto comercial",
    contenido: [
      "El aguaymanto es uno de los frutos andinos que mayor interés comercial ha despertado en los últimos años, tanto en el mercado local como en clientes que buscan productos diferenciados.",
      "Su sabor característico, su presentación y su versatilidad en gastronomía lo convierten en una alternativa atractiva para restaurantes, tiendas especializadas y distribuidores.",
      "Como empresa, trabajamos en fortalecer nuestros procesos comerciales para responder a estas oportunidades con un producto consistente y una atención cercana.",
      "Este contenido es un texto de ejemplo y puede editarse o reemplazarse por noticias reales de la empresa.",
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    titulo: "Conoce más sobre el cultivo del aguaymanto",
    categoria: "Agricultura",
    fecha: "2026-02-20",
    fechaTexto: "20 de febrero de 2026",
    autor: "[AUTOR]",
    resumen:
      "Del sembrío a la cosecha: una mirada general al ciclo del aguaymanto y a los cuidados que requiere la planta.",
    imagen: noticia2,
    alt: "Planta joven de aguaymanto con cálices verdes y gotas de rocío",
    contenido: [
      "El aguaymanto crece en zonas de clima templado y requiere cuidados constantes durante todo su ciclo productivo.",
      "El manejo del cultivo, el momento de la cosecha y el cuidado posterior del fruto influyen directamente en la calidad final del producto.",
      "Por eso damos importancia a la selección y al manejo cuidadoso en cada etapa.",
      "Este contenido es un texto de ejemplo y puede editarse o reemplazarse por noticias reales de la empresa.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    titulo: "Nuestra apuesta por la calidad y la producción responsable",
    categoria: "Noticias de la empresa",
    fecha: "2026-01-15",
    fechaTexto: "15 de enero de 2026",
    autor: "[AUTOR]",
    resumen:
      "Reforzamos nuestros procesos internos con foco en la calidad del producto y en prácticas responsables.",
    imagen: galeria1,
    alt: "Equipo seleccionando aguaymanto en una planta de proceso",
    contenido: [
      "La calidad es el eje de nuestro trabajo diario. Por ello revisamos de manera continua nuestros procesos de selección, empaque y atención al cliente.",
      "Además, promovemos prácticas responsables con el entorno y con las personas que forman parte de nuestra operación.",
      "Este contenido es un texto de ejemplo y puede editarse o reemplazarse por noticias reales de la empresa.",
    ],
  },
];

export const galeria = [
  { imagen: hero2, alt: "Campos de aguaymanto en un valle andino peruano" },
  { imagen: galeria2, alt: "Plantación de aguaymanto con tutores de madera" },
  { imagen: hero3, alt: "Cosecha manual de aguaymanto en el campo" },
  { imagen: galeria1, alt: "Selección de aguaymanto en planta de proceso" },
  { imagen: empaque, alt: "Aguaymanto empacado listo para su distribución" },
  { imagen: hero1, alt: "Aguaymanto fresco en caja de madera" },
];

export const faqs = [
  {
    pregunta: "¿Qué productos ofrecen?",
    respuesta:
      "Ofrecemos aguaymanto fresco seleccionado, presentaciones orientadas a distribución y opciones especiales según el requerimiento del cliente y la disponibilidad.",
  },
  {
    pregunta: "¿Realizan ventas al por mayor?",
    respuesta:
      "Sí, atendemos pedidos de mayor volumen. Puedes escribirnos indicando la cantidad aproximada que necesitas y coordinamos una cotización.",
  },
  {
    pregunta: "¿Atienden restaurantes y empresas?",
    respuesta:
      "Atendemos consultas comerciales de restaurantes, hoteles, cafeterías, tiendas, distribuidores y otras empresas.",
  },
  {
    pregunta: "¿Qué presentaciones tienen disponibles?",
    respuesta:
      "Las presentaciones dependen del tipo de pedido y la disponibilidad del momento. Escríbenos y te indicamos las opciones vigentes.",
  },
  {
    pregunta: "¿Realizan entregas?",
    respuesta:
      "Las entregas se coordinan según la ubicación, el volumen del pedido y la disponibilidad. Consúltanos tu caso.",
  },
  {
    pregunta: "¿Cómo puedo solicitar una cotización?",
    respuesta:
      "Puedes completar el formulario de contacto o escribirnos por WhatsApp indicando producto, cantidad aproximada y ciudad.",
  },
  {
    pregunta: "¿Cómo puedo comunicarme con ustedes?",
    respuesta:
      "Por WhatsApp, teléfono, correo electrónico o mediante el formulario de la página de contacto.",
  },
];
