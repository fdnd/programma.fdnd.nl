<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import GAnalytics from '$lib/components/GAnalytics.svelte';

  export const gtmId = 'G-QWP67QPK22';
</script>

<svelte:head>
  <title>FDND Programma</title>
</svelte:head>

<GAnalytics {gtmId} />

<header>
  <h1><span>FDND</span> Programma</h1>
</header>

<Nav />

<main>
  <slot />
</main>

<Footer />

<style>
</style>
