<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="navbar">
	<a href="/">Home</a>
	<a href="/protected">Protected</a>
	{#if data.email}
	<form action="/logout" method="POST">
		<button type="submit">Logout</button>
	</form>
	{:else}
		<a href="/signup">Signup</a>
	{/if}
</div>

<slot />
