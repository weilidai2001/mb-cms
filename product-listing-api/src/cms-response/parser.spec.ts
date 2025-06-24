import { formatDescription, extractTitle, extractIconUrl, extractCategoryName, extractProductData, extractProductsData } from "./parser";
import type { CmsDescription, CmsResponse } from "./types";

const sampleResponse: CmsResponse = {
  data: [
    {
      id: 6,
      documentId: "v5m7jxhs3qjxdoqxk5a1ot33",
      title: "Cash ISA",
      description: [
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Save £20,000 a year with tax-free interest",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Minimum balance £500",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Up to 3 withdrawals every 12 months without impacting your rate",
                },
              ],
            },
          ],
        },
      ],
      createdAt: "2025-06-24T08:56:27.257Z",
      updatedAt: "2025-06-24T08:58:48.209Z",
      publishedAt: "2025-06-24T08:58:48.219Z",
      category: {
        id: 8,
        documentId: "qr5j9739as00pkyxokmc6yji",
        name: "Saving",
        createdAt: "2025-06-24T08:52:48.819Z",
        updatedAt: "2025-06-24T08:54:06.117Z",
        publishedAt: "2025-06-24T08:54:06.120Z",
      },
      icon: {
        id: 4,
        documentId: "rd1mdfhev3oqwlycl9sa0id2",
        name: "cash_isa.svg",
        alternativeText: null,
        caption: null,
        width: 56,
        height: 56,
        formats: null,
        hash: "cash_isa_050dba2ac7",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.88,
        url: "/uploads/cash_isa_050dba2ac7.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-06-24T08:55:05.903Z",
        updatedAt: "2025-06-24T08:55:23.787Z",
        publishedAt: "2025-06-24T08:55:05.903Z",
      },
    },
    {
      id: 7,
      documentId: "kbbblg131iaf74lr36yhuhhq",
      title: "Open Access Cash ISA",
      description: [
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Save up to £20,000 each tax year",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Enjoy unlimited withdrawals",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Get tax-free interest",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Minimum balance £500",
                },
              ],
            },
          ],
        },
      ],
      createdAt: "2025-06-24T08:57:38.584Z",
      updatedAt: "2025-06-24T08:58:56.953Z",
      publishedAt: "2025-06-24T08:58:56.960Z",
      category: {
        id: 8,
        documentId: "qr5j9739as00pkyxokmc6yji",
        name: "Saving",
        createdAt: "2025-06-24T08:52:48.819Z",
        updatedAt: "2025-06-24T08:54:06.117Z",
        publishedAt: "2025-06-24T08:54:06.120Z",
      },
      icon: {
        id: 7,
        documentId: "z9kkph1a5bvukifrhxft58la",
        name: "open_access_cash_isa.svg",
        alternativeText: null,
        caption: null,
        width: 56,
        height: 56,
        formats: null,
        hash: "open_access_cash_isa_fff2511bf2",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.79,
        url: "/uploads/open_access_cash_isa_fff2511bf2.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-06-24T08:55:05.940Z",
        updatedAt: "2025-06-24T08:55:05.940Z",
        publishedAt: "2025-06-24T08:55:05.940Z",
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 2,
    },
  },
};

describe("extractTitle", () => {
  it("should extract the title from a product", () => {
    const product = sampleResponse.data[0];
    const title = extractTitle(product);
    expect(title).toBe("Cash ISA");
  });
});

describe("extractIconUrl", () => {
  it("should extract the icon URL from a product with baseUrl", () => {
    const product = sampleResponse.data[0];
    const baseUrl = "https://cms.example.com";
    const iconUrl = extractIconUrl(product, baseUrl);
    expect(iconUrl).toBe("https://cms.example.com/uploads/cash_isa_050dba2ac7.svg");
  });
});

describe("extractCategoryName", () => {
  it("should extract the category name from a product", () => {
    const product = sampleResponse.data[0];
    const categoryName = extractCategoryName(product);
    expect(categoryName).toBe("Saving");
  });
});

describe("extractProductData", () => {
  it("should extract all required data from a product with baseUrl", () => {
    const product = sampleResponse.data[0];
    const baseUrl = "https://cms.example.com";
    const productData = extractProductData(product, baseUrl);
    expect(productData).toEqual({
      id: 6,
      category: "Saving",
      title: "Cash ISA",
      icon: "https://cms.example.com/uploads/cash_isa_050dba2ac7.svg",
      description: "<ul>" +
      "<li>Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus</li>" +
      "<li>Save £20,000 a year with tax-free interest</li>" +
      "<li>Minimum balance £500</li>" +
      "<li>Up to 3 withdrawals every 12 months without impacting your rate</li>" +
      "</ul>"
    });
  });
});

describe("extractProductsData", () => {
  it("should extract data from all products in the CMS response with baseUrl", () => {
    const baseUrl = "https://cms.example.com";
    const productsData = extractProductsData(sampleResponse, baseUrl);
    expect(productsData).toHaveLength(2);
    expect(productsData[0].title).toBe("Cash ISA");
    expect(productsData[1].title).toBe("Open Access Cash ISA");
    expect(productsData[0].icon).toContain(baseUrl);
    expect(productsData[1].icon).toContain(baseUrl);
  });
});

describe("formatDescription", () => {
  it("should format an unordered list to HTML", () => {
    const description = sampleResponse.data[0].description;
    const html = formatDescription(description);
    expect(html).toBe(
      "<ul>" +
        "<li>Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus</li>" +
        "<li>Save £20,000 a year with tax-free interest</li>" +
        "<li>Minimum balance £500</li>" +
        "<li>Up to 3 withdrawals every 12 months without impacting your rate</li>" +
        "</ul>"
    );
  });

  it("should return empty string for empty description", () => {
    expect(formatDescription([])).toBe("");
    expect(formatDescription(undefined as any)).toBe("");
  });

  it("should format a single paragraph to <p>", () => {
    const description: CmsDescription[] = [
      { type: "paragraph", children: [{ type: "text", text: "Hello world." }] },
    ];
    expect(formatDescription(description)).toBe("<p>Hello world.</p>");
  });

  it("should format multiple paragraphs", () => {
    const description: CmsDescription[] = [
      { type: "paragraph", children: [{ type: "text", text: "Hello world." }] },
      { type: "paragraph", children: [{ type: "text", text: "Second." }] },
    ];
    expect(formatDescription(description)).toBe(
      "<p>Hello world.</p><p>Second.</p>"
    );
  });

  it("should handle empty paragraph", () => {
    const description: CmsDescription[] = [{ type: "paragraph", children: [] }];
    expect(formatDescription(description)).toBe("<p></p>");
  });

  it("should handle paragraph with only whitespace", () => {
    const description: CmsDescription[] = [
      { type: "paragraph", children: [{ type: "text", text: "   " }] },
    ];
    expect(formatDescription(description)).toBe("<p>   </p>");
  });

  it("should handle paragraph with mixed children", () => {
    const description: CmsDescription[] = [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Hello" },
          { type: "text", text: "world." },
        ],
      },
    ];
    expect(formatDescription(description)).toBe("<p>Hello world.</p>");
  });
});
