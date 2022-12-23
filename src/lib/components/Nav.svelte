<script>
    import { page } from '$app/stores'
</script>

<nav>
    <h2>Menu</h2>
    <ul>
        <li>
            <a class="active" data-sveltekit-prefetch href="/">Programma</a>
        </li>
        <li>
            <a data-sveltekit-reload href="/static-web/the-startup">Sprint 6</a>
        </li>
        <li>
            <a data-sveltekit-reload href="/workflow-tooling-frameworks/let-us-jam">Sprint 18</a>
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