import { projectMedia } from "../media";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Inventory Management",
    slug: "inventory-management",
    thumbnail: projectMedia["inventory-management"].thumbnail,
    description: "Desktop inventory app with sales & stock control",
  },
  {
    title: "MoviPass Frontend",
    slug: "movipass-frontend",
    thumbnail: projectMedia["movipass-frontend"].thumbnail,
    description: "Frontend application for transit passes and tickets",
  },
  {
    title: "Inventory App React",
    slug: "inventory-app-react",
    thumbnail: projectMedia["inventory-app-react"].thumbnail,
    description: "React inventory management on Vite",
  },
  {
    title: "ERP Local Server",
    slug: "erp-servidor-local",
    thumbnail: projectMedia["erp-servidor-local"].thumbnail,
    description: "Self-hosted ERP for warehouse & procurement",
  },
  {
    title: "Espectrosoft ERP",
    slug: "erp",
    thumbnail: projectMedia.erp.thumbnail,
    description: "Full-stack ERP with React and Express API",
  },
  {
    title: "Point of Sale (POS)",
    slug: "pos-csharp",
    thumbnail: projectMedia["pos-csharp"].thumbnail,
    description: "C# POS with roles, stock & billing",
  },
  {
    title: "Cemetery Web",
    slug: "cementery-web",
    thumbnail: projectMedia["cementery-web"].thumbnail,
    description: "Cemetery management platform for Pillaro",
  },
  {
    title: "Triangle POS",
    slug: "triangle-pos",
    thumbnail: projectMedia["triangle-pos"].thumbnail,
    description: "Laravel POS for sales, stock & reports",
  },
  {
    title: "GITT System",
    slug: "gitt",
    thumbnail: projectMedia.gitt.thumbnail,
    description: "Equipment inventory with barcode tracking",
  },
  {
    title: "BioAccess",
    slug: "bioacces",
    thumbnail: projectMedia.bioacces.thumbnail,
    description: "Biometric access with face recognition",
  },
] as const satisfies ProjectPreview[];
