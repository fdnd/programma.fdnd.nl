<script>
	import { prettyDate } from '$lib/utils/date'

	let {
		semester,
		sprint,
		nextSprint,
		nextSemester
	} = $props();
	let today = new Date();
	let sprintDate = new Date(sprint.startdate);
	let nextSprintDate = false;
	if (nextSprint) {
		nextSprintDate = new Date(nextSprint.startdate);
	}

	if (!nextSprintDate && nextSemester) {
		nextSprintDate = new Date(nextSemester.startdate);
	}
	let active = $state(today >= sprintDate);
	let past = $state(false);
	if (nextSprintDate && active) {
		active = today < nextSprintDate;
		past = today > nextSprintDate;
	}
</script>

{#if sprint.sprintNumber}
	<li class:active class:past>
		<a data-sveltekit-prefetch href="{semester.slug}/{sprint.slug}">
			<span class="sprint-nr caps">Sprint {sprint.sprintNumber}:</span>
			<strong>{sprint.title}</strong>
		</a>

		<time class="small-tag">
			{#if sprint.startdate}
				{prettyDate(sprint.startdate)}
			{/if}
		</time>
	</li>
{:else}
	<li class="extra" class:active class:past>
		<span class="caps">{sprint.title}</span>
		<time class="small-tag">
			{#if sprint.startdate}
				{prettyDate(sprint.startdate)}
			{/if}
		</time>
	</li>
{/if}

<style lang="scss">
	li {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: first baseline;
		gap: 0.25rem;
		border-radius: 0.25rem;
		transition: 0.1s ease-out background;
		padding: 0.2em 0;
		&:has(:global(a)):hover,
		&:focus-within {
			background-color: var(--accent-color-1);
			padding: 0.2em 0.4em;
			margin: 0 -0.4em;
		}
		&.active {
			background-color: var(--accent-color-1);
			padding: 0.2em 0.4em;
			margin: 0 -0.4em;
		}
		a {
			text-decoration: none;
			&::before {
				content: '';
				position: absolute;
				top: -0.4rem;
				left: -0.4rem;
				right: -0.4rem;
				bottom: -0.4rem;
				z-index: 1;
				transition: 0.1s ease-out background;
			}
		}
		&.past {
			opacity: 0.7;
			time {
				text-decoration: line-through;
			}
		}
	}
	.sprint-nr {
		display: block;
	}
</style>
