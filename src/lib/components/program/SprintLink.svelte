<script>
	import { prettyDate } from '$lib/utils/date'

	let { semester, sprint, nextSprint } = $props();
	const today = new Date();
	const sprintDate = new Date(sprint.startdate)
	let nextSprintDate = false
	if (nextSprint) {
		nextSprintDate = new Date(nextSprint.startdate)
	}
	let active = $state(today >= sprintDate)
	let past = $state(false)
	if (nextSprintDate && active) {
		active = today < nextSprintDate
		past = today > nextSprintDate
	}
</script>

{#if sprint.sprintNumber}
	<li class:active class:past>
		<a data-sveltekit-prefetch href="{semester.slug}/{sprint.slug}">
			<span>Sprint {sprint.sprintNumber}:</span>
			<strong>{sprint.title}</strong>
		</a>

		<time class="rounded blue-on-green">
			{#if sprint.startdate}
				{prettyDate(sprint.startdate)}
			{/if}
		</time>
	</li>
{:else}
	<li class="extra" class:active class:past>
		<span>{sprint.title}</span>
		<time class="rounded blue-on-green">
			{#if sprint.startdate}
				{prettyDate(sprint.startdate)}
			{/if}
		</time>
	</li>
{/if}

<style>
	
</style>