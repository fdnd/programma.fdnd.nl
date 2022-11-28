<script>
    import Semester from '$lib/components/program/Semester.svelte'
    
    export let semesters
</script>

<div class="scroll-horo"> <!-- horizontal scroll voor semester lijsten -->
    <span class="scroll-label">scroll >>> </span>
    
    {#each semesters as semester, i}
        <Semester {semester} {i}/>
    {/each}
</div>

<style>
    div.scroll-horo{
        position: relative;
        overflow-x: scroll;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        scroll-snap-type: x mandatory;
        margin: 4rem 0 1rem 0;
        width: 100%;
    }
    div.scroll-horo span.scroll-label{
        display: none;
        position: absolute;
        top: 0;
        right: 1rem;
        background: var(--call-to-action);
    }
    @media (min-width: 40em) {
        div.scroll-horo {
            width: calc(100% + 1rem);
        }
    }
</style>