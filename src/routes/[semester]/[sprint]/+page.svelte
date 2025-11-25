<script>
    import Content from '$lib/components/program/sprint/Content.svelte'
    import Criteria from '$lib/components/program/sprint/Criteria.svelte'
    import Tasks from '$lib/components/program/sprint/Tasks.svelte'
    import Schedule from '$lib/components/program/sprint/Schedule.svelte';
  
    export let data 

    const {title, sprintNumber, startdate, content, criteria, weekPlans, topics, tasks } = data
</script>

<div>
    <Content {title} {sprintNumber} {content} {startdate} {topics} />
    
    <Criteria {criteria} />
</div>

<Tasks {tasks}/>
<Schedule {weekPlans}/>

  