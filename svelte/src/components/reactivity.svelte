<script>
    let count = 0;
    $: doubled = count * 2;

    // $ is used for stuff that needs to be recalculated/redone every time something changes

    $: {
        console.log('sup bro the count is ${count}');
        console.log('this iwll be logged whenever something changes');
    }

    $: if (count >= 10){
        alert('count is dangerously high');
        count = 0;
    }

    function increment() {
        count += 1;
        // event handler code goes here
    }

    let numbers = [1, 2, 3, 4];

    function addNumber() {
        numbers = [...numbers, numbers.length + 1];
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0) // fancy JS not directly special Svelte stuff
</script>

<button on:click={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<br>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
    Add a number
</button>