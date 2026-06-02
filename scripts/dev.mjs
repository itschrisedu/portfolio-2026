import "dotenv/config";
import { createServer as createViteServer } from "vite";
import { startApiServer } from "../server/api-server.mjs";

async function main() {
  const apiServer = startApiServer(3001);

  const viteServer = await createViteServer({
    server: {
      host: true,
      port: 3000,
      strictPort: false,
    },
  });

  await viteServer.listen();

  viteServer.printUrls();

  const shutdown = async () => {
    await viteServer.close();
    await new Promise((resolve) => apiServer.close(resolve));
    process.exit(0);
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
