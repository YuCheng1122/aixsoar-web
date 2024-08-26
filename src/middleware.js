export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

export default function middleware(request) {
  // You can add custom middleware logic here if needed in the future
  return Promise.resolve();
}

// import NextAuth from "next-auth";
// import { authConfig } from "./lib/auth.config";

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// };

// // FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middlewarea