<script>
	import { page } from '$app/stores';
	$: navItems = [
		{
			href: '/',
			title: 'Programma 2425'
		},
		{
			href: '/static-web/the-client',
			title: 'Sprint 2'
		},
		{
			href: '/workflow-tooling-frameworks/lose-your-head',
			title: 'Sprint 14'
		},
	]

</script>

<nav>

	<h2>Menu</h2>
	<ul>
		{#each navItems as item }
			<li>
				<a class:active={$page.url.pathname === item.href} href={item.href} target="_self">{item.title}</a>
			</li>
		{/each}
	</ul>

</nav>

<style>
	nav {
		font-size: 0.8rem;
	}

	h2 {
		position: absolute;
		text-indent: -9999px;
	}
	ul {
		display: flex;
		gap: 1em;
		font-weight: 600;
	}

	nav ul li a {
		position: relative;
		transform: none;
		display: inline-block;
		padding: 0.3em 0.8em;
		border-radius: 1em;
		text-decoration: none;
		transition: background 0.3s ease-out, color 0.3s ease-out;
		border: 1px solid var(--turquoise);
		white-space: nowrap;
	}

	@media (max-width: 750px) {
		nav ul {
			font-size: 0.75em;
			color: var(--turquoise);
		}
	}

	nav ul li a:hover {
		border-color: var(--blueberry);
	}
	@media (max-width: 750px) {
		nav ul li a:hover {
			border-color: var(--turquoise);
		}
	}

	nav ul li a:hover::before {
		opacity: 1;
	}

	:global(nav a.active) {
		font-weight: 800;
		background-color: var(--blueberry);
		color: var(--turquoise);
	}
	@media (max-width: 750px) {
		:global(nav a.active) {
			background-color: var(--turquoise);
			color: var(--blueberry) !important;;
		}
	}

	@media (min-width: 22em) {
		nav {
			font-size: 1rem;
		}
	}
	@media (min-width: 42em) {
		nav {
			margin-bottom: 0;
		}
		nav ul a {
			transform: rotate(-5deg);
		}
	}
</style>
