<script>
    import Semesters from '$lib/components/program/Semesters.svelte'
	import Program from '$lib/components/program/Program.svelte'

    export let data
   
    const {title, subtitle, content, semesters} = data
</script>

<Program {title} {content}/>
<Semesters {semesters} {subtitle} />

<style>
    :global(body:before) {
        width: 160px;
    }
    :global(body:after) {
        width: 160px;
    }
    @media (min-width:40em) {
        :global(body:before) {
            width: 350px !important;
            
        }
    }
</style>




