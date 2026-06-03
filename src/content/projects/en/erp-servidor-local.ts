import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["erp-servidor-local"].images;

export default {
  title: "ERP Local Server",
  theme: "dark",
  tags: ["python", "react", "javascript"],
  source: projectSources["erp-servidor-local"],
  description:
    "Self-hosted ERP for inventory, procurement, and warehouse management — designed to run entirely on a local server with zero external infrastructure.<br/><br/>FastAPI backend with React frontend, SQLite database, JWT auth, FIFO valuation, purchase orders, delivery guides, and Peruvian tax support (IGV, PEN/USD).",
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
