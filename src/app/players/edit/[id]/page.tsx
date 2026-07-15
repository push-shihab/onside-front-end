import React from "react";
import PlayerEditForm from "./PlayerEditForm";
import { getIndividualPlayerData } from "@/utils/getData";
import { PlayerData } from "../../[id]/PlayerOverviewCard";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const player: PlayerData & { _id: string } =
    await getIndividualPlayerData(id);

  return (
    <div>
      <PlayerEditForm player={player} />
    </div>
  );
};

export default page;
