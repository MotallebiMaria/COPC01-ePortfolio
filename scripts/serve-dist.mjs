import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const prefix = "/COPC01-ePortfolio";
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
};

createServer(async (request, response) => {
  const rawPath = new URL(request.url ?? "/", "http://127.0.0.1").pathname;
  const relative = rawPath.startsWith(prefix) ? rawPath.slice(prefix.length) || "/" : rawPath;
  const requested = relative.endsWith("/") ? `${relative}index.html` : relative;
  const safePath = normalize(requested).replace(/^(\.\.(\/|\\|$))+/, "");
  try {
    const content = await readFile(join(root, safePath));
    response.writeHead(200, { "Content-Type": types[extname(safePath)] ?? "application/octet-stream" });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(4321, "127.0.0.1", () => {
  console.log(`Portfolio preview: http://127.0.0.1:4321${prefix}/`);
});
