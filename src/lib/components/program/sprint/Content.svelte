<script>
    import Heading from '$lib/components/Heading.svelte'
    import Topics from './Topics.svelte';

    export let title, sprintNumber, content, startdate, topics
</script>


<section class="blue-on-green pilled col-span-2">
    <Heading title="Sprint {sprintNumber}: {title}" />

    <Topics {startdate} {topics} />

    <div>
        {#if content}
        {@html content.html}
        {/if}
    </div>
</section>


<style>
    section.col-span-2 {
        max-width:42rem;
        padding: 1rem;
    }
</style>