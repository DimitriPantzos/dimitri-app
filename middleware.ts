import { NextRequest, NextResponse } from "next/server";

/**
 * Serves Eveanna's Coloring Book at the root of the eveanna.dimitri.app
 * subdomain by rewriting "/" to the /coloring route. The main dimitri.app
 * site is unaffected.
 */
export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0];
  const { pathname } = req.nextUrl;

  if (host.startsWith("eveanna.") && pathname === "/") {
    return NextResponse.rewrite(new URL("/coloring", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
