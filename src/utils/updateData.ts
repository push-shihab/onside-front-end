const baseUrl = process.env.NEXT_PUBLIC_SERVER;
export const editPlayer = async (playerData: object) => {
  const res = await fetch(`${baseUrl}/api/player/update`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(playerData),
  });
  return res.json();
};
