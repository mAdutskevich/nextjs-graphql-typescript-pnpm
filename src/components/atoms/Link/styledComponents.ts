import styled from 'styled-components';
import { variables } from '@/themes/variables';
import { transition } from '@/utils/transition';

export const StyledLink = styled.div`
    padding-left: ${variables.spacing.mini};
    color: ${({ theme }) => theme.button.secondary.color};
    transition: ${transition(['color'])};
    cursor: pointer;

    &:hover {
        color: ${variables.colors.colorNotification};
        transition: ${transition(['color'])};
    }
`;

export default StyledLink;
