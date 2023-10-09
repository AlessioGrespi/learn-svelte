import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const role = cookies.get('usertype');
    const user = cookies.get('user');

    if (!user){
        throw redirect(307,'/');
    }

    if (role !== 'admin' && role !== 'pleb') {
        throw redirect(307, '/');
    }
}