import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ShowPlayer from "./ShowPlayer";
import { getAllPlayers } from "@/utils/getData";

export default async function FeaturedPlayers() {
  const players = await getAllPlayers();

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
          <Link
            href="/players"
            variant="border"
            size="sm"
            className="h-9 border-[#2A352E] rounded-[10px] text-xs font-semibold text-[#E8ECE9] hover:border-[#3FEA7A] hover:text-[#3FEA7A]"
            endContent={<HiOutlineArrowRight />}
          >
            View all players
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {players.slice(0, 4).map((p) => (
            <ShowPlayer key={p._id} p={p}></ShowPlayer>
          ))}
        </div>
      </div>
    </section>
  );
}
