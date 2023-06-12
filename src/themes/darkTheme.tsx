import { ITheme } from '@/interfaces/ITheme';
import { variables } from './variables';

export const darkTheme: ITheme = {
    name: 'dark',
    bg: {
        primary: variables.colors.dark,
        secondary: variables.colors.darkFaded4,
        // notification: variables.colors.
        // warning: variables.colors.
    },
    text: {
        primary: variables.colors.sky,
        secondary: variables.colors.light,
        tertiary: variables.colors.lightFaded4,
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
            border: variables.colors.darkFaded2,
            hoverBg: variables.colors.darkFaded2,
        },
        notification: {
            color: variables.colors.white,
            bg: variables.colors.colorNotification,
            border: variables.colors.colorNotification,
            hoverBg: 'transparent',
        },
    },
};
