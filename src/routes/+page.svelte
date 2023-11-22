<script>
    import { prettyDate, toggleDates } from '$lib/utils/date'
    import { onMount } from 'svelte'

    export let data
   
    const {title, subtitle, content, semesters} = data

    let jsEnabled = false

    onMount(() => {
        console.log('[3] client side DOM manipulation')
        jsEnabled = true
        document.body.classList.remove('expand')
    })
    console.log('[2] server side rendering & client side rendering (hydration)')
</script>

<section class="intro blue-on-green rounded col-span-2">
    <h2>{title}</h2>
    {@html content.html}
</section>

<section class="semesters-sprints">
    <h2>{subtitle}</h2>

    {#if jsEnabled}
        <input type="checkbox" id="show-hide-dates" class="toggle" on:change={toggleDates}>
        <label for="show-hide-dates"><span class="visually-hidden">Show/hide dates</span></label>
    {/if}
    
    <div class="scroll-horo">
        <span class="scroll-label visually-hidden">  horizontal scroll </span>
        
        {#each semesters as semester, i}
        <section class="semester green-on-blue pilled">
            <a href="/{semester.slug}">
                <h3>
                    Semester {++i}
                    <strong>{semester.title}</strong>
                </h3>
            </a>
            
            <ol>
            {#each semester.sprints as sprint}
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
            {/each}
            </ol>
        </section>
        {/each}
    </div>
</section>

<style>
    h2 {
        font-weight: normal;
    }
    h3 {
        font-size: clamp(1.15rem,-.5rem + 1vw,2.5rem);
        margin:0 0 .5rem;
        font-weight: normal;
    }
    h3 strong {
        display:block
    }
    a:focus {
        outline:none;
        background: var(--turquoise);  
        color: var(--blueberry);
        text-decoration: none;
    }
    section.intro {
        padding: 1rem !important;
        margin: 2rem 0;
        position: relative;
        max-width:42rem;
    }
    section.semesters-sprints {
        position: relative;
        margin: 1rem 0 0;
        width: 100%; 
    }
    div.scroll-horo {
        overflow-x: auto;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        scroll-snap-type: x mandatory;
        padding:1rem 1rem 2rem;
        margin-left: -1rem;
        translate:0;
        /animation: 1500ms cubic-bezier(.75,-0.5,0,1.75) 1000ms 1 forwards slide-in;
    }
    section.semester {
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        border: 2px var(--turquoise) solid;
        font-size: .9em;
        scroll-snap-align: start;
        animation: 1500ms linear 1000ms 1 forwards slide-in; 
        /* cubic-bezier(.75,-0.5,0,1.75) */
    }
    @keyframes slide-in {
        0% {
            translate:0
        }
        50% {
            translate:-30vw
        }
        100% {
            translate:0 
        }
        
    }
    section.semester > a {
        display:inline-block;
        margin:0 0 .5rem;
        position: relative;
    }
    span.scroll-label{
        position: absolute;
        top: 0;
        right: 1rem;
        background: var(--call-to-action);
    }
    input[type="checkbox"].toggle {
        opacity: 0;
        position: absolute;
        left: -9000px;
        top: -9000px;
    }
    input[type="checkbox"].toggle + label {
        position: absolute;
        top:2rem;
        right:0;
        width: 10.75em;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: white;
        font-family: helvetica;
        font-size: 1em;
    }
    input[type="checkbox"].toggle + label::before {
        content: "";
        width: 10.75em;
        height: 1.325em;
        border: solid 2px var(--turquoise);
        border-radius: var(--pilled);
        transition: background-color 200ms ease-in-out;
    }
    input[type="checkbox"].toggle + label::after {
        content: "show all dates"; /* \2715 x */
        position: absolute;
        width: 8em;
        height: 1.5em;
        background-color: var(--blueberry);
        color: var(--turquoise);
        border: solid 2px var(--turquoise);
        border-radius: var(--pilled);
        font-weight: normal;
        font-size: .9em;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
    }
    input[type="checkbox"].toggle:checked + label::after {
        content: "hide all dates"; /* \2713 v */
        transform: translateX(50%);
        background-color: var(--turquoise);
        color: var(--blueberry);
    }
    input[type="checkbox"].toggle:hover + label::after,
    input[type="checkbox"].toggle:focus + label::after, 
    input[type="checkbox"].toggle:checked:hover + label::after {
        background-color: var(--turquoise);
        color: var(--blueberry);
    }
    input[type="checkbox"].toggle:checked + label::before {
        background-color: var(--turquoise);
        opacity: 0.5;
        border-color: var(--turquoise);
    }
    ol {
        list-style: none;
        margin:0;
        width: 14rem;
    }
    li { 
        position: relative;
        display:flex;
        justify-content: space-between;
        align-items: baseline;
    }
    li a,
    li span {
        display: inline-block;
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
        ol {
            width: 21rem;
        }
        li a,
        li span{
            width: 82%;
        }
    }
</style>
