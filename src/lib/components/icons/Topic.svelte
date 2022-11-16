<script>
    export let topic
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
    <path
        d="M4 7v3.859c0 .537.213 1.052.593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834-4.834a2.025 2.025 0 0 0 0-2.864L12.29 4.593A2.025 2.025 0 0 0 10.859 4H7a3 3 0 0 0-3 3z"
    />
</svg>

{topic.name}

<style>
svg {
    transform: translate(-2px, 1px) rotate(90deg);
}
</style>
