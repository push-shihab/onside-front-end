"use server";
import { authHeader } from "./secureRoute";

const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const getAllPlayers = async () => {
  const res = await fetch(`${baseUrl}/api/players`, {
    headers: {
      ...(await authHeader()),
    },
  });
  return res.json();
};

export const getIndividualPlayerData = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/player?id=${id}`, {
    headers: {
      ...(await authHeader()),
    },
  });
  return res.json();
};

export const getPlayersByUser = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/user/players?id=${id}`, {
    headers: {
      ...(await authHeader()),
    },
  });
  return res.json();
};
