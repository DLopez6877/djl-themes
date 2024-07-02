const apolloTheme = {
    palette: {
        primary: {
            main: '#9DE720',
        },
        secondary: {
            main: '#EA3985',
        },
        background: {
            default: '#151618',
            paper: '#3b3b3b'
        },
        text: {
            primary: '#ffffff',
            secondary: '#F27D1D',
        },
    },
    typography: {
        fontFamily: 'Fjalla One, Arial',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    paddingBottom: '3px',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#25252a',
                    color: '#a8a8ab'
                },
            },
        },
    },
};

export default apolloTheme;