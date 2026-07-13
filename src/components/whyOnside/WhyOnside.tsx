"use client";
import { Card } from "@heroui/react";
import {
  HiShieldCheck,
  HiChartBar,
  HiDocumentText,
  HiSearch,
} from "react-icons/hi";

export default function WhyOnside() {
  const tools = [
    {
      icon: <HiShieldCheck />,
      title: "Verified profiles",
      desc: "Every player entry is cross-checked against league registries. No duplicates, no ghosts.",
    },
    {
      icon: <HiChartBar />,
      title: "Attribute ratings",
      desc: "Six-axis ratings compiled from match data and analyst review, updated weekly.",
    },
    {
      icon: <HiDocumentText />,
      title: "Real reporting",
      desc: "Match reports, transfer analysis, and features written by people who watch 90 minutes.",
    },
    {
      icon: <HiSearch />,
      title: "Scout tools",
      desc: "Filter by position, league, age, and rating. Build shortlists in seconds.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2A352E] px-3 py-1 font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#8A948E]">
              Why ONSIDE
            </span>
            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#E8ECE9] sm:text-4xl">
              A sharper way to follow the game.
            </h2>
          </div>
          <p className="max-w-[420px] text-sm text-[#8A948E] sm:text-base leading-relaxed">
            Four tools that replace the noise of ten different apps. No fluff,
            no clickbait, just the data and writing you actually want.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((item, i) => (
            <Card
              key={i}
              className="border border-[#1F2823] bg-[#141B17] shadow-sm rounded-[14px] hover:border-[#2A352E] transition-all hover:-translate-y-0.5"
            >
              <Card.Description className="p-7">
                <div className="mb-[18px] grid h-11 w-11 place-items-center rounded-[10px] bg-[#3FEA7A]/12 text-xl text-[#3FEA7A]">
                  {item.icon}
                </div>
                <h4 className="mb-2 font-['Space_Grotesk'] text-[17px] font-semibold text-[#E8ECE9]">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#8A948E]">
                  {item.desc}
                </p>
              </Card.Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
