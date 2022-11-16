<script>
 export let date
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
>
    <path stroke="none" d="M0 0h24v24H0z" />
    <rect width="16" height="16" x="4" y="5" rx="2" />
    <path d="M16 3v4M8 3v4m-4 4h16M8 15h2v2H8z" />
</svg>
{date}

<style>
svg {
    transform: translate(-2px, 1px);
}
</style>