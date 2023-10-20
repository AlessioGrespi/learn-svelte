<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	
	$: ({ posts } = data)
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

	<div>
		<h2>Posts:</h2>
		{#each posts as post}
			<article>
				<header>{post.title}</header>
				<p>
					{post.content}
				</p>
<!-- 				<form action="?/deleteArticle&id={post.id}" method="POST">
					<button type="submit" class="outline secondary">Delete post</button>
				</form>
				<a href="/{post.id}" role="button" class="outline constrast" style="width: 100%;"
					>Edit post</a
				> -->
			</article>
		{/each}
	</div>







</main>
