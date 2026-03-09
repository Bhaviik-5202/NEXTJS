import { NextRequest, NextResponse } from "next/server";

const TOKEN_COOKIE = "token";
const TOKEN_TTL_MS = 60 * 1000;

function createToken(expiry: number = Date.now() + TOKEN_TTL_MS): string {
  return `lab24:${expiry}`;
}

function parseTokenExpiry(token: string): number | null {
  const [prefix, exp] = token.split(":");

  if (prefix !== "lab24") {
    return null;
  }

  const expiry = Number(exp);
  return Number.isFinite(expiry) ? expiry : null;
}

function getToken(request: NextRequest): string | null {
  const cookieToken = request.cookies.get(TOKEN_COOKIE)?.value;
  if (cookieToken) {
    return cookieToken;
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice(7).trim();
  }

  const queryToken = request.nextUrl.searchParams.get("token");
  return queryToken;
}

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname.startsWith("/LAB_24/login")) {
    return NextResponse.next();
  }

  if (pathname === "/LAB_24/config" && !searchParams.has("pageNo")) {
    const url = request.nextUrl.clone();
    url.searchParams.set("pageNo", "0");
    return NextResponse.redirect(url);
  }

  const token = getToken(request);

  if (!token) {
    const loginUrl = new URL("/LAB_24/login", request.url);
    loginUrl.searchParams.set(
      "redirect",
      `${pathname}${request.nextUrl.search || ""}`
    );
    return NextResponse.redirect(loginUrl);
  }

  const expiry = parseTokenExpiry(token);

  if (!expiry) {
    const loginUrl = new URL("/LAB_24/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.next();

  if (Date.now() > expiry) {
    response.cookies.set(TOKEN_COOKIE, createToken(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60,
    });
    response.headers.set("x-token-refreshed", "true");
  }

  return response;
}

export const config = {
  matcher: ["/LAB_24/:path*"],
};
