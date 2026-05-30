import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/", "/dashboard/:path*", "/profile", "/login", "/register"],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  console.log("PATH:", req.nextUrl.pathname);
  console.log(req.headers.get("cookie"));
  console.log("TOKEN:", "lalalalala");

  const isAuthPage =
    req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register";

  const isProtectedRoute =
    req.nextUrl.pathname === "/" ||
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/profile");

  // ❌ нет токена → редирект на login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ❌ есть токен → не пускаем на login/register
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
