<script>
    import {loadingState} from '$lib/stores/program'
    import LoaderIcon from '$lib/components/icons/Loader.svelte'

    let loading
    loadingState.subscribe(value => {
        loading = value
    })
</script>

{#if loading}
    <p class="loader"><LoaderIcon /></p>
{/if}
