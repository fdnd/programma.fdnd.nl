<script>
    import Heading from '$lib/components/Heading.svelte'
    import { prettyDate } from '$lib/utils/date'

    export let semester, sprint
</script>

{#if sprint.sprintNumber}
    <li>
    
    <a data-sveltekit-prefetch href={semester.slug}/{sprint.slug}>
        <span>Sprint {sprint.sprintNumber}:</span>
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
    li a {
        font-size: 1rem;
        line-height: 1.3;
        padding: 0.2em 0.1em;
        transition: 0.1s ease-out background, 0.1s ease-out color;
    }
    li a:hover {
        background-color: var(--turquoise);
        color: var(--blueberry);
        border-radius: 0.1em;
    }
    li a > span {
        display: block;
        font-size: 0.7em;
        letter-spacing: 0;
        text-transform: uppercase;
    }
    li { 
        position: relative;
        display:flex;
        justify-content: space-between;
        font-size: 1rem;
        align-items: baseline;
    }
    li a,
    li > span {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
    }
    li.extra {
        display:none;
        padding: 0.5em 0 0;
        border-radius: 0.5rem;
    }
    li.extra span {
        font-size: 0.7em;
        line-height: 1.2;
        text-transform: uppercase;
    }
    li.extra time {
        color: inherit;
    }
    li.extra::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        border: 1px solid currentColor;
        z-index: -1;
    }
    :global(body.expand) li.extra {
        display:flex;
    }
    time {
        border: 0 solid;
        padding: 0 .25rem;
        font-size: .7em;
        background-color: transparent;
        color: var(--turquoise);
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

