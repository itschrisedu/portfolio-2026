import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia.gitt.images;

export default {
  title: "GITT System",
  theme: "light",
  tags: ["next", "react", "javascript"],
  source: projectSources.gitt,
  description:
    "Sistema de gestión de inventario para los Talleres Tecnológicos de FISEI (UTA), que permite registrar y rastrear equipos mediante códigos de barras.<br/><br/>Desarrollado con Next.js, se conecta a una API REST para la administración de activos en los talleres universitarios.",
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
