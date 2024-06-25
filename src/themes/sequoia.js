const sequoiaTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: '#6F7163',
        },
        secondary: {
            main: '#7E4C2E',
        },
        error: {
            main: '#894721',
        },
        warning: {
            main: '#b97c51',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#32452e',
        },
        text: {
            primary: '#442E1A',
            secondary: '#494B3A',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        background: {
            default: '#D1CCD2',
            paper: '#fdf9f4',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        action: {
            active: '#6F7163',
            hover: 'rgba(111, 113, 99, 0.08)',
            selected: 'rgba(111, 113, 99, 0.16)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            focus: 'rgba(0, 0, 0, 0.12)',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        type: 'light',
    },
    typography: {
        fontFamily: 'Josefin Sans, Arial',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    paddingBottom: '3px',
                    lineHeight: '1.4'
                },
            },
        },
        MuiTableSortLabel: {
            icon: {
                color: '#13950c',
                '&.Mui-active': {
                    color: '#13950c',
                },
            },
            root: {
                '&.Mui-active .MuiTableSortLabel-icon': {
                    color: '#13950c',
                },
            },
        },
    },
};

export default sequoiaTheme;