import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["cementery-web"].images;

export default {
  title: "Cemetery Web",
  theme: "light",
  tags: ["next", "react", "node"],
  source: projectSources["cementery-web"],
  description:
    "Plataforma web para gestión de cementerio en Pillaro, con autenticación JWT, acceso por roles y selección de contexto de cementerio.<br/><br/>Construida con Next.js y backend NestJS, incluye persistencia de sesión, rutas protegidas e interfaz administrativa modular para operaciones del cementerio.",
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
