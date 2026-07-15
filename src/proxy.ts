import { getUserSession } from "@/utils/session";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const user = await getUserSession();
  if (user) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
}

export const config = {
  matcher: ["/players/add", "/players/edit", "/players/manage"],
};
