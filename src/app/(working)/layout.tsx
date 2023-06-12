'use client';

import React from 'react';
import withTheme from '@/hocs/withTheme';
import { Header } from '@/components/organisms/Header';

const Layout: React.FC<React.PropsWithChildren> = (props) => (
    <>
        <Header />
        {props.children}
    </>
);

export default withTheme(Layout);
