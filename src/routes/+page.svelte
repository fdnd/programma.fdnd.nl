<script>
    import Semesters from '$lib/components/program/Semesters.svelte'
	import Program from '$lib/components/program/Program.svelte'
    
    export let data

    const {title, subtitle, content, semesters} = data
</script>

<Program {title} {subtitle} {content}/>
<Semesters {semesters} />

<style>
    :global(body){
        display: block !important;
    }
    :global(body main) {
        display: block !important;
    }
    :global(body:before) {
        width: 160px;
    }
    :global(body:after) {
        width: 160px;
    }
    @media (min-width: 30em) {
        :global(body:before) {
            width: 350px !important;
        }
    }
</style>




