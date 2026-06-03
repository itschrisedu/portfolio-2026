import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["inventory-app-react"].images;

export default {
  title: "Inventory App React",
  theme: "light",
  tags: ["react", "javascript"],
  source: projectSources["inventory-app-react"],
  description:
    "Aplicación sencilla de gestión de inventarios hecha con React y Vite, con ESLint y Stylelint para calidad de código.<br/><br/>El proyecto sigue un flujo Gitflow con ramas de features, componentes React reutilizables y módulos CSS para el estilo.",
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
