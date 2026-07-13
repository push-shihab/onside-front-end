"use client";
import { Button, Card, Avatar, Chip } from "@heroui/react";
import Link from "next/link";
import { HiOutlineArrowRight, HiMiniStar } from "react-icons/hi2";

export default function FeaturedPlayers() {
  const players = [
    {
      initial: "KB",
      rating: "9.1",
      name: "Kael Brennan",
      pos: "CAM",
      club: "Northfield United",
      age: "24",
      nation: "NIR",
      grad: "from-[#3FEA7A] to-[#1fb862]",
    },
    {
      initial: "MR",
      rating: "8.8",
      name: "Mateo Rivas",
      pos: "ST",
      club: "Redbridge City",
      age: "27",
      nation: "ESP",
      grad: "from-[#F5B942] to-[#c98f1f]",
    },
    {
      initial: "JV",
      rating: "8.6",
      name: "Jonas Vinter",
      pos: "CB",
      club: "Ashford Athletic",
      age: "29",
      nation: "SWE",
      grad: "from-[#5B8DEF] to-[#2f5fc4]",
    },
    {
      initial: "LP",
      rating: "9.3",
      name: "Luka Petrov",
      pos: "LW",
      club: "Vesta FC",
      age: "22",
      nation: "SRB",
      grad: "from-[#E86B6B] to-[#b83d3d]",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2A352E] px-3 py-1 font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#8A948E]">
              Featured players
            </span>
            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#E8ECE9] sm:text-4xl">
              Trending this week.
            </h2>
          </div>
          <Button
            as={Link}
            href="#"
            variant="border"
            size="sm"
            className="h-9 border-[#2A352E] rounded-[10px] text-xs font-semibold text-[#E8ECE9] hover:border-[#3FEA7A] hover:text-[#3FEA7A]"
            endContent={<HiOutlineArrowRight />}
          >
            View all players
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((p, i) => (
            <Card
              key={i}
              className="border border-[#1F2823] bg-[#141B17] rounded-[14px] hover:border-[#3FEA7A] transition-all duration-200 hover:-translate-y-1"
            >
              <Card.Description className="p-[22px] flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <Avatar
                    name={p.initial}
                    className={`w-14 h-14 rounded-[12px] bg-gradient-to-br ${p.grad} font-['Space_Grotesk'] text-2xl font-bold text-[#062012]`}
                  />
                  <Chip
                    className="bg-[#F5B942]/10 text-[#F5B942] font-['IBM_Plex_Mono'] text-xs font-semibold px-2"
                    startContent={<HiMiniStar size={12} className="mr-0.5" />}
                  >
                    {p.rating}
                  </Chip>
                </div>

                <div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#E8ECE9]">
                    {p.name}
                  </h4>
                  <div className="mt-0.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#3FEA7A]">
                    {p.pos}
                  </div>
                  <div className="mt-1 text-sm text-[#8A948E]">{p.club}</div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-dashed border-[#2A352E] pt-3.5">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-[#5C665F]">
                    Age {p.age} · {p.nation}
                  </span>
                  <Link
                    href="#"
                    className="text-xs font-semibold text-[#3FEA7A] hover:underline flex items-center gap-1"
                  >
                    View details <HiOutlineArrowRight />
                  </Link>
                </div>
              </Card.Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
