import express from "express";
import path from "path";
import { mockData } from "./mock-data";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

app.get("/api/products", (_req, res) => {
  if (process.env.USE_MOCK_DATA === "true") {
    res.json(mockData);
  } else {
    res.json([]);
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `product-listing-api server running at http://localhost:${process.env.PORT}`
  );
});
