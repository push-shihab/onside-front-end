import { getUserToken } from "./session";

export const authHeader = async (): Promise<Record<string, string>> => {
  const token = await getUserToken();
  return token ? { authorization: `Bearer ${token}` } : {};
};
