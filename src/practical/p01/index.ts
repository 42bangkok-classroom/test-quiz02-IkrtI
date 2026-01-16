import axios from "axios";

export async function getPostalAddress() {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    return data.map((user: user) => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      address: user.address ?? null,
    }));
  } catch (err) {
    return err;
  }
}

type user = {
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
};
