<script>
    import * as helpers from '@prismicio/helpers'

    export let sprint
  </script>

<header>
    <h1><abbr title="Frontend Design &amp; Development"><span>FDND</span></abbr> <span>Programma</span></h1>
</header>

<main>
    <article>
        <a sveltekit:prefetch href="/">Terug naar programma</a>

        <h2>
            {sprint.data.title}
            
        </h2>
        <time>
            {#if sprint.data.startdate}
                {helpers.asDate(sprint.data.startdate).toLocaleDateString('nl-NL')} 
            {/if}
        </time> 

         

        {@html helpers.asHTML(sprint.data.content)}
    </article>
</main>

<style>
    time {
        margin-top: -2rem;
        color:#fff;
        display: block;
    }

    main > article > h2:first-of-type {
        margin-top: 1rem;
    }

</style>