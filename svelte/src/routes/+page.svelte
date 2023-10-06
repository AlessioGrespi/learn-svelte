<script>
	
    import Logic from "../components/Logic.svelte";
	import Logic2 from "../components/Logic2.svelte";
	import Logic4 from "../components/Logic4.svelte";
import Props from "../components/props.svelte";
	import Props2 from "../components/props2.svelte";
    import Reactivity from "../components/reactivity.svelte";
    import Rickroll from "../components/rickroll.svelte";

    const pkg = {
        name: 'svelte',
        speed: 'blazing',
        version: 4,
        website: 'https://svelte.dev'
    }

</script>

<Rickroll/>

<Reactivity/>

<Props answer={42} /> <!-- How to pass in arguments into components -->

<Props />

<Props2 {...pkg} />

<Logic />

<Logic2 />

<Logic4 />
