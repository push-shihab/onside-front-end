import React from "react";
import AddPlayerForm from "./AddPlayerForm";
import { getUserSession } from "@/utils/session";

const page = async () => {
  const user = await getUserSession();
  return (
    <div>
      <AddPlayerForm user={user} />
    </div>
  );
};

export default page;
