<script>
	let { task } = $props();
</script>

<div class="task">
	<a href={task.url} data-sveltekit-prefetch class="small-body">
		<strong>
			{task.name}
		</strong>
	</a>
	<small class="small-tag">
		{task.forkCount} forks
	</small>
	<p class="xsmall-body">
		{task.description}
	</p>
</div>

<style lang="scss">
	.task {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: first baseline;
		gap: 0.25rem;
		border-radius: 0.25rem;

		padding: 0.2em 0;
		&:has(:global(a)):hover,
		&:focus-within {
			padding: 0.2em 0.4em;
			margin:0 -0.4em;
			background-color: var(--accent-color-1);
		}

    strong {
      text-transform: capitalize;
    }
		a {
			text-decoration: none;
			&::before {
				content: '';
				position: absolute;
				top: -0.4rem;
				left: -0.4rem;
				right: -0.4rem;
				bottom: -0.4rem;
				z-index: 1;
				transition: 0.1s ease-out background;
			}
		}
		p {
			width: 100%;
		}
	}
</style>
