<script>
    import { page } from '$app/stores'
</script>

<nav>
    <h2>Menu</h2>
    <ul>
        {#if $page.url.pathname !== '/'}
        <li>
            <a class="active" data-sveltekit-prefetch href="/">Home</a>
        </li>
        {/if}
    </ul>
</nav>

<style>
    nav {
        margin-left: .5rem;
        background:none
    }
</style>