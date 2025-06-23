import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Explore Savings & Investment Accounts | Moneybox',
  description: 'Discover a wide range of savings, investment, retirement, and home-buying accounts. Find the right financial products to help you achieve your goals with Moneybox.',
  keywords: ['Savings', 'Investing', 'Retirement', 'Home-buying', 'Cash ISA', 'Stocks & Shares ISA', 'Lifetime ISA', 'Pension'],
  openGraph: {
    title: 'Explore Savings & Investment Accounts | Moneybox',
    description: 'Discover a wide range of savings, investment, retirement, and home-buying accounts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Savings & Investment Accounts | Moneybox',
    description: 'Discover a wide range of savings, investment, retirement, and home-buying accounts.',
  },
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
