
import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user,
	}
}

export const actions: Actions = {
	login: async ({ request }) => {

 		const email = Object.fromEntries(await request.formData()) 

		console.log('aaaaa', (email))

		try {
			const users = await prisma.users.findUniqueOrThrow({ // throws error when email not existing
				where: { email: String('b@a.com') } // To do next, accept form submission
			})
			//console.log("db read")
			//console.log(users)
		} catch (err) {
			console.log("No Email of this type")
			//console.error(err)
			return fail(500, { message: "No Email found" })
		}
		return {
			status: 202,
		}
	}


}

	/* login: async ({ cookies }) => { //set cookies
		cookies.set("auth", "regularusertoken", {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})

		throw redirect(303, "/")
	}, */

