<script>
	import Heading from '$lib/components/Heading.svelte';

	export let title, content;
</script>

<section class="simple-text">
	<div class="inner">
		<Heading {title} />

		{@html content.html}
	</div>
</section>
