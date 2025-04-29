<script>
	import Heading from '$lib/components/Heading.svelte';
	import { prettyDate } from '$lib/utils/date';

	export let semester, sprint, nextSprint, nextSemester;
	let today = new Date();
	let sprintDate = new Date(sprint.startdate);
	let nextSprintDate = false;
	if (nextSprint) {
		nextSprintDate = new Date(nextSprint.startdate);
	}

	if (!nextSprintDate && nextSemester) {
		nextSprintDate = new Date(nextSemester.startdate);
	}
	let active = today >= sprintDate;
	let past = false;
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
		&:has(a):hover,
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

	// li a {
	// 	font-size: 1rem;
	// 	line-height: 1.3;
	// 	padding: 0.2em 0.1em;
	// 	transition: 0.1s ease-out background, 0.1s ease-out color;
	// 	border-radius: 0.2em;
	// }
	// li:not(.extra):hover,
	// li a:focus {
	// 	background-color: var(--turquoise);
	// 	color: var(--blueberry);
	// }
	// a:focus {
	// 	background-color: transparent;
	// }
	// li a > span {
	// 	display: block;
	// 	font-size: 0.7em;
	// 	letter-spacing: 0;
	// 	text-transform: uppercase;
	// }
	// li {
	// 	position: relative;
	// 	display: flex;
	// 	justify-content: space-between;
	// 	font-size: 1rem;
	// 	align-items: baseline;
	// 	border-radius: 0.2em;
	// }
	// :global(li.active) {
	// 	background-color: rgba(102, 229, 191, 0.4);
	// }
	// :global(li.past) {
	// 	opacity: 0.75;
	// }

	//   :global(li.past time) {
	//       text-decoration: line-through;
	//   }
	// li a,
	// li > span {
	// 	display: inline-block;
	// 	white-space: nowrap;
	// 	overflow: hidden;
	// 	text-overflow: ellipsis;
	// 	text-decoration: none;
	// }
	// li.extra {
	// 	display: none;
	// 	padding: 0.25em 0.1em;
	// 	border-radius: 0.5rem;
	// }
	// li.extra span {
	// 	font-size: 0.7em;
	// 	line-height: 1.2;
	// 	text-transform: uppercase;
	// }
	// li.extra time {
	// 	color: inherit;
	// }
	// :global(body.expand) li.extra {
	// 	display: flex;
	// }

	// a::before {
	// 	content: '';
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	z-index: 1;
	// }
	// @media (min-width: 25em) {
	// 	li a,
	// 	li span {
	// 		width: 82%;
	// 	}
	// }
</style>
