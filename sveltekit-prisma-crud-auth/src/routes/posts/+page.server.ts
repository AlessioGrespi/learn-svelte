import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

import { error, fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async () => {

	return {
		posts: await prisma.post.findMany(),
	}
}


export const actions: Actions = {

	deletePost: async ({ url }) => {
		const id = url.searchParams.get("id")

		if (!id) {
			return fail(400, { message: "Invalid request" })
		}

		try {
			await prisma.post.delete({
				where: {
					id: id,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, {
				message: "Something went wrong deleting your post",
			})
		}

		return {
			status: 200,
		}
	},
}
