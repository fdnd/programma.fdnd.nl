<script>
    import Heading from '$lib/components/Heading.svelte'
    import Topics from './Topics.svelte';

    export let title, sprintNumber, content, startdate, topics
</script>


<section class="blue-on-green rounded">
    <Heading title="Sprint {sprintNumber}: {title}" />

    <Topics {startdate} {topics} />

    <div>
        {#if content}
        {@html content.html}
        {/if}
    </div>
</section>


<style>
    section {
        margin: 2rem 0;
        max-width:48rem;
    }
    @media (min-width: 40em) {
        section {
            grid-column: 1 / -1;
        }
    }
</style>