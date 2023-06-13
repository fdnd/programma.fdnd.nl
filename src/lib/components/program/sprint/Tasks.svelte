<script>
import { onMount } from 'svelte'
import Heading from '$lib/components/Heading.svelte'
import IconStar from '$lib/components/icons/Star.svelte'

export let tasks
export let stargazer = false

tasks.forEach(task => {
  if (!stargazer && task && task.forks.length > 0) {
    stargazer = true
  }
})

onMount(() => { 
    /* Firefox hack, :has() selector not supported */
    if(!CSS.supports('selector(html:has(body))')){ 
        const subtasks = document.querySelector('.tasks li')
        const subtasksHeading = document.querySelector('.tasks h3.subtasks')
        if(subtasks) {
            subtasksHeading.style.display = 'block'
        }
    } 
})   
</script>

{#if tasks && tasks.length > 0}
    <section class="green-on-blue tasks">
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
    
    <section class="showcase {stargazer ? 'stargazer' : ''}">
        <Heading title="Studentenwerk" />

        <ul>
        {#each tasks as task}
            {#if task && task.forks.length > 0}
                    {#each task.forks as fork}
                    <li class="blue-on-purple">
                        <strong>
                            <img src="{fork.avatarUrl}" alt="" class="avatar">
                            <a href="{fork.ownerUrl}" target="_blank" rel="noreferrer">@{fork.owner}</a>
                            <span>{fork.title}</span>
                            <IconStar stargazerCount={fork.stargazerCount} />
                        </strong>
                        <img src="screeshot" alt="{fork.title}">
                        
                        <a href="{fork.url}" target="_blank" rel="noreferrer">Code</a>
                        {#if fork.homepageUrl}
                            <a href="{fork.homepageUrl}" target="_blank" rel="noreferrer">Website!</a>
                        {/if}
                    </li>
                    {/each} 
            {/if}
        {/each}
      </ul>
    </section>
{/if}

<style>
    section.tasks {
        border: 2px #66e5bf solid;
        border-radius:1rem;
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
        display:none
    }
    section.stargazer {
      display:block
    }
    section.showcase ul {
        display:flex;
        gap: 1rem;
        margin:0 -1rem;
        width:calc(100vw - 2rem);
        overflow-x:scroll;
        scroll-snap-type: x mandatory;
    }
    section.showcase li {
        display:flex;
        flex-wrap:wrap;
        margin-top: 1rem;
        padding:.5rem;
        border-radius:1rem;
        margin-bottom: 0;
        position: relative;
        min-width:18rem;
        max-width:30rem;
        scroll-snap-align: center;
    }
    section.showcase li * {
        margin-right: .25rem;    
    }
    section.showcase li strong {
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items:flex-end;
        margin-bottom: .5rem;
        overflow: hidden;
        white-space: nowrap;
        padding-left:3.5rem;
    }
    section.showcase li span {
      width:100%;
    }
    section.showcase img.avatar {
        width:3rem;
        height:3rem;
        border-radius:50%;
        margin-bottom: 0;
        position:absolute;
        left:.5rem;
        top:.5rem;
    }
    section.showcase li > img {
        width:calc(100% + 2rem);
        max-width:calc(100% + 1rem);
        aspect-ratio:2 / 1;
        display:block;
        font-size: 0.5rem;
        background-color: rgba(255,255,255,.2);
        color:transparent;
        margin-bottom: .5rem;
        filter:grayscale(1);
        opacity:.5;
        margin:0 -.5rem
    } 
    section.showcase li a {
       font-size: 0.75em;
    }
    section.showcase li strong::first-letter {
        text-transform:capitalize;
    }
    @media (min-width: 40em) {
        section.tasks {
            grid-column: 2 / 3;
        }
        section.showcase {
            grid-column: 1 / -1;
        }
        section.showcase ul {
          grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (min-width:60em) {
      section.tasks {
        min-width:26rem;
      }
     
    }
</style>