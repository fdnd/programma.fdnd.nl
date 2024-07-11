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

<section class="cta-row">
	<div class="inner">
		<header>
				<h2 class="large-heading">{subtitle}</h2>
				<p>Samenwerken met instellingen, bedrijven en het werkveld; onze partners in education, is één van de peilers van de onderwijs visie van FDND. Studenten werken in de fDND studio doorlopend aan echte projecten voor echte opdrachtgevers. Daarbij krijgen ze les van experts uit het vakgebied en lopen stage bij bedrijven uit de creatieve industrie. Regelmatig delen experts uit het vakgebied hun kennis bij FDND.</p>

				{#if jsEnabled}
					<input type="checkbox" id="show-hide-dates" class="toggle" on:change={toggleDates} />
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