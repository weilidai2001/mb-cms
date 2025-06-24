import type {
  CmsDescription,
  CmsProduct,
  CmsResponse,
  ExtractedProducts,
} from "./types";

export const formatDescription = (description: CmsDescription[]): string => {
  if (!description || !Array.isArray(description)) return "";

  return description
    .map((block) => {
      if (block.type === "list" && block.format === "unordered") {
        const items = block.children
          .map((item) => {
            if (item.type === "list-item") {
              // Join all text children for this list item
              const text = item.children
                .filter((child) => child.type === "text")
                .map((child) => child.text)
                .join(" ");
              return `<li>${text}</li>`;
            }
            return "";
          })
          .join("");
        return `<ul>${items}</ul>`;
      }
      if (block.type === "paragraph") {
        // Join all text children for this paragraph
        const text = block.children
          .filter((child) => child.type === "text")
          .map((child) => child.text)
          .join(" ");
        return `<p>${text}</p>`;
      }
      return "";
    })
    .join("");
};

export const extractTitle = (product: CmsProduct): string => {
  return product.title;
};

export const extractIconUrl = (
  product: CmsProduct,
  baseUrl: string
): string => {
  return `${baseUrl}${product.icon.url}`;
};

export const extractCategoryName = (product: CmsProduct): string => {
  return product.category.name;
};

export const extractProductData = (
  product: CmsProduct,
  baseUrl: string
): ExtractedProducts[number] => {
  return {
    id: product.id,
    category: extractCategoryName(product),
    title: extractTitle(product),
    icon: extractIconUrl(product, baseUrl),
    description: formatDescription(product.description),
  };
};

export const extractProductsData = (
  cmsResponse: CmsResponse,
  baseUrl: string
): ExtractedProducts => {
  return cmsResponse.data.map((product) =>
    extractProductData(product, baseUrl)
  );
};
