<script>
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import CreatingTomorrow from '$lib/components/icons/CreatingTomorrow.svelte';
	import Button from '$lib/components/partials/Button.svelte';
</script>
<footer class="simple-text p">
	<div class="inner">
		<h2 class="medium-heading">FDND microsites</h2>
		<p>
			FDND maakt gebruik van microsites.
			Microsites zijn kleine websites ter ondersteuning van een campagne, informatie over een product, dienst of voor
			een ander specifiek doel.
		</p>

		<div class="button-row">
			<Button href="https://fdnd.nl" color="dark">
				<span>
					FDND.nl
				</span>
			</Button>
			<Button href="https://contact.fdnd.nl" color="dark">
				<span>
					Contact en routebeschrijving
				</span>
			</Button>
			<Button href="https://programma.fdnd.nl" color="dark">
				<span>
					Programma
				</span>
			</Button>
			<Button href="https://partners.fdnd.nl" color="dark">
				<span>
					Partners
				</span>
			</Button>
			<Button href="https://niveaumatrix.fdnd.nl" color="dark">
				<span>
					Niveaumatrix
				</span>
			</Button>
			<Button href="https://docs.fdnd.nl" color="dark"	>
				<span>
					Documenten
				</span>
			</Button>
		</div>
	</div>

	<h2 class="small-heading">FDND programma archief</h2>
	<p>Het programma van FDND in voorgaande jaren.</p>

	<div class="button-row">
		<Button href="https://2223.programma.fdnd.nl" color="dark"	>
			<span>
				Programma 2022-2023
			</span>
		</Button>
		<Button href="https://2324.programma.fdnd.nl" color="dark"	>
			<span>
				Programma 2023-2024
			</span>
		</Button>
		<Button href="https://2425.programma.fdnd.nl" color="dark"	>
			<span>
				Programma 2024-2025
			</span>
		</Button>

		<!-- <ul>
				<li><a href="https://2223.programma.fdnd.nl">Programma 2022-2023</a></li>
				<li><a href="https://2324.programma.fdnd.nl">Programma 2023-2024</a></li>
				<li><a href="https://2425.programma.fdnd.nl">Programma 2024-2025</a></li>
		</ul> -->
	</div>
	

	<div class="footer-bottom">
		<CreatingTomorrow />
		<a class="insta" href="https://www.instagram.com/fdnd.nl/">
			<span class="sr-only">instagram</span>
			<Instagram />
		</a>

		<ul class="acknowledgements">
			<li>FDND relies on hosting provided by <a href="https://www.netlify.com/">Netlify</a></li>
		</ul>
	</div>
</footer>

<style lang="scss">
/*
======================
Footorrr
======================
*/

footer {
  color: var(--background);
	max-width: var(--max-width);
	margin: 0 auto;
	padding: var(--padding-top) var(--padding-side) 1rem;
}

footer :global(.button)	 {
  color: var(--background);
	background-attachment: fixed;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 5rem 0 1.5rem;
}

.social {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}

.social :global(svg) {
  width: 1rem;
  height: auto;
  fill: currentColor;
}

.acknowledgements {
  list-style: none;
  font-size: .7rem;
}

.archive {
	margin: var(--padding-top) 0;
}
div {
	display:flex;
	flex-direction: column;
}

div.button-row {
	display:flex;
	flex-direction: row;
	margin-bottom: calc(2 * var(--padding-top));
}

p {
	max-width:55ch;
}
</style>