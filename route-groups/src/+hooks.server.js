import { authenticateUser } from "$lib/server/auth"
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	// Stage 1
	//event.locals.user = authenticateUser(event)
	const { cookies } = event


	if (event.url.pathname.startsWith("/account")) {
		if (!cookies.get('logged_in')) {
			throw redirect(303, `/login`);
		}
/* 		if (event.url.pathname.startsWith("/protected/admin")) {
			if (event.locals.user.role !== "ADMIN") {
				throw redirect(303, "/protected")
			}
		} */
	}

	const response = await resolve(event) // Stage 2

	// Stage 3

	return response
}

/* 
import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
	if (!cookies.get('logged_in')) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
} */
