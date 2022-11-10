<script>
    import { onMount } from 'svelte'
    import Heading from '$lib/components/Heading.svelte'

    export let tasks
    
    
    onMount(() => { 
        /* Firefox hack, :has() selector not supported */
        if(!CSS.supports('selector(html:has(body))')){ 
            const subtasks = document.querySelector('.tasks li')
            const subtasksHeading = document.querySelector('.tasks h3')
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
            <a href="{task.url}" data-sveltekit-prefetch>{task.name}</a><small class="blue-on-green">{task.forks} forks</small>
          </p>
          <p>
            {task.description}
          </p>
        {/if}
      {/each}
      
      <h3>Deeltaken</h3>
      <ul>
        {#each tasks as task}
          {#if task.topic == 'subtask'}
          <li>
            
            <a href="{task.url}" data-sveltekit-prefetch>{task.name}</a><small class="blue-on-green">{task.forks} forks</small>
          </li>
          {/if}
        {/each}
      </ul>
      
    </section>
{/if}

<style>
    section.tasks {
        border: 2px #66e5bf solid;
        border-radius:1rem
    }
    :global(section.tasks h3) {
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
    section.tasks small {
      font-size: .5em;
      margin-left: .25rem;
      padding:0 .1rem;
      transform:translateY(-5px);
      white-space: nowrap;
    }
    
</style>