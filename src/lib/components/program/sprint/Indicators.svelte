<script>
	import Heading from '$lib/components/Heading.svelte'

	let { indicators } = $props();
</script>

{#if indicators && indicators.length > 0}
	<section class="purple-on-blue rounded col-span-1 indicators">
		<Heading title="Criteria" />

		<ul>

		</ul>

		<ul>
			{#each indicators as indicator}
				<li>
					<span>{indicator.index}</span>
					<em>{indicator.definition}</em>
				</li>
				
			{/each}
			</ul>
		
	</section>
{/if}

<style>
	section {
		display:none;
	}
	li {
		display:flex;
		gap:.5rem
	}
</style>
