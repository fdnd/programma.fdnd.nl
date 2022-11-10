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
	:global(body) {
      display: block !important;
    }
	:global(body:before){
		left:auto;
		top:auto;
		right:2rem;
		bottom:1rem;

	}
	:global(body:after){
		left:1rem
	}
	main {
      display: block !important;
    }
	h1 {
		margin-left: 1rem;
		color:transparent
	}
	h1 span {
		position: absolute;
		font-size: 6rem;
		top: 1.65rem;
		color: rgb(166, 117, 245);
		z-index: -1;
		left: 1.5rem;
		transition:.25s
	}
	:global(footer nav) {
		padding:1rem;
	}
	:global(footer nav h2) {
		margin:calc(-1rem - 1px) calc(-1rem - 1px) 1rem 2rem
	}

	@media (min-width: 30rem) {
		h1 span {
			font-size: 10rem;
			top: -1.75rem;
			left:1.25rem
		}
    }
	@media (min-width: 50em) {
		h1 span {
			left:2.25rem;
		}
	}
</style>