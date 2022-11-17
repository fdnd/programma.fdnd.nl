<script>
    import Content from '$lib/components/program/sprint/Content.svelte'
    import Criteria from '$lib/components/program/sprint/Criteria.svelte'
    import Tasks from '$lib/components/program/sprint/Tasks.svelte'
    import Schedule from '$lib/components/program/sprint/Schedule.svelte';
  
    export let data 

    const {title, sprintNumber, startdate, content, criteria, weekPlans, topics, tasks } = data
</script>

<Content {title} {sprintNumber} {content} {startdate} {topics} />

<div class="container">
    <Criteria {criteria} />
    <Tasks {tasks}/>
</div>

<Schedule {weekPlans}/> 

<style> 
    :global(section) {
        padding: 1rem;
        margin: 1rem 0;
        min-width:20rem
    }
    div.container{
        display:flex;
        flex-direction:column;
    }

    :global(section h3){
        font-size: 1.2em;
        margin-top: 3rem;
        font-weight: normal;
    }

    :global(section ul) {
        margin:0;
        list-style:none !important;
    }
    :global(section ul li) {
        list-style:none !important;
    }

    @media (min-width: 30rem) {
        div.container{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:2rem;
            align-items: start;
            overflow-x:scroll
        }
        div.container :global(section){
        break-inside: avoid;
        }
    }

    @media (min-width: 44rem) {
        div.container{
            grid-template-columns:1fr 1fr 1fr;
        }
        div.container :global(section){
        break-inside: avoid;
        }
    }
</style>
  