<script>
	import Semester from '$lib/components/program/Semester.svelte';
	import { onMount } from 'svelte';

	export let semesters;
	export let subtitle;

	let jsEnabled = false;

	function toggleDates({ target }) {
		if (target.nodeName == 'INPUT') {
			document.body.classList.toggle('expand');
		}
	}

	onMount(() => {
		jsEnabled = true;
		document.body.classList.remove('expand');
	});

</script>

<section class="semesters-sprints">
	<h2>{subtitle}</h2>

	{#if jsEnabled}
		<input type="checkbox" id="show-hide-dates" class="toggle" on:change={toggleDates} />
		<label for="show-hide-dates">
			<span> Show/hide dates </span>
		</label>
	{/if}

	<div class="scroll-horo">
		<span class="scroll-label visually-hidden">scroll >>> </span>

		{#each semesters as semester, i}
			<Semester {semester} {i} />
		{/each}
	</div>
</section>

<style>
	section {
		position: relative;

		margin: 2rem 0 0;
		width: 100%;
		padding: 0;
	}
	h2 {
		font-weight: normal;
	}

	.scroll-horo {
		overflow-x: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		scroll-snap-type: x mandatory;
		padding: 1rem 2rem 2rem;
		margin-left: -1rem;
		margin-right: -1rem;
	}
	@media (min-width: 50rem) {
		.scroll-horo {
			margin-left: -2rem;
			margin-right: -2rem;
		}
	}

	.scroll-label {
		position: absolute;
		top: 0;
		right: 1rem;
		background: var(--call-to-action);
	}

	input[type='checkbox'].toggle {
		opacity: 0;
		position: absolute;
		left: -9000px;
		top: -9000px;
	}
	input[type='checkbox'].toggle + label {
		top: 2rem;
		right: 0;
		display: flex;
		align-items: center;
		cursor: pointer;
		color: white;
		font-family: helvetica;
		font-size: 1em;
		margin-left: 1.5rem;
	}
	input[type='checkbox'].toggle + label::before {
		content: '';
		width: 3rem;
		height: 1.325rem;
		border: solid 1px var(--turquoise);
		border-radius: var(--pilled);
		transition: background-color 200ms ease-in-out;
	}
	input[type='checkbox'].toggle + label::after {
		content: ''; /* \2715 x */
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		background-color: var(--blueberry);
		color: var(--turquoise);
		border: solid 1px var(--turquoise);
		border-radius: var(--pilled);
		font-weight: normal;
		font-size: 0.9em;

		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
	}
	input[type='checkbox'].toggle:checked + label::after {
		content: ''; /* \2713 v */
		transform: translateX(1.5em);
		background-color: var(--turquoise);
		color: var(--blueberry);
	}
	input[type='checkbox'].toggle:hover + label::after,
	input[type='checkbox'].toggle:focus + label::after,
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

	label span {
		color: var(--turquoise);
		margin-left: 0.5em;
		font-size: 0.7em;
	}
</style>
