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
	<section class="simple-text">
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

