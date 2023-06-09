import { DefaultTheme } from 'styled-components';
// import { ITheme } from '@/interfaces/ITheme';
import { variables } from './variables';

export const lightTheme: DefaultTheme = {
    name: 'light',
    bg: {
        primary: variables.colors.white,
        secondary: variables.colors.light,
        // notification: variables.colors.
        // warning: variables.colors.
    },
    button: {
        primary: {
            color: variables.colors.white,
            bg: variables.colors.sky,
            border: variables.colors.sky,
            hoverBg: 'transparent',
        },
        secondary: {
            color: variables.colors.dark,
            bg: variables.colors.lightFaded2,
            border: variables.colors.darkFaded1,
            hoverBg: variables.colors.lightFaded1,
        },
        // notification: {}
    },
};
