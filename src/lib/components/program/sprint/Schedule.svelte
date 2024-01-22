<script>
	import Heading from '$lib/components/Heading.svelte';
	import { prettyDate, longDate } from '$lib/utils/date.js';

	export let weekPlans;

	const checkKeywords = (content) => {
		const strings = [
			'sprintplanning',
			'kickoff',
			'workshop',
			'opdrachtgever',
			'code review',
			'retrospect ',
			'wrap-up',
			'review'
		];
		let newString = '';
		if (content) {
			const splitted = content.split('<p>');
			splitted.forEach((paragraph) => {
				let toReplace = strings.filter((s) => {
					if (paragraph.toLowerCase().includes(s)) {
						return s.replace('we ♥ web', 'we love web', s).replaceAll(' ', '-', s);
					}
				});
				let classes = toReplace.join(' ');
				paragraph = '<p>' + paragraph;
				newString += paragraph.replace('<p>', `<p class="${classes}">`, paragraph);
			});
		}

		return newString;
	};

	const plans = [];
	weekPlans.forEach((plan) => {
		let startDate = new Date(plan['mondayDate']);
		const week = [
			{
				date: startDate,
				weekDay: 'Maandag',
				content: checkKeywords(plan['monday'].html)
			},
			{
				date: addDays(startDate, 1),
				weekDay: 'Dinsdag',
				content: checkKeywords(plan['tuesday'].html)
			},
			{
				date: addDays(startDate, 2),
				weekDay: 'Woensdag',
				content: checkKeywords(plan['wednesday'].html)
			},
			{
				date: addDays(startDate, 3),
				weekDay: 'Donderdag',
				content: checkKeywords(plan['thursday'].html)
			},
			{
				date: addDays(startDate, 4),
				weekDay: 'Vrijdag',
				content: checkKeywords(plan['friday'].html)
			}
		];
		plans.push(week);
	});

	function addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);

		return result;
	}
</script>

{#if weekPlans && weekPlans.length > 0}
	<section>
		<Heading title="Sprint planning" />
		{#each plans as week, i}
			<div class="week-container">
				<h3>Week {i + 1}</h3>
				<div class="week">
					{#each week as day, i}
						<div class="day day--{day.weekDay}">
							<h4 class="weekday">
								{day.weekDay} <span>{prettyDate(day.date)}</span>
							</h4>
							<div data-label="{day.weekDay} {prettyDate(day.date)}">{@html day.content}</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</section>
{/if}

<style>
	section {
		padding: 0;
		margin: 1rem 0 0;
	}

	section > :global(h2) {
		padding-left: 1rem;
	}
	.week-container {
		padding: 0 1rem 2rem;
	}

	.week + .week {
		margin-top: 2rem;
	}

	h3 {
		position: sticky;
		left: 1rem;
		font-weight: normal;
		margin-top: 0;
	}

	.weekday {
		position: sticky;
		top: 0;
		z-index: 1;
		font-size: 1.125rem;
		width: 100%;
		text-transform: uppercase;
		margin: 0;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
		background: var(--blueberry);
	}
	.day div {
		margin-left: -1rem;
	}

	.day + .day {
		margin-top: 1rem;
	}
	.day :global(p) {
		--border: var(--white);
		position: relative;
		font-size: 1rem;
		padding-left: 1rem;
	}
	.day :global(p::before) {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1rem;
		width: 4px;
		height: 100%;
		background-color: var(--border);
		opacity: 1;
	}

	.day :global(.sprintplanning) {
		--border: var(--lavender);
	}
	.day :global(.workshop) {
		--border: var(--turquoise);
	}
	.day :global(.opdrachtgever),
	.day :global(.code-review),
	.day :global(.review),
	.day :global(.retrospect),
	.day :global(.kickoff),
	.day :global(.wrap-up) {
		--border: var(--call-to-action);
	}

	@media (min-width: 40rem) {
		section > :global(h2) {
			padding-left: 1rem;
		}
		.day div {
			margin-left: 0;
		}
	}
	@media (min-width: 50rem) {
		section > :global(h2) {
			padding-left: 2rem;
		}
		section {
			margin: 1rem -1rem;
		}
	}
	@media (min-width: 47rem) {
		.week-container {
			overflow-x: auto;
			padding: 2rem 1rem 2rem;
		}
		.week {
			display: flex;
			width: max-content;
			gap: 1rem;
		}
		h3 {
			margin-left: 1rem;
		}
		.day {
			aspect-ratio: 1;
			border-radius: 0.5rem;
			border: 1px solid var(--turquoise);
			width: max(270px, calc(100vw / 24 * 4));
			padding: 1rem;
			box-shadow: -4px 4px var(--turquoise);
		}
		.day + .day {
			margin-top: 0;
		}
		.weekday {
			text-align: right;
			margin: 0 0 1rem;
			border: none;
		}
	}
	@media (min-width: 90rem) {
		/* 1440px */
		section > :global(h2) {
			padding-left: 1rem;
		}
		section {
			margin: 2rem 0;
		}
		.week-container {
			overflow: visible;
			padding: 1rem 0 0;
		}
		.week-container + .week-container {
			padding: 2rem 0 0;
		}
		.day {
			width: calc((var(--max-width) - 4rem) / 5);
		}
	}
</style>
