import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createApiApp } from "./api-server.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = createApiApp();
const PORT = process.env.PORT || 3000;

// Serve static assets from Vite's build directory (dist)
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// Fallback to index.html for SPA client-side routing
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Production server running at http://localhost:${PORT}`);
});
