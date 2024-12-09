<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Frontend Design & Development | Programma</title>
</svelte:head>

<header>
	<div>
		<a href="/">
			<h1>
				<abbr title="Frontend Design &amp; Development">
					<span>FDND</span>
				</abbr>
				<span>Frontend<br />Design &amp; Development</span>
			</h1>
		</a>
		<Nav />
	</div>
	
</header>

<main>
	<slot />
</main>

<Footer />

<style>
	:global(body) {
		padding-top: 2.5rem;
	}
	:global(body),
	:global(body main) {
		display: block;
		background-color: unset;
	}
	:global(body:before) {
		left: auto;
		top: auto;
		right: 2rem;
		bottom: 1rem;
	}
	:global(body:after) {
		left: 1rem;
	}
	:global(main) {
		max-width: var(--max-width);
		margin: auto;
	}
	a {
		text-decoration: none;
		margin-left: var(--shadow);
	}
	header {
		display:flex;
		max-width: var(--max-width);
		
		margin: auto;
	}

	header div {
		display: flex;
		gap: 1em;
		align-items: baseline;
		justify-content: flex-start;
		padding: 0.5em 0.7em calc(0.5em + var(--shadow));
		background-color: var(--turquoise);
		color: var(--blueberry);
		border-radius: var(--rounded);
		flex-wrap:wrap;
	}
	@media (max-width: 750px) {
		header div {
			background-color: transparent;
			padding: 0;
			gap: 1em;
		}
	}
	h1 > span {
		color: var(--lavender);
		font-size: clamp(1rem, 4vw, 2rem);
		padding: 0.25rem 0.5rem;
		line-height: 1;
		text-decoration: none;
		padding-bottom: 0.5rem;
		vertical-align: baseline;
		display: none;
	}
	h1 {
		margin: 0;
	}
	h1 > abbr {
		position: relative;
		color: var(--blueberry);
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: -0.06em;
	}
	h1 > abbr > span {
		position: relative;
		display: block;
		padding: 0.3em 0.2em;
		border: 1px solid var(--blueberry);
		border-radius: var(--rounded);
		background-color: var(--turquoise);
		z-index: 1;
	}
	@media (max-width: 750px) {
		h1 > abbr {
			color: var(--turquoise);
		}
		h1 > abbr > span {
			border: 1px solid var(--turquoise);
			border-radius: var(--rounded);
			background-color: var(--blueberry);
		}
	}
	h1 > abbr::before {
		content: '';
		position: absolute;
		top: var(--shadow);
		left: calc(var(--shadow) * -1);
		right: var(--shadow);
		bottom: calc(var(--shadow) * -1);
		border: 1px solid currentColor;
		border-radius: var(--rounded);
		display:none;
	}
	:global(footer) {
		margin: auto;
		margin-top: 1rem;
		max-width: var(--max-width);
	}
	:global(footer nav) {
		padding: 1rem;
	}
	:global(footer nav h2) {
		margin: calc(-1rem - 1px) calc(-1rem - 1px) 1rem 2rem;
	}
	:global(footer nav p),
	:global(footer nav ul) {
		margin-left: .5rem;
	}
</style>
