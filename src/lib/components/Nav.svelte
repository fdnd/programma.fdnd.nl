<script>
	import { page } from '$app/stores'
	
	let navItems = [
		{
			href: '/',
			title: 'Programma 2526'
		},
		{
			href: '/static-web/look-and-feel',
			title: 'Sprint 4'
		},
		{
			href: '/workflow-tooling-frameworks/dont-repeat-yourself',
			title: 'Sprint 16'
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
