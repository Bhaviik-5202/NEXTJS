import { NextRequest, NextResponse } from "next/server";

const TOKEN_COOKIE = "token";
const TOKEN_TTL_MS = 60 * 1000;

function createToken(): string {
    return `lab24:${Date.now() + TOKEN_TTL_MS}`;
}

export function GET(request: NextRequest) {
    const redirect =
        request.nextUrl.searchParams.get("redirect") || "/LAB_24/config";

    const destination = new URL(redirect, request.url);
    const response = NextResponse.redirect(destination);

    response.cookies.set(TOKEN_COOKIE, createToken(), {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60,
    });

    return response;
}
