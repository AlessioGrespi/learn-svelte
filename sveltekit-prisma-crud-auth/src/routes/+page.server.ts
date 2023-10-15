import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user,
	}
}

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const email = 'a@a.com'; // Replace with the email from the form submission
		const password = 'pass'; // Replace with the provided password
		//const email = Object.fromEntries(await request.formData()) 
		//console.log('aaaaa', (email))
		try {
			const user = await prisma.user.findUniqueOrThrow({
				where: { email: email } // Find the user by email
			});

			const passwordDB = await prisma.password.findUniqueOrThrow({
				where: { userId: user.id } // Find the user by email
			});
			
			console.log(user)
			console.log(passwordDB);
			console.log(password)

			if (passwordDB.password !== password){
				throw error(500, "error")
			}
			
		} catch (err) {
			console.error('An error occurred:', err);
			console.log("ERROR ERROR ERROR")
			return fail(500, { message: "An error occurred" });
		}

		// Return the appropriate response
		return {
			status: 202,
		};

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

