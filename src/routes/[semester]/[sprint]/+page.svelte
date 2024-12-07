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
    <!-- <Criteria {criteria} /> -->
</div>

<Tasks {tasks}/>

<Schedule {weekPlans}/>

<!-- Subnavigatie: Navigeer naar de vorige of volgende sprint  -->
<nav>
    {#if sprintNumber > 1}
        <a href="/{sprintNumber-1}">
            Vorige sprint
        </a>
    {/if}
    
    {#if sprintNumber < 20}
        <a href="/{sprintNumber+1}">
            Volgende sprint
        </a>
    {/if}
</nav>

<style> 
	div {
		display:flex;
		flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
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

    @media (min-width:40em) {
        div {
            margin: 2rem 0 1.5rem;
            flex-direction: row;
            align-items:stretch;
        } 
    }

    /* Subnavigatie */
    nav {
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
    }
    nav a {
        padding: 0.3em 0.8em;
        border-radius: 1em;
        border: 1px solid var(--turquoise);
        background-color: var(--blueberry);
        color: var(--turquoise);
        text-decoration: none;
    }
    nav a:hover,nav a:focus {
        background-color: var(--turquoise);
        color: var(--blueberry);
    }
</style>

<!--Subnavigatie-->
{#if sprintNumber < 20}
<style>
    nav a:last-of-type {
        margin-left:auto;
    }
</style>
{/if}

  
