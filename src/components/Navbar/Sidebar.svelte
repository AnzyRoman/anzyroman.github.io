<script lang="ts">
    import { sidebarOpen } from 'Stores/SidebarOpen'
    import { clickOutside } from 'utils/clickOutside'
</script>

{#if $sidebarOpen}
    <nav
        use:clickOutside={() => ($sidebarOpen = false)}
        class="fixed flex flex-col right-0 h-screen w-80 bg-black text-white space-y-5 z-30">
        <div
            class="flex flex-row justify-between items-center px-6 h-20">
            <span class="text-lg font-bold">Certbud</span>
            <button
                on:click={() => ($sidebarOpen = false)}
                class="text-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="text-5xl">
                    <path
                        fill="currentColor"
                        d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
            </button>
        </div>
        <ul class="px-5 space-y-5 text-md">
            <li>
                <span class="px-2 text-green text-xs">
                    01.
                </span>
                HOME
            </li>
            <li class="">
                <span class="px-2 text-green text-xs">
                    02.
                </span>
                O NAS
            </li>
            <li>
                <span class="px-2 text-green text-xs">
                    03.
                </span>
                DEKLARACJE ŚRODOWISKOWE
            </li>
            <li>
                <span class="px-2 text-green text-xs">
                    04.
                </span>
                WSPÓŁPRACA
            </li>
            <li>
                <span class="px-2 text-green text-xs">
                    05.
                </span>
                KONTAKT
            </li>
        </ul>
    </nav>
{/if}
