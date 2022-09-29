<script>
  import * as helpers from '@prismicio/helpers'
  import IconCal from '$lib/components/icons/Calendar.svelte'
  import IconTag from '$lib/components/icons/Tag.svelte'
  import {prettyDate, longDate} from '$lib/utils/date.js'
  
  export let data

  let sprint = data
</script>

<section class="blue-on-green rounded col-span-2">
  <h2>Sprint {sprint.data.sprint}: <strong>{sprint.data.title}</strong></h2>

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
          <IconTag tag={tag}  />
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
  <section class="blue-on-green">
    {@html helpers.asHTML(sprint.data.tasks)}
  </section>
{/if}

<section class="col-span-3">
  <h2>Sprint planning</h2>
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
    margin:0 -.5rem
  }

  table + table {
    margin-top: 2rem;
  }

  table caption {
    color: white;
    font-size: 1.5rem;
    text-align: left;
    padding-bottom: 1rem;
    padding-left: .5rem;
  }
  th {
    font-weight: bold;
    width: 20%;
    background: var(--blue);
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    word-break: break-word;
    color: var(--blue);
    font-size: 0.8rem;
    min-width: 7rem;
    border: 1px solid var(--green);
    color: var(--green);
    text-align: left;
    padding:0.5rem;
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
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    background: var(--green);
    color: var(--blue);
  }

  @media (max-width: 50rem) {
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
      overflow: hidden;
    }

    table tr {
      display: block;
    }
    table td {
      display: block;
      border: 1px var(--green) solid;
      border-radius: .5rem;
      margin-bottom: .5rem;
      padding-top: 0;
      overflow: hidden;

    }

    table td::before {
      content: attr(data-label);
      display: block;
      margin-left: -0.5rem;
      margin-bottom: 0.5rem;
      padding: .5rem;
      font-weight: bold;
      background: var(--blue);
      word-break: break-word;
      color: var(--green);
      font-size: 0.8rem;
      width: 110%;
    } 
  }
</style>