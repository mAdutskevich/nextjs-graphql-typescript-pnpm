import React from 'react';
import { default as NextLink } from 'next/link';
import { ILinkProps } from './types';
import StyledLink from './styledComponents';

export const Link: React.FC<ILinkProps> = (props) => (
    <NextLink href={props.href} passHref>
        <StyledLink>{props.children}</StyledLink>
    </NextLink>
);
