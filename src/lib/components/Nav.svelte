<nav>
  <h2>Menu</h2>
  <menu>
    <li>
      <a class="active" data-sveltekit-prefetch href="/">Home</a>
    </li>
  </menu>
</nav>

<style>
  nav{
    max-width: 42rem;
    display: flex;
    justify-content:end;
  }
  menu {
    list-style: none;
  }
  menu a {
    display: block;
    border-radius: 0.5rem;
    transform: rotate(-5deg) translateY(-6.8rem);
  }

  @media (min-width: 30em) {
    menu a {
      transform: rotate(-5deg) translateY(-3rem);
    }

  }
</style>