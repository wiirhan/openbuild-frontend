import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        token: { label: 'Token', type: 'token' },
      },
      async authorize(credentials) {
        return {
          id: '1',
          token: credentials?.token,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user?.token
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken
      }
      return session
    },
  },
  pages: {
    error: '/signin',
    signIn: '/signin',
  },
}