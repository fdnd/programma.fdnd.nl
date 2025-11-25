<script>
	let {
		color = 'accent-1',
		type = 'full-color',
		href = '#',
		label = 'Button',
		target = null,
		rel = null,
		children
	} = $props();
</script>

<a class="button is-{color} is-{type}" {href} {target}>
	<span>
		{@render children?.()}
	</span>
</a>


<style lang="scss">
	.button {
		position: relative;
		display: inline-block;
		cursor: pointer;
		text-decoration: none;
		letter-spacing: -0.04em;
		font-weight: 550;
		font-size: clamp(1rem, calc(16 / 60 * var(--grid-1)), 1.25rem);

		&.is-xsmall {
			font-size: 0.5rem;

			span {
				padding: 0.25rem 0.5rem;
				border-radius: 0.25rem;
			}

			&::before {
				top: 1px;
				left: -2px;
				right: 2px;
				bottom: -1px;
				border-radius: 0.25rem;
			}
		}

		&:hover,
		&:focus {
			outline: none;

			span {
				transform: translate(-1px, 1px);
			}
		}

		span {
			position: relative;
			display: block;
			padding: 0.75rem;
			border-radius: var(--small-radius);
			border: 1px solid currentcolor;
			background: var(--background);
			transition: translate 0.3s ease-out;
		}

		&.is-full-color {
			&.is-accent-1 {
				span,
				&::before {
					background: var(--accent-color-1);
				}
			}

			&.is-accent-2 {
				span,
				&::before {
					background: var(--accent-color-2);
				}
			}

			&.is-accent-3 {
				span,
				&::before {
					background: var(--accent-color-3);
				}
			}
		}

		&.is-dark {
			span {
				background: var(--color);
				color: var(--button-color);
				border-color: var(--button-color);
			}

			&::before {
				background: none;
			}
		}

		&::before {
			content: '';
			position: absolute;
			top: 2px;
			left: -4px;
			right: 4px;
			bottom: -2px;
			z-index: 0;
			width: 100%;
			height: 100%;
			border-radius: var(--small-radius);
			border: 1px solid currentcolor;
			background: var(--background);
			transition: background 0.2s ease-out;
		}

		&:focus::before {
			/* HAHAH 🤡 geef mij maar bem */
			background-color: var(--color) !important;
		}
	}
</style>