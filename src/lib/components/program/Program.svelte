<script>
	let { title, content } = $props();
</script>

<section class="program p">
	<h1 class="medium-heading">
		{title}
	</h1>
	<div class="p medium-body">
		{@html content.html}
	</div>
</section>

<style lang="scss">
	.program {
		padding: var(--padding-side) var(--padding-side) 0;
		max-width: var(--max-width);
		margin: 0 auto;
		.p {
			max-width: 700px;
		}
	}	
</style>
