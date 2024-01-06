import NextAuth, { NextAuthOptions } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/api/lib/mongodb";
import Email from "next-auth/providers/email";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { decode, encode } from "next-auth/jwt";

export const AuthOptions: NextAuthOptions = {
  providers: [
    //customizing verification email: https://next-auth.js.org/providers/email
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Credentials({
      id: "credentials",
      async authorize(credentials, req) {
        try {
          // return { id: 5, email: "hi" };
          const email = credentials!.email;
          const password = credentials!.password;

          const client = await clientPromise;
          const db = client.db("lecture-chatbot");
          const user = await db.collection("users").findOne({ email: email });
          const hashedPassword = user!.password;

          const result = await compare(password, hashedPassword);
          if (result) {
            const userId = user?._id.toString();
            const sessionUser = {
              id: userId,
              email: user?.email,
              name: null,
              image: null,
            };
            return sessionUser;
          }
          return null;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    // Twitter({
    //   clientId: process.env.TWITTER_ID!,
    //   clientSecret: process.env.TWITTER_SECRET!,
    // }),
  ],
  theme: {
    colorScheme: "light",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise) as any,
  pages: {
    signIn: "/sign-in",
    newUser: "/set-password",
    verifyRequest: "/verify-email",
  },

  jwt: { encode, decode },

  callbacks: {
    async session({ session, token, user }: any) {
      session.user = {
        id: token!.id,
        email: token!.email,
        name: token!.name,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
  },
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
