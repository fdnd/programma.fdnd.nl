<script>
    import Heading from '$lib/components/Heading.svelte'
    import SprintLink from '$lib/components/program/SprintLink.svelte'

    export let semester, i
</script>


<section class="semester green-on-blue pilled">
    <Heading title="Semester {++i}" subtitle={semester.title} />
    
    <ol>
    {#each semester.sprints as sprint}
        <SprintLink {semester} {sprint} />
    {/each}
    </ol>
</section>

<style>
    section.semester {
        margin-right: 1rem;
        padding: 1rem;
        border: 2px var(--turquoise) solid;
        font-size: .9em;
        scroll-snap-align: start;
        /* scroll-margin-left: 1rem; */
        border-radius:1rem;
        width: 90vw;
    }
    ol {
        list-style: none;
        margin:0;
        width: 14rem;
    }

    @media (min-width: 25em) {
        ol {
            width: 21rem;
        }
    }
</style>