<script>
import { prefetch } from '$app/navigation';

    import * as helpers from '@prismicio/helpers'

    export let page
    export let semesters
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
                <h3>Semester {++i}: {semester.data.title}</h3>

                <ol>
                {#each semester.data.sprints as sprint, i}
                    <li>
                        <a sveltekit:prefetch href="{sprint.uid}">Sprint {++i}: {sprint.data.title}</a>
                        <time>
                            {#if sprint.data.startdate}
                                {helpers.asDate(sprint.data.startdate).toLocaleDateString('nl-NL')} 
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
section {
    position: relative
}
section > h3 {
    font-size: clamp(1.15rem, -0.875rem + 4.333vw, 3.5rem);
}
main ol {
    list-style:none;
    margin:0 -1rem;
    padding-bottom:2rem;
    position:relative;
    
}

ol li { 
    border-radius: var(--rounded);
    padding:1rem;
    display:flex;
    border:3px solid var(--lavender);
    position: relative;  
    justify-content: space-between;
    align-items: center;
}

li:hover {
    color:var(--turquoise);
    border-color:var(--turquoise);
    transform:scale(1.01)
}

ol a {
    white-space:nowrap;
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
    color:inherit
}
ol li p:last-of-type{
    display:none;
}

@media (min-width:40em) {
    main > section {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:0 3rem
    }
    main > section h2,
    main > section > div {
        grid-column: 1 / -1;
    }
}
</style>