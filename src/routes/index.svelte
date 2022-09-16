<script>
  import * as helpers from '@prismicio/helpers'

  export let page
  export let semesters

  function formatDate(rawDate) {
    const date = helpers.asDate(rawDate)
    let day = date.getDate()
    let month = date.getMonth() + 1

    if (day.toString().length < 2) day = `0${day}`
    if (month.toString().length < 2) month = `0${month}`

    return `${day}/${month}`
  }
</script>

<header>
  <h1>
    <abbr title="Frontend Design &amp; Development"><span>FDND</span></abbr>
    <span>Programma</span>
  </h1>
  <p>Omdat we willen laten zien wat er zoal te doen is.</p>
</header>

<nav>
  <h2>Menu</h2>
  <ul>
    <li>
      <a class="active" sveltekit:prefetch href="/">Home</a>
    </li>
  </ul>
</nav>

<main>
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
            <a sveltekit:prefetch href={sprint.uid}
              >Sprint {sprint.data.sprint}:
              <strong>{sprint.data.title}</strong></a
            >
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
</main>

<footer>
  <nav>
    <h2>Microsites</h2>
    <p>
      FDND maakt gebruik van een heleboel microsites in plaats van één grote
      website met een ingewikkelde informatiestructuur. Microsites zijn kleine
      websites met een specifiek doel ter ondersteuning van een campagne,
      informatie over een product of dienst.
    </p>
    <ul>
      <li><a href="https://fdnd.nl">FDND.nl</a></li>
      <li>
        <a href="https://contact.fdnd.nl">Contact en routebeschrijving</a>
      </li>
      <li><a href="https://programma.fdnd.nl">Programma</a></li>
      <li><a href="https://skc.fdnd.nl">Studie Keuze Check</a></li>
      <li><a href="https://partners.fdnd.nl">Partners</a></li>
      <li><a href="https://tasks.fdnd.nl">Leertaken</a></li>
      <li><a href="https://styleguide.fdnd.nl">Styleguide</a></li>
    </ul>
  </nav>
  <section class="copy-construct">
    <span class="blue-on-purple"
      >Information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍</span
    >
    <span class="blue-on-green">♥</span>
    <span class="blue-on-white"
      ><span class="white-on-blue">to be</span> free</span
    >
    <span class="blue-on-green">@</span>
    <span class="purple-on-blue">frontend</span>
    <span class="blue-on-purple">design</span>
    <span class="white-on-blue">&</span>
    <span class="blue-on-green">development</span>
  </section>
</footer>

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
  main ol {
    margin: 0;
    min-height: 25rem;
    flex-grow: 1;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  main ol li {
    padding: 1rem;
    border: 3px solid var(--green);
    border-radius: var(--rounded);
    color: var(--green);

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    position: relative;
  }

  main section:last-child ol li {
    flex-grow: 1;
    align-items: flex-start;
  }

  main ol li:hover {
    color: var(--purple);
    border-color: var(--purple);
    transform: scale(1.01);
  }

  main ol a {
    white-space: nowrap;
    text-decoration: none;
  }

  main ol a:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  main ol li:hover a {
    color: inherit;
  }

  main ol a strong {
    font-size: 1.25em;
    font-weight: normal;
  }

  main ol time {
    border-radius: var(--rounded);
    background-color: var(--green);
    color: var(--blue);
    padding: 0 0.25rem;
    font-size: 0.8em;
  }

  main ol li:hover time {
    background-color: var(--purple);
  }
</style>
