<script>
    import Semester from '$lib/components/program/Semester.svelte'
    import { onMount } from 'svelte';

    export let semesters
    export let subtitle
    
    let jsEnabled = false

    function toggleDates({target}){
        if(target.nodeName == 'INPUT') {
            document.body.classList.toggle('expand')
        }    
    }

    onMount(() => {
        console.log('[2] client side dom manipulation');
        jsEnabled = true
        document.body.classList.remove('expand')
    })

    console.log('[1] hydration: client side rendering & server side rendering')

</script>

<section class="semesters-sprints">

    <h2>{subtitle}</h2>

    {#if jsEnabled}
        <input type="checkbox" id="show-hide-dates" class="toggle" on:change={toggleDates}>
        <label for="show-hide-dates"><span class="visually-hidden">Show/hide dates</span></label>
    {/if}

    
    <div class="scroll-horo">

        <span class="scroll-label visually-hidden">scroll >>> </span>
        
        {#each semesters as semester, i}
            <Semester {semester} {i}/>
        {/each}
    </div>
</section>

<style>
section {
    position: relative;

    margin: 1rem 0 0;
    width: 100%;
    
}
h2 {
    font-weight: normal;
}

.scroll-horo {
    overflow-x: auto;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    padding:1rem 1rem 2rem;
    margin-left: -1rem; 
}

.scroll-label{
    position: absolute;
    top: 0;
    right: 1rem;
    background: var(--call-to-action);
}

input[type="checkbox"].toggle {
    opacity: 0;
    position: absolute;
    left: -9000px;
    top: -9000px;
}
input[type="checkbox"].toggle + label {
    position: absolute;
    top:2rem;
    right:0;
    width: 10.75em;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    font-family: helvetica;
    font-size: 1em;
}
input[type="checkbox"].toggle + label::before {
    content: "";
    width: 10.75em;
    height: 1.325em;
    border: solid 2px var(--turquoise);
    border-radius: var(--pilled);
    transition: background-color 200ms ease-in-out;
}
input[type="checkbox"].toggle + label::after {
    content: "show all dates"; /* \2715 x */
    position: absolute;
    width: 8em;
    height: 1.5em;
    background-color: var(--blueberry);
    color: var(--turquoise);
    border: solid 2px var(--turquoise);
    border-radius: var(--pilled);
    font-weight: normal;
    font-size: .9em;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
}
input[type="checkbox"].toggle:checked + label::after {
    content: "hide all dates"; /* \2713 v */
    transform: translateX(50%);
    background-color: var(--turquoise);
    color: var(--blueberry);
}
input[type="checkbox"].toggle:hover + label::after,
input[type="checkbox"].toggle:focus + label::after, 
input[type="checkbox"].toggle:checked:hover + label::after {
    background-color: var(--turquoise);
    /* border-color: var(--call-to-action); */
    color: var(--blueberry);
}
input[type="checkbox"].toggle:checked + label::before {
    background-color: var(--turquoise);
    opacity: 0.5;
    border-color: var(--turquoise);
}

</style>