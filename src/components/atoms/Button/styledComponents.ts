import styled, { css } from 'styled-components';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { ElementSize } from '@/enums/ElementSize';
import { variables } from '@/themes/variables';
import { transition } from '@/utils/transition';
import { IButtonProps } from './types';

// The example of attr usage
// export const StyledButton = styled.button.attrs<IButtonProps>((props: IButtonProps) => ({
//     $designType: props.$designType,
//     $isWithoutBorder: props.$isWithoutBorder,
//     $isFullWidth: props.$isFullWidth,
//     $size: props.$size,
// }))`
// ${({ $designType, theme }) => {
//     switch ($designType) {
//         case ButtonDesignType.SECONDARY:
//             return css`
//                 color: ${theme.button.secondary.color};
//                 background-color: ${theme.button.secondary.bg};
//                 border: 1px solid ${theme.button.secondary.border};
//                 transition: ${transition(['background-color'])};

//                 &:hover {
//                     background-color: ${theme.button.secondary.hoverBg};
//                     transition: ${transition(['background-color'])};
//                 }
//             `;
//         default:
//             return css`
//                 color: ${theme.button.primary.color};
//                 background-color: ${theme.button.primary.bg};
//                 border: 1px solid ${theme.button.primary.border};
//                 transition: ${transition(['background-color'])};

//                 &:hover {
//                     background-color: ${theme.button.primary.hoverBg};
//                     transition: ${transition(['background-color'])};
//                 }
//             `;
//     }
// }}
// ${({ $size }) => {
//     switch ($size) {
//         case ElementSize.LARGE:
//             return css`
//                 padding: ${variables.spacing.small};
//             `;
//         case ElementSize.SMALL:
//             return css`
//                 padding: ${variables.spacing.tiny};
//             `;
//         default:
//             return css`
//                 padding: ${variables.spacing.mini};
//             `;
//     }
// }}
// ${({ $isWithoutBorder }) =>
//     $isWithoutBorder &&
//     css`
//         border: none;
//     `}

// ${({ $isFullWidth }) =>
//     $isFullWidth &&
//     css`
//         width: 100%;
//     `}

// border-radius: ${variables.border.radiusSmall};
// cursor: pointer;
// `;

export const StyledButton = styled.button<
    Pick<IButtonProps, '$designType' | '$size' | '$isWithoutBorder' | '$isFullWidth' | '$style'>
>`
    ${({ $designType, theme }) => {
        switch ($designType) {
            case ButtonDesignType.SECONDARY:
                return css`
                    color: ${theme.button.secondary.color};
                    background-color: ${theme.button.secondary.bg};
                    border: 1px solid ${theme.button.secondary.border};
                    transition: ${transition(['background-color'])};

                    &:hover {
                        background-color: ${theme.button.secondary.hoverBg};
                        transition: ${transition(['background-color'])};
                    }
                `;
            default:
                return css`
                    color: ${theme.button.primary.color};
                    background-color: ${theme.button.primary.bg};
                    border: 1px solid ${theme.button.primary.border};
                    transition: ${transition(['background-color'])};

                    &:hover {
                        background-color: ${theme.button.primary.hoverBg};
                        transition: ${transition(['background-color'])};
                    }
                `;
        }
    }}
    ${({ $size }) => {
        switch ($size) {
            case ElementSize.LARGE:
                return css`
                    padding: ${variables.spacing.small};
                `;
            case ElementSize.SMALL:
                return css`
                    padding: ${variables.spacing.tiny};
                `;
            default:
                return css`
                    padding: ${variables.spacing.mini};
                `;
        }
    }}
    ${({ $isWithoutBorder }) =>
        $isWithoutBorder &&
        css`
            border: none;
        `}

    ${({ $isFullWidth }) =>
        $isFullWidth &&
        css`
            width: 100%;
        `}

    ${({ $style }) =>
        $style &&
        css`
            ${$style}
        `}

border-radius: ${variables.border.radiusSmall};
    cursor: pointer;
`;
