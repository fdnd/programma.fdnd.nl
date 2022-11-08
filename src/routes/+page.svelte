<script>
    import Heading from '$lib/components/Heading.svelte'
    import IconExpand from '$lib/components/icons/Expand.svelte'
    import { prettyDate } from '$lib/utils/date'
    
    export let data

    const {title, subtitle, content, semesters} = data

    function toggleSchedule({target}){
      if(target.nodeName == 'BUTTON') {
        document.body.classList.toggle('expand')
        let label = target.querySelector('span')
        label.textContent == 'meer info' ? label.textContent = 'minder info ' : label.textContent = 'meer info'
      }      
    }
</script>

<section class="blue-on-green rounded col-span-2">
    <Heading title={title} subtitle={subtitle} />
    {@html content.html}
    
    <button on:click={toggleSchedule}>
      <span>meer info</span><IconExpand />
    </button>
</section>

<div class="scroll-horo"> <!-- horizontal scroll voor semester lijsten -->

  <span class="scroll-label">scroll >>> </span>
{#each semesters as semester, i}
  <section class="semester green-on-blue pilled">
      <Heading title="Semester {++i}" subtitle={semester.title} />
      

      <ol>
        {#each semester.sprints as sprint}
        {#if sprint.sprintNumber}
          <li>
            
            <a data-sveltekit-prefetch href={semester.slug}/{sprint.slug}>
              Sprint {sprint.sprintNumber}:
              <strong>{sprint.title}</strong>
            </a>

            <time class="rounded blue-on-green">
              {#if sprint.startdate}
                {prettyDate(sprint.startdate)}
              {/if}
            </time>
          </li>
        {:else}
          <li class="extra">
              <span>{sprint.title}</span>
              <time class="rounded blue-on-green">
                {#if sprint.startdate}
                  {prettyDate(sprint.startdate)}
                {/if}
              </time>
          </li>
        {/if}

            
          
        {/each}
      </ol>
  </section>
{/each}
</div>

<style>
  :global(body) {
    /* max-width:60em; */
    display: block !important;
  }
  :global(body main) {
    /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) */
    /* max-width:60em; */
    display: block !important;
  }
  :global(body:before) {
    width: 160px;
  }
  :global(body:after) {
    width: 160px;
  }
  
  section {
    padding: 1rem;
    margin: 1rem 0;
    position: relative;
  }
  :global(section.semester h2) {
    color:#fff
  }
  section.col-span-2 {
  /* section:not(.semester) { */
    max-width:42rem;
    padding-bottom: 2rem;
    /* grid-column: 1 / -1 */
  }
  button {
    background-color: transparent;
    color:inherit;
    border:none;
    display:flex;
    align-items:center;
    position: absolute;
    bottom:-3rem;
    left:1rem;
    color:#66e5bf;
    font-size: inherit;
  }
  button > * {
    pointer-events: none;
  }
  button:hover {
    text-decoration: underline;
  }
  div.scroll-horo{
    position: relative;
    padding-left: 1rem; 
    margin: 3rem 0 1rem -1rem;
    width: 100vw;
    overflow-x: scroll;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  div.scroll-horo span.scroll-label{
    display: none;
    position: absolute;
    top: 0;
    right: 1rem;
    background: gold;
  }
  section.semester {
    font-size: .9em;
    /* width: 25rem; */
    margin-right: 1rem;
    padding: 1rem;
    border: 2px #66e5bf solid;
  }
  ol {
    list-style: none;
    margin:0;
    width: 14rem;
  }
   ol li { 
    /* list-style: none; */
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items: baseline;
  }
  ol li a,
  ol li span {
    display: inline-block;
    width: 19rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ol li.extra {
    display:none;
  }
  :global(body.expand) ol li.extra {
    display:flex;
  }
  time {
    border:1px solid;
    padding:0 .25rem;
    font-size: .7em;
    border-radius: var(--rounded);
  }

  a::before {
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1
  }

  @media (min-width: 25em) {
    ol {
      width: 18rem;
    }
    ol li a{
      width: 14rem;
    }

  }
  @media (min-width: 30em) {
    :global(body:before) {
      width: 350px !important;
    }
  }
  @media (min-width: 35em) {
    :global(main) {
        /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)) */
    }
    section.semester {
      font-size: 1em;
    }
    ol {
      width: 23rem;
    }
    ol li a{
      width: 19rem;
    }
  }

  

</style>




