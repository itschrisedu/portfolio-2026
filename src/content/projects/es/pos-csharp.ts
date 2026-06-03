import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["pos-csharp"].images;

export default {
  title: "Point of Sale (POS)",
  theme: "dark",
  tags: ["csharp", "mysql"],
  source: projectSources["pos-csharp"],
  description:
    "Sistema POS y gestión de supermercado en Windows Forms, desarrollado en C# con arquitectura N-capas de 5 niveles y MS SQL Server.<br/><br/>Soporta roles Admin, Cajero y Vendedor con gestión de productos, control de stock, facturación, historial de ventas, seguimiento de gastos y respaldo de base de datos.",
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
