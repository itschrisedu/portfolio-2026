import "dotenv/config";
import express from 'express';
import cors from 'cors';
import handler from '../api/contact.js';

export function createApiApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post('/api/contact', async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.error('API server error:', err);
      res.status(500).json({ success: false, error: String(err) });
    }
  });

  app.get('/api/contact', async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.error('API server error:', err);
      res.status(500).json({ success: false, error: String(err) });
    }
  });

  return app;
}

export function startApiServer(port = Number(process.env.PORT) || 3001) {
  const app = createApiApp();
  return app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  startApiServer();
}
