<script>
    export let stargazerCount
</script>

<i>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="none" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" stroke="var(--lavender)" fill="var(--blueberry)"/>
    </svg>
    <em>{stargazerCount}</em>
</i>

<style>
    i {
        display:block;
        position: absolute;
        right:-.75rem;
        top:-1rem;
    }
    i em {
        display:flex;
        align-items: center;
        justify-content: center;
        width:2.5rem;
        height:2.5rem;
        font-size: .6em;
        font-style: normal;
        font-weight: bold;
        text-align:center;
        border-radius:50%;
        color:currentColor;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>