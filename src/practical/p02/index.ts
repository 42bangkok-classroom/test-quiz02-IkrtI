import { getPostalAddress } from "../p01";

type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export async function addUser(newUser: newUser | null) {
  let users = await getPostalAddress();
  if (newUser == null) return 
  if (newUser) {
    const lastUser = users[users.length - 1];
    const newUserId = lastUser.id + 1;

    const userToAdd = {
      id: newUserId,
      name: newUser.name ?? null,
      phone: newUser.phone ?? null,
      address: newUser.address ?? null,
    };

    users.push(userToAdd);
  }
  return users;
}
