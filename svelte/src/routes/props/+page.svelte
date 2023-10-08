<script>

	import Props from "../../components/props.svelte";
	import Props2 from "../../components/props2.svelte";

    const pkg = {
        name: 'svelte',
        speed: 'blazing',
        version: 4,
        website: 'https://svelte.dev'
    }
    
</script>

<h1>Props</h1>

<Props answer={42} /> <!-- How to pass in arguments into components -->

<Props />

<Props2 {...pkg} />