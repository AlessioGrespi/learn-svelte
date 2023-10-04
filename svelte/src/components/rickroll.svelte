<script>
	import Nested from "./nested.svelte";

	let src = '/image.gif';
	let name = 'Rick Astley';
</script>

<img {src} alt="{name} dances." />

<Nested/>

<style>
    img {
        color: blue;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>