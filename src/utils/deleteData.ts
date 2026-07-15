"use server";
import { ObjectId } from "mongodb";
import { authHeader } from "./secureRoute";

const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const deletePlayer = async (id: ObjectId) => {
  const res = await fetch(`${baseUrl}/api/player/delete?id=${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
  });
  return res.json();
};
