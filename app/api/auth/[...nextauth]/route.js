import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { introduceNewUser } from "@/services/user-login-tracking";
const options = {
    providers: [
      GoogleProvider({
        clientId: process.env.G_CLIENT_ID,
        clientSecret: process.env.G_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async signIn(user, account, profile) {
        console.log( user);
        await introduceNewUser(user.user.name, "", user.user.email);
        return true;
      },
    },
  };
  
const handler = NextAuth(options);

export { handler as GET, handler as POST };