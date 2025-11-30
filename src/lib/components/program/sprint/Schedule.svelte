<script>
	import Heading from '$lib/components/Heading.svelte';
	import { prettyDate, longDate } from '$lib/utils/date.js';

	let { weekPlans } = $props();

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
	<section class="schedule">
		<h2 class="medium-heading">Sprint planning</h2>
		<div class="weeks">
			{#each plans as week, i}
				<h3 class="large-body">Week {i + 1}</h3>
				<div class="week-container">
					<div class="week">
						{#each week as day, i}
							<div class="day day--{day.weekDay}">
								<h4 class="weekday xsmall-body caps">
									{day.weekDay} <span>{prettyDate(day.date)}</span>
								</h4>
								<div data-label="{day.weekDay} {prettyDate(day.date)}" class="p small-body">
									{@html day.content}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<style lang="scss">
	.schedule {
		overflow-x: auto;
		max-width: 100vw;
		@media (max-width: 750px) {
			overflow: visible;
		}
		h2 {
			position: sticky;
			left: 0;
			padding: var(--padding-top) var(--padding-side) 0;
			max-width: var(--max-width);
			margin: 0 auto;
		}
	}

	.weeks {
		padding: 2rem var(--padding-side) 1rem;
		min-width: max-content;
		margin: 0 auto;
		@media (max-width: 750px) {
			width: 100%;
			min-width: unset;
		}
	}

	.week-container {
		padding: 0 0 2rem;
	}

	.week {
		container-name: week;
		display: flex;
		flex-direction: column;
		width: max-content;
		gap: 1rem;
		@media (min-width: 750px) {
			border: 1px solid currentColor;
			// box-shadow: -0.25rem 0.25rem 0 var(--accent-color-1);
			padding: 1rem;
			border-radius: var(--radius);
			flex-direction: row;
			width: 100%;
		}
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
		text-align: right;
		@media (max-width: 750px) {
			text-align: left;
		}
	}

	.day {
		aspect-ratio: 1;
		border-radius: 0.5rem;
		border: 1px solid currentColor;
		width: max(270px, 14.5cqw);
		padding: 1rem;
		box-shadow: -0.25rem 0.25rem 0 var(--accent-color-1);
		@media (max-width: 750px) {
			width: 100%;
			height: auto;
			aspect-ratio: unset;
			border: 0;
			box-shadow: none;
			padding: 0;
		}
		div {
			hyphens: auto;
			text-wrap: balance;
			text-wrap: pretty;
		}
		@media (max-width: 750px) {
			& + .day {
				margin-top: 1rem;
			}
		}
		:global(p) {
			position: relative;
			--border: var(--color);
			padding-left: 1rem;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 4px;
				height: 100%;
				border-radius: 2px;
				background-color: var(--border);
			}
		}
		:global(p + p) {
			margin-top: 0.5rem;
		}
		:global(p::before) {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 1rem;
			width: 4px;
			height: 100%;
			opacity: 1;
		}
		:global(.sprintplanning) {
			--border: var(--accent-color-1);
		}
		:global(.workshop) {
			--border: var(--accent-color-2);
		}
		:global(.opdrachtgever),
		:global(.code-review),
		:global(.review),
		:global(.retrospect),
		:global(.kickoff),
		:global(.wrap-up) {
			--border: var(--accent-color-3);
		}
	}

</style>
