import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["pos-csharp"].images;

export default {
  title: "Point of Sale (POS)",
  theme: "dark",
  tags: ["csharp", "mysql"],
  source: projectSources["pos-csharp"],
  description:
    "Windows Forms POS and super shop management system built in C# with 5-layer N-tier architecture and MS SQL Server.<br/><br/>Supports Admin, Cashier, and Salesman roles with product management, stock control, billing, sales history, expenses tracking, and database backup/restore.",
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
