<script>
    export let stargazerCount
</script>

<i>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill="#fffc86"/>
    </svg>
    <em>{stargazerCount}</em>
</i>

<style>
    i {
        display:block;
        margin-left: .25rem;
        margin-top: .1rem;
        transform: translate(-.25rem, -.5rem)
    }
    i em {
        display:block;
        position: absolute;
        top:.35rem;
        left:.25rem;
        font-size: .5em;
        font-style: normal;
        font-weight: bold;
        width:1rem;
        height:1rem;
        text-align:center;
        border-radius:50%;
        color:#050542;
    }
</style>