<script>
    import IconCal from '$lib/components/icons/Calendar.svelte'
    import IconTag from '$lib/components/icons/Tag.svelte'
    import IconTask from '$lib/components/icons/Task.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import { prettyDate, longDate } from '$lib/utils/date.js'
  
    export let data

    const {title, sprintNumber, startdate, content, criteria, weekPlans, tasks } = data
  </script>
  
  <section class="blue-on-green pilled col-span-2">
    <Heading title="Sprint {sprintNumber}: {title}" />
  
    <aside>
      <h3>Topics</h3>
      <ul>
        <li class="green-on-blue rounded">
          
            {#if startdate}
              <IconCal date={longDate(startdate)} />
            {/if}
        </li>
        <!-- {#each tags as tag}
          <li class="green-on-blue rounded">
            <IconTag {tag} />
          </li>
        {/each} -->
      </ul>
    </aside>
  
    <div>
      {#if content}
        {@html content.html}
      {/if}
    </div>
  </section>
  
  <div class="container">
    {#if criteria}
    <section class="blue-on-purple pilled col-span-1 criteria">
      <Heading title="Gedragscriteria" />
        {@html criteria.html}
    </section>
    {/if}

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

  </div>
  
  {#if weekPlans.length > 0}
  <section class="col-span-3">
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
             class="blue-on-green">{@html week.monday.html}</td>
            <td data-label="Dinsdag {prettyDate(week.tuesdayDate)}"
             class="blue-on-green">{@html week.tuesday.html}</td>
            <td data-label="Woensdag {prettyDate(week.wednesdayDate)}"
             class="blue-on-green">{@html week.wednesday.html}</td>
            <td data-label="Donderdag {prettyDate(week.thursdayDate)}"
             class="blue-on-green">{@html week.thursday.html}</td>
            <td data-label="Vrijdag {prettyDate(week.fridayDate)}"
             class="blue-on-green">{@html week.friday.html}</td>
          </tr>
        </tbody>
      </table>
    {/each}
  </section>
  {/if}

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
      align-items:flex-start
    }
    section.tasks {
      border: 2px #66e5bf solid;
    }
    section.col-span-1 {
      /* width:50%; */
      max-width:32rem;
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
    :global(section.criteria ul){
      margin-left:0
    }
    :global(section.criteria ul li){
      list-style:none
    }
    section ul {
      margin:0;
      list-style:none !important;
    }
    section ul li {
      list-style:none !important;
    }
    section.tasks {
      border-radius:1rem
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
      /* width: 100%; */
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
        max-width: 65rem;
        display: flex;
        flex-wrap: nowrap;
        /* justify-content: space-between; */
        gap: 2rem;
        align-weeks: flex-start;
        /* columns: 2 auto; */
        /* column-gap: 2rem; */
      }
      div.container section{
        break-inside: avoid;
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
  