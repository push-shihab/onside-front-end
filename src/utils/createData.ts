const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const createPlayer = async (playerData: object) => {
  const res = await fetch(`${baseUrl}/api/player/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(playerData),
  });
  return res.json();
};
