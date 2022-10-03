<script>
  import * as helpers from '@prismicio/helpers';
  import { prettyDate } from '$lib/utils/date.js';
  import Heading from '$lib/components/Heading.svelte';

  export let data;

  let { page, semesters } = data;
</script>

<section class="blue-on-green rounded col-span-2">
  <Heading title={page.data.title} />
  {@html helpers.asHTML(page.data.content)}
</section>

{#each semesters as semester, i}
  <section class="semester">
    <Heading title="Semester {++i}" subtitle={semester.data.title} />

    <ol>
      {#each semester.data.sprints as sprint}
        <li>
          <a data-sveltekit-prefetch href={sprint.uid}>
            Sprint {sprint.data.sprint}:
            <strong>{sprint.data.title}</strong>
          </a>
          <time>
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
    max-width:60em;
  }
  section:not(.semester) {
    max-width:40em
  }
  section.semester {
    padding: 0 2rem;
  }
  ol {
    margin: 0 -2rem;
    min-height: 25rem;
    flex-grow: 1;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  ol li {
    padding: 1rem 2rem;
    border: 1px solid var(--green);
    border-radius: var(--rounded);
    color: var(--green);

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    position: relative;
  }

  section:last-child ol li {
    flex-grow: 1;
    align-items: flex-start;
  }

  ol li:hover {
    color: var(--purple);
    border-color: var(--purple);
    transform: scale(1.01);
  }

  ol a {
    white-space: nowrap;
    text-decoration: none;
  }

  ol a:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ol li:hover a {
    color: inherit;
  }

  ol a strong {
    font-size: 1.25em;
    font-weight: normal;
  }

  ol time {
    border-radius: var(--rounded);
    background-color: var(--green);
    color: var(--blue);
    padding: 0 0.25rem;
    font-size: 0.8em;
  }

  ol li:hover time {
    background-color: var(--purple);
  }
</style>
