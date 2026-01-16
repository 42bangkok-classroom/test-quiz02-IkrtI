import { getPostalAddress } from "../p01";

export async function filterUserById(id: number) {
  let users = await getPostalAddress();
  let filter = users.filter((user) => user.id == id);
  if (filter.length == 1) {
    return filter[0];
  } else {
    return "Invalid id";
  }
}
