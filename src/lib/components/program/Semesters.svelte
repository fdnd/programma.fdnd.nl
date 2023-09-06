<script>
	import Semester from '$lib/components/program/Semester.svelte';
	import { onMount } from 'svelte';
	export let semesters;
	function toggleDates({ target }) {
		if (target.nodeName == 'INPUT') {
			document.body.classList.toggle('expand');
		}
	}
	const addDates = semesters.map((semester, i) => {
		semester.startDate = semesters[i].sprints[0].startdate;
		if (i == 0 || i == 2) {
			semester.endDate = semesters[i + 1].sprints[0].startdate;
		} else {
			const lastSchoolday = '2024-09-04';
			semester.endDate = lastSchoolday;
		}
		semester.semesterNumber = i + 1;
		return semester;
	});
	const newSemesters = {
		firstHalf: [addDates[0], addDates[2]],
		secondHalf: [addDates[1], addDates[3]]
	};

	onMount(() => {
		let t = new Date(Date.now());
		const todaysDate = document.getElementById(`date-${t.getDate()}-${t.getMonth() + 1}`)
			.previousElementSibling
			? document.getElementById(`date-${t.getDate()}-${t.getMonth() + 1}`).previousElementSibling
			: document.getElementById(`date-${t.getDate()}-${t.getMonth() + 1}`);
		const scrollTrack = document.querySelector('.scroll-track');

		scrollTrack.scrollTo({ left: todaysDate.offsetLeft });
	});
</script>

<div class="semesters-sprints">
	<input type="checkbox" id="show-hide-dates" class="toggle" on:change={toggleDates} /><label
		for="show-hide-dates"><span>Show/hide dates</span></label
	>

	<div class="scroll-track">
		<!-- horizontal scroll voor semester lijsten -->
		<div class="first-half">
			{#each newSemesters.firstHalf as semester, i}
				<Semester {semester} {i} />
			{/each}
		</div>
		<div class="second-half">
			{#each newSemesters.secondHalf as semester, i}
				<Semester {semester} {i} />
			{/each}
		</div>
	</div>
</div>

<style>
	.semesters-sprints {
		position: relative;
		margin: 0;
		padding: 2em 0 0;
		display: flex;
		flex-direction: column;
	}

	.scroll-track {
		position: relative;
		overflow-x: auto;
		display: flex;
		flex-direction: row;
		margin: 1rem 0 0;
		width: 100%;
		padding-bottom: 2rem;
		scroll-behavior: smooth;
	}

	input[type='checkbox'].toggle {
		opacity: 0;
		position: absolute;
		left: -9000px;
		top: -9000px;
	}
	input[type='checkbox'].toggle + label {
		position: relative;
		align-self: end;
		width: 10.75em;
		display: flex;
		align-items: center;
		cursor: pointer;
		color: white;
		font-family: helvetica;
		font-size: 1em;
	}
	input[type='checkbox'].toggle + label span {
		display: none;
	}
	input[type='checkbox'].toggle + label::before {
		content: '';
		width: 10.75em;
		height: 1.325em;
		border: solid 2px var(--turquoise);
		border-radius: var(--pilled);
		transition: background-color 200ms ease-in-out;
	}
	input[type='checkbox'].toggle + label::after {
		content: 'show all dates'; /* \2715 x */
		position: absolute;
		width: 8em;
		height: 1.5em;
		background-color: var(--blueberry);
		color: var(--turquoise);
		border: solid 2px var(--turquoise);
		border-radius: var(--pilled);
		font-weight: normal;
		font-size: 0.9em;

		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
	}
	input[type='checkbox'].toggle:checked + label::after {
		content: 'hide all dates'; /* \2713 v */
		transform: translateX(50%);
		background-color: var(--turquoise);
		color: var(--blueberry);
	}
	input[type='checkbox'].toggle:hover + label::after,
	input[type='checkbox'].toggle:checked:hover + label::after {
		background-color: var(--turquoise);
		/* border-color: var(--call-to-action); */
		color: var(--blueberry);
	}
	input[type='checkbox'].toggle:checked + label::before {
		background-color: var(--turquoise);
		opacity: 0.5;
		border-color: var(--turquoise);
	}
</style>
