<script>
	import Heading from '$lib/components/Heading.svelte';
	import SprintLink from '$lib/components/program/SprintLink.svelte';

	export let semester, i;
</script>

<section class="semester green-on-blue">
	<a href="/{semester.slug}">
		<Heading title="Semester {++i}:" subtitle={semester.title} />
	</a>

	<ol>
		{#each semester.sprints as sprint, index}
			<SprintLink {semester} {sprint} nextSprint={index !== semester.sprints.length ? semester.sprints[index + 1] : false} />
		{/each}
	</ol>
</section>

<style>
	section.semester {
		margin: 0 1.5rem 0 0;
		scroll-snap-align: start;
		padding: 0;
		border: none;
		scroll-margin: 1rem;
	}

	@media (max-width: 750px) {
		section.semester {
			width: 100%;
			max-width: calc(100vw - 4rem);
		}
	}
	:global(section.semester h2) {
		font-size: 1.25rem;
		line-height: 1.1;
		margin-left: 1.25rem !important;
	}
    @media (max-width: 750px) {
        :global(section.semester h2) {
		font-size: 1.25rem;
	}
    }
	:global(section.semester h2 > span) {
		font-size: 0.6em;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	section.semester > a {
		text-decoration: none;
		display: inline-block;
		margin: 0 0 0.5rem;
	}
	
	section.semester > a:focus {
		color: var(--blueberry);
	}
	ol {
		border: 1px var(--turquoise) solid;
		border-radius: var(--rounded);
		list-style: none;
		margin: 1rem .25rem 0;
		padding: 1rem;
		width: 100%;
	}
	@media (min-width: 50rem) {
		section.semester {
			scroll-margin: 2rem;
		}
	}
	@media (min-width: 25em) {
		ol {
			width: 21rem;
		}
	}
</style>
