import React from "react";
import PlayerEditForm from "./PlayerEditForm";
import { getIndividualPlayerData } from "@/utils/getData";

const page = async ({ params }) => {
  const { id } = await params;
  const player = await getIndividualPlayerData(id);
  return (
    <div>
      <PlayerEditForm player={player} />
    </div>
  );
};

export default page;
