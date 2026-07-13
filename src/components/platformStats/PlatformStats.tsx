"use client";
import { Card } from "@heroui/react";

export default function PlatformStats() {
  const stats = [
    { num: "14,208", label: "Player profiles" },
    { num: "42", label: "Leagues covered" },
    { num: "3,140", label: "Match reports" },
    { num: "98.4%", label: "Data accuracy" },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2A352E] px-3 py-1 font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#8A948E]">
            Platform
          </span>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#E8ECE9] sm:text-4xl">
            Numbers that matter.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Card
              key={i}
              className="border border-[#1F2823] bg-[#141B17] rounded-[14px] relative before:absolute before:bottom-0 before:left-[20%] before:right-[20%] before:h-px before:bg-[repeating-linear-gradient(90deg,#3FEA7A_0_6px,transparent_6px_14px)] before:opacity-40"
            >
              <Card.Description className="py-8 text-center">
                <div className="font-['Space_Grotesk'] text-5xl font-bold leading-none text-[#3FEA7A]">
                  {s.num}
                </div>
                <div className="mt-2 text-sm text-[#8A948E]">{s.label}</div>
              </Card.Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
