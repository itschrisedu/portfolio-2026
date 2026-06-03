import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia.gitt.images;

export default {
  title: "GITT System",
  theme: "light",
  tags: ["next", "react", "javascript"],
  source: projectSources.gitt,
  description:
    "Inventory management system for the Technological Workshops of FISEI (UTA), enabling equipment registration and tracking using barcodes.<br/><br/>Built with Next.js, it connects to a REST API for asset management across university workshop facilities.",
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
