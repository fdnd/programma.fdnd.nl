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
</style>