import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  // BUT: Don't override static files like impressum.html, datenschutz.html, etc.
  app.get("*", (req, res) => {
    // Check if the requested file exists as a static file
    const filePath = path.join(staticPath, req.path);
    
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      // File exists, serve it
      res.sendFile(filePath);
    } else if (req.path.endsWith(".html") || req.path.endsWith(".json") || req.path.endsWith(".css") || req.path.endsWith(".js")) {
      // Static file requested but doesn't exist
      res.status(404).send("Not Found");
    } else {
      // SPA route - serve index.html
      res.sendFile(path.join(staticPath, "index.html"));
    }
  });



  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
