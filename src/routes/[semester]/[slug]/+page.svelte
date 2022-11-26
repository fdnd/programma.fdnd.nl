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

    <Criteria {criteria} />

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

    @media (min-width:30em) {
        :global(section) {
            margin:0;
        }
    }
    @media (min-width: 40em) {
		div {
            display:grid;
			grid-template-columns: 1fr 1fr;
			gap:1rem;
            align-items: start;
        }
	}
    @media (min-width: 60em) {
		div {
			grid-template-columns: 1fr 1fr 1fr;
        }
	}
    
</style>
  