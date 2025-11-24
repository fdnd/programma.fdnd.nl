<script>
	import Heading from '$lib/components/Heading.svelte'
	import SprintLink from '$lib/components/program/SprintLink.svelte'

	let { semester, i = 0 } = $props()
	const displayIndex = i + 1; // don't mutate i
</script>

<section class="semester green-on-blue">
	<a href="/{semester.slug}">
		<Heading title={`Semester ${displayIndex}:`} subtitle={semester.title} />
	</a>

	<ol>
		{#each semester.sprints as sprint, index}
			<SprintLink
				{semester}
				{sprint}
				nextSprint={index !== semester.sprints.length - 1 ? semester.sprints[index + 1] : false}
			/>
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
