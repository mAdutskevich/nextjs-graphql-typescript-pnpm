import styled from 'styled-components';
import { variables } from '@/themes/variables';
import { transition } from '@/utils/transition';

const Button = styled.button``;

export const StyledButton = styled(Button)`
    padding: ${variables.spacing.mini};
    color: ${({ theme }) => theme.button.secondary.color};
    background-color: ${({ theme }) => theme.button.secondary.bg};
    border: 1px solid ${({ theme }) => theme.button.secondary.border};
    border-radius: ${variables.border.radiusSmall};
    transition: ${transition(['background-color'])};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.button.secondary.hoverBg};
        transition: ${transition(['background-color'])};
    }
`;
