import { getAllPlayers } from "@/utils/getData";
import AllPlayersClient from "./AllPlayersClient";

const page = async () => {
  const players = await getAllPlayers();
  return (
    <div>
      <AllPlayersClient players={players} />
    </div>
  );
};

export default page;
