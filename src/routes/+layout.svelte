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
		left:1rem
	}

	h1 {
		margin-left: 1rem;
		color:transparent
	}

	h1 span {
		position: absolute;
		font-size: 7rem;
		top: 0;
		color: rgb(166, 117, 245);
		z-index: -1;
		left: 1.5rem;
		transition:.25s
	}

	@media (min-width: 30rem) {
		h1 span {
			font-size: 10rem;
			top: -2rem;
			left:1.25rem
		}
    }
	@media (min-width: 50em) {
		h1 span {
			left:2.25rem;
		}
	}
</style>