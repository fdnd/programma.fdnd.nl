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

{#each semesters as semester, i}
  <section class="semester green-on-blue pilled">
    <Heading title="Semester {++i}" subtitle={semester.data.title} />

    <ol>
      {#each semester.data.sprints as sprint}
        <li class="rounded green-on-blue">
          <a data-sveltekit-prefetch href={sprint.uid}>
            Sprint {sprint.data.sprint}:
            <strong>{sprint.data.title}</strong>
          </a>
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

<style>
  :global(main) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
  }
  section:not(.semester) {
    max-width:40rem;
    grid-column: 1 / -1
  }
  section.semester {
    font-size: .85em;
  }
  ol {
    list-style: none;
    margin:0
  }
  ol li {
    list-style: none;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
  }
  time {
    display:block;
    border:1px solid;
    padding:0 .25rem;
    font-size: .8em;
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

  @media (min-width: 35em) {
    :global(main) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr))
      }
    section.semester {
      font-size: inherit;
    }
  }
</style>
