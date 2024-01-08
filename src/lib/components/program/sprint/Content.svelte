<script>
	import Heading from '$lib/components/Heading.svelte';
	import Topics from './Topics.svelte';

	export let title, sprintNumber, content, startdate, topics;
</script>

<section class="rounded">
	<Heading title="Sprint {sprintNumber}: {title}" />
	<Topics {startdate} {topics} />

	<div>
		{#if content}
			{@html content.html}
		{/if}
	</div>
</section>

<style>
	section {
		position: relative;
		width: 40%;
		flex-grow: 1;
		max-width: 48rem;
		height: max-content;
		background-color: var(--blueberry);
		color: var(--turquoise);
		border: 1px solid var(--turquoise);
		margin-left: var(--shadow);
	}
	:global(section h2::selection, section p::selection) {
		background-color: var(--turquoise);
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
	:global(section p) {
		font-size: 1rem;
	}
	@media (min-width: 40em) {
		section {
			grid-column: 1 / -1;
		}
	}
</style>
