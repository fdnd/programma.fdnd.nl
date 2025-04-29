<script>
	import Heading from '$lib/components/Heading.svelte';
	import SprintLink from '$lib/components/program/SprintLink.svelte';

	export let semester, i, nextSemester;
</script>

<div class="semester">
	<a class="semester-link" href="/{semester.slug}">
		<Heading title="Semester {++i}:" subtitle={semester.title} />
	</a>

	<ol>
		{#each semester.sprints as sprint, index}
			<SprintLink
				{semester}
				{sprint}
				{nextSemester}
				nextSprint={index !== semester.sprints.length ? semester.sprints[index + 1] : false}
			/>
		{/each}
	</ol>
</div>

<style lang="scss">
	.semester {
		scroll-snap-align: start;
		scroll-margin: calc(var(--padding-side) + 1rem);
		padding: 1rem;
		border: 1px solid currentColor;
		border-radius: var(--radius);
		--box-shadow-color: color-mix(in oklch, var(--accent-color-1) 30%, transparent);
		box-shadow: -0.25rem 0.25rem 0 0 var(--box-shadow-color);
		transition: box-shadow 0.2s ease-out;
		&:has(ol li.active) {
			--box-shadow-color: var(--accent-color-1);
		}
		&:has(.semester-link:hover) {
			box-shadow: -0.5rem 0.5rem 0 0 var(--box-shadow-color);
		}
		@media (max-width: 750px) {
			width: 100%;
			max-width: calc(100vw - 4rem);
		}
		:global(h2) {
			font-size: 1.25rem;
			line-height: 1.1;
			@media (max-width: 750px) {
				font-size: 1.25rem;
			}
		}
		:global(h2 > span) {
			font-size: 0.6em;
			letter-spacing: 0;
			text-transform: uppercase;
		}
		a {
			text-decoration: none;
			display: inline-block;
		}
		ol {
			display: flex;
			flex-direction: column;
			list-style-type: '';
			gap: 0.3rem;
			padding: 0;
			margin-top: 1rem;
			min-width: 21rem;
		}
	}
</style>
