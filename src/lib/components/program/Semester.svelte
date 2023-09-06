<script>
	import Heading from '$lib/components/Heading.svelte';
	import SprintLink from '$lib/components/program/SprintLink.svelte';
	import { prettyDate, datesBetween, daysBetween, formatMonths } from '$lib/utils/date';

	export let semester, i;
	const sprints = semester.sprints.map((sprint, i) => {
		if (semester.sprints[i + 1]) {
            let newDate
            let eD
			if (semester.sprints[i + 1].sprintNumber) {
                eD = new Date(semester.sprints[i + 1].startdate)
			} else if (semester.sprints[i + 2]) {
                eD = new Date(semester.sprints[i + 2].startdate)
			} else {
                eD = new Date(semester.endDate)
			}
            newDate = new Date(eD.setDate(eD.getDate() - 2));
            sprint.endDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}` 
		} else {
			sprint.endDate = semester.endDate;
		}
		sprint.lengthInDays = daysBetween(sprint.startdate, sprint.endDate);
		if (!sprint.sprintNumber) {
			sprint.daysBefore = daysBetween(semester.startDate, sprint.startdate);
		}
		return sprint;
	});
	const today = Date.now();
	const todayPretty = prettyDate(today);
	const sprintDates = datesBetween(semester.startDate, semester.endDate);
	const sprintMonths = formatMonths(semester.startDate, semester.endDate);

	
</script>

<div class="sticky-heading">
	<Heading title="Semester {semester.semesterNumber}" />
	<a href="/{semester.slug}">
		{semester.title}
	</a>
</div>
<section class="semester" data-semester={semester.semesterNumber}>
	{#if sprintDates.length}
		<div class="months">
			{#each sprintMonths as month}
				<div class="month" style="--width: {month.width}">
					<div class="sticky-part">
						{month.prettyName}
					</div>
				</div>
			{/each}
		</div>
		<div class="dates" aria-hidden="true">
			{#each sprintDates as date, i}
				<div
					class="day {todayPretty == date.prettyDate ? 'active' : ''}"
					id="date-{date.day}-{date.month}"
					date-month={date.month}
				>
					{date.day}
				</div>
			{/each}
		</div>
	{/if}
	<div class="calendar">
		{#each sprints as sprint}
			<SprintLink {semester} {sprint} />
		{/each}
	</div>
</section>

<style>
	.semester {
		position: relative;
		margin-right: 1rem;
		border: none;
		font-size: 0.9em;
		padding: 0;
		min-height: 220px;
		--grid: max(30px, calc(100vw / 24 * 0.75));
		--accent: var(--turquoise);
	}
	[data-semester='3'],
	[data-semester='4'] {
		--accent: var(--lavender);
	}
	:global(.semester + .sticky-heading) {
		margin-top: 2rem;
	}
	.sticky-heading {
		position: sticky;
		left: 0;
		display: block;
		width: max-content;
		padding: 0 0 1rem;
	}

	.sticky-heading :global(h2) {
		margin-bottom: 0;
	}
	.months {
		display: flex;
		width: max-content;
	}
	.month {
		width: calc(var(--grid) * var(--width));
	}
	.sticky-part {
		width: max-content;
		position: sticky;
		left: 0;
	}
	.dates {
		display: flex;
		width: max-content;
		margin-top: 2em;
	}

	.dates::before {
		content: '';
		position: absolute;
		inset: 2rem 0 0;
		pointer-events: none;
		border: 1px solid currentColor;
		border-radius: 0.5rem;
		background: repeating-linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 0 calc(var(--grid) - 1px),
			rgba(255, 255, 255, 1) calc(var(--grid) - 1px) var(--grid)
		);
		opacity: 0.2;
	}
	.dates::after {
		content: '';
		position: absolute;
		inset: 2rem 0 0;
		pointer-events: none;
		border: 1px solid currentColor;
		border-radius: 0.5rem;
		background: repeating-linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 0 calc(var(--grid) * 5 - 1px),
			rgba(255, 255, 255, 1) calc(var(--grid) * 5 - 1px) calc(var(--grid) * 5)
		);
	}
	.day {
		position: relative;
		text-align: center;
		width: var(--grid);
		font-size: 0.8em;
	}
	.day.active {
		background: var(--turquoise);
		color: var(--blueberry);
		border-radius: 1rem;
	}

	.calendar {
		display: flex;
		width: max-content;
	}
	/* ol {
		list-style: none;
		margin: 0;
		width: 14rem;
	} */

	/* @media (min-width: 25em) {
		ol {
			width: 21rem;
		}
	} */
</style>
