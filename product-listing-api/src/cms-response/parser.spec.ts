import {
  formatDescription,
  extractTitle,
  extractIconUrl,
  extractCategoryName,
  extractProductData,
  extractProductsData,
} from "./parser";
import type { CmsDescription, CmsResponse, CmsText } from "./types";

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
    {
      id: 10,
      documentId: "c62eeco5ijrc7qtfoyzs5zoj",
      title: "Simple Saver",
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
                  text: "Build your savings with a Moneybox Simple Saver",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Boost your interest rate to 3.90% AER (variable) by opening a qualifying Moneybox account*",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Enjoy next-day withdrawals (max one per month)",
                },
              ],
            },
          ],
        },
      ],
      createdAt: "2025-06-24T11:13:15.050Z",
      updatedAt: "2025-06-24T11:13:26.781Z",
      publishedAt: "2025-06-24T11:13:26.789Z",
      category: {
        id: 8,
        documentId: "qr5j9739as00pkyxokmc6yji",
        name: "Saving",
        createdAt: "2025-06-24T08:52:48.819Z",
        updatedAt: "2025-06-24T08:54:06.117Z",
        publishedAt: "2025-06-24T08:54:06.120Z",
      },
      icon: {
        id: 9,
        documentId: "nbfbv4qy37l0prcf29tqklnz",
        name: "simple_saver.svg",
        alternativeText: null,
        caption: null,
        width: 56,
        height: 56,
        formats: null,
        hash: "simple_saver_0dbf82b08e",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.63,
        url: "/uploads/simple_saver_0dbf82b08e.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-06-24T08:55:05.961Z",
        updatedAt: "2025-06-24T08:55:05.961Z",
        publishedAt: "2025-06-24T08:55:05.961Z",
      },
    },
    {
      id: 12,
      documentId: "m86ftpfxt2k74jozn5wvy4u1",
      title: "General Investment Account",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Make your money work harder over the long term with a Moneybox investing account. Choose from three simple Starting Options, or customise your portfolio with top US stocks, funds, and ETFs.</p><p><strong>With a range of investing accounts, get started today with as little as £1.</strong></p><p>Capital at risk. All investing should be long term. The value of your investments can go up and down, and you may get back less than you invest.",
            },
          ],
        },
      ],
      createdAt: "2025-06-24T11:27:13.950Z",
      updatedAt: "2025-06-24T11:27:13.950Z",
      publishedAt: "2025-06-24T11:27:13.956Z",
      category: {
        id: 6,
        documentId: "p9gofrwi8pb81i45i7tbdzvg",
        name: "Investing",
        createdAt: "2025-06-24T08:53:18.958Z",
        updatedAt: "2025-06-24T08:53:58.478Z",
        publishedAt: "2025-06-24T08:53:58.482Z",
      },
      icon: {
        id: 3,
        documentId: "gk4hmah1ugy5l8xmp54ogrti",
        name: "general_investment_account.svg",
        alternativeText: null,
        caption: null,
        width: 56,
        height: 56,
        formats: null,
        hash: "general_investment_account_eababd206d",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.72,
        url: "/uploads/general_investment_account_eababd206d.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-06-24T08:55:05.893Z",
        updatedAt: "2025-06-24T08:55:05.893Z",
        publishedAt: "2025-06-24T08:55:05.893Z",
      },
    },
    {
      id: 14,
      documentId: "bm53hsshikg86m9onab6bd2u",
      title: "Personal Pension",
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
                  text: "Find and combine lost pensions into one easy-to-manage Moneybox Pension",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Choose where you want to invest your retirement savings",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Get a 25% bonus from the government as tax relief on contributions",
                },
              ],
            },
          ],
        },
      ],
      createdAt: "2025-06-24T11:31:24.081Z",
      updatedAt: "2025-06-24T11:31:24.081Z",
      publishedAt: "2025-06-24T11:31:24.086Z",
      category: {
        id: 7,
        documentId: "spqd6ttaafu101o3xxqt597x",
        name: "Retirement",
        createdAt: "2025-06-24T08:53:34.206Z",
        updatedAt: "2025-06-24T08:54:02.809Z",
        publishedAt: "2025-06-24T08:54:02.812Z",
      },
      icon: {
        id: 8,
        documentId: "j7coka7h4fc02ypbapse2tx6",
        name: "personal_pension.svg",
        alternativeText: null,
        caption: null,
        width: 56,
        height: 56,
        formats: null,
        hash: "personal_pension_c6c47400e2",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.87,
        url: "/uploads/personal_pension_c6c47400e2.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-06-24T08:55:05.947Z",
        updatedAt: "2025-06-24T08:55:05.947Z",
        publishedAt: "2025-06-24T08:55:05.947Z",
      },
    },
    {
      id: 16,
      documentId: "zi2w0njq4ytfbo970riav4w5",
      title: "Lifetime ISA",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Save or invest up to £4,000 each tax year with the UK’s biggest Lifetime ISA provider and get a 25% government bonus on all savings. That’s up to £1,000 for free each year you save for your first home.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Choose from a Cash Lifetime ISA or Stocks &amp; Shares Lifetime ISA (capital at risk).",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "A 25% government penalty applies if you withdraw money from a Lifetime ISA for any reason other than buying your first home (up to £450,000) or for retirement, and you may get back less than you paid into your Lifetime ISA.",
            },
          ],
        },
      ],
      createdAt: "2025-06-24T11:32:30.892Z",
      updatedAt: "2025-06-24T11:32:30.892Z",
      publishedAt: "2025-06-24T11:32:30.908Z",
      category: null,
      icon: {
        id: 6,
        documentId: "cz9k9bsfhqvdla5g13fqpgd6",
        name: "lifetime_isa.svg",
        alternativeText: null,
        caption: null,
        width: 56,
        height: 56,
        formats: null,
        hash: "lifetime_isa_b28e6f3af8",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.84,
        url: "/uploads/lifetime_isa_b28e6f3af8.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-06-24T08:55:05.908Z",
        updatedAt: "2025-06-24T08:55:05.908Z",
        publishedAt: "2025-06-24T08:55:05.908Z",
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 6,
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
    expect(iconUrl).toBe(
      "https://cms.example.com/uploads/cash_isa_050dba2ac7.svg"
    );
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
      description:
        "<ul><li>Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus</li><li>Save £20,000 a year with tax-free interest</li><li>Minimum balance £500</li><li>Up to 3 withdrawals every 12 months without impacting your rate</li></ul>",
    });
  });
});

describe("extractProductsData", () => {
  it("should extract data from all products in the CMS response with baseUrl", () => {
    const baseUrl = "https://cms.example.com";
    const productsData = extractProductsData(sampleResponse, baseUrl);
    expect(productsData).toHaveLength(6);
    expect(productsData[0].title).toBe("Cash ISA");
    expect(productsData[1].title).toBe("Open Access Cash ISA");
    expect(productsData[2].title).toBe("Simple Saver");
    expect(productsData[3].title).toBe("General Investment Account");
    expect(productsData[4].title).toBe("Personal Pension");
    expect(productsData[5].title).toBe("Lifetime ISA");
    productsData.forEach((product) => {
      expect(product.icon).toContain(baseUrl);
    });
  });
});

describe("formatDescription", () => {
  it("should format lists to HTML", () => {
    const description = sampleResponse.data[0].description;
    const html = formatDescription(description);
    expect(html).toBe(
      "<ul><li>Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus</li><li>Save £20,000 a year with tax-free interest</li><li>Minimum balance £500</li><li>Up to 3 withdrawals every 12 months without impacting your rate</li></ul>"
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
    expect(formatDescription(description)).toBe("<p>Helloworld.</p>");
  });
});
