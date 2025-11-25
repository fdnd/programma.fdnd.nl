<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Frontend Design & Development | Programma</title>
</svelte:head>


<Header />



<main>
	{@render children?.()}
</main>

<Footer />

