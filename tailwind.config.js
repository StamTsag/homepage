/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.svelte'],
    theme: {
        extend: {
            colors: {
                'top-hover': 'rgb(255, 255, 255, 0.05)',

                player: 'rgb(255, 255, 255, 0.1)',

                project: 'rgb(255, 255, 255, 0.05)',
                'project-shadow': 'rgb(255, 255, 255, 0.05)',

                point: 'rgb(255, 255, 255, 1)',
                line: 'rgb(255, 255, 255, 0.5)',

                contact: 'rgb(255, 255, 255, 0.1)',
            },

            screens: {
                mobile: {
                    max: '800px',
                },
            },

            backgroundImage: {
                main: "url('/images/bg.jpg')",
            },

            keyframes: {
                spin: {
                    '100%': 'transform: rotate(360deg)',
                },
            },

            animation: {
                spin: 'spin 5s linear infinite',
            },
        },
    },
    plugins: [],
};
