<script>
    import Content from '$lib/components/program/sprint/Content.svelte'
    import Indicators from '$lib/components/program/sprint/Indicators.svelte'
    import Tasks from '$lib/components/program/sprint/Tasks.svelte'
    import Schedule from '$lib/components/program/sprint/Schedule.svelte';
    import SubNav from '$lib/components/program/sprint/SubNav.svelte';
  
    export let data 
    const { title, sprintNumber, startdate, content, weekPlans, topics, tasks, prevSprint, nextSprint, slug, semester, indicators } = data

    
</script>

<div>
    <Content {title} {sprintNumber} {content} {startdate} {topics} />    
    <Indicators {indicators} />
</div>

<Tasks {tasks}/>

<Schedule {weekPlans}/>

<!-- Subnavigatie: Navigeer naar de vorige of volgende sprint  -->
<nav>
    {#if prevSprint}
        <a data-sveltekit-reload href="/{prevSprint.semester.slug}/{prevSprint.slug}">
            Vorige sprint<span>: {prevSprint.title}</span>
        </a>
    {/if}
    
    {#if nextSprint}
        <a data-sveltekit-reload href="/{nextSprint.semester.slug}/{nextSprint.slug}">
            Volgende sprint<span>: {nextSprint.title}</span>
        </a>
    {/if}
</nav>

<div class="api-endpoint">
    <a href="/api/{semester.slug}/{slug}">JSON <span>endpoint: {title}</span></a>
</div>

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
        align-items: center;
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
    nav a > span{
        display:none;
    }
    nav a:hover,nav a:focus {
        background-color: var(--turquoise);
        color: var(--blueberry);
    }

    /* API link */
    div.api-endpoint{
        margin-bottom: 4rem;
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
    }
    div.api-endpoint a {
        border: 2px solid var(--turquoise);
        background-color: var(--turquoise);
        border-radius: .4rem;
        margin: 0 auto;
        padding: 0.2em 1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size: .8em;
        font-weight: bold;
        text-decoration:none;
        color: var(--blueberry);
    }
    div.api-endpoint a span {

    }
    div.api-endpoint a:after{
        display: none;
    }
    div.api-endpoint a:hover, 
    div.api-endpoint a:focus {
        background-color: var(--blueberry);
        text-decoration: none;
        color: var(--turquoise);
    }

    @media (min-width:47rem) {
        nav a > span {
            display: inline;
        }
    }
</style>

<!--Subnavigatie-->
{#if sprintNumber < 20}
<style>
    nav a:last-of-type {
        /margin-left:auto;
    }
</style>
{/if}

  
