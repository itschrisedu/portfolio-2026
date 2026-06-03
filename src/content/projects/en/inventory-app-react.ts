import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["inventory-app-react"].images;

export default {
  title: "Inventory App React",
  theme: "light",
  tags: ["react", "javascript"],
  source: projectSources["inventory-app-react"],
  description:
    "Simple inventory management application built with React and Vite, using ESLint and Stylelint for code quality.<br/><br/>The project follows a Gitflow workflow with feature branches, reusable React components, and CSS modules for styling.",
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
