import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["triangle-pos"].images;

export default {
  title: "Triangle POS",
  theme: "dark",
  tags: ["php", "mysql", "javascript"],
  source: projectSources["triangle-pos"],
  description:
    "Sistema POS en Laravel listo para producción, con productos, stock, compras, ventas, devoluciones, gastos y soporte multi-moneda.<br/><br/>Incluye impresión de códigos de barras, cotizaciones por email, gestión de clientes y proveedores, permisos por roles, informes y despliegue con Docker.",
  components: images.map((image) => ({
    type: "media" as const,
    props: {
      type: "image" as const,
      src: image.src,
      alt: image.alt,
      caption: image.alt,
    },
  })),
} as const satisfies ProjectContent;
