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
			<span class="sprint-nr xsmall-body caps">Sprint {sprint.sprintNumber}:</span>
			<strong class="small-body">{sprint.title}</strong>
		</a>

		<time class="background-color-1 small-tag">
			{#if sprint.startdate}
				{prettyDate(sprint.startdate)}
			{/if}
		</time>
	</li>
{:else}
	<li class="extra" class:active class:past>
		<span class="xsmall-body caps">{sprint.title}</span>
		<time class="background-color-1 small-tag">
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
		border: 1px solid var(--accent-color-1);
		transition: 0.1s ease-out background;
		padding: 0.2em 0.4em;
		&:has(:global(a)):hover,
		&:focus-within {
			background-color: var(--accent-color-1);
			time {
				background-color: var(--background);
			}
		}
		&.active {
			background-color: var(--accent-color-1);
			time {
				background-color: var(--background);
			}
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

	.extra {
		background-color: var(--accent-color-1);
		@supports (color: color-mix(in oklch, var(--accent-color-1) 10%, transparent)) {
			background-color: color-mix(in oklch, var(--accent-color-1) 30%, transparent);
			border-color: transparent;
		}
	}
</style>
