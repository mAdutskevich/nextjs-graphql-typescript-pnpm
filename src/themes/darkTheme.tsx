import { DefaultTheme } from 'styled-components';
// import { ITheme } from '@/interfaces/ITheme';
import { variables } from './variables';

export const darkTheme: DefaultTheme = {
    name: 'dark',
    bg: {
        primary: variables.colors.dark,
        secondary: variables.colors.darkFaded4,
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
            color: variables.colors.light,
            bg: variables.colors.darkFaded3,
            border: variables.colors.darkFaded1,
            hoverBg: variables.colors.lightFaded1,
        },
        // notification: {}
    },
};
