import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["triangle-pos"].images;

export default {
  title: "Triangle POS",
  theme: "dark",
  tags: ["php", "mysql", "javascript"],
  source: projectSources["triangle-pos"],
  description:
    "Production-ready Laravel point of sale system with products, stock, purchases, sales, returns, expenses, and multi-currency support.<br/><br/>Includes barcode printing, quotation emails, customer & supplier management, role permissions, reports, and Docker deployment support.",
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
