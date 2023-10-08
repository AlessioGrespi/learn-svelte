<script>
	let m = { x: 0, y: 0 };
</script>

<div
	on:pointermove={(e) => {
		m = { x: e.clientX, y: e.clientY }; /* inline way to do the DOM update without needing to script stuff */
	}}
>
	<p>The pointer is at {m.x} x {m.y}</p>
</div>

