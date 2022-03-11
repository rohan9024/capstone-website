import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    // Configure one or more authentication providers

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    pages: {
        signIn: "/auth/signin"
    }
    // callbacks: {
    //     async signIn({ account, profile }) {
    //         if (account.provider === "google") {
    //             return profile.email_verified && profile.email.endsWith("@example.com")
    //         }
    //         return true // Do different verification for other providers that don't have `email_verified`
    //     },
    //     async jwt({ token, account }) {
    //         // Persist the OAuth access_token to the token right after signin
    //         if (account) {
    //             token.accessToken = account.access_token
    //         }
    //         return token
    //     },
    //     async session({ session, token, user }) {
    //         // Send properties to the client, like an access_token from a provider.
    //         session.accessToken = token.accessToken
    //         return session
    //     }
    // }
    // ...add more providers here
})