"use client";
import { Table } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiUserMinus } from "react-icons/bi";
import DeletePlayerModal from "./DeletePlayerModal";

export default function ManagePlayers({ players }) {
  return (
    <div className="py-10 min-h-screen bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased">
      <style jsx global>{`
        :root {
          --bg: #0a0f0d;
          --bg-2: #111714;
          --card: #141b17;
          --line: #1f2823;
          --line-2: #2a352e;
          --text: #e8ece9;
          --muted: #8a948e;
          --dim: #5c665f;
          --green: #3fea7a;
          --green-soft: rgba(63, 234, 122, 0.12);
          --gold: #f5b942;
          --red: #e86b6b;
          --radius: 14px;
          --radius-sm: 10px;
          --radius-pill: 999px;
        }
        /* Custom UI adaptations to preserve specific table look and feel within HeroUI containers */
        .onside-table-wrapper table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .onside-table-wrapper th {
          background: #111714;
          padding: 16px 20px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          color: #8a948e;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
          border-bottom: 1px solid #1f2823;
        }
        .onside-table-wrapper tr {
          transition: background-color 0.2s ease;
          border-bottom: 1px dashed #2a352e;
        }
        .onside-table-wrapper tr:last-child {
          border-bottom: none;
        }
        .onside-table-wrapper tr:hover {
          background-color: #111714;
        }
        .onside-table-wrapper td {
          padding: 16px 20px;
          vertical-align: middle;
        }
      `}</style>

      <div className="max-w-[1320px] mx-auto px-8">
        <div className="py-12 flex justify-between items-end flex-wrap gap-4">
          <div>
            <h1 className="font-['Space_Grotesk'] font-semibold text-4xl text-[#E8ECE9]">
              Your submissions
            </h1>
            <p className="text-[#8A948E] mt-2 text-sm">
              {players.length} players total listed directly below
            </p>
          </div>
          <Link
            href={"/players/add"}
            className="px-5 py-3 bg-[#3FEA7A] cursor-pointer text-[#062012] rounded-[10px] font-semibold text-sm hover:brightness-95 transition-all"
          >
            + Add new player
          </Link>
        </div>

        {/* HeroUI Table Anatomy Implementation */}
        {players.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-16 bg-[#141B17] border border-dashed border-[#2A352E] rounded-[14px]">
            <div className="w-14 h-14 rounded-full bg-[#111714] border border-[#1F2823] grid place-items-center mb-4 text-[#8A948E]">
              <BiUserMinus size={24} />
            </div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#E8ECE9] mb-1">
              No players submission found
            </h3>
            <p className="text-[#8A948E] text-sm max-w-xs mb-6">
              You haven&apos;t added any players to your roster yet. Get started
              by submitting your first player.
            </p>
            <Link
              href="/players/add"
              className="px-5 py-2.5 bg-[#3FEA7A] text-[#062012] rounded-[10px] font-semibold text-xs hover:brightness-95 transition-all cursor-pointer"
            >
              + Add your first player
            </Link>
          </div>
        ) : (
          <Table aria-label="Manage submitted football players">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header>
                  <Table.Column>Player</Table.Column>
                  <Table.Column>Position</Table.Column>
                  <Table.Column>Club</Table.Column>
                  <Table.Column>Rating</Table.Column>
                  <Table.Column>Market Value</Table.Column>
                  <Table.Column>Contract Expiry</Table.Column>
                  <Table.Column style={{ textAlign: "right" }}>
                    Actions
                  </Table.Column>
                </Table.Header>
                <Table.Body>
                  {players.map((player) => (
                    <Table.Row key={player._id}>
                      <Table.Cell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 rounded-full overflow-hidden h-10 grid place-items-center shrink-0">
                            <Image
                              src={player.imageLink}
                              alt={player.name}
                              width={200}
                              height={200}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-[#E8ECE9]">
                              {player.name}
                            </div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="font-['IBM_Plex_Mono'] text-xs text-[#3FEA7A] font-semibold">
                          {player.position}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-sm text-[#E8ECE9]">
                          {player.clubName}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="inline-flex items-center gap-1 text-[#F5B942] font-['IBM_Plex_Mono'] font-semibold text-xs before:content-['★'] before:text-[10px]">
                          {player.overallRating.toFixed(1)}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="font-['IBM_Plex_Mono'] text-sm text-[#E8ECE9]">
                          {player.currentMarketValue}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="font-['IBM_Plex_Mono'] text-xs text-[#8A948E]">
                          {player.contractExpiryDate}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex gap-1.5 justify-end">
                          <Link
                            href={`/players/edit/${player._id}`}
                            className="w-8 h-8 rounded-lg bg-[#111714] border border-[#1F2823] grid place-items-center text-xs text-[#8A948E] cursor-pointer hover:border-[#3FEA7A] hover:text-[#3FEA7A] transition-all"
                            title="Edit Player"
                          >
                            ✎
                          </Link>
                          <DeletePlayerModal player={player} />
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        )}
      </div>
    </div>
  );
}
