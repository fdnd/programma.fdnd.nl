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
    <h1><abbr title="Frontend Design &amp; Development"><span>FDND</span></abbr> <span>Programma</span></h1>
</header>

<main>
    <section>
        <h2>
            {page.data.title}
        </h2>

        <div>
            {@html helpers.asHTML(page.data.content)}
        </div>
        

        {#each semesters as semester, i }
            <section>
                <h3>Semester {++i} <strong>{semester.data.title}</strong></h3>

                <ol>
                {#each semester.data.sprints as sprint}
                    <li>
                        <a sveltekit:prefetch href="{sprint.uid}">Sprint {sprint.data.sprint}: <strong>{sprint.data.title}</strong></a>
                        <time>
                            {#if sprint.data.startdate}
                                { formatDate(sprint.data.startdate) } 
                            {/if}
                        </time>
                        
                        <!-- <ul>
                            {#each sprint.tags as tag}
                                <li>{tag}</li>
                            {/each}
                        </ul> -->
                    </li>
                {/each}
                </ol>
            </section>
        {/each}
    </section>
</main>

<style>

h2 {
    font-size: clamp(1.15rem, -1.25rem + 12vw, 3rem);
    margin-bottom: 1rem;
}
main > section {
    padding:2rem 1rem;
}
section section {
    display:flex;
    flex-direction: column;
}

section  h3 {
    font-size: clamp(1.15rem, -1rem + 2.5vw, 2.5rem);
}

h3 strong {
    display:block
}

main ol {
    list-style:none;
    margin:0 -1rem;
    padding-bottom:2rem;
    position:relative;
    flex:1;
    display: flex;
    flex-direction: column;
}

ol li { 
    border-radius: var(--rounded);
    padding:1rem;
    display:flex;
    border:3px solid var(--lavender);
    position: relative;  
    justify-content: space-between;
    align-items: center;
    flex:1;
    font-size: .8em;
}

section section:last-child ol li {
    align-items: flex-start;
}


li:hover {
    color:var(--turquoise);
    border-color:var(--turquoise);
    transform:scale(1.01)
}


ol a {
    white-space:nowrap;
    text-decoration: none;
    
}
ol a:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

ol li:hover a {
    color:inherit;
    
}

ol a strong {
    font-size: 1.25em;
    font-weight: normal;
}
ol time {
    border-radius: var(--rounded);
    background-color: var(--lavender);
    color: var(--blueberry);
    padding: 0 .25rem;
    font-size: 0.8em;
}
ol li:hover time {
    background-color: var(--turquoise);
}
@media (min-width:40em) {
    main > section {
        display:grid;
        /grid-template-columns: 1fr 1fr;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        gap:0 3rem
    }
    main > section h2,
    main > section > div {
        grid-column: 1 / -1;
    }
}

</style>