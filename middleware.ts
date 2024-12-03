// import { auth } from "@/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   // Kullanıcının oturum bilgisini kontrol et
//   const session = await auth();
//   const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

//   // Eğer session.user yoksa yönlendirme yap

//   // Kullanıcı oturum açmışsa isteğe devam et

//   console.log("session123", session);

//   if (!session?.user && !isAuthPage) {
//     return NextResponse.redirect(new URL("/auth/signin", request.url));
//   }

//   if (session?.user && isAuthPage) {
//     console.log("su", session?.user);
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*", "/auth/:path*"],
// };

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET, // NextAuth secret değeri
  });

  const { pathname } = request.nextUrl;

  // Korumalı rotalar
  const protectedPaths = ["/", "/profile"];
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // Giriş yapılmasını istemeyen rotalar (ör: /auth/signin)
  const isAuthPage = pathname.startsWith("/auth");

  console.log("isAuthPage", isAuthPage);
  console.log("isProtectedPath", isProtectedPath);

  // 1. Giriş yapılmamış ve korumalı bir rotaya gidiliyorsa
  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // 2. Giriş yapılmış ve oturum açma sayfasına gidiliyorsa
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 3. Giriş yapılmış ve kullanıcı mevcutsa isteğe izin ver
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
