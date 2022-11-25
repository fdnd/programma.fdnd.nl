<script>
    import Heading from '$lib/components/Heading.svelte'
    import IconExpand from '$lib/components/icons/Expand.svelte'

    export let title, subtitle, content;

    function toggleSchedule({target}){
      if(target.nodeName == 'BUTTON') {
        document.body.classList.toggle('expand')
        let label = target.querySelector('span')
        label.textContent == 'meer info' ? label.textContent = 'minder info ' : label.textContent = 'meer info'
      }      
    }
</script>

<section class="blue-on-green rounded col-span-2">
    <Heading {title} {subtitle} />
    {@html content.html}
    
    <button on:click={toggleSchedule}>
      <span>meer info</span><IconExpand />
    </button>
</section>

<style>
section {
    padding: 1rem;
    margin: 2rem 0;
    position: relative;
    max-width:42rem;
}

button {
    background-color: transparent;
    color:inherit;
    border:none;
    display:flex;
    align-items:center;
    position: absolute;
    bottom:-3rem;
    color:#66e5bf;
    font-size: inherit;
}
button > * {
    pointer-events: none;
}
button:hover {
    text-decoration: underline;
}
</style>