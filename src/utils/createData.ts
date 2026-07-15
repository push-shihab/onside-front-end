"use server";
import { authHeader } from "./secureRoute";

const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const createPlayer = async (playerData: object) => {
  const res = await fetch(`${baseUrl}/api/player/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(playerData),
  });
  return res.json();
};
