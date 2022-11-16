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
    section.col-span-1 {
        max-width:32rem;
    }
    :global(section.criteria ul){
      margin-left:0
    }
    :global(section.criteria ul li){
      list-style:none
    }
</style>