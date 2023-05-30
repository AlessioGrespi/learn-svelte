

<script lang="ts">
	import { enhance } from "$app/forms";
	import Signout from "$lib/components/Signout.svelte";
</script>


<nav>
	<a href="/">home</a>
	<a href="/auth/login">login</a>
	<a href="/auth/signup">signup</a>
	<a href="/profile">profile</a>
    <Signout/>
	</nav>
<slot />

