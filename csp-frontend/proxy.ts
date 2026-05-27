import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const protectedRoutes = [
    "/dashboard",
    "/courses",
    "/practice",
    "/profile",
    "/notes",
    "/resources",
    "/admin",
  ];

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/courses/:path*",
    "/practice/:path*",
    "/profile/:path*",
    "/notes/:path*",
    "/resources/:path*",
    "/admin/:path*",
  ],
};