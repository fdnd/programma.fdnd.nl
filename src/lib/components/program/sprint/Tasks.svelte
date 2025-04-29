<script>
	import { onMount } from 'svelte';
	import Heading from '$lib/components/Heading.svelte';
	import IconStar from '$lib/components/icons/Star.svelte';
	import Task from './Task.svelte';
	export let tasks;
	export let stargazer = false;
	if (tasks) {
		tasks.forEach((task) => {
			if (!stargazer && task && task.forks.length > 0) {
				stargazer = true;
			}
		});
	}
</script>

{#if tasks && tasks.length > 0}
	<section class="task-container">
		<div class="tasks">
			<h3 class="large-body">Leertaken</h3>
			{#each tasks as task}
				{#if task.topic == 'task'}
					<Task {task} />
				{/if}
			{/each}

		</div>

		<div class="tasks">
			<h3 class="large-body">Deeltaken</h3>
			{#each tasks as task}
			{#if task.topic == 'subtask'}
				<Task {task} />
				{/if}
			{/each}
		</div>
	</section>
{/if}

<style lang="scss">
	.task-container {
		width: 30%;
		flex-grow: 1;
		max-width: 500px;
		padding: 2rem 1rem 1rem;

		border: 1px solid currentColor;
		border-radius: var(--radius);
		box-shadow: var(--box-shadow);
	}
	.tasks {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		& + .tasks {
			margin-top: 1em;
		}
	}
</style>
