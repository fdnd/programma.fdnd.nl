<script>
	import SprintLink from '$lib/components/program/SprintLink.svelte';

	let { semester, i } = $props();
</script>


	<a href="/{semester.slug}">
		<h3>
			<span>Semester {++i}</span>
			{#if semester.title !== ''}
				<strong>{semester.title}</strong>
			{/if}
		</h3>
	</a>

	<ol>
		{#each semester.sprints as sprint, index}
			<SprintLink {semester} {sprint} nextSprint={index !== semester.sprints.length ? semester.sprints[index + 1] : false} />
		{/each}
	</ol>


<style>
	a {
		text-decoration: none;
		
	}
	a:hover {
		background-color: #fff;
	}
	h3 {
		margin: 0 0 .5rem;
	}
	h3 span {
		display:block;
		font-weight: normal;
		font-size: .8em;
	}
</style>