import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia.bioacces.images;

export default {
  title: "BioAccess",
  theme: "dark",
  tags: ["python", "javascript"],
  source: projectSources.bioacces,
  description:
    "Aplicación web biométrica con Django para registrar usuarios, capturar datasets faciales, reentrenar modelos y verificar identidad mediante webcam.<br/><br/>Usa detección Haar Cascade, pipeline PCA + SVM, modos separados de admin y usuario, y almacenamiento local para datasets y modelos entrenados.",
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
