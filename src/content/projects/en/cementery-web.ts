import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["cementery-web"].images;

export default {
  title: "Cemetery Web",
  theme: "light",
  tags: ["next", "react", "node"],
  source: projectSources["cementery-web"],
  description:
    "Web platform for cemetery management in Pillaro, with JWT authentication, role-based access, and cemetery context selection.<br/><br/>Built with Next.js and a NestJS backend, featuring user session persistence, protected routes, and a modular admin interface for cemetery operations.",
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
