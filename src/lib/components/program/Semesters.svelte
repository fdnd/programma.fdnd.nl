<script>
    import Semester from '$lib/components/program/Semester.svelte'
    // import IconExpand from '$lib/components/icons/Expand.svelte'
    export let semesters

    function toggleDates({target}){
        if(target.nodeName == 'INPUT') {
            document.body.classList.toggle('expand')
        }
        // if(target.nodeName == 'BUTTON') {
        //     document.body.classList.toggle('expand')
        //     let label = target.querySelector('span')
        //     label.textContent == 'meer info' ? label.textContent = 'minder info ' : label.textContent = 'meer info'
        // }      
    }
</script>


<div class="semesters-sprints">
    <!-- <button on:click={toggleSchedule}><span>meer info</span><IconExpand /></button> -->
    <input type="checkbox" id="show-hide-dates" class="toggle" on:change={toggleDates}><label for="show-hide-dates"><span>Show/hide dates</span></label>
    
    <div class="scroll-horo"> <!-- horizontal scroll voor semester lijsten -->

        <span class="scroll-label">scroll >>> </span>
        
        {#each semesters as semester, i}
            <Semester {semester} {i}/>
        {/each}
    </div>
</div>

<style>
div.semesters-sprints{
    position: relative;
    margin: 0;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    max-width: 70em;
}
/* div.semesters-sprints button {
    color:inherit;
    border:none;
    display:flex;
    align-items:center;
    position: absolute;
    right: 0;
    top: 0;
    background: transparent;
    color:var(--turquoise);
    font-size: inherit;
    cursor: pointer;
}
div.semesters-sprints button > * {
    pointer-events: none;
}
div.semesters-sprints button:hover {
    text-decoration: underline;
} */
div.scroll-horo{
    position: relative;
    overflow-x: scroll;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    margin: 1rem 0;
    width: 100%;
}
div.scroll-horo span.scroll-label{
    display: none;
    position: absolute;
    top: 0;
    right: 1rem;
    background: var(--call-to-action);
}
@media (min-width: 40em) {
    div.scroll-horo {
        width: calc(100% + 1rem);
    }
}

input[type="checkbox"].toggle {
    opacity: 0;
    position: absolute;
    left: -9000px;
    top: -9000px;
}
input[type="checkbox"].toggle + label {
    position: relative;
    align-self: end;
    width: 10.75em;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    font-family: helvetica;
    font-size: 1em;
}
input[type="checkbox"].toggle + label span {
    display:none;
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
input[type="checkbox"].toggle:hover + label::after, input[type="checkbox"].toggle:checked:hover + label::after {
    background-color: var(--call-to-action);
    border-color: var(--call-to-action);
    color: var(--blueberry);
}
input[type="checkbox"].toggle:focus + label::before {
    background-color: var(--call-to-action);
    border-color: var(--call-to-action);
}

</style>