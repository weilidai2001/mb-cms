export type CmsResponse = {
  data: CmsProduct[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type CmsProduct = {
  id: number;
  documentId: string;
  title: string;
  description: CmsDescription[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: CmsCategory | null;
  icon: CmsIcon;
};

export type CmsDescription = {
  type: "paragraph" | "list";
  format?: "unordered" | "ordered";
  children: (CmsText | CmsListItem)[];
};

export type CmsText = {
  type: "text";
  text: string;
};

export type CmsListItem = {
  type: "list-item";
  children: CmsText[];
};

export type CmsCategory = {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CmsIcon = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type ExtractedProducts = {
  id: number;
  category: string;
  title: string;
  icon: string;
  description: string;
}[];
