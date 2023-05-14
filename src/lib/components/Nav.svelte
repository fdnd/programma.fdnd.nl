<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'

    
    // onMount(() => {
    //     const html = document.documentElement
    //     const fsButton = document.querySelector('button.fs')
        
    //     fsButton.addEventListener('click', (event) => {
    //         html.requestFullscreen();
    //     })
        
	// })

</script>

<nav>
    <h2>Menu</h2>
    <ul>
        <li>
            <a class="active" data-sveltekit-prefetch href="/">Programma</a>
        </li>
        <li>
            <a data-sveltekit-reload href="/data-driven-web/connecting-people">Sprint 11</a>
        </li>
        <li>
            <a data-sveltekit-reload href="/meesterproef/final-sprint">Sprint 20</a>
        </li>
    </ul>

    <!-- <button class="fs">
        <span>Fullscreen</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-maximize" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
            <path d="M4 16v2a2 2 0 0 0 2 2h2" />
            <path d="M16 4h2a2 2 0 0 1 2 2v2" />
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
        </svg>
    </button> -->
</nav>

<style>
nav {
    max-width: 42rem;
    display: flex;
    font-size: 0.8rem;
    background-color: transparent;
}

button.fs {
    all:unset;
    display:flex;
    align-items: center;
    position:absolute;
    right:1rem;
    top:1rem;
    
}
button.fs svg {
    stroke:currentColor;
    margin-left: .5rem;
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
