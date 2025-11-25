<script>
    let { semester } = $props();
</script>

<section class="blue-on-green pilled">
    <h3>Leerresultaat</h3>
    {@html semester.goal.html}
</section>

<section class="blue-on-purple pilled">
    <h3>Inhoud</h3>
    {@html semester.content.html}
</section>

