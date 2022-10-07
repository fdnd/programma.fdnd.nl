<script>
  import * as helpers from '@prismicio/helpers'
  import IconCal from '$lib/components/icons/Calendar.svelte'
  import IconTag from '$lib/components/icons/Tag.svelte'
  import Heading from '$lib/components/Heading.svelte'
  import { prettyDate, longDate } from '$lib/utils/date.js'

  export let data

  let sprint = data

  console.log('sprint', sprint)
</script>

<section class="blue-on-green rounded col-span-2">
  <Heading title="Sprint {sprint.data.sprint}: {sprint.data.title}" />

  <aside>
    <h3>Topics</h3>
    <ul>
      <li>
        <time class="green-on-blue rounded">
          {#if sprint.data.startdate}
            <IconCal date={longDate(sprint.data.startdate)} />
          {/if}
        </time>
      </li>
      {#each sprint.tags as tag}
        <li>
          <IconTag {tag} />
        </li>
      {/each}
    </ul>
  </aside>

  <div>
    {#if sprint.data.content}
      {@html helpers.asHTML(sprint.data.content)}
    {/if}
  </div>
</section>

<section class="blue-on-purple pilled">
  {@html helpers.asHTML(sprint.data.criteria)}
</section>

{#if sprint.data.tasks}
  <section class="green-on-blue">
    {@html helpers.asHTML(sprint.data.tasks)}
  </section>
{/if}

<section class="col-span-3">
  <Heading title="Sprint planning" />
  {#each sprint.data.planning as item}
    <table>
      <caption>Week {item.weeknummer[0].text}</caption>
      <thead>
        <tr>
          <th scope="col">
            Maandag <span>{prettyDate(item.maandag_datum)}</span>
          </th>
          <th scope="col">
            Dinsdag <span>{prettyDate(item.dinsdag_datum)}</span>
          </th>
          <th scope="col">
            Woensdag <span>{prettyDate(item.woensdag_datum)}</span>
          </th>
          <th scope="col">
            Donderdag <span>{prettyDate(item.donderdag_datum)}</span>
          </th>
          <th scope="col">
            Vrijdag <span>{prettyDate(item.vrijdag_datum)}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Maandag {prettyDate(item.maandag_datum)}"
            >{@html helpers.asHTML(item.maandag)}</td
          >
          <td data-label="Dinsdag {prettyDate(item.dinsdag_datum)}"
            >{@html helpers.asHTML(item.dinsdag)}</td
          >
          <td data-label="Woensdag {prettyDate(item.woensdag_datum)}"
            >{@html helpers.asHTML(item.woensdag)}</td
          >
          <td data-label="Donderdag {prettyDate(item.donderdag_datum)}"
            >{@html helpers.asHTML(item.donderdag)}</td
          >
          <td data-label="Vrijdag {prettyDate(item.vrijdag_datum)}"
            >{@html helpers.asHTML(item.vrijdag)}</td
          >
        </tr>
      </tbody>
    </table>
  {/each}
</section>

<style>
  section {
    padding: 1rem 2rem;
  }
  section.col-span-2 {
    max-width:40em;
    grid-column:1 / -1;
  }
  aside h3 {
    display: none;
  }
  aside ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    row-gap: 0.1rem;
  }
  aside ul li {
    list-style: none;
    border-radius: var(--pilled);
    border: 1px solid var(--blue);
    padding: 0 0.4rem;
    white-space: nowrap;
    color: var(--blue);
    background: var(--green);
    font-size: 0.8rem;
  }
  aside li:first-of-type {
    background: var(--blue);
  }

  table {
    border-collapse: separate;
    border-spacing: 0.5em 0;
    font-size: 0.8em;
    margin: 0 -2rem;
  }

  table + table {
    margin-top: 2rem;
  }

  table caption {
    color: white;
    font-size: 1.5rem;
    text-align: left;
    padding-bottom: 1rem;
    padding-left: 2rem;
  }
  th {
    font-weight: bold;
    background: var(--green);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    word-break: break-word;
    color: var(--blue);
    font-size: 1.2rem;
    width: 20%;
    min-width: 10rem;
    border: 1px solid var(--green);
    color: var(--blue);
    text-align: left;
    padding: 0.5rem 1.5rem;
  }
  th span {
    font-weight: normal;
    font-size: 0.8rem;
  }

  td {
    vertical-align: top;
    border-bottom: 1px var(--green) solid;
    border-left: 1px var(--green) solid;
    border-right: 1px var(--green) solid;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    padding: 1rem 1.5rem 0;
    font-size: 1.2rem;
    background: var(--green);
    color: var(--blue);
  }

  td :global(p) {
    margin-bottom: 2rem;
  }

  @media (max-width: 62rem) {
    table {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    table thead {
      position: absolute;
      margin: -1px;
      padding: 0;
      width: 1px;
      height: 1px;
      border: none;
      clip: rect(0 0 0 0);
    }

    table tr {
      display: block;
    }
    table td {
      display: block;
      border: 1px var(--green) solid;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 1rem 2rem 0;
    }

    table td::before {
      content: attr(data-label);
      display: block;
      margin-left: -0.5rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      font-weight: bold;
      background: var(--green);
      word-break: break-word;
      color: var(--blue);
      font-size: 1.2rem;
      width: 100%;
    }
  }
</style>
