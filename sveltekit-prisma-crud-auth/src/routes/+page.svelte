<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
    {#if data.email}
		<p>Welcome, {data.email}</p>
	{:else}
		<div>
			<form action="?/login" method="POST">
                <label>
                    Email
                    <input name="email" id="email" type="email">
                </label>
               <label>
                    Password
                    <input name="password" id="password" type="password">
                </label>
				<button type="submit">Login</button>
			</form>
		</div>
	{/if}
</main>
