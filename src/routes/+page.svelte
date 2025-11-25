<script>
    import Semesters from '$lib/components/program/Semesters.svelte'
	import Program from '$lib/components/program/Program.svelte'

   let { data } = $props();
   
    const {title, subtitle, content, semesters} = data
</script>

<Program {title} {content}/>
<Semesters {semesters} {subtitle} />





