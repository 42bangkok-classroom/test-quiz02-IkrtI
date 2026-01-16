import { filterUserById } from "../p03";

export async function safeFetchUser(id: number) {
  let user = await filterUserById(id);
  if (user == "Invalid id") return null;
  return user;
}
