<script>
    // In any real application, you'll need to pass data from one component down to its children. To do that, we need to declare properties, generally shortened to 'props'. In Svelte, we do that with the export keyword.
    // export let answer; this is without a default value
    export let answer = 'a mystery'; // this allows us to assign a default value if nothing has been passed in. 
</script>

<p>The answer is {answer}</p>