import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token")?.value;

  const { pathname } = request.nextUrl;

  console.log("Token:", token);
  console.log("Pathname:", pathname);

  // Eğer kullanıcı login sayfasındaysa
  if (pathname.startsWith("/auth/login")) {
    if (token) {
      // Eğer kullanıcı zaten giriş yapmışsa, ana sayfaya yönlendir
      return NextResponse.redirect(new URL("/", request.url));
    }
    // Kullanıcı login sayfasında kalabilir
    return NextResponse.next();
  }

  // Eğer kullanıcı giriş yapmamışsa, korumalı rotalarda login sayfasına yönlendir
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Token varsa kullanıcıyı devam ettir
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile", // Korumalı rotalar
    "/", // Ana sayfa
    "/auth/login", // Login sayfası
  ],
};
