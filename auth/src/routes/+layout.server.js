export function load({ cookies }) {
    const user = cookies.get('user');
    const usertype = cookies.get('usertype');

    cookies.set('user', 'boss', { path: '/' })
    cookies.set('usertype', 'pleb', { path: '/' })

	return {
		user,
        usertype,
	};
}