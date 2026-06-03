import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["inventory-system"].images;

export default {
  title: "Expresso Inventory System",
  theme: "dark",
  tags: ["cpp", "javascript"],
  source: projectSources["inventory-system"],
  description:
    "Plugin de inventario para Godot con pilas de ítems, hotbar, sistema de crafteo, loot, slots de equipamiento y soporte multijugador.<br/><br/>Incluye separación de UI, inventarios en grilla, editor de ítems y escenas demo para recolección, cofres e interacción en primera persona.",
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
