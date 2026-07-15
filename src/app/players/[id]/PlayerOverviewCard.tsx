"use client";

export interface PlayerData {
  name: string;
  age: number;
  position: string;
  clubName: string;
  country: string;
  height: number;
  weight: number;
  imageLink: string;
  currentSalaryGross: string;
  currentSalaryNet: string;
  overallRating: number;
  contractExpiryDate: string;
  strongFoot: string;
  description: string;
  totalAppearances: number;
  totalGoals: number;
  totalAssists: number;
  totalTrophyWin: number;
  currentMarketValue: string;
  attribute: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
  dateOfBirth: string;
}

interface PlayerOverviewCardProps {
  player: PlayerData;
}

export default function PlayerOverviewCard({
  player,
}: PlayerOverviewCardProps) {
  // Convert standard circle calculations based on a rating out of 100
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7">
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#E8ECE9] mb-4">
          Overview
        </h3>
        <p className="text-[#8A948E] text-sm leading-relaxed">
          {player.description}
        </p>
      </div>

      <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7">
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#E8ECE9] mb-4">
          Key Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          <div className="flex justify-between py-3.5 border-b border-dashed border-[#2A352E]">
            <span className="text-sm text-[#8A948E]">Nationality</span>
            <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
              {player.country}
            </span>
          </div>
          <div className="flex justify-between py-3.5 border-b border-dashed border-[#2A352E]">
            <span className="text-sm text-[#8A948E]">Preferred Foot</span>
            <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
              {player.strongFoot}
            </span>
          </div>
          <div className="flex justify-between py-3.5 border-b border-dashed border-[#2A352E]">
            <span className="text-sm text-[#8A948E]">Height</span>
            <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
              {player.height} cm
            </span>
          </div>
          <div className="flex justify-between py-3.5 border-b border-dashed border-[#2A352E]">
            <span className="text-sm text-[#8A948E]">Weight</span>
            <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
              {player.weight} kg
            </span>
          </div>
          <div className="flex justify-between py-3.5 border-b border-dashed border-[#2A352E] md:border-b-0">
            <span className="text-sm text-[#8A948E]">Date of Birth</span>
            <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
              {player.dateOfBirth}
            </span>
          </div>
          <div className="flex justify-between py-3.5 border-b border-dashed border-[#2A352E] md:border-b-0">
            <span className="text-sm text-[#8A948E]">Contract Until</span>
            <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
              {player.contractExpiryDate}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7">
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#E8ECE9] mb-5">
          Attributes
        </h3>
        <div className="flex flex-col gap-4.5">
          {Object.entries(player.attribute).map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-[120px_1fr_40px] gap-4 items-center"
            >
              <span className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-wider text-[#8A948E]">
                {key}
              </span>
              <div className="h-2 bg-[#2A352E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#3FEA7A] to-[#5cf091] rounded-full"
                  style={{ width: `${value}%` }}
                />
              </div>
              <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9] text-right">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
