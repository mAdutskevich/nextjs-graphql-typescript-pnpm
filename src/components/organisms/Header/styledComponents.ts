import styled from 'styled-components';
import { variables } from '@/themes/variables';

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.bg.secondary};
    padding: ${variables.spacing.mini};
`;

export const StyledHeaderContainer = styled(styled.div``)`
    display: flex;
`;
