<script>
    import Content from '$lib/components/program/sprint/Content.svelte'
    import Criteria from '$lib/components/program/sprint/Criteria.svelte'
    import Tasks from '$lib/components/program/sprint/Tasks.svelte'
    import Schedule from '$lib/components/program/sprint/Schedule.svelte';
  
    export let data

    const {title, sprintNumber, startdate, content, criteria, weekPlans, tasks } = data
</script>

<Content {title} {sprintNumber} {content} />

<div class="container">
    <Criteria {criteria} />
    <Tasks {tasks}/>
</div>

<Schedule {weekPlans}/> 

<style> 
    :global(section) {
        padding: 1rem;
        margin: 1rem 0;
    }
    div.container{
        max-width:28rem;
        align-items:flex-start
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

    @media (min-width: 44rem) {
        div.container{
        max-width: 65rem;
        display: flex;
        flex-wrap: nowrap;
        gap: 2rem;
        align-items: flex-start;
        }
        div.container :global(section){
        break-inside: avoid;
        }
    }
</style>
  