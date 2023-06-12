'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

export const AuthProvider: React.FC<React.PropsWithChildren> = (props) => {
    return <SessionProvider>{props.children}</SessionProvider>;
};
