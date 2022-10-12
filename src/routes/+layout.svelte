<script>
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>FDND Programma</title>
</svelte:head>

<header>
	<h1><span>FDND</span> Programma</h1>
</header>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>

</style>
