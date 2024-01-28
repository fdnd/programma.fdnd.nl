<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'

</script>

<nav>
    <h2>Menu</h2>
    <ul>
        <li>
            <a class="active" data-sveltekit-prefetch href="/">Programma 2324</a>
        </li>
        <li>
            <a data-sveltekit-reload href="/data-driven-web/connect-your-tribe">Sprint 7</a>
        </li>
        <li>
            <a data-sveltekit-reload href="/meesterproef/free-space">Sprint 19</a>
        </li>
    </ul>
</nav>

<style>
nav {
    max-width: 42rem;
    display: flex;
    font-size: 0.8rem;
    background-color: transparent;
}

@media (min-width: 22em) {
    nav{
        font-size: 1rem;
    }
}
@media (min-width: 42em) {
    nav{
        margin-bottom: 0;
    }
    nav ul a {
        transform: rotate(-5deg);
    }
}
</style>
