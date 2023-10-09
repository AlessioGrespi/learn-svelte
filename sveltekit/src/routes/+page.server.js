export function load({ cookies }){
    const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/'})

    return {
        visited
    }
}


export function load(event) {
	return {
		message: `the answer is ${event.locals.answer}`
	};
}
