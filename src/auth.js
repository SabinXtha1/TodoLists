import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"


 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub,Google],
  secret: process.env.SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id; // Add user ID to the session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        

        token.id = user.id;
      }
      return token;
    },},
}) 