<script>
	import Heading from '$lib/components/Heading.svelte';

	let { criteria } = $props();
</script>

{#if criteria}
	<section class="simple-text">
		<div class="inner">
			<Heading title="Gedragscriteria" />
	
			<div>
				{@html criteria.html}
			</div>
		</div>
		
	</section>
{/if}
