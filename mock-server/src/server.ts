import express from "express";
import path from "path";

const app = express();
const port = 3001;

// Serve static files from /public
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

// Sample JSON API endpoint
app.get("/api/products", (_req, res) => {
  res.json([
    { id: 1, name: "32 day notice", image: "/assets/32_day_notice.svg" },
    { id: 2, name: "95 day notice", image: "/assets/95_day_notice.svg" },
  ]);
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
