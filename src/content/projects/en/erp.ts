import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia.erp.images;

export default {
  title: "Espectrosoft ERP",
  theme: "light",
  tags: ["react", "node", "mysql"],
  source: projectSources.erp,
  description:
    "Full-stack Enterprise Resource Planning system with a React SPA and Express REST API backed by MySQL.<br/><br/>Includes JWT authentication, protected routes, company settings, employee profiles, light/dark theme, and a modular shell ready for inventory, sales, HR, and payroll modules.",
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
