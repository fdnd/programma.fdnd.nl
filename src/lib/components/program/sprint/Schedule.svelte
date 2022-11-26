<script>
    import Heading from '$lib/components/Heading.svelte'
    import { prettyDate, longDate } from '$lib/utils/date.js'

    export let weekPlans
</script>

{#if weekPlans && weekPlans.length > 0}
  <section>
    <Heading title="Sprint planning" />
    {#each weekPlans as week, i}
      <table>
        <caption>Week {week.weekNumber}</caption>
        <thead>
          <tr>
            <th scope="col" class="blue-on-green">
              Maandag <span>{prettyDate(week.mondayDate)}</span>
            </th>
            <th scope="col" class="blue-on-green">
              Dinsdag <span>{prettyDate(week.tuesdayDate)}</span>
            </th>
            <th scope="col" class="blue-on-green">
              Woensdag <span>{prettyDate(week.wednesdayDate)}</span>
            </th>
            <th scope="col" class="blue-on-green">
              Donderdag <span>{prettyDate(week.thursdayDate)}</span>
            </th>
            <th scope="col" class="blue-on-green">
              Vrijdag <span>{prettyDate(week.fridayDate)}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Maandag {prettyDate(week.mondayDate)}"
             class="blue-on-green">{@html week.monday?.html}</td>
            <td data-label="Dinsdag {prettyDate(week.tuesdayDate)}"
             class="blue-on-green">{@html week.tuesday?.html}</td>
            <td data-label="Woensdag {prettyDate(week.wednesdayDate)}"
             class="blue-on-green">{@html week.wednesday?.html}</td>
            <td data-label="Donderdag {prettyDate(week.thursdayDate)}"
             class="blue-on-green">{@html week.thursday?.html}</td>
            <td data-label="Vrijdag {prettyDate(week.fridayDate)}"
             class="blue-on-green">{@html week.friday?.html}</td>
          </tr>
        </tbody>
      </table>
    {/each}
  </section>
{/if}

<style>
table {
    border-collapse: separate;
    border-spacing: 0.5em 0;
    font-size: 0.8em;
    padding-bottom: 1rem;
    margin-left:-1.25rem;
    margin-right:-1.25rem;
    display: block;
    overflow-x: scroll;
    width: calc(100vw - 2rem);
}
table + table {
    margin-top: 1rem;
}
table caption {
    color: white;
    font-size: 1.5rem;
    text-align: left;
    padding-bottom: 1rem;
    display: block;
    position:sticky;
    left: 1.25rem;
    
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
    padding: 0.5rem 1rem;
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
    padding: 1rem 1rem 0;
    font-size: 1.2rem;
    margin:0;
}

td :global(p) {
    margin-bottom: 2rem;
}

@media (min-width: 22rem) {
      th{
        min-width: 18rem;
      }
}
@media (min-width: 40em) {
      section {
        grid-column: 1 / -1;
      }
      table {
        /width: calc(100vw - 4rem);
      }
      th{
        min-width: 21rem;
      }
}
</style>