/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary))',
                secondary: 'hsl(var(--color-secondary))',
            }
        },
        fontFamily: {
            sans: ['Outfit', 'sans-serif']
        },
    },
    plugins: [],
}