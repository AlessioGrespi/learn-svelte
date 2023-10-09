import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const role = cookies.get('usertype');

    if (role !== 'admin'){
        if (role === 'pleb'){
            throw redirect(307,'/protected/pleb');
        }
        throw redirect(307,'/');
    }
}