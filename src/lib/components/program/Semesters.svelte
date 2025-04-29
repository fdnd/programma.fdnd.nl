<script>
	import Semester from '$lib/components/program/Semester.svelte';
	import { onMount } from 'svelte';

	export let semesters;
	export let subtitle;
</script>

<section class="semesters-sprints">
	<h2 class="small-heading">{subtitle}</h2>

	<div class="scroll-container">
		<span class="scroll-label sr-only">scroll >>> </span>
		{#each semesters as semester, i}
			<Semester
				{semester}
				{i}
				nextSemester={i !== semesters.length - 1 ? semesters[i + 1].sprints[0] : false}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	.semesters-sprints {
		h2 {
			padding: var(--padding-top) var(--padding-side) 0;
		}
		margin: 0 auto;
		.scroll-container {
			padding: 1rem;
			margin-left: -1rem;
			display: flex;
			padding: var(--padding-top) var(--padding-side) 1rem;
			gap: var(--padding-top);
			flex-wrap: nowrap;
			overflow-y: visible;
			overflow-x: auto;
			scroll-snap-type: x proximity;
		}
	}
</style>
