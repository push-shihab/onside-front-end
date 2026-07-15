"use client";
import Image from "next/image";
import PlayerOverviewCard from "./PlayerOverviewCard";

export default function PlayerDetailsClient({ player }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (player.overallRating / 100) * circumference;

  return (
    <div className="pt-10 bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-center">
          <div className="flex flex-col sm:flex-row gap-7 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-[140px] h-[140px] rounded-[24px] bg-gradient-to-br from-[#3FEA7A] to-[#1fb862] overflow-hidden flex-shrink-0 border border-[#2A352E]">
              <Image
                src={player.imageLink}
                alt={player.name}
                fill
                sizes="140px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="font-['Space_Grotesk'] font-semibold text-4xl sm:text-[48px] leading-tight text-[#E8ECE9]">
                {player.name}
              </h1>
              <div className="text-[#3FEA7A] font-['IBM_Plex_Mono'] text-sm uppercase tracking-wider mt-1.5">
                {player.position}
              </div>
              <div className="text-[#8A948E] text-base mt-2">
                {player.clubName}
              </div>
              <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                <span className="px-3 py-1 border border-[#3FEA7A] bg-[rgba(63,234,122,0.12)] rounded-full font-['IBM_Plex_Mono'] text-xs text-[#3FEA7A]">
                  Verified Profile
                </span>
                <span className="px-3 py-1 border border-[#2A352E] rounded-full font-['IBM_Plex_Mono'] text-xs text-[#8A948E]">
                  Age {player.age}
                </span>
                <span className="px-3 py-1 border border-[#2A352E] rounded-full font-['IBM_Plex_Mono'] text-xs text-[#8A948E]">
                  {player.country}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-6 flex flex-col items-center gap-3 shadow-[0_1px_0_rgba(255,255,255,.03)_inset,0_10px_30px_rgba(0,0,0,.35)]">
            <div className="relative w-[160px] h-[160px]">
              <svg width="160" height="160" className="-rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#1F2823"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#F5B942"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center font-['Space_Grotesk'] font-bold text-[56px] text-[#F5B942] pb-2">
                {player.overallRating}
              </div>
              <div className="absolute bottom-[22px] left-0 right-0 text-center font-['IBM_Plex_Mono'] text-[10px] text-[#8A948E] uppercase tracking-[0.15em]">
                Overall
              </div>
            </div>
            <div className="text-[#F5B942] font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider font-semibold">
              World Class
            </div>
          </div>
        </div>

        <div className="h-px bg-transparent bg-[linear-gradient(to_right,#3FEA7A_6px,transparent_6px)] bg-[length:18px_1px] opacity-35" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 py-10">
          <PlayerOverviewCard player={player} />

          <aside className="flex flex-col gap-5">
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-6">
              <h4 className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-wider text-[#8A948E] mb-4">
                Career Totals
              </h4>
              <div className="flex flex-col">
                <div className="flex justify-between py-3 border-b border-dashed border-[#2A352E]">
                  <span className="text-sm text-[#8A948E]">Appearances</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
                    {player.totalAppearances}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed border-[#2A352E]">
                  <span className="text-sm text-[#8A948E]">Goals</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#3FEA7A]">
                    {player.totalGoals}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed border-[#2A352E]">
                  <span className="text-sm text-[#8A948E]">Assists</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
                    {player.totalAssists}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#8A948E]">Trophies Won</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#F5B942]">
                    {player.totalTrophyWin}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-6">
              <h4 className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-wider text-[#8A948E] mb-4">
                Financial Valuation
              </h4>
              <div className="flex flex-col">
                <div className="flex justify-between py-3 border-b border-dashed border-[#2A352E]">
                  <span className="text-sm text-[#8A948E]">Market Value</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#3FEA7A]">
                    €{player.currentMarketValue}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed border-[#2A352E]">
                  <span className="text-sm text-[#8A948E]">Gross Salary</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
                    €{player.currentSalaryGross} / yr
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#8A948E]">Net Salary</span>
                  <span className="font-['IBM_Plex_Mono'] text-sm font-semibold text-[#E8ECE9]">
                    €{player.currentSalaryNet} / yr
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
