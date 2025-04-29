<script>
	import { page } from '$app/stores';
	$: navItems = [
		{
			href: '/',
			title: 'Programma 2425'
		},
		{
			href: '/data-driven-web/user-experience',
			title: 'Sprint 10'
		},
		{
			href: '/meesterproef/final-sprint',
			title: 'Sprint 20'
		}
	];
</script>

<ul class="nav-list" style="--total: {navItems.length};">
	{#each navItems as item}
		<li class="nav-item" style="--i: {item.index};">
			<a class:active={$page.url.pathname === item.href} href={item.href} target="_self"
				>{item.title}</a
			>
		</li>
	{/each}
</ul>

<style>
	.nav-list::before {
		content: '';
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		left: -1.5rem;
		border-radius: 0 0 50% 0;
		bottom: 0;
		box-shadow: 0.5em 0.5em 0 0 var(--background);
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
	}

	
	.nav-list {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: calc(var(--grid-1) * 40 / 60);
		border-radius: var(--radius) var(--radius) 0 0;
		padding: 1.5rem var(--grid-1-calc) 1.5rem 1.5rem;
		list-style: none;
		background: var(--background);
		color: var(--color);
		max-width: calc(100% - var(--radius) * 2.25);
		margin-left: auto;
		box-shadow: 0 calc(var(--radius) * 2) 0 0 var(--background);
		transform: translateY(100%);
		animation: up 0.4s 0.6s ease-out forwards;
		@media (max-width: 750px) {
			margin-right: 0;
			padding: var(--radius);
			max-width: unset;
		}
	}
	
	@keyframes up {
		to {
			transform: translateY(0);
		}
	}
	
	@media (max-width: 870px) {
		.nav-list {
			flex-grow: 1;
			padding-right: 1.25rem;
		}
		.nav-list::after {
			content: unset;
		}
	}
	
	.nav-item {
		clip-path: inset(-10px -5px);
	}
	
	.nav-item a {
		display: block;
		transition: opacity 0.2s ease-out, transform 0.4s ease-out;
		transition-delay: calc(var(--total) - var(--i) * 0.1s);
		text-decoration: none;
		letter-spacing: -0.03em;
		padding: 0.5rem 1rem;
		border-radius: 2em;
		&.active {
			background: var(--accent-color-1);
		}
		@media (max-width: 750px) {
			font-size: 14px;
			padding: 0.25rem 0.5rem;
			text-decoration: underline;
		}
	}
	
	.nav-item a:hover {
		text-decoration: underline;
	}

	@media (max-width: 750px) {
		.nav-list::before {
			content: unset;
		}
	}
</style>
