<script>
import * as helpers from '@prismicio/helpers'

export let data;

let {page, semesters} = data


function formatDate(rawDate) {
    const date = helpers.asDate(rawDate)
    let day = date.getDate()
    let month = date.getMonth() + 1

    if (day.toString().length < 2) day = `0${day}`
    if (month.toString().length < 2) month = `0${month}`

    return `${day}/${month}`
}
</script>
  
<section class="blue-on-green rounded col-span-2">
  <h2>{page.data.title}</h2>
  {@html helpers.asHTML(page.data.content)}
</section>

{#each semesters as semester, i}
  <section id={semester.data.uid} class="semester">
    <h3>Semester {++i}: <strong>{semester.data.title}</strong></h3>

    <ol>
      {#each semester.data.sprints as sprint}
        <li>
          <a data-sveltekit-prefetch href={sprint.uid}>
            Sprint {sprint.data.sprint}:
            <strong>{sprint.data.title}</strong>
          </a>
          <time>
            {#if sprint.data.startdate}
              {formatDate(sprint.data.startdate)}
            {/if}
          </time>
        </li>
      {/each}
    </ol>
  </section>
{/each}
  
<style>
h3 {
  font-size: clamp(1.15rem, -1rem + 2vw, 2.5rem);
  margin-bottom: 1em;
}

h3 strong {
  display: block;
}
section.semester {
  padding: 0;
  display: flex;
  flex-direction: column;
}
ol {
  margin: 0;
  min-height: 25rem;
  flex-grow: 1;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

ol li {
  padding: 1rem;
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