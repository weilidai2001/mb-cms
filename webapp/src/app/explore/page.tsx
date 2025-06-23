import { Metadata } from "next";
import { useMemo, useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Accounts | Moneybox",
  description:
    "Browse all Moneybox accounts by category—expand each product to learn how it can help you achieve your goals.",
  alternates: { canonical: "/explore" },
};

type Item = {
  id: number;
  category: string;
  title: string;
  icon: string;
  description: string;
};

const DATA: Item[] = [
  {
    id: 3,
    category: "Saving",
    title: "Cash ISA",
    icon: "/assets/cash_isa.svg",
    description:
      "<ul><li>Underlying rate of 3.95% AER (variable) with a 0.70% fixed 12 month bonus</li><li>Save £20,000 a year with tax-free interest</li><li>Minimum balance £500</li><li>Up to 3 withdrawals every 12 months without impacting your rate</li></ul>",
  },
  {
    id: 7,
    category: "Saving",
    title: "Open Access Cash ISA",
    icon: "/assets/open_access_cash_isa.svg",
    description:
      "<ul><li>Save up to £20,000 each tax year</li><li>Enjoy unlimited withdrawals</li><li>Get tax-free interest</li><li>Minimum balance £500</li></ul>",
  },
  {
    id: 9,
    category: "Saving",
    title: "Simple Saver",
    icon: "/assets/simple_saver.svg",
    description:
      "<ul><li>Build your savings with a Moneybox Simple Saver</li><li>Boost your interest rate to 3.90% AER (variable) by opening a qualifying Moneybox account*</li><li>Enjoy next-day withdrawals (max one per month)</li></ul>",
  },
  {
    id: 1,
    category: "Saving",
    title: "32 day notice",
    icon: "/assets/32_day_notice.svg",
    description:
      "<p>Save towards your short-term goals and earn 4.03% AER variable with a 32 Day Notice Savings Account.</p><p>Get started with as little as £1.</p><p>This account has a 32 day notice period. When you request a withdrawal, your money will be available after 32 days.</p>",
  },
  {
    id: 2,
    category: "Saving",
    title: "95 day notice",
    icon: "/assets/95_day_notice.svg",
    description:
      "<p>Save towards your short-term goals and earn 4.34% AER variable with a 95 Day Notice Savings Account.</p><p>Get started with as little as £1.</p><p>This account has a 95 day notice period. When you request a withdrawal, your money will be available after 95 days.</p>",
  },
  {
    id: 4,
    category: "Investing",
    title: "General Investment Account",
    icon: "/assets/general_investment_account.svg",
    description:
      "<p>Make your money work harder over the long term with a Moneybox investing account. Choose from three simple Starting Options, or customise your portfolio with top US stocks, funds, and ETFs.</p><p><strong>With a range of investing accounts, get started today with as little as £1.</strong></p><p>Capital at risk. All investing should be long term. The value of your investments can go up and down, and you may get back less than you invest.</p>",
  },
  {
    id: 10,
    category: "Investing",
    title: "Stocks & Shares ISA",
    icon: "/assets/stocks_shares_isa.svg",
    description:
      "<ul><li>Choose from three Starting Options, tailored to your risk level and designed by experts</li><li>Customise and select from a range of funds and ETFs</li><li>Add US stocks to own a slice of the world’s biggest companies</li></ul>",
  },
  {
    id: 5,
    category: "Investing",
    title: "Junior ISA",
    icon: "/assets/junior_isa.svg",
    description:
      "<p>Give your child a flying start and invest up to £9,000 per tax year into a Junior Stocks &amp; Shares ISA.</p><p><strong>Open or transfer an account in minutes and join over one million people saving and investing with Moneybox.</strong></p>",
  },
  {
    id: 8,
    category: "Retirement",
    title: "Personal Pension",
    icon: "/assets/personal_pension.svg",
    description:
      "<ul><li>Find and combine lost pensions into one easy-to-manage Moneybox Pension</li><li>Choose where you want to invest your retirement savings</li><li>Get a 25% bonus from the government as tax relief on contributions</li></ul>",
  },
  {
    id: 6,
    category: "Home-buying",
    title: "Lifetime ISA",
    icon: "/assets/lifetime_isa.svg",
    description:
      "<p>Save or invest up to £4,000 each tax year with the UK’s biggest Lifetime ISA provider and get a 25% government bonus on all savings. That’s up to £1,000 for free each year you save for your first home.</p><p>Choose from a Cash Lifetime ISA or Stocks &amp; Shares Lifetime ISA (capital at risk).</p><p>A 25% government penalty applies if you withdraw money from a Lifetime ISA for any reason other than buying your first home (up to £450,000) or for retirement, and you may get back less than you paid into your Lifetime ISA.</p>",
  },
];

export default function ExplorePage() {
  /* ---------------------------------- group --------------------------------- */
  const categories = useMemo(() => {
    const map = new Map<string, Item[]>();
    DATA.forEach((item) => {
      if (!map.has(item.category)) map.set(item.category, []);
      map.get(item.category)!.push(item);
    });
    return [...map.entries()].map(([name, items]) => ({ name, items }));
  }, []);

  /* ------------------------------- carousel ---------------------------------- */
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  if (embla && embla.on) {
    embla.on("select", () => setIndex(embla.selectedScrollSnap()));
  }

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  /* ---------------------------------- UI ------------------------------------ */
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 text-center text-2xl font-semibold"
      >
        Explore Accounts
      </motion.h1>

      {/* Carousel buttons */}
      <div className="mb-4 flex items-center justify-center gap-3">
        <Button
          variant="outline"
          size="icon"
          aria-label="Previous category"
          onClick={prev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span className="sr-only">
          {`Category ${index + 1} of ${categories.length}`}
        </span>
        <Button
          variant="outline"
          size="icon"
          aria-label="Next category"
          onClick={next}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Embla viewport */}
      <section ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {categories.map(({ name, items }) => (
            <article key={name} className="min-w-full px-6 md:px-12">
              <h2 className="mb-4 text-center text-xl font-semibold">{name}</h2>

              <Accordion type="multiple" className="space-y-2" collapsible>
                {items.map((prod) => (
                  <AccordionItem key={prod.id} value={String(prod.id)}>
                    <AccordionTrigger className="w-full rounded-md bg-muted px-4 py-3 text-left font-medium">
                      {prod.title}
                    </AccordionTrigger>
                    <AccordionContent asChild>
                      <div className="space-y-4 rounded-md border p-4">
                        <Image
                          src={prod.icon}
                          alt={prod.title}
                          width={48}
                          height={48}
                          className="h-12 w-12"
                        />
                        <div
                          className="prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: prod.description,
                          }}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
