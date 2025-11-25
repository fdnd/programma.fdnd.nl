<script>
	import Heading from '$lib/components/Heading.svelte';
	import Topics from './Topics.svelte';

	let {
		title,
		sprintNumber,
		content,
		startdate,
		topics
	} = $props();
</script>

<section class="simple-text">
	<div class="inner">
		<Heading title="Sprint {sprintNumber}: {title}" />
		<Topics {startdate} {topics} />
	
		<div>
			{#if content}
				{@html content.html}
			{/if}
		</div>
	</div>
</section>