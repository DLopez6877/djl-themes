const masculinePastelTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: '#7898AB',
        },
        secondary: {
            main: '#556B2F',
        },
        background: {
            default: '#404040',
        },
        text: {
            primary: '#D96C6C',
            secondary: '#5E6B82',
        },
    },
    typography: {
        fontFamily: 'Nunito Sans, Arial',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    paddingBottom: '3px',
                },
            },
        },
        MuiTableSortLabel: {
            styleOverrides: {
                icon: {
                    color: '#703030', // Default color
                    '&.Mui-active': {
                        color: '#703030', // Active color
                    },
                },
                root: {
                    '&.Mui-active .MuiTableSortLabel-icon': {
                        color: '#703030', // Active icon color with higher specificity
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.MuiOutlinedInput-colorSecondary.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#8FAB6F', // Focused border color for secondary
                        },
                    },
                },
                notchedOutline: {
                    '&.MuiOutlinedInput-colorSecondary': {
                        borderColor: '#8FAB6F', // Default border color for secondary
                    },
                },
            },
        },
    },
};

export default masculinePastelTheme;
