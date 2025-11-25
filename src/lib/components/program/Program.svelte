<script>
	import Heading from '$lib/components/Heading.svelte';

	let { title, content } = $props();
</script>

<section class="simple-text">
	<div class="inner">
		<Heading {title} />

		{@html content.html}
	</div>
</section>
