import styled from 'styled-components';
import { variables } from '@/themes/variables';
import { transition } from '@/utils/transition';

const Button = styled.button``;

export const StyledButton = styled(Button)`
    padding: ${variables.spacing.mini};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: ${variables.border.radiusSmall};
    transition: ${transition(['background-color'])};
    cursor: pointer;

    &:hover {
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.primary.main};
        transition: ${transition(['background-color', 'color'])};
    }
`;
