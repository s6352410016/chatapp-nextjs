import { withAuth } from "next-auth/middleware";

// not login will redirect to login page
export default withAuth({
    pages: {
        signIn: "/"
    }
});

export const config = {
    matcher: [
        "/users/:path*"
    ]
}