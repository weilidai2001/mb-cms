# Architecture

```
+---------+       +---------------------+       +-------+
| Web App | ----> | Product Listing API | ----> |  CMS  |
+---------+       +---------------------+       +-------+
```

The Content Management System consists of three parts:

1. Web App
2. Product Listing API
3. CMS

This structure ensures separation of concerns: the Web App displays content, the CMS manages content, and the Product Listing API fetches and formats content for the Web App.

I initially considered having the Web App call the CMS API directly, but that would tightly couple the Web App to the CMS. Any changes to the CMS API, or switching to another CMS, would require updating the Web App. Since mobile apps may also use the same API, introducing a separate Product Listing API with a schema we control is a better long-term solution.

Each service is deployed independently:

- Web App is a Next.js app
- Product Listing API is a Node.js app
- CMS is a Strapi app

The Web App includes a minimal Homepage to simulate the behavior of a real website, where the Homepage might show different content. The Explore page demonstrates the solution to the technical task and would typically have its own route. Content is fetched from the Product Listing API on the server side. This allows for caching or static generation at build time, which reduces server load and improves SEO. Cache can also be periodically invalidated to keep content fresh.

The Product Listing API fetches content from the CMS and formats it for the Web App. It provides a simple JSON API for the Explore page. It was originally created as a mock server to allow frontend development before the CMS was ready, and it still supports mocked data via the USE_MOCK_DATA=true environment variable. It includes unit-tested parser functions that convert CMS responses into the format expected by the Web App. A possible improvement would be to share the schema with the Web App to ensure consistency.

The CMS is a Strapi app using SQLite. It allows users to manage Explore page content, including adding products and assigning them to categories via a linked Category collection. Icons are stored as media files and linked to products. Currently, they are hosted on the Strapi server, but in a production environment they should be served from a CDN.

# Demos

## Webapp

This video shows the Webapp running locally. As you can see the app is responsive and contains a carousel that loops through the different categories of products on offer.
[![Watch the video](https://img.youtube.com/vi/xqW-2fyHKHA/maxresdefault.jpg)](https://www.youtube.com/watch?v=xqW-2fyHKHA)

## CMS

This video shows the CMS running locally. As you can see the user is adding a new product to the explore page. At the start of the video there were just 2 products in the Saving category. After adding the new product there are 3 products in the Saving category.
[![Watch the video](https://img.youtube.com/vi/d-3-iGWFBp0/maxresdefault.jpg)](https://www.youtube.com/watch?v=d-3-iGWFBp0)

This video shows when adding a product that contains a new category for the first time, then it will automatically create a new category on the Web App. In the video, a product that was previously added as "Retirement" has been changed to "Home-buying", which results in a new category being created on the Web App.
[![Watch the video](https://img.youtube.com/vi/zIlezMDnbIo/maxresdefault.jpg)](https://www.youtube.com/watch?v=zIlezMDnbIo)

# Local setup

1. Clone repo
2. `npm install nvm -g` if not installed already.
3. `nvm install` which will trigger the .nvmrc file to install the correct version of node.
4. In one terminal tab, `cd webapp && npm install && npm run dev` which will start the Web App running locally.
5. In another terminal tab, `cd product-listing-api && npm install && npm run start:real` which will start the Product Listing API running locally.
6. In another terminal tab, `cd cms && npm install && npm run dev` which will start the Strapi CMS running locally

## Webapp

The Web App is viewable at http://localhost:3000/.

## Product Listing API

The Product Listing API is viewable at http://localhost:3001/api/products.

## CMS

You can log into the Strapi CMS at http://localhost:1337/admin using

```
Local CMS Admin user:
username: admin@fake.local
password: TradeYellowPaddle13
```

For demo purposes, the CMS is pre-populated with some sample data. And the .env file is included in the repo, so you can use it as is. Obviously in real-life these secrets should never be commited into source control, and only injected at deployment time by reading from a Secrets Manager.
