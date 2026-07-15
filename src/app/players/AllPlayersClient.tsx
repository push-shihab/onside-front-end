"use client";

import ShowPlayer from "@/components/featuredPlayers/ShowPlayer";
import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

export default function AllPlayersClient({ players }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"high-to-low" | "low-to-high">(
    "high-to-low",
  );

  const filteredAndSortedPlayers = useMemo(() => {
    const searchLower = searchQuery.trim().toLowerCase();

    return (players || [])
      .filter((player) => {
        const name = (player.name ?? "").toLowerCase();
        const club = (player.clubName ?? "").toLowerCase();
        const nationality = (player.country ?? "").toLowerCase();
        const position = (player.position ?? "").toLowerCase();

        const matchesSearch =
          searchLower === "" ||
          name.includes(searchLower) ||
          club.includes(searchLower) ||
          nationality.includes(searchLower) ||
          position.includes(searchLower);

        return matchesSearch;
      })
      .sort((a, b) => {
        const ratingA = a.overallRating;
        const ratingB = b.overallRating;
        return sortOrder === "high-to-low"
          ? ratingB - ratingA
          : ratingA - ratingB;
      });
  }, [searchQuery, sortOrder, players]);

  return (
    <div className="bg-[#0A0F0D] pt-14 text-[#E8ECE9] font-sans antialiased">
      <div className="max-w-[1320px] mx-auto px-8 pt-12 pb-6">
        <h1 className="font-['Space_Grotesk'] font-semibold text-[44px]">
          Players
        </h1>
        <p className="text-[#8A948E] mt-2">
          Browse database records. Complete text searches and rank by ratings.
        </p>
      </div>

      <div className="max-w-[1320px] mx-auto px-8">
        <div className="flex gap-3 flex-wrap items-center mb-7">
          <div className="flex-1 flex items-center gap-2.5 bg-[#141B17] border border-[#1F2823] rounded-[10px] px-4 h-11">
            <FaSearch color="#5C665F" />
            <input
              type="text"
              placeholder="Search by name, club, position or nationality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none text-[#E8ECE9] text-sm placeholder-[#5C665F]"
            />
          </div>

          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "high-to-low" | "low-to-high")
            }
            className="bg-[#141B17] border border-[#1F2823] rounded-[10px] px-4 h-11 text-sm text-[#E8ECE9] cursor-pointer outline-none focus:border-[#3FEA7A]"
          >
            <option value="high-to-low">Sort: Rating (High to Low)</option>
            <option value="low-to-high">Sort: Rating (Low to High)</option>
          </select>
        </div>

        <div className="gap-8 pb-20">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="text-[#8A948E] text-sm">
                Showing <b>{filteredAndSortedPlayers.length}</b> of{" "}
                <b>{(players || []).length}</b> records
              </div>
            </div>

            {filteredAndSortedPlayers.length === 0 ? (
              <div className="text-center py-16 text-[#5C665F] text-sm">
                No players match your filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredAndSortedPlayers.map((player) => (
                  <ShowPlayer key={player._id} p={player} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
