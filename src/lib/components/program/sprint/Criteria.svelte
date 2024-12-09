<script>
	import Heading from '$lib/components/Heading.svelte';

	export let criteria;
</script>

{#if criteria}
	<section class="purple-on-blue rounded col-span-1 criteria">
		<Heading title="Gedragscriteria" />

		<div>
			{@html criteria.html}
		</div>
		
	</section>
{/if}

<style>
	section {
		position: relative;
		margin-bottom: 2rem;
		background-color: var(--blueberry);
		border: 1px solid var(--lavender);
		color: var(--lavender);
		margin-left: var(--shadow);
		max-width: 48rem;
	}

	section div {
		max-height:12rem;
		overflow-y:auto;
		font-size: 1rem;
	}

	:global(section summary h2::selection, section div::selection) {
		background-color: var(--lavender);
		color: var(--blueberry);
	}
	section::after {
		content: '';
		position: absolute;
		z-index: -1;
		top: var(--shadow);
		left: calc(var(--shadow) * -1);
		right: var(--shadow);
		bottom: calc(var(--shadow) * -1);
		border: 1px solid currentColor;
		border-radius: var(--rounded);
	}
	details summary {
		cursor: pointer;
	}

	:global(details li) {
		margin: 0.5em 0 0;
		font-size: 1rem;
	}
	:global(details summary h2) {
		display: inline-block;
	}
	:global(section.criteria ul) {
		margin-left: 0;
	}
	:global(section.criteria ul li) {
		list-style: none;
	}
</style>
