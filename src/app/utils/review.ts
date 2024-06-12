import { faker } from "@faker-js/faker";

const generateReviews = (count: number) => {
  return Array.from({ length: count }, () => ({
    name: faker.name.fullName(), // Utilisez fullName au lieu de findName
    username: `@${faker.internet.userName().toLowerCase()}`,
    body: faker.lorem.sentences(2),
    img: `https://avatar.vercel.sh/${faker.internet.userName().toLowerCase()}`,
  }));
};
