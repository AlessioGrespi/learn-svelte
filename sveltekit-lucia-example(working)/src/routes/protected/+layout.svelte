<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;
</script>


<a href="/protected/ass">ass</a>
<a href="/protected/yourmum">yourmum</a>

<p>This page is protected and can only be accessed by authenticated users.</p>
<pre class="code">
{JSON.stringify(data.user, null, 2)}
</pre>

<form use:enhance method="post" action="/api/signout">
	<input type="submit" class="button" value="Sign out" />
</form>

<slot/>