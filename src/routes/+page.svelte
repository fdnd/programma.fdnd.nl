<script>
  import * as helpers from '@prismicio/helpers'
  import { prettyDate } from '$lib/utils/date.js'
  import Heading from '$lib/components/Heading.svelte'

  export let data

  let { page, semesters } = data
</script>

<section class="blue-on-green rounded col-span-2">
  <Heading title={page.data.title} />
  {@html helpers.asHTML(page.data.content)}
</section>

<div class="scroll-horo"> <!-- horizontal scroll voor semester lijsten -->
  <span class="scroll-label">scroll >>> </span>
{#each semesters as semester, i}
  <section class="semester green-on-blue pilled">
    <Heading title="Semester {++i}" subtitle={semester.data.title} />

    <ol>
      {#each semester.data.sprints as sprint}
        <li class="rounded green-on-blue">

          {#if sprint.data.sprint}
            <a data-sveltekit-prefetch href={sprint.uid}>
              Sprint {sprint.data.sprint}:
              <strong>{sprint.data.title}</strong>
            </a>
          {:else}
            {sprint.data.title}
          {/if}

          <time class="rounded blue-on-green">
            {#if sprint.data.startdate}
              {prettyDate(sprint.data.startdate)}
            {/if}
          </time>
        </li>
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
    padding: 1rem 2rem;
    margin: 1rem 0;
  }
  section.col-span-2 {
  /* section:not(.semester) { */
    max-width:42rem;
    padding-bottom: 2rem;
    /* grid-column: 1 / -1 */
  }
  div.scroll-horo{
    position: relative;
    padding-left: 1rem;
    margin: 1rem 0 1rem -1rem;
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
    padding: 2rem;
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
  ol li a{
    display: inline-block;
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
