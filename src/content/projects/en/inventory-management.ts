import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["inventory-management"].images;

export default {
  title: "Inventory Management System",
  theme: "light",
  tags: ["java", "mysql"],
  source: projectSources["inventory-management"],
  description:
    "Desktop GUI application for small and mid-sized stores to manage products, customers, suppliers, users, and transactions.<br/><br/>Built with Java Swing and MySQL, it supports admin and employee roles, automatic stock updates on sales, purchase logs, and user activity tracking.",
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
