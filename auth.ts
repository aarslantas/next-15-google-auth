// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// });

// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { prisma } from "@/lib/prisma"; // Prisma istemciniz

// // NextAuth yapılandırması
// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ session, user, token }) {
//       // Kullanıcı ID ve rol bilgilerini oturum nesnesine ekleyin
//       if (token) {
//         session.user.id = token.id as string;
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       // Kullanıcı giriş yapıyorsa ID ve rol bilgilerini token'a ekleyin
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//   },
//   session: {
//     strategy: "jwt", // JWT tabanlı oturum yönetimi
//   },
//   pages: {
//     signIn: "/auth/signin", // Giriş sayfası
//     error: "/auth/error", // Hata sayfası
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
