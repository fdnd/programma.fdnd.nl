<script>
import { onMount } from 'svelte'
import Heading from '$lib/components/Heading.svelte'
import IconStar from '$lib/components/icons/Star.svelte'

export let tasks

onMount(() => { 
    /* Firefox hack, :has() selector not supported */
    if(!CSS.supports('selector(html:has(body))')){ 
        const subtasks = document.querySelector('.tasks li')
        const subtasksHeading = document.querySelector('.tasks h3.subtasks')
        if( subtasks) {
            subtasksHeading.style.display = 'block'
        }
    } 
})   
</script>

{#if tasks.length > 0}
    <section class="green-on-blue col-span-1 tasks">
        <Heading title="Leertaken" />

        {#each tasks as task}
            {#if task.topic == 'task'}
                <p>
                    <a href="{task.url}" data-sveltekit-prefetch>{task.name}</a><small class="blue-on-green">{task.forkCount} forks</small>
                </p>
                <p>
                    {task.description}
                </p>
            {/if}
        {/each}
        
        <h3 class="subtasks">Deeltaken</h3>
        <ul>
            {#each tasks as task}
                {#if task.topic == 'subtask'}
                    <li>
                        <a href="{task.url}" data-sveltekit-prefetch>{task.name}</a><small class="blue-on-green">{task.forkCount} forks</small>
                    </li>
                {/if}
            {/each}
        </ul>
      
    </section>

    <section class="purple-on-blue showcase">
        <Heading title="Studentenwerk" />

        {#each tasks as task}
            {#if task.forks.length}
                <ul>
                    {#each task.forks as fork}
                    
                    <li>
                        <strong>
                            {fork.title}
                            <IconStar stargazerCount={fork.stargazerCount} />
                        </strong>
                        <img src="" alt="{fork.title}">
                        <a href="{fork.ownerUrl}" target="_blank" rel="noreferrer">@{fork.owner}</a>
                        <a href="{fork.url}" target="_blank" rel="noreferrer">Code</a>
                        <a href="{fork.pagesUrl}" target="_blank" rel="noreferrer">Website</a>  
                    </li>
                    {/each}
                </ul>
            {/if}
        {/each}

    </section>
{/if}

<style>
    section.tasks {
        border: 2px #66e5bf solid;
        border-radius:1rem
    }
    :global(section.tasks h3.subtasks) {
        display:none;

    }
    :global(section.tasks:has(li) h3),
    :global(section.show h3) {
        display:block !important;
    }
    section.tasks p, 
    section.tasks li {
        display:flex;
        align-items:flex-end;
        justify-content: space-between;
    }
    section.tasks p:nth-of-type(2n) {
        margin-bottom: 2em;
    }
    section.tasks a {
        text-transform:capitalize;
        display:flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items:center;
        white-space: nowrap;
        text-overflow: ellipsis;  
        overflow:hidden
    }
    small {
        font-size: .5em;
    }
    section.tasks small {
      margin-left: .25rem;
      padding:0 .1rem;
      transform:translateY(-5px);
      white-space: nowrap;
    }
    section.showcase {
        border-radius:1rem;
        border:2px solid #a675f5
    }
    section.showcase img {
        width:100%;
        aspect-ratio:2 / 1;
        display:block;
        font-size: 0.5rem;
        background-color: rgba(255,255,255,.2);
        color:transparent

    }
    section.showcase li {
        display:flex;
        flex-wrap:wrap;
        margin-top: 1.5rem;
    }
    section.showcase li * {
        white-space: nowrap;
        margin-right: .25rem;    
    }
    section.showcase li strong {
        width:100%;
        display:flex;
    }
    section.showcase li a {
       font-size: 0.75em;
    }
    section.showcase li strong::first-letter {
        text-transform:capitalize;
    }
    
</style>