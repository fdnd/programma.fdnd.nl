<script>
	import Semester from '$lib/components/program/Semester.svelte';
	import { onMount } from 'svelte';

	let { semesters, subtitle } = $props();

	let jsEnabled = $state(false);

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

<section class="cta-row">
	<div class="inner">
		<header>
				<h2 class="large-heading">{subtitle}</h2>

				{#if jsEnabled}
					<input type="checkbox" id="show-hide-dates" class="toggle" onchange={toggleDates} />
					<label for="show-hide-dates">
						<span> Show/hide dates </span>
					</label>
				{/if}
		</header>

		<div class="scrollable">
			{#each semesters as semester, i}
				<div class="cta">
					<Semester {semester} {i} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.inner {
		/padding:0;
	}
</style>