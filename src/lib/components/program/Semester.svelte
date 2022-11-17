<script>
    import Heading from '$lib/components/Heading.svelte'
    import SprintLink from '$lib/components/program/SprintLink.svelte'
    import { prettyDate } from '$lib/utils/date'

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
        font-size: .9em;
        margin-right: 1rem;
        padding: 1rem;
        border: 2px #66e5bf solid;
    }
    ol {
        list-style: none;
        margin:0;
        width: 14rem;
    }
    

    @media (min-width: 35em) {
        section.semester {
            font-size: 1em;
        }
    }

    @media (min-width: 25em) {
        ol {
            width: 18rem;
        }
    }
</style>