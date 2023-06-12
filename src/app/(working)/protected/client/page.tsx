'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { StyledContainer } from './styledComponents';

const ClientProtectedRoute: React.FC = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated: () => redirect('/login?callbackUrl=/protected/client'), // this callback allows us to redirect to the login page and return to the protected route after signin
    });

    return <StyledContainer>Client Protected Route {session?.user?.name}</StyledContainer>;
};

export default ClientProtectedRoute;
