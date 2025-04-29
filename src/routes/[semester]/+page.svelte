<script>
	import Heading from '$lib/components/Heading.svelte';
	import Content from '$lib/components/program/semester/Content.svelte';
	import Semester from '$lib/components/program/Semester.svelte';
	import Button from '$lib/components/partials/Button.svelte';
	export let data;

	const semester = data;
</script>

<div>
	<section class="semester-detail">
    <div class="top">
      <h1 class="medium-heading">Semester {semester.title}</h1>
      <Button href="/">Terug naar programma</Button>  
    </div>
		<div>
      <div class="content">
        <Content {semester} />
      </div>
      <div class="sprint-info">
        <h3 class="medium-heading">
          Sprints
        </h3>
        <Semester {semester} i="0" nextSemester={ false } />
      </div>
		</div>
	</section>
</div>

<style lang="scss">
	.semester-detail {
		padding: var(--padding-top) var(--padding-side);
    max-width: var(--max-width);
    margin: 0 auto;

    .top {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--gap);
      
      @media (max-width: 750px) { 
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .content {
      margin-top: var(--padding-top);
      display: flex;
      gap: var(--gap);
      
      @media (max-width: 750px) {
        flex-direction: column;
      }
    }

    .sprint-info {
      margin-top: var(--padding-top);
      max-width: 800px;

      h3 {
        margin-bottom: var(--padding-top);
      }

      :global(ol li) {
        opacity: 1 !important;
      }

      :global(ol li time) {
        text-decoration: none !important;
      }
    }
	}
</style>
