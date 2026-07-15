const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const getAllPlayers = async () => {
  const res = await fetch(`${baseUrl}/api/players`);
  return res.json();
};

export const getIndividualPlayerData = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/player?id=${id}`);
  return res.json();
};
