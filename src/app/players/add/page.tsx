import React from "react";
import AddPlayerForm from "./AddPlayerForm";
import { getUserSession } from "@/utils/session";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUserSession();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div>
      <AddPlayerForm user={user} />
    </div>
  );
};

export default page;
