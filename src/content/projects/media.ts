const gh = (repo: string, path: string, branch = "main") =>
  `https://raw.githubusercontent.com/itschrisedu/${repo}/${branch}/${path}`;

export const projectMedia = {
  "inventory-management": {
    thumbnail: gh("InventoryManagementSystem", "screenshots/welcome.png"),
    images: [
      { src: gh("InventoryManagementSystem", "screenshots/welcome.png"), alt: "Dashboard" },
      { src: gh("InventoryManagementSystem", "screenshots/products.png"), alt: "Products" },
      { src: gh("InventoryManagementSystem", "screenshots/sales.png"), alt: "Sales" },
      { src: gh("InventoryManagementSystem", "screenshots/stock.png"), alt: "Stock" },
    ],
  },
  "inventory-system": {
    thumbnail: "https://raw.githubusercontent.com/wiki/ExpressoBits/inventory-system/demo.gif",
    images: [
      {
        src: "https://raw.githubusercontent.com/wiki/ExpressoBits/inventory-system/demo.gif",
        alt: "Inventory demo",
      },
    ],
  },
  "inventory-app-react": {
    thumbnail: "https://opengraph.githubassets.com/1/itschrisedu/inventory-app-react",
    images: [
      {
        src: "https://opengraph.githubassets.com/1/itschrisedu/inventory-app-react",
        alt: "Inventory App React",
      },
    ],
  },
  "erp-servidor-local": {
    thumbnail: "https://opengraph.githubassets.com/1/itschrisedu/ERP-Servidor-Local",
    images: [
      {
        src: "https://opengraph.githubassets.com/1/itschrisedu/ERP-Servidor-Local",
        alt: "ERP Local Server",
      },
    ],
  },
  erp: {
    thumbnail: gh("ERP", "public/assets/bg-login.png"),
    images: [
      { src: gh("ERP", "public/assets/bg-login.png"), alt: "Login" },
      { src: gh("ERP", "public/assets/logo-empresa.png"), alt: "Branding" },
      { src: gh("ERP", "public/assets/logo-icon-white.png"), alt: "Dashboard shell" },
    ],
  },
  "pos-csharp": {
    thumbnail: gh(".NET-Point-of-Sale-POS--Csharp", "markdownAssets/Screens/Snapshot_1.png"),
    images: [
      { src: gh(".NET-Point-of-Sale-POS--Csharp", "markdownAssets/Screens/Login2.png"), alt: "Login" },
      { src: gh(".NET-Point-of-Sale-POS--Csharp", "markdownAssets/Screens/Snapshot_1.png"), alt: "Dashboard" },
      { src: gh(".NET-Point-of-Sale-POS--Csharp", "markdownAssets/Screens/Snapshot_6.png"), alt: "Make payment" },
      { src: gh(".NET-Point-of-Sale-POS--Csharp", "markdownAssets/Screens/Snapshot_14.png"), alt: "Products" },
    ],
  },
  "cementery-web": {
    thumbnail: gh("cementery_web", "public/municipio-pillaro.jpg"),
    images: [{ src: gh("cementery_web", "public/municipio-pillaro.jpg"), alt: "Cemetery management" }],
  },
  "triangle-pos": {
    thumbnail: gh("triangle-pos", "public/images/screenshot.jpg"),
    images: [{ src: gh("triangle-pos", "public/images/screenshot.jpg"), alt: "Triangle POS" }],
  },
  gitt: {
    thumbnail: gh("GITT", "public/UTA/UTA.png"),
    images: [{ src: gh("GITT", "public/UTA/UTA.png"), alt: "GITT System" }],
  },
  bioacces: {
    thumbnail: gh("Bioacces", "docs/images/user-mode.png", "develop"),
    images: [
      { src: gh("Bioacces", "docs/images/user-mode.png", "develop"), alt: "User mode" },
      { src: gh("Bioacces", "docs/images/admin-panel.png", "develop"), alt: "Admin panel" },
    ],
  },
} as const;

export const projectSources = {
  "inventory-management": "https://github.com/itschrisedu/InventoryManagementSystem",
  "inventory-system": "https://github.com/itschrisedu/inventory-system",
  "inventory-app-react": "https://github.com/itschrisedu/inventory-app-react",
  "erp-servidor-local": "https://github.com/itschrisedu/ERP-Servidor-Local",
  erp: "https://github.com/itschrisedu/ERP",
  "pos-csharp": "https://github.com/itschrisedu/.NET-Point-of-Sale-POS--Csharp",
  "cementery-web": "https://github.com/itschrisedu/cementery_web",
  "triangle-pos": "https://github.com/itschrisedu/triangle-pos",
  gitt: "https://github.com/itschrisedu/GITT",
  bioacces: "https://github.com/itschrisedu/Bioacces",
} as const;
