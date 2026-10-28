import { auth } from "./auth";
import { headers } from "next/headers";

// export const instant = false;
export async function getServerSession() {

    const session = await auth.api.getSession({
        headers: await headers(),
        // force: "auto"

    })
    return session

}
export async function requireAuth() {
    const session = await getServerSession()


    return {
        session,
        isAuth: session ? true : false
    }
}

