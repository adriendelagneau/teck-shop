
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {


        const match = req.nextUrl.pathname.match(/^\/profile\/([^\/]+)$/);
        const id = match ? match[1] : undefined;


        // Check if the route is "/profile/:id" and if id exists and matches token.user._id

        if (
            id && id !== req.nextauth.token.user._id &&
            req.nextUrl.pathname.startsWith("/profile/")
            // admin may have access to user page ???
        ) {
            console.log("Unauthorized access to profile page");
            return NextResponse.redirect(new URL("/denied", req.url));
        }



        // Check if user.role === admin on the route /dasboard    
        if (
            req.nextUrl.pathname.startsWith("/dashboard") &&
            req.nextauth.token.user.role != "admin"
        ) {
            return NextResponse.redirect(new URL("/denied", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = { matcher: ["/dashboard/", "/profile/:id*"] };


