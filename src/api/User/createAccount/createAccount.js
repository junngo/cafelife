import { prisma } from "../../../../generated/prisma-client"

export default {
    Mutation: {
        createAccount: async (_, args) => {
            const { username, email, lastName="", bio=""} = args;
            const user = await prisma.createUser({
                username,
                email,
                lastName,
                bio
            });

            return user;
        }
    }
}
