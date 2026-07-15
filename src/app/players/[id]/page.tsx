import React from "react";
import PlayerDetailsClient from "./PlayerDetailsClient";
import { getIndividualPlayerData } from "@/utils/getData";

const page = async ({ params }) => {
  const { id } = await params;
  const player = await getIndividualPlayerData(id);
  return (
    <div>
      <PlayerDetailsClient player={player} />
    </div>
  );
};

export default page;
