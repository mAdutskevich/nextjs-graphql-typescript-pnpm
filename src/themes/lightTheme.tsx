import { ITheme } from '@/interfaces/ITheme';
import { variables } from './variables';

export const lightTheme: ITheme = {
    name: 'light',
    bg: {
        primary: variables.colors.white,
        secondary: variables.colors.light,
        // notification: variables.colors.
        // warning: variables.colors.
    },
    text: {
        primary: variables.colors.sky,
        secondary: variables.colors.dark,
        tertiary: variables.colors.darkFaded4,
    },
    button: {
        primary: {
            color: variables.colors.white,
            bg: variables.colors.sky,
            border: variables.colors.skyLight,
            hoverBg: variables.colors.skyLight,
        },
        secondary: {
            color: variables.colors.dark,
            bg: variables.colors.lightFaded3,
            border: variables.colors.lightFaded1,
            hoverBg: variables.colors.lightFaded2,
        },
        notification: {
            color: variables.colors.white,
            bg: variables.colors.colorNotification,
            border: variables.colors.colorNotification,
            hoverBg: 'transparent',
        },
    },
};
