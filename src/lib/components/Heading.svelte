<script>
  import IconLink from '$lib/components/icons/Link.svelte'
  export let title, subtitle = ''
  let id = title
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
</script>
  
<h2>
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

<style>
  h2 {
    font-weight: normal; 
    letter-spacing: -0.04em;
    margin: 0;
  }
  h2 a.anchor {
    display: none;
    position: absolute;
    margin-left: -0.6em;
    
  }

  h2:hover a.anchor {
    display: none;
  }

  h2 > strong {
    display: block;
    white-space: nowrap;
  }
  :global(section.semester h2) {
    font-size: 1em;
  }
  @media(min-width:30em) {
    :global(section.semester h2) {
      font-size: clamp(1.15rem, -.5rem + 1vw, 2.5rem);
    }
  }
  :global(section.semester h2 a.anchor) {
    margin-left: -1em !important;
    margin-top: 0.1em !important;
  }
</style>
  