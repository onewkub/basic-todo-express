let mockData = [
  {
    id: 1,
    title: "Basic Express.js",
    marked: false,
  },
  {
    id: 2,
    title: "Basic ORM and Prisma",
    marked: false,
  },
  {
    id: 3,
    title: "Authentication Service Web 2.0 Passport.js",
    marked: false,
  },
  {
    id: 4,
    title: "Work shop yeah",
    marked: false,
  },
];

export interface todoModel {
  id?: number;
  title: string;
  marked?: boolean;
}

export default mockData;
