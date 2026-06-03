import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["inventory-system"].images;

export default {
  title: "Expresso Inventory System",
  theme: "dark",
  tags: ["cpp", "javascript"],
  source: projectSources["inventory-system"],
  description:
    "Godot inventory plugin with item stacks, hotbar, craft system, loot, equipment slots, and multiplayer support.<br/><br/>Includes UI separation, grid inventories, item editor, and demo scenes for pickup, chests, and first-person interaction.",
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
