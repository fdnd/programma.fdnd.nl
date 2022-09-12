<script>
    import * as helpers from '@prismicio/helpers'

    export let sprint
</script>

<header>
    <h1><abbr title="Frontend Design &amp; Development"><span>FDND</span></abbr> <span>Programma</span></h1>
</header>

<a sveltekit:prefetch href="/" class="back">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="5" y1="12" x2="11" y2="18"></line>
        <line x1="5" y1="12" x2="11" y2="6"></line>
     </svg>
     <em>semesters & sprint</em>
</a>

<main>
    <article>
        <h2>
            Sprint {sprint.data.sprint} <strong>{sprint.data.title}</strong>
            
        </h2>
        <time>
            {#if sprint.data.startdate}
                Startdatum: {helpers.asDate(sprint.data.startdate).toLocaleDateString('nl-NL')}
            {/if}
        </time> 

        {@html helpers.asHTML(sprint.data.content)}

        <section>
            {@html helpers.asHTML(sprint.data.workshops)}
        </section>

        <section>
            {@html helpers.asHTML(sprint.data.tasks)}
        </section>

        <section>
            {@html helpers.asHTML(sprint.data.criteria)}
        </section>

        <section>
            {@html helpers.asHTML(sprint.data.session)}
        </section>

        <section>            
            {#each sprint.data.planning as item}
            <h3>Week {item.weeknummer[0].text}</h3>
            <div class="scrollable">
                <table>
                    <tr>
                        <th>Maandag {#if item.maandag_datum}<span>{@html helpers.asDate(item.maandag_datum).getDate()}/{@html helpers.asDate(item.maandag_datum).getMonth()+1}</span><!-- {@html helpers.asDate(item.maandag_datum)} -->{/if}</th>
                        <th>Dinsdag {#if item.dinsdag_datum}<span>{@html helpers.asDate(item.dinsdag_datum).getDate()}/{@html helpers.asDate(item.dinsdag_datum).getMonth()+1}</span><!-- {@html helpers.asDate(item.dinsdag_datum)} -->{/if}</th>
                        <th>Woensdag {#if item.woensdag_datum}<span>{@html helpers.asDate(item.woensdag_datum).getDate()}/{@html helpers.asDate(item.woensdag_datum).getMonth()+1}</span><!-- {@html helpers.asDate(item.woensdag_datum)} -->{/if}</th>
                        <th>Donderdag {#if item.donderdag_datum}<span>{@html helpers.asDate(item.donderdag_datum).getDate()}/{@html helpers.asDate(item.donderdag_datum).getMonth()+1}</span><!-- {@html helpers.asDate(item.donderdag_datum)} -->{/if}</th>
                        <th>Vrijdag {#if item.vrijdag_datum}<span>{@html helpers.asDate(item.vrijdag_datum).getDate()}/{@html helpers.asDate(item.vrijdag_datum).getMonth()+1}</span><!-- {@html helpers.asDate(item.vrijdag_datum)} -->{/if}</th>
                    </tr>
                    <tr>
                        <td>{@html helpers.asHTML(item.maandag)}</td>
                        <td>{@html helpers.asHTML(item.dinsdag)}</td>
                        <td>{@html helpers.asHTML(item.woensdag)}</td>
                        <td>{@html helpers.asHTML(item.donderdag)}</td>
                        <td>{@html helpers.asHTML(item.vrijdag)}</td>
                    </tr>
                </table>
            </div>
            {/each}
        </section>
        
    </article>

    <aside>
        <h2>Topics</h2>
        <ul>
            {#each sprint.tags as tag}
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="8.5" cy="8.5" r="1" fill="currentColor"></circle>
                        <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z"></path>
                     </svg>
                    {tag}
                </li>
            {/each}
        </ul>
    </aside>
</main>

<style>
    main {
        margin-bottom: 3rem;
    }

    article {
        display:flex;
        flex-direction: column;
        padding:2rem 1rem;
    }

    h2 {
        margin-top: 0;
        font-size: 1em;
        line-height:1.2;
        background:none;
    }

    h2 strong {
        font-size: 1.5em;
        display:block
    }

    time {
        margin-top: -2rem;
        border-radius: var(--rounded);
        background-color: var(--turquoise);
        color: var(--blueberry);
        padding: 0 .5rem;
        font-size: 0.8em;
        align-self: flex-start;
    }

    aside {
        margin:2rem 0;
        padding:2rem;
        color: var(--turquoise)
    }

    aside h2 {
        color: #fff;
        margin-bottom: 1rem;
    }

    aside ul {
        margin:0;
        list-style:none;
        display:flex;
        flex-wrap:wrap
    }

    aside li {
        margin-bottom: .5rem;
        margin-right:.5rem;
        border-radius:var(--pilled);
        border: 1px solid var(--turquoise);
        padding:0 .5rem;
        white-space: nowrap;
    }

    
    aside li svg {
        transform: translateY(5px) rotate(90deg)
    }
    div.scrollable {
        overflow-x:auto
    }
    table {
        border-collapse: separate;
        border-spacing: .5em 0;
        font-size: .8em;
    }

    th {
        font-weight: bold;
        width: 20%;
        background: var(--turquoise);
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
        word-break: break-word;
        color: var(--blueberry);
        font-size: .8em;
    }
    th span {
        font-weight: normal;
        font-size: .8em;
    }

    td {
        vertical-align: top;
        border-bottom: 1px var(--turquoise) solid;
        border-left: 1px var(--turquoise) solid;
        border-right: 1px var(--turquoise) solid;
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;
        padding: .5em;
        color: white;
    }

    td p {
        margin: 0; padding: 0;
        word-break: break-word;
    }

    @media (min-width:50em) {
        main {
            display:grid;
            grid-template-columns: minmax(20rem, 50rem) 1fr;
        }
    }
</style>
