import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiMiniStar } from "react-icons/hi2";
interface Player {
  _id: string;
  name: string;
  position: string;
  clubName: string;
  imageLink: string;
  overallRating: number;
  currentMarketValue: string;
  contractExpiryDate: string;
  country: string;
  age: number;
}

interface ShowPlayerProps {
  p: Player;
}

const ShowPlayer = ({ p }: ShowPlayerProps) => {
  return (
    <Card className="border border-[#1F2823] bg-[#141B17] rounded-[14px] hover:border-[#3FEA7A] transition-all duration-200 hover:-translate-y-1">
      <Card.Description className="p-[22px] flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="w-15 h-15 rounded-full overflow-hidden">
            <Image
              src={p.imageLink}
              alt={p.name}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <Chip
            className="bg-[#F5B942]/10 text-[#F5B942] font-['IBM_Plex_Mono'] text-xs font-semibold px-2"
            startContent={<HiMiniStar size={12} className="mr-0.5" />}
          >
            {p.overallRating}
          </Chip>
        </div>

        <div>
          <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#E8ECE9]">
            {p.name}
          </h4>
          <div className="mt-0.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#3FEA7A]">
            {p.position}
          </div>
          <div className="mt-1 text-sm text-[#8A948E]">{p.clubName}</div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-dashed border-[#2A352E] pt-3.5">
          <span className="font-['IBM_Plex_Mono'] text-xs text-[#5C665F]">
            Age {p.age} · {p.country}
          </span>
          <Link
            href={`/players/${p._id}`}
            className="text-xs font-semibold text-[#3FEA7A] hover:underline flex items-center gap-1"
          >
            View details <HiOutlineArrowRight />
          </Link>
        </div>
      </Card.Description>
    </Card>
  );
};

export default ShowPlayer;
