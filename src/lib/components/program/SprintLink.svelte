<script>
    import Heading from '$lib/components/Heading.svelte'
    import { prettyDate } from '$lib/utils/date'

    export let semester, sprint
</script>

{#if sprint.sprintNumber}
    <li>
    
    <a data-sveltekit-prefetch href={semester.slug}/{sprint.slug}>
        Sprint {sprint.sprintNumber}:
        <strong>{sprint.title}</strong>
    </a>

    <time class="rounded blue-on-green">
        {#if sprint.startdate}
        {prettyDate(sprint.startdate)}
        {/if}
    </time>
    </li>
{:else}
    <li class="extra">
        <span>{sprint.title}</span>
        <time class="rounded blue-on-green">
        {#if sprint.startdate}
            {prettyDate(sprint.startdate)}
        {/if}
        </time>
    </li>
{/if}

<style>
    li { 
        position: relative;
        display:flex;
        justify-content: space-between;
        align-items: baseline;
    }
    li a,
    li span {
        display: inline-block;
        /* width: 19rem; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    li.extra {
        display:none;
    }
    :global(body.expand) li.extra {
        display:flex;
    }
    time {
        border:1px solid;
        padding:0 .25rem;
        font-size: .7em;
    }

    a::before {
        content:'';
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:1
    }
    @media (min-width: 25em) {
        li a,
        li span{
            width: 82%;
        }
    }
</style>

