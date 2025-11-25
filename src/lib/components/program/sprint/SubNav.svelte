<script>
  let { prevSprint, nextSprint } = $props();
</script>

<!-- Subnavigatie: Navigeer naar de vorige of volgende sprint  -->
<nav>
  <ul>
    {#if prevSprint}
        <li>
          <a data-sveltekit-reload href="/{prevSprint.semester.slug}/{prevSprint.slug}">
            <span>Sprint {prevSprint.sprintNumber}:</span> {prevSprint.title}
          </a>
      </li>
    {/if}
    
    {#if nextSprint}
        <li>
          <a data-sveltekit-reload href="/{nextSprint.semester.slug}/{nextSprint.slug}">
            <span>Sprint {nextSprint.sprintNumber}:</span> {nextSprint.title}
          </a>
      </li>
    {/if}
  </ul>
</nav>

<style>
  /* Subnavigatie */
  nav {
        font-size: .8rem;
        font-weight: 600;
        position: sticky;
        bottom:0;
        z-index:10000;
        display:flex;
        container-type:inline-size;
  }
    nav ul {
      display: flex;
      list-style: none;
      padding:.25rem;
      border-radius:1rem;
      justify-content: space-between;
      backdrop-filter: blur(1px);
      width:calc(100% + 1rem);
      margin:0 -.5rem;
    }

    @media(min-width:  50rem) {
      nav {
        font-size: 1rem;
      }
      nav ul {
        padding:.5rem;
        gap: 1rem;
      }
    }

    nav li {
      list-style:none;
    }

    nav a {
        padding: 0.3em 0.8em;
        border-radius: 1em;
        border: 1px solid transparent;
        background-color: var(--turquoise);
        color: var(--blueberry);
        text-decoration: none;
        display:flex;
        flex-direction:column;
        
        align-items: start;
        position: relative;
    }
    @media(min-width:  50rem) {
      nav a {
        flex-direction:row;
        gap:.25rem;
      }
    }
    nav a:hover, nav a:focus {
        background-color: var(--blueberry);
        color: var(--turquoise);
        border: 1px solid var(--turquoise);
    }
    nav span {
      display: block;
      white-space: nowrap;
    }

    
</style>