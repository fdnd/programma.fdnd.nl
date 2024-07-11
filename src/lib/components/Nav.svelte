<script>
	import { page } from '$app/stores';
	$: navItems = [
		{
			href: '/',
			title: 'Programma 2324'
		},
		{
			href: '/data-driven-web/pleasurable-ui',
			title: 'Sprint 11'
		},
		{
			href: '/meesterproef/final-sprint',
			title: 'Sprint 20'
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
