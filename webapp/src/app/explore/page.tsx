import React from "react";
import Image from "next/image";
import Product from "@/components/product";
import CategoryTile from "@/components/category-tile";
import type { Products } from "@/lib/schemas/product-explore";
import { extractCategories, getProductsByCategory } from "@/lib/products-util";
import Carousel from "@/components/ui/carousel";

const apiResponse: Products = [
  {
    id: 3,
    category: "Saving",
    title: "Cash ISA",
    icon: "http://localhost:3001/assets/cash_isa.svg",
    description:
      "<ul><li>Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus</li><li>Save £20,000 a year with tax-free interest</li><li>Minimum balance £500</li><li>Up to 3 withdrawals every 12 months without impacting your rate</li></ul>",
  },
  {
    id: 7,
    category: "Saving",
    title: "Open Access Cash ISA",
    icon: "http://localhost:3001/assets/open_access_cash_isa.svg",
    description:
      "<ul><li>Save up to £20,000 each tax year</li><li>Enjoy unlimited withdrawals</li><li>Get tax-free interest</li><li>Minimum balance £500</li></ul>",
  },
  {
    id: 9,
    category: "Saving",
    title: "Simple Saver",
    icon: "http://localhost:3001/assets/simple_saver.svg",
    description:
      "<ul><li>Build your savings with a Moneybox Simple Saver</li><li>Boost your interest rate to 3.90% AER (variable) by opening a qualifying Moneybox account*</li><li>Enjoy next-day withdrawals (max one per month)</li></ul>",
  },
  {
    id: 1,
    category: "Saving",
    title: "32 day notice",
    icon: "http://localhost:3001/assets/32_day_notice.svg",
    description:
      "<p>Save towards your short-term goals and earn 4.03% AER variable with a 32 Day Notice Savings Account.</p><p>Get started with as little as £1.</p><p>This account has a 32 day notice period. When you request a withdrawal, your money will be available after 32 days.</p>",
  },
  {
    id: 2,
    category: "Saving",
    title: "95 day notice",
    icon: "http://localhost:3001/assets/95_day_notice.svg",
    description:
      "<p>Save towards your short-term goals and earn 4.34% AER variable with a 95 Day Notice Savings Account.</p><p>Get started with as little as £1.</p><p>This account has a 95 day notice period. When you request a withdrawal, your money will be available after 95 days.</p>",
  },
  {
    id: 4,
    category: "Investing",
    title: "General Investment Account",
    icon: "http://localhost:3001/assets/general_investment_account.svg",
    description:
      "<p>Make your money work harder over the long term with a Moneybox investing account. Choose from three simple Starting Options, or customise your portfolio with top US stocks, funds, and ETFs.</p><p><strong>With a range of investing accounts, get started today with as little as £1.</strong></p><p>Capital at risk. All investing should be long term. The value of your investments can go up and down, and you may get back less than you invest.</p>",
  },
  {
    id: 10,
    category: "Investing",
    title: "Stocks & Shares ISA",
    icon: "http://localhost:3001/assets/stocks_shares_isa.svg",
    description:
      "<ul><li>Choose from three Starting Options, tailored to your risk level and designed by experts</li><li>Customise and select from a range of funds and ETFs</li><li>Add US stocks to own a slice of the world’s biggest companies</li></ul>",
  },
  {
    id: 5,
    category: "Investing",
    title: "Junior ISA",
    icon: "http://localhost:3001/assets/junior_isa.svg",
    description:
      "<p>Give your child a flying start and invest up to £9,000 per tax year into a Junior Stocks &amp; Shares ISA.</p><p><strong>Open or transfer an account in minutes and join over one million people saving and investing with Moneybox.</strong></p>",
  },
  {
    id: 8,
    category: "Retirement",
    title: "Personal Pension",
    icon: "http://localhost:3001/assets/personal_pension.svg",
    description:
      "<ul><li>Find and combine lost pensions into one easy-to-manage Moneybox Pension</li><li>Choose where you want to invest your retirement savings</li><li>Get a 25% bonus from the government as tax relief on contributions</li></ul>",
  },
  {
    id: 6,
    category: "Home-buying",
    title: "Lifetime ISA",
    icon: "http://localhost:3001/assets/lifetime_isa.svg",
    description:
      "<p>Save or invest up to £4,000 each tax year with the UK’s biggest Lifetime ISA provider and get a 25% government bonus on all savings. That’s up to £1,000 for free each year you save for your first home.</p><p>Choose from a Cash Lifetime ISA or Stocks &amp; Shares Lifetime ISA (capital at risk).</p><p>A 25% government penalty applies if you withdraw money from a Lifetime ISA for any reason other than buying your first home (up to £450,000) or for retirement, and you may get back less than you paid into your Lifetime ISA.</p>",
  },
];

const ExplorePage = () => {
  const categories = extractCategories(apiResponse);

  return (
    <main>
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Explore Accounts</h1>
      </header>

      <section aria-labelledby="products-heading" className="max-w-4xl mx-auto">
        <h2 id="products-heading" className="sr-only">
          All Products
        </h2>
        <Carousel />
        <div className="space-y-8">
          {categories.map((category) => (
            <CategoryTile
              key={category}
              category={category}
              products={getProductsByCategory(apiResponse, category)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
