<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Frontend Design & Development | Programma</title>
</svelte:head>


<Header />

<main>
	<slot />
</main>

<Footer />

