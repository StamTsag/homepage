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

            width: {
                1: '1.5px',
                20: '20px',
                24: '24px',
                25: '25px',
                30: '30px',
                36: '36px',
                40: '40px',
                48: '48px',
                56: '56px',
                '80%': '80%',
                120: '120vw',
                125: '125px',
                200: '200px',
                500: '500px',
            },

            minWidth: {
                24: '24px',
                30: '30px',
                36: '36px',
                40: '40px',
            },

            height: {
                20: '20px',
                24: '24px',
                25: '25px',
                30: '30px',
                36: '36px',
                40: '40px',
                48: '48px',
                56: '56px',
                95: '95vh',
                120: '120vh',
                200: '200px',
                300: '300px',
                400: '400px',
            },

            minHeight: {
                24: '24px',
                30: '30px',
                36: '36px',
                40: '40px',
            },

            backgroundImage: {
                main: "url('/images/bg.jpg')",
            },

            brightness: {
                20: '0.2',
            },

            blur: {
                10: '10px',
            },

            fontSize: {
                4: '4rem',
                9: '0.9rem',
                12: '1.2rem',
                16: '1.6rem',
                25: '2.5rem',
            },

            letterSpacing: {
                1: '1px',
                25: '0.25px',
            },

            borderRadius: {
                10: '10px',
            },

            keyframes: {
                spin: {
                    '100%': 'transform: rotate(360deg)',
                },
            },

            animation: {
                spin: 'spin 5s linear infinite',
            },

            margin: {
                10: '10px',
                50: '50px',
                75: '75px',
                100: '100px',
                250: '250px',
            },

            padding: {
                50: '50px',
            },
        },
    },
    plugins: [],
};
