<script>
    export let semester
</script>

<section class="blue-on-green pilled">
    <h3>Leerresultaat</h3>
    {@html semester.goal.html}
</section>

<section class="blue-on-purple pilled">
    <h3>Inhoud</h3>
    {@html semester.content.html}
</section>

<style>
    section {
        margin-bottom: 2rem;
        padding:1rem;
    }
    h3 {
        margin:0 0 .5rem
    }
</style>

