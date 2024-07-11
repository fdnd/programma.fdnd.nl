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
        </div>
    </section>
</div>

  