/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        colors: {
            red: '#a8201a',
            green: '#00a86b',
            slate: '#e0e2db',
            black: 'black',
            white: 'white',
            gray: '#7C809B',
            lightgreen: '#D0FBE1',
        },
        container: {
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1200px',
                '2xl': '1420px',
            },
        },
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
                lato: ['Lato'],
                garamond: ['Garamond'],
            },
            backgroundImage: {
                'header-bg':
                    "url('/src/images/bg-head.jpg')",
                'process-bg':
                    "url('/src/images/budynki.jpg')",
                'main-bg': "url('/src/images/whitebg.svg')",
            },
        },
    },
    plugins: [],
}
