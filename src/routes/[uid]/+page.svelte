<script>
  import * as helpers from '@prismicio/helpers'
  import IconCal from '$lib/components/icons/Calendar.svelte'
  import IconTag from '$lib/components/icons/Tag.svelte'
  import Heading from '$lib/components/Heading.svelte'
  import { prettyDate, longDate } from '$lib/utils/date.js'

  export let data

  let sprint = data

</script>

<section class="blue-on-green rounded col-span-2">
  <Heading title="Sprint {sprint.data.sprint}: {sprint.data.title}" />

  <aside>
    <h3>Topics</h3>
    <ul>
      <li class="green-on-blue rounded">
        
          {#if sprint.data.startdate}
            <IconCal date={longDate(sprint.data.startdate)} />
          {/if}
      </li>
      {#each sprint.tags as tag}
        <li class="green-on-blue rounded">
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

<div class="container">
  <section class="blue-on-purple pilled col-span-1">
    <Heading title="Gedragscriteria" />
    {@html helpers.asHTML(sprint.data.criteria)}
  </section>

  {#if sprint.data.tasks}
    <section class="green-on-blue col-span-1">
      <Heading title="Leertaken" />
      {@html helpers.asHTML(sprint.data.tasks)}
    </section>
  {/if}
</div>

<section class="col-span-3">
  <Heading title="Sprint planning" />
  {#each sprint.data.planning as item}
    <table>
      <caption>Week {item.weeknummer[0].text}</caption>
      <thead>
        <tr>
          <th scope="col" class="blue-on-green">
            Maandag <span>{prettyDate(item.maandag_datum)}</span>
          </th>
          <th scope="col" class="blue-on-green">
            Dinsdag <span>{prettyDate(item.dinsdag_datum)}</span>
          </th>
          <th scope="col" class="blue-on-green">
            Woensdag <span>{prettyDate(item.woensdag_datum)}</span>
          </th>
          <th scope="col" class="blue-on-green">
            Donderdag <span>{prettyDate(item.donderdag_datum)}</span>
          </th>
          <th scope="col" class="blue-on-green">
            Vrijdag <span>{prettyDate(item.vrijdag_datum)}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Maandag {prettyDate(item.maandag_datum)}"
           class="blue-on-green">{@html helpers.asHTML(item.maandag)}</td>
          <td data-label="Dinsdag {prettyDate(item.dinsdag_datum)}"
           class="blue-on-green">{@html helpers.asHTML(item.dinsdag)}</td>
          <td data-label="Woensdag {prettyDate(item.woensdag_datum)}"
          class="blue-on-green">{@html helpers.asHTML(item.woensdag)}</td>
          <td data-label="Donderdag {prettyDate(item.donderdag_datum)}"
          class="blue-on-green">{@html helpers.asHTML(item.donderdag)}</td>
          <td data-label="Vrijdag {prettyDate(item.vrijdag_datum)}"
          class="blue-on-green">{@html helpers.asHTML(item.vrijdag)}</td>
        </tr>
      </tbody>
    </table>
  {/each}
</section>

<style>
  :global(body) {
    /* max-width:60em; */
    display: block !important;
  }
  :global(body main) {
    /* max-width:60em; */
    display: block !important;
  }
  section {
    padding: 1rem 2rem;
    margin: 1rem 0;
  }
  div.container{
    max-width:28rem;
  }
  section.col-span-1:last-of-type {
    border: 2px #66e5bf solid;
  }
  section.col-span-1 {
    /* width:50%; */
    display: inline-block;
    vertical-align: top;
  }
  section.col-span-2 {
    max-width:42rem;
    padding-bottom: 2rem;
    /* grid-column:1 / -1; */
  }
  section.col-span-3 {
    /* grid-column:1 / -1; */
  }

  section :global(h3){
    font-size: 1.2em;
    margin-top: 3rem;
    font-weight: normal;
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
    padding:0.1rem 0.5rem;
    white-space: nowrap;
    font-size: 0.8rem;
    border-radius:.5rem;
    line-height:1.5;
    display:flex;
  }

  /* Sprint planning */
  table {
    border-collapse: separate;
    border-spacing: 0.5em 0;
    font-size: 0.8em;
    margin: 0 -3rem;
    padding-left: 1rem;
    padding-bottom: 1rem;;
    display: block;
    overflow-x: scroll;
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
    display: block;
    position:sticky;
    left: 0;
  }
  th {
    font-weight: bold;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    word-break: break-word;
    font-size: 1.2rem;
    min-width: 16rem;
    border: 1px solid var(--green);
    text-align: left;
    padding: 0.5rem 1.5rem;
  }
  th span {
    font-weight: normal;
    font-size: 0.8rem;
  }

  tr {
    /* background: gold; */
    /* width: 100%; */
    /* background: purple; */
    margin: 1rem;
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
    margin-right: 0.2rem;
    /* width: 23rem; */
  }

  td :global(p) {
    margin-bottom: 2rem;
  }

  @media (min-width: 22rem) {
    th{
      min-width: 18rem;
    }
  }
  @media (min-width: 30rem) {
    th{
      min-width: 21rem;
    }
  }
  @media (min-width: 44rem) {
    div.container{
      max-width: 60rem;
      columns: 2;
      column-gap: 2rem;
    }
  }
  @media (max-width: 62rem) {
    /* table {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    } */
    /* table thead {
      position: absolute;
      margin: -1px;
      padding: 0;
      width: 1px;
      height: 1px;
      border: none;
      clip: rect(0 0 0 0);
    } */
    /* table tr {
      display: block;
    } */
    /* table td {
      display: block;
      border: 1px var(--green) solid;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 1rem 2rem 0;
    } */
    /* table td::before {
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
    } */
  }
</style>
