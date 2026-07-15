const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const getAllPlayers = async () => {
  const res = await fetch(`${baseUrl}/api/players`);
  return res.json();
};
