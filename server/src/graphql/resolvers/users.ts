import { prisma } from "../../index";

export default {
  Query: {
    getUsers: () => {
      try {
        const users = prisma.user.findMany()
        return users
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
    }
  },
};