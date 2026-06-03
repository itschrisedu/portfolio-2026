import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["movipass-frontend"].images;

export default {
  title: "MoviPass Frontend",
  theme: "light",
  tags: ["react", "typescript", "sass"],
  source: projectSources["movipass-frontend"],
  description:
    "Frontend of the MoviPass transit ticketing and pass system. Allows passengers to search routes, purchase tickets, and view active QR code transit passes in real time.<br/><br/>Built with React, TypeScript, and Tailwind CSS, featuring smooth UI transitions, fully responsive layouts, and mock payment gateway integrations for simplified booking checkout flows.",
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
