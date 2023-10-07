<script>
	let m = { x: 0, y: 0 };

	function handleMove(event) { /* JS Code to handle the update of stuff. */
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:pointermove={handleMove}> <!-- on: operator allows for something to be updated when the thing in the on is updated -->
	<p>The pointer is at {m.x} x {m.y}</p>
</div>
