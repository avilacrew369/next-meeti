import {betterAuth} from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { db } from '../db'
import * as schema from '../db/schema/auth-schema'
import { AuthEmailService } from '../emails/services/AuthEmailService'


export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true,
        schema,
    }),
      emailAndPassword: {
        enabled: true,
        requireEmailVerification: true
    
    },
    emailVerification: {
        sendOnSignIn: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, url}) => {
         await AuthEmailService.sendVerificationEmail({
            name: user.name,
            email: user.email,
            url: url
         })
        }
    },
  
    plugins: [nextCookies()],
})
