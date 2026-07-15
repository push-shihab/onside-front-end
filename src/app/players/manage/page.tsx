import React from "react";
import ManagePlayers from "./ManagePlayersClient";
import { getPlayersByUser } from "@/utils/getData";
import { getUserSession } from "@/utils/session";

const page = async () => {
  const user = await getUserSession();
  const players = await getPlayersByUser(user?.id);
  return (
    <div>
      <ManagePlayers players={players} />
    </div>
  );
};

export default page;
