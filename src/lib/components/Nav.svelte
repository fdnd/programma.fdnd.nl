<nav>
  <h2>Menu</h2>
  <menu>
    <li>
      <a class="active" data-sveltekit-prefetch href="/">Home</a>
    </li>
    <li>
      <a data-sveltekit-reload href="/all-human">Sprint 3</a>
    </li>
    <li>
      <a data-sveltekit-reload href="/choices-choices">Sprint 15</a>
    </li>
  </menu>
</nav>

<style>
  nav{
    /* background: gold; */
    max-width: 42rem;
    display: flex;
    justify-content:end;
    font-size: 0.8rem;
    margin-bottom: 2rem;
  }
  menu {
    list-style: none;
  }
  menu li{
    display: inline-block;
  }
  menu a {
    border-radius: 0.5rem;
    transform: rotate(-5deg) ;
  }
  @media (min-width: 22em) {
    nav{
      font-size: 1rem;
    }
  }
  @media (min-width: 42em) {
    menu a {
      transform: rotate(-5deg) translateY(-3rem);
    }
  }
</style>