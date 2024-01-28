<script>
    import { longDate } from '$lib/utils/date.js'
    import IconCal from '$lib/components/icons/Calendar.svelte'
    import IconTopic from '$lib/components/icons/Topic.svelte'
    
    export let startdate, topics
</script>

<aside>
    <h3>Topics</h3>
    <ul>
        <li class="blue-on-green rounded">
        {#if startdate}
            <IconCal date={longDate(startdate)} />
        {/if}
        </li>
        {#each topics as topic}
        <li class="blue-on-green rounded">
            <IconTopic {topic} />
        </li>
        {/each}
    </ul>
</aside>

<style>
    aside {
        margin-top: 0.2em;
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
</style>