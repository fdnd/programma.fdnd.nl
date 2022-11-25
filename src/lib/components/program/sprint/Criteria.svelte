<script>
    import Heading from '$lib/components/Heading.svelte'

    export let criteria
</script>

{#if criteria}
<section class="blue-on-purple rounded col-span-1 criteria">
    <Heading title="Gedragscriteria" />
    {@html criteria.html}
</section>
{/if}

<style>
    section {
      margin-bottom: 2rem;
    }
    :global(section.criteria ul){
      margin-left:0
    }
    :global(section.criteria ul li){
      list-style:none
    }
    @media (min-width: 40em) {
        section {
            grid-column: 1 / 2;
            margin-bottom: 0;
        }
    }
    @media (min-width:60em) {
      section {
        min-width:26rem;
      }
      
    }
</style>