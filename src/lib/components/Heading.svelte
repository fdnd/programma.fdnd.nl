<script>
  import IconLink from '$lib/components/icons/Link.svelte'

  let { title, subtitle = '' } = $props();
  let id = title
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
</script>
  
<h2 class="large-heading">
  <a {id} href="#{id}" class="anchor" aria-hidden="true">
    <IconLink />
  </a>
  <span>
    {title}
  </span>
  {#if subtitle !== ''}
    <strong>{subtitle}</strong>
  {/if}
</h2>
