<script>
	import Heading from '$lib/components/Heading.svelte';
	import Topics from './Topics.svelte';

	let {
		title,
		sprintNumber,
		content,
		startdate,
		topics
	} = $props();
</script>

<section class="sprint-info p">
	<h1 class="medium-heading">Sprint {sprintNumber}: {title}</h1>
	<div class="p">
		<Topics {startdate} {topics} />
	</div>

	<div class="p medium-body">
		{#if content.html}
			{@html content.html}
		{/if}
	</div>
</section>

<style lang="scss">
	.sprint-info {
		width: max-content;
		max-width: 100%;
		padding: 2rem 1rem;

		border: 1px solid currentColor;
		border-radius: var(--radius);
		box-shadow: var(--box-shadow);
		.p {
			max-width: 700px;
		}
	}
</style>
