<script>
    import { longDate } from '$lib/utils/date.js'
    import IconCal from '$lib/components/icons/Calendar.svelte'
    import IconTopic from '$lib/components/icons/Topic.svelte'
    
    export let startdate, topics
</script>

<aside>
    <h3>Topics</h3>
    <ul>
        <li class="background-color-1">
        {#if startdate}
            <IconCal date={longDate(startdate)} />
        {/if}
        </li>
        {#each topics as topic}
        <li class="background-color-2">
            <IconTopic {topic} />
        </li>
        {/each}
    </ul>
</aside>

<style lang="scss">
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
        padding: 0;
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