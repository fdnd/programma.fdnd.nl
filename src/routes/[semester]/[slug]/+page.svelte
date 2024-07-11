<script>
    import Content from '$lib/components/program/sprint/Content.svelte'
    import Criteria from '$lib/components/program/sprint/Criteria.svelte'
    import Tasks from '$lib/components/program/sprint/Tasks.svelte'
    import Schedule from '$lib/components/program/sprint/Schedule.svelte';
  
    export let data 
    const {title, sprintNumber, startdate, content, criteria, weekPlans, topics, tasks } = data
</script>

<div>
    <Content {title} {sprintNumber} {content} {startdate} {topics} />
</div>
<div>
    <Criteria {criteria} />
</div>
<div>
    <Tasks {tasks}/>
</div>
<div>
    <Schedule {weekPlans}/>
</div>

<style> 
	div {
		/* display:flex; */
		/* flex-direction: column; */
        /* gap: 1.5rem; */
        margin: 2rem 0 1.5rem;
        /* background: pink; */
	}
    @media (min-width:40em) {
        div {
            /* margin: 2rem 0 1.5rem; */
            /* flex-direction: row; */
            /* align-items: stretch; */
        } 
    }


    :global(section) {
        padding: 1rem;
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



    
    
</style>
  