<script>
	import { onMount } from 'svelte';
	import Heading from '$lib/components/Heading.svelte';
	import IconStar from '$lib/components/icons/Star.svelte';

	export let tasks;
	export let stargazer = false;
	if (tasks) {
		tasks.forEach((task) => {
			if (!stargazer && task && task.forks.length > 0) {
				stargazer = true;
			}
		});
	}

	onMount(() => {
		/* Firefox hack, :has() selector not supported */
		if (!CSS.supports('selector(html:has(body))')) {
			const subtasks = document.querySelector('.tasks li');
			const subtasksHeading = document.querySelector('.tasks h3.subtasks');
			if (subtasks) {
				subtasksHeading.style.display = 'block';
			}
		}
	});
</script>

{#if tasks && tasks.length > 0}
<div>
	<section class="green-on-blue rounded tasks">
		<Heading title="Leertaken" />

		{#each tasks as task}
			{#if task.topic == 'task'}
				<p>
					<a href={task.url} data-sveltekit-prefetch>{task.name}</a><small class="blue-on-green"
						>{task.forkCount} forks</small
					>
				</p>
				<p>
					{task.description}
				</p>
			{/if}
		{/each}

		<h3 class="subtasks">Deeltaken</h3>
		{#each tasks as task}
			{#if task.topic == 'subtask'}
				<p>
					<a href={task.url} data-sveltekit-prefetch>{task.name}</a><small class="blue-on-green"
						>{task.forkCount} forks</small
					>
				</p>
				<p>
					{task.description}
				</p>
			{/if}
		{/each}
	</section>
	<section class="showcase {stargazer ? 'stargazer' : ''}">
		<Heading title="Studentenwerk" />
		<ul>
			{#each tasks as task}
				{#if task.forks && task.forks.length > 0}
					{#each task.forks as fork}
						<li class="purple-on-blue shadow">
							<div class="repo">
								<span class="repo-title">{fork.title}</span>
								<IconStar stargazerCount={fork.stargazerCount} />
								<div class="links">
									<a href={fork.url} target="_blank" rel="noreferrer">Code</a>
									{#if fork.homepageUrl}
										<a href={fork.homepageUrl} target="_blank" rel="noreferrer">Website</a>
									{/if}
								</div>
							</div>
							<strong class="profile">
								<img src={fork.avatarUrl} alt="" class="avatar" />
								<a href={fork.ownerUrl} target="_blank" rel="noreferrer">@{fork.owner}</a>
							</strong>
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</section>
</div>
{/if}

<style>
	section {
		position: relative;
		margin-top: .5rem;
	}
	section.tasks {
		max-width: 42rem;
		padding:1rem;
	}
	@media (max-width: 750px) {
		section.tasks {
			width: 100%;
		}

	}
	section.tasks,
	.shadow {
		border-width: 1px;
		border-style: solid;
		margin-left: var(--shadow);
	}
	.tasks p {
		margin-top: 0.4em;
	}
	:global(section.tasks h3.subtasks) {
		display: none;
	}
	:global(section.tasks:has(p) h3),
	:global(section.show h3) {
		display: block !important;
	}
	section.tasks p,
	section.tasks li {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	section.tasks p:nth-of-type(2n) {
		margin-bottom: 1em;
	}
	:global(section.tasks *::selection) {
		background-color: var(--turquoise);
		color: var(--blueberry);
	}
	section.tasks::after,
	.shadow::after {
		content: '';
		position: absolute;
		z-index: -1;
		top: var(--shadow);
		left: calc(var(--shadow) * -1);
		right: var(--shadow);
		bottom: calc(var(--shadow) * -1);
		border: 1px solid currentColor;
		border-radius: var(--rounded);
	}
	section.tasks a {
		text-transform: capitalize;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	small {
		font-size: 0.7em;
	}
	section.tasks small {
		margin-left: 0.25rem;
		padding: 0 0.1rem;
		transform: translateY(-5px);
		white-space: nowrap;
	}
	section.showcase {
		display: none;
		display: block;
	}
	section.stargazer {
		display: block;
	}
	section.showcase ul {
		display: flex;
		gap: 1rem;
		margin: 0 -1rem;
		width: calc(100% + 2rem);
		overflow: auto;
		scroll-snap-type: x mandatory;
		padding-bottom: 1rem;
	}
	section.showcase li {
		display: flex;
		flex-wrap: wrap;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border-radius: var(--rounded);
		margin-bottom: 0;
		position: relative;
		width: 300px;
		min-width: 300px;
		scroll-snap-align: center;
		gap: 0.25rem;
	}
	.repo {
		overflow: hidden;
	}
	.repo a,
	.repo span {
		display: block;
	}
	.repo-title {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.links {
		display: inline-flex;
		gap: 0.2em;
		text-transform: uppercase;
		flex-wrap: wrap;
	}
	.links a {
		border: 1px solid currentColor;
		border-radius: 1rem;
		padding: 0.2em 0.4em;
		line-height: 1;
		text-decoration: none;
		font-size: 0.6em;
	}

	.links a:hover {
		background-color: var(--lavender);
		color: var(--blueberry);
	}
	.profile {
		position: relative;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		gap: 0.5rem;
		padding: 0.5rem 0;
		margin: 0;
	}
	.profile::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		opacity: 0.5;
		border-top: 1px solid currentColor;
	}
	.profile a {
		text-decoration: none;
		font-size: 0.7em;
		display: block;
		padding: 0;
	}
	.avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		margin-bottom: 0;
	}
	@media (min-width: 40em) {
		/* div {
			display:grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			align-items:start
		} */

		/* section.showcase ul {
			flex-direction: column;
			height:20em
		}
		section.tasks {
			min-width: 32rem;
		} */
	}
	@media (min-width: 60em) {

		section.tasks {
			min-width: 26rem;
		}

	}
</style>
