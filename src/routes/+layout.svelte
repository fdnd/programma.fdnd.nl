<script>
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Frontend Design & Development | Programma</title>
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
	:global(body:before){
		left:auto;
		top:auto;
		right:2rem;
		bottom:1rem;

	}
	:global(body:after){
		left:2rem
	}

	h1 {
		margin-left: 2rem;
		color:transparent
	}
	h1 span {
		position: absolute;
		font-size: 10rem;
		top: -2rem;
		color: #fff;
		z-index: -1;
		left: 2rem;
	}
</style>