<script>
	import NavItems from '$lib/components/NavItems.svelte';
	import { Instagram, LinkedIn, HvA, FDND } from '$lib/components/icons';
</script>

<header class="header">
	<nav class="nav">
		<div class="top-header">
			<a class="hva-logo" href="https://hva.nl">
				<span class="sr-only"> Een studie aan de Hogeschool van Amsterdam </span>
				<HvA />
			</a>
			<p class="header-title">Frontend Design & Development</p>
		</div>
		<div class="socials">
			<a class="social" href="https://www.instagram.com/fdnd.nl/">
				<span class="sr-only">instagram</span>
				<Instagram />
			</a>
			<a class="social" href="https://www.linkedin.com/company/fdnd/">
				<span class="sr-only">linkedin</span>
				<LinkedIn />
			</a>
		</div>
		<div class="mobile-right">
			<a href="/" class="fdnd-logo">
				<span class="sr-only">
					<abbr title="Frontend Design & Development"><span>FDND</span></abbr>
				</span>
				<FDND />
			</a>
		</div>
		<NavItems />
	</nav>
</header>

<style lang="scss">
	.header {
		position: relative;
		background-color: var(--base-color);
		color: var(--background);
		padding: 1.5rem 0 0 var(--padding-side);
		max-width: var(--max-width);
		margin: 0 auto;
		@media (max-width: 750px) {
			overflow: visible;
			padding: var(--radius);
		}
	}
	.nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
	}

	.top-header {
		display: flex;
		gap: 1.75rem;
		flex-wrap: wrap;
		align-items: center;
		width: calc(100% - 3rem * 2 - var(--padding-side));
		max-width: calc(var(--max-width) - 1.5rem * 6 - var(--padding-side));
		min-height: 1.5rem;
		@media (max-width: 870px) {
			width: max-content;
			align-items: center;
		}
		@media (max-width: 750px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}

	.header .socials {
		margin-right: var(--padding-side);
		display: flex;
		gap: 1rem;
		@media (max-width: 870px) {
			margin-right: 0;
			margin-left: auto;
			align-self: center;
		}
		:global(svg) {
			width: 1rem;
			height: auto;
		}
	}

	.hva-logo {
		display: block;
		width: calc(250 / 1440 * 100vw);
		max-width: 330px;
		min-width: 16rem;
		:global(svg) {
			height: auto;
			width: 100%;
		}
	}

	.header-title {
		position: relative;
		letter-spacing: -0.03em;
		margin-top: -0.5em;
		font-size: clamp(0.75rem, calc(var(--grid-1) * 16 / 60), 1.25rem);
		&::before {
			content: '';
			position: absolute;
			left: -0.875rem;
			width: 1px;
			height: 100%;
			background-color: currentColor;
			@media (max-width: 750px) {
				content: unset;
			}
		}
	}

	.mobile-right {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
		margin-right: var(--grid-1-calc);
		z-index: 10;
		@media (max-width: 750px) {
			width: calc(100% - 8rem);
			justify-content: space-between;
		}
	}

	.fdnd-logo {
		position: relative;
		display: block;
		height: 3rem;
		width: auto;
		transition: transform 0.4s ease-out;
		@media (max-width: 1024px) {
			height: 2.5rem;
		}
		:global(svg) {
			height: 100%;
			width: auto;
		}
	}
</style>
