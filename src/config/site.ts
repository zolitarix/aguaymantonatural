/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * -------------------------------------------------------------
 * Edita aquí los datos de la empresa. Los valores entre corchetes
 * son placeholders y deben reemplazarse por la información real.
 */

export const site = {
  nombre: "Aguaymanto Natural",
  marca: "AGUAYMANTO NATURAL",
  tagline: "Producción y venta de aguaymanto natural fresco de calidad peruana.",
  descripcion:
    "Producción y comercialización de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  url: "https://aguaymanto-peru.lovable.app",
  contacto: {
    telefono: "+51 929162632",
    telefonoLink: "tel:+51929162632",
    whatsapp: "+51 929162632",
    // Número en formato internacional sin signos, ej: 51987654321
    whatsappNumero: "51929162632",
    whatsappMensaje:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    correo: "contacto@aguaymantonatural.com",
    direccion: "Comunidad Sauceda S/N",
    ciudad: "Limatambo - Anta - Cusco",
    horario: "Lunes a Sábado, 8:00 a.m. - 6:00 p.m.",
  },
  redes: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export const whatsappUrl = (mensaje: string = site.contacto.whatsappMensaje) =>
  `https://wa.me/${site.contacto.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
