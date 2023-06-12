'use client';

import React from 'react';
import { StyledTextBlock } from './styledComponents';
import { ITextBlock } from './types';

export const TextBlock: React.FC<ITextBlock> = (props) => {
    return <StyledTextBlock>{props.text}</StyledTextBlock>;
};
