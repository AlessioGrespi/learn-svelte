import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const role = cookies.get('usertype');

    if (role !== 'pleb'){
        if (role === 'admin'){
            throw redirect(307,'/protected/admin');
        }
        throw redirect(307,'/');
    }
}