<script>
	import { prettyDate } from '$lib/utils/date';

	export let semester, sprint;
</script>

{#if sprint.sprintNumber}
	<div class="calendar-item sprint" style="--days: {sprint.lengthInDays}">
        <div class="calendar-item__sticky">
            <a data-sveltekit-prefetch href="{semester.slug}/{sprint.slug}">
                Sprint {sprint.sprintNumber}:
                <strong>{sprint.title}</strong>
            </a>
    
            <time class="sr-only">
                {#if sprint.startdate}
                    {prettyDate(sprint.startdate)}
                {/if}
                {#if sprint.endDate}
                    - {prettyDate(sprint.endDate)}
                {/if}
            </time>
        </div>
	</div>
{:else}
	<div class="calendar-item extra" style="--days: {sprint.lengthInDays}; --start: {sprint.daysBefore};">
        <div class="calendar-item__sticky">
            <span>{sprint.title}</span>
            <time class="">
                {#if sprint.startdate}
                    {prettyDate(sprint.startdate)}
                {/if}
                {#if sprint.endDate}
                    - {prettyDate(sprint.endDate)}
                {/if}
            </time>
        </div>
	</div>
    {/if}
    
    <style>
	.calendar-item {
        background-color: var(--accent);
		color: var(--blueberry);
        clip-path: inset(0 0.5rem round 0.25rem);
		width: calc(var(--days) * var(--grid));
        min-width: var(--grid);
        margin-top: 1rem;
	}
    .calendar-item :global(strong) {
        font-weight: 700;
        text-decoration: underline;
    }
    .calendar-item a {
        text-decoration: none;
    }
    .extra {
        position: absolute;
        top: 9rem;
        left: calc(var(--start) * var(--grid));
        background-color: var(--blueberry);
        color: var(--accent);
        border: 1px solid var(--accent);
        clip-path: none;
        font-size: 0.75rem;
    }
    .extra .calendar-item__sticky {
        padding: 0.5rem 1rem;
    }
    .calendar-item__sticky {
        position: sticky;
        left: 0;
        padding: 0.75rem 1.25rem;
        width: max-content;
    }
	time {
		/* border: 1px solid; */
		padding: 0 0.25rem;
		font-size: 0.7em;
        background: none;
        vertical-align: super;
        color: inherit;
	}
</style>
