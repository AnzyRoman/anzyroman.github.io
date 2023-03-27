<script lang="ts">
    import logo2 from 'images/logo2.png'
    import NavButton from './NavButton.svelte'

    let yVal: number
</script>

<nav
    id="navbar"
    class="fixed flex flex-row top-0 w-screen items-center sm:px-10 px-5 z-20 h-20 text-white bg-transparent {yVal >
    200
        ? 'justify-end'
        : 'justify-between'}">
    <img
        src={logo2}
        width="110"
        alt="logo"
        class={yVal > 200 ? 'hidden' : ''} />
    <NavButton {yVal} />
</nav>

<svelte:window bind:scrollY={yVal} />
