<script>
	import { onMount } from 'svelte';
	import Star from '$lib/components/icons/Star.svelte';
	import Button from '$lib/components/partials/Button.svelte';

	let { tasks, stargazer = false } = $props();
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
	<section class="showcase {stargazer ? 'stargazer' : ''}">
		<h3 class="small-heading">Studentenwerk</h3>

		<ul>
			{#each tasks as task}
				{#if task.forks && task.forks.length > 0}
					{#each task.forks as fork}
						<li class="repo-card">
							<div class="repo-info">
								<p class="repo-title small-body">
									<strong>{fork.title}</strong>
								</p>
								<i>
									<Star />
									<em>{fork.stargazerCount}</em>
								</i>
								<div class="button-row xsmall-body caps">
									<Button
										href={fork.url}
										type="full-color is-xsmall"
										target="_blank"
										rel="noreferrer"
										color="accent-1">Code</Button
									>
									{#if fork.homepageUrl}
										<Button
											href={fork.homepageUrl}
											type="full-color is-xsmall"
											target="_blank"
											rel="noreferrer"
											color="accent-3">Website</Button
										>
									{/if}
								</div>
							</div>
							<div class="profile-info">
								<img src={fork.avatarUrl} alt="" class="avatar" />
								<strong class=" xsmall-body caps">
									<a href={fork.ownerUrl} target="_blank" rel="noreferrer">@{fork.owner}</a>
								</strong>
							</div>
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</section>
{/if}

<style lang="scss">
	.showcase {
		overflow-x: auto;
		h3 {
			position: sticky;
			left: 0;
			padding: var(--padding-top) var(--padding-side) 0;
			max-width: var(--max-width);
			margin: 0 auto;
		}
		ul {
			display: flex;
			justify-content: start;
			gap: 1rem;
			padding: 2rem var(--padding-side) 1rem;
			width: max-content;
			margin: 0 auto;
		}
	}

	.repo-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border-radius: var(--radius);
		border: 1px solid currentColor;
		box-shadow: -0.25rem 0.25rem 0 var(--accent-color-1);
		width: 200px;
		:global(svg) {
			fill: var(--accent-color-3);
			stroke: var(--color);
			width: 1.5rem;
		}
		i {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			right: -0.75rem;
			top: -0.75rem;
		}
		i em {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;

			font-size: 0.6em;
			font-style: normal;
			font-weight: bold;
			text-align: center;
			border-radius: 50%;
			color: currentColor;
			position: absolute;
			top: 0;
			left: 0;
		}
		.repo-title {
			text-transform: capitalize;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.profile-info {
			display: flex;
			gap: 1rem;
			align-items: center;
			img {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
			}
		}
	}
</style>
