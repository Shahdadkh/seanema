import { NextResponse } from "next/server";

export default function middleware(req) {
  const { cookies, url } = req;

  let token = cookies.get("token")?.value;

  //if (token) token = JSON.parse(token);

  // if (url.includes("/Home") && token) {
  //   const redirect_url = new URL("/Home", url);
  //   return NextResponse.redirect(redirect_url);
  // }
  if (url.includes("/Home") && !token) {
    const redirect_url = new URL("/Login", url);
    return NextResponse.redirect(redirect_url);
  }

  return NextResponse.next();
}
