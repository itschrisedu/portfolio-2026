import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["inventory-management"].images;

export default {
  title: "Inventory Management System",
  theme: "light",
  tags: ["java", "mysql"],
  source: projectSources["inventory-management"],
  description:
    "Aplicación de escritorio para tiendas pequeñas y medianas que gestiona productos, clientes, proveedores, usuarios y transacciones.<br/><br/>Desarrollada con Java Swing y MySQL, incluye roles de administrador y empleado, actualización automática de stock en ventas, registros de compras y seguimiento de actividad de usuarios.",
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
