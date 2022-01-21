import deepMerge from 'deepmerge';
import { createMuiTheme, responsiveFontSizes, ThemeOptions, Theme } from '@material-ui/core/styles';

const makeTheme = (variant: ThemeOptions): Theme => {
    const common = {
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*::-webkit-scrollbar': {
                        width: '0.5rem'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        background: '#888'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        background: '#555'
                    }
                }
            }
        },
        typography: {
            // fontFamily: 'Inter',
            fontSize: 14,
            fontWeightBold: 500,
            h1: {
                fontSize: 22,
                fontWeight: 500,
                lineHeight: 1.5
            },
            body1: {
                fontSize: 14,
                fontWeight: 400
                // color: "#475569"
            },
            body2: {
                // color: "#97A6BA",
                fontSize: 14,
                fontWeight: 400
            },
            subtitle1: {
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '21px'
            },
            button: {
                borderRadius: 5,
                fontSize: 12,
                lineHeight: '18px',
                fontWeight: 400
            }
        }
    };
    const theme = createMuiTheme(deepMerge(common, variant));
    return responsiveFontSizes(theme);
};

const light: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#3337BC'
        },
        secondary: {
            main: '#7cd2f7'
        },
        error: {
            main: '#E52121'
        },
        warning: {
            main: '#EE8160'
        },
        info: {
            main: '#709ecc'
        },
        success: {
            main: '#4fe054'
        },
        text: {
            primary: '#343a40',
            secondary: '#2e3133',
            hint: '#363c42',
            disabled: '#48494a'
        },
        background: {
            default: '#ffffff',
            paper: '#dce3f2'
        }
    }
};

const dark: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#0d3054'
        },
        secondary: {
            main: '#0b1e26'
        },
        error: {
            main: '#870505'
        },
        warning: {
            main: '#964c00'
        },
        info: {
            main: '#09539c'
        },
        success: {
            main: '#034d06'
        },
        text: {
            primary: '#f8f9fa',
            secondary: '#e4e7eb',
            hint: '#bbbcbd',
            disabled: '#ccc'
        },
        background: {
            default: '#1c2c33',
            paper: '#162024'
        }
    }
};

const themes: { [key: string]: Theme } = {
    light: makeTheme(light),
    dark: makeTheme(dark)
};

export const themeCookie = 'clthmvar';

export default themes;
