<script>
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Frontend Design & Development | Programma</title>
</svelte:head>

<header>
	<h1>
		<abbr title="Frontend Design &amp; Development">
			<span>FDND</span>
		</abbr> 
		<span>Frontend<br>Design &amp; Development</span>
	</h1>
</header>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	:global(body),
	:global(body main) {
      display: block;
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
	h1 {
		display:flex;
		margin-bottom: 2rem;
	}
	h1 > span {
		color: var(--lavender);
		padding: .5rem 1rem 0 .5rem;
		font-size: clamp(1rem, 4vw, 2rem);
		font-size: 1rem;
		line-height: 1;
		text-decoration: none;
		padding-bottom:.5rem;
		vertical-align:baseline;
		display: none;
	}
	h1 > abbr > span {
		border: 1px solid var(--turquoise);
		border-radius: var(--rounded);
		box-shadow: calc(-1*var(--shadow))var(--shadow)0 0 var(--turquoise);
		color: var(--turquoise);
		text-transform: lowercase;
		padding: .5rem 1rem;
		font-size: 2rem;
	}
	:global(footer) {
		margin-top: 6rem;
	}
	:global(footer nav) {
		padding:1rem;
	}
	:global(footer nav h2) {
		margin:calc(-1rem - 1px) calc(-1rem - 1px) 1rem 2rem
	}
</style>