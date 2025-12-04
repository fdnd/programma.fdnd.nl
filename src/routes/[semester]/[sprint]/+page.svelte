<script>
	import Content from '$lib/components/program/sprint/Content.svelte';
	import Indicators from '$lib/components/program/sprint/Indicators.svelte';
	import Tasks from '$lib/components/program/sprint/Tasks.svelte';
	import Schedule from '$lib/components/program/sprint/Schedule.svelte';
	import Button from '$lib/components/partials/Button.svelte';
	import StudentWorks from '$lib/components/program/sprint/StudentWorks.svelte';
	let { data } = $props();
	const {
		title,
		sprintNumber,
		startdate,
		content,
		weekPlans,
		topics,
		tasks,
		prevSprint,
		nextSprint,
		slug,
		semester,
		indicators
	} = data;
</script>

<div class="sprint-page">
	<Content {title} {sprintNumber} {content} {startdate} {topics} />
	<Indicators {indicators} />
	<Tasks {tasks} />
</div>

<Schedule {weekPlans} />

<div class="button-row nav">
	{#if prevSprint}
		<Button href="/{prevSprint.semester.slug}/{prevSprint.slug}">
			Vorige sprint<span>: {prevSprint.title}</span>
		</Button>
	{/if}
	{#if nextSprint}
	<Button href="/{nextSprint.semester.slug}/{nextSprint.slug}">
		Volgende sprint<span>: {nextSprint.title}</span>
	</Button>
	{/if}
</div>

<div class="button-row">
	<Button href="/api/{semester.slug}/{slug}" type="">JSON <span>endpoint: {title}</span></Button>
</div>


<style lang="scss">
	.sprint-page,
	.button-row {
		display: flex;
		flex-wrap: wrap;
		align-items: start;
		gap: var(--padding-top);
		padding: var(--padding-top) var(--padding-side);
		max-width: var(--max-width);
		margin: 0 auto;
	}
	.nav {
		justify-content: space-between;
	}
</style>
