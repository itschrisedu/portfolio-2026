import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["erp-servidor-local"].images;

export default {
  title: "ERP Servidor Local",
  theme: "dark",
  tags: ["python", "react", "javascript"],
  source: projectSources["erp-servidor-local"],
  description:
    "ERP autohospedado para inventario, compras y gestión de almacén — diseñado para ejecutarse en un servidor local sin infraestructura externa.<br/><br/>Backend FastAPI con frontend React, base SQLite, autenticación JWT, valoración FIFO, órdenes de compra, guías de remisión y soporte fiscal peruano (IGV, PEN/USD).",
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
