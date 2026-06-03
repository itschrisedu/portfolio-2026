import { projectMedia } from "../media";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Inventory Management",
    slug: "inventory-management",
    thumbnail: projectMedia["inventory-management"].thumbnail,
    description: "App de inventario con ventas y control de stock",
  },
  {
    title: "MoviPass Frontend",
    slug: "movipass-frontend",
    thumbnail: projectMedia["movipass-frontend"].thumbnail,
    description: "Frontend de sistema de pasajes y pases de tránsito",
  },
  {
    title: "Inventory App React",
    slug: "inventory-app-react",
    thumbnail: projectMedia["inventory-app-react"].thumbnail,
    description: "Gestión de inventario con React y Vite",
  },
  {
    title: "ERP Servidor Local",
    slug: "erp-servidor-local",
    thumbnail: projectMedia["erp-servidor-local"].thumbnail,
    description: "ERP autohospedado para almacén y compras",
  },
  {
    title: "Espectrosoft ERP",
    slug: "erp",
    thumbnail: projectMedia.erp.thumbnail,
    description: "ERP full-stack con React y API Express",
  },
  {
    title: "Point of Sale (POS)",
    slug: "pos-csharp",
    thumbnail: projectMedia["pos-csharp"].thumbnail,
    description: "POS en C# con roles, stock y facturación",
  },
  {
    title: "Cemetery Web",
    slug: "cementery-web",
    thumbnail: projectMedia["cementery-web"].thumbnail,
    description: "Plataforma de gestión de cementerio en Pillaro",
  },
  {
    title: "Triangle POS",
    slug: "triangle-pos",
    thumbnail: projectMedia["triangle-pos"].thumbnail,
    description: "POS Laravel para ventas, stock e informes",
  },
  {
    title: "GITT System",
    slug: "gitt",
    thumbnail: projectMedia.gitt.thumbnail,
    description: "Inventario de equipos con códigos de barras",
  },
  {
    title: "BioAccess",
    slug: "bioacces",
    thumbnail: projectMedia.bioacces.thumbnail,
    description: "Acceso biométrico con reconocimiento facial",
  },
] as const satisfies ProjectPreview[];
