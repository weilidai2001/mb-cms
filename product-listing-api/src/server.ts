import express from "express";
import path from "path";
import { mockData } from "./mock-data";
import { extractProductsData } from "./cms-response/parser";

const app = express();

const cmsEndpoint = "/api/products?populate[category]=true&populate[icon]=true";

app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

app.get("/api/products", async (_req, res) => {
  if (process.env.USE_MOCK_DATA === "true") {
    res.json(mockData);
  } else {
    const response = await fetch(
      `${process.env.CMS_URL as string}${cmsEndpoint}`
    );
    const data = await response.json();
    res.json(extractProductsData(data));
  }
});

app.listen(process.env.PORT as string, () => {
  console.log(
    `product-listing-api server running at http://localhost:${process.env.PORT}`
  );
});
