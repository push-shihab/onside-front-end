"use client";
import { Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function HeroSection() {
  const statsRows = [
    { k: "Kael Brennan · Northfield United", v: "9.2", up: true },
    { k: "Possession · Ashford vs Vesta", v: "64 / 36", up: false },
    { k: "Transfer · Mateo Rivas to Mariner", v: "€42M", up: true },
    { k: "Top scorer · Season", v: "L. Petrov · 22", up: false },
  ];

  return (
    <header className="relative overflow-hidden py-16 lg:py-20 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,rgba(63,234,122,.03)_0_2px,transparent_2px_16px)] before:pointer-events-none">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Chip className="border-[#2A352E] bg-transparent text-[#8A948E] font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest px-3 py-1">
              Live · 14,208 players indexed
            </Chip>
            <h1 className="mt-5 mb-4 font-['Space_Grotesk'] text-4xl font-bold leading-[1.15] tracking-tight text-[#E8ECE9] sm:text-5xl lg:text-[64px]">
              The football intelligence{" "}
              <span className="text-[#3FEA7A]">hub</span> for scouts, analysts,
              and fans.
            </h1>
            <p className="mb-8 max-w-[560px] text-base text-[#8A948E] sm:text-lg">
              Browse verified player profiles, read sharp match reports, and
              track transfer movement across 42 leagues. Built by analysts, for
              people who actually watch the game.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={"/players"}
                className="bg-[#3FEA7A] text-[#062012] font-bold px-6 py-2.5 rounded-[10px]"
              >
                Explore players
              </Link>
              <Button className="border-[#2A352E] text-[#E8ECE9] font-bold px-6 h-11 rounded-[10px] bg-transparent hover:border-[#3FEA7A] hover:text-[#3FEA7A]">
                Read latest news
              </Button>
            </div>
          </div>

          <Card className="relative border border-[#1F2823] bg-[#141B17] p-2 shadow-2xl rounded-[14px] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-[#3FEA7A] before:to-transparent">
            <Card.Header className="flex justify-between items-center pb-2">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium uppercase tracking-[0.1em] text-[#3FEA7A]">
                Trending · Matchday 28
              </span>
              <span className="font-['IBM_Plex_Mono'] text-xs text-[#5C665F]">
                10 Jul 2026
              </span>
            </Card.Header>
            <Card.Description className="flex flex-col gap-0 py-0">
              {statsRows.map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3.5 border-t border-dashed border-[#2A352E] first:border-t-0"
                >
                  <span className="text-[13px] text-[#8A948E]">{row.k}</span>
                  <span
                    className={`font-['IBM_Plex_Mono'] text-[15px] font-semibold flex items-center gap-1 ${row.up ? "text-[#3FEA7A]" : "text-[#E8ECE9]"}`}
                  >
                    {row.v} {row.up && <HiArrowUpRight size={14} />}
                  </span>
                </div>
              ))}
            </Card.Description>
          </Card>
        </div>
      </div>
    </header>
  );
}
