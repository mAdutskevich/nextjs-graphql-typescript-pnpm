'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useQuery } from '@apollo/client';
import ships from '@/graphql/queries/ships';
// import rockets from '@/graphql/queries/rockets';
import { StyledContainer } from './styledComponents';

const ClientProtectedRoute: React.FC = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated: () => redirect('/login?callbackUrl=/protected/client'), // this callback allows us to redirect to the login page and return to the protected route after signin
    });

    const { loading, error, data } = useQuery(ships, {
        onCompleted: (response) => {
            console.warn(response);
        },
    });

    return (
        <StyledContainer>
            Client Protected Route
            <br />
            {JSON.stringify(session?.user?.name)}
            <br />
            Server Graph QL request:
            <br />
            {loading && 'Loading...'}
            {error && JSON.stringify(error)}
            {data && JSON.stringify(data)}
        </StyledContainer>
    );
};

export default ClientProtectedRoute;
