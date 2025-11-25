<script>
	import { onMount } from 'svelte';
	import Heading from '$lib/components/Heading.svelte';
	import IconStar from '$lib/components/icons/Star.svelte';

	export let tasks;
	export let stargazer = false;
	if (tasks) {
		tasks.forEach((task) => {
			if (!stargazer && task.forks && task.forks.length > 0) {
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
	<section class="simple-text">
		<div class="inner">
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
		</div>
	</section>

	<section class="cta-row">
		<div class="inner">
			
			<Heading title="Studentenwerk" />
			<div class="scrollable">
				{#each tasks as task}
						{#if task.forks && task.forks.length > 0}
							{#each task.forks as fork}
								<div class="cta  {stargazer ? 'stargazer' : ''}">
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
								</div>
							{/each}
						{/if}

					{/each}
			</div>
		</div>
	</section>
</div>
{/if}
