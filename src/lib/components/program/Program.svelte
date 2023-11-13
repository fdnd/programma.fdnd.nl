<script>
    import Heading from '$lib/components/Heading.svelte'

    export let title, content
</script>

<section class="blue-on-green rounded col-span-2">
    <Heading {title} />

    {@html content.html}
    

</section>

<style>
section {
    padding: 1rem !important;
    margin: 2rem 0;
    position: relative;
    max-width:42rem;
}
</style>