<script>
    import Heading from '$lib/components/Heading.svelte'
    import Content from '$lib/components/program/semester/Content.svelte'
    import SprintLink from '$lib/components/program/SprintLink.svelte'

    export let data 

    const semester = data
</script>

<div>
    <section>
        <Heading title="Semester" subtitle={semester.title} />

        <div>
            <Content {semester} />
            
            <section class="green-on-blue pilled">
                <h3>Sprints</h3>
                <ol>
                {#each semester.sprints as sprint}
                    <SprintLink {semester} {sprint} />
                {/each}
                </ol>
            </section>

            <section class="purple-on-blue pilled">
                <h3>Topics</h3>
                <ol>
                {#each semester.sprints as sprint}
                    {#each sprint.topics as topic}
                        <li>{topic.name}</li>
                    {/each}
                {/each}
                </ol>
            </section>
        </div>
    </section>
</div>

<style> 
    ol {
        margin:0;
    }

    section {
        margin-top: 2rem;
        padding:1rem;
    }

    section h3 {
        margin:0 0 1rem 
    }

    section > div {
        margin:2rem -1rem;
    }
    section > div section {
        margin:0;

    }

    @media (min-width:45em) {
        section > div {
            display:flex;
            flex-wrap:wrap;
            gap:2rem;
            align-items: start;
            max-width:70rem
        }
    }
</style>
  