<script>
	export let semester;
</script>

<div class="content-block p">
	<h3 class="small-heading">Leerresultaat</h3>
	<div class="p small-body">
		{@html semester.goal.html}
	</div>
</div>

<div class="content-block p">
	<h3 class="small-heading">Inhoud</h3>
	<div class="p small-body">
		{@html semester.content.html}
	</div>
</div>

<style lang="scss">
	.content-block {
		--accent-color: var(--accent-color-1);
		padding: 2rem;
		border-radius: var(--radius);
		background-color: var(--background);
		border: 1px solid var(--color);
		box-shadow: -0.25rem 0.25rem 0 0 var(--accent-color);
		@media (max-width: 750px) {
			padding: 1.5rem 1rem;
		}
	}
</style>
