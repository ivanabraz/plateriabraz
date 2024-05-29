const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        fontFamily: {
            'sans': ['"Contax Sans"'],
            'body': ['Inter'],
            'serif': ['Marcellus'],
        },
    },
    plugins: [
    ],
}
