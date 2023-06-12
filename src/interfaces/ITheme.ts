export interface ITheme {
    name: string;
    bg: {
        primary: string;
        secondary: string;
        // notification: variables.colors.
        // warning: variables.colors.
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    button: {
        primary: {
            color: string;
            bg: string;
            border: string;
            hoverBg: string;
        };
        secondary: {
            color: string;
            bg: string;
            border: string;
            hoverBg: string;
        };
        notification: {
            color: string;
            bg: string;
            border: string;
            hoverBg: string;
        };
    };
}
