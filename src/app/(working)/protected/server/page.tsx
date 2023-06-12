import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { TextBlock } from '@/components/atoms/TextBlock';
import { getClient } from '@/graphql/ApolloClient';
import rockets from '@/graphql/queries/rockets';

const ServerProtectedRoute: React.FC = async () => {
    const session = await getServerSession(authOptions);
    const { data } = await getClient().query({ query: rockets });

    if (!session) {
        redirect('/login?callbackUrl=/protected/server');
    }

    return (
        <>
            <TextBlock text={`Server Protected Route`} />
            <TextBlock text="Session:" />
            <TextBlock text={JSON.stringify(session?.user?.name)} />
            <TextBlock text="Server Graph QL request:" />
            <TextBlock text={JSON.stringify(data)} />;
        </>
    );
};

export default ServerProtectedRoute;
