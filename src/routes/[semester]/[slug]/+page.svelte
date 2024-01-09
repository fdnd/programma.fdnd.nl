<script>
    import Content from '$lib/components/program/sprint/Content.svelte'
    import Criteria from '$lib/components/program/sprint/Criteria.svelte'
    import Tasks from '$lib/components/program/sprint/Tasks.svelte'
    import Schedule from '$lib/components/program/sprint/Schedule.svelte';
  
    export let data 
    const {title, sprintNumber, startdate, content, criteria, weekPlans, topics, tasks } = data
</script>

<div>
    <div class="flex">
        <Content {title} {sprintNumber} {content} {startdate} {topics} />
    
        <Criteria {criteria} />
    </div>

    <Tasks {tasks}/>

    <Schedule {weekPlans}/>
</div>

<style> 
	div {
		display:flex;
		flex-direction: column;
	}
    :global(section) {
        padding: 1rem;
        margin: 1rem 0;
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

    .flex {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin: 2rem 0 0;
        flex-direction: row;
    }

    @media (min-width:30em) {
        :global(section) {
            margin:0;
        }
    }
    
</style>
  