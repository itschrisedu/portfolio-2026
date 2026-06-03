import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia.erp.images;

export default {
  title: "Espectrosoft ERP",
  theme: "light",
  tags: ["react", "node", "mysql"],
  source: projectSources.erp,
  description:
    "Sistema ERP full-stack con SPA en React y API REST en Express respaldada por MySQL.<br/><br/>Incluye autenticación JWT, rutas protegidas, configuración de empresa, perfiles de empleados, tema claro/oscuro y una estructura modular lista para inventario, ventas, RRHH y nómina.",
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
