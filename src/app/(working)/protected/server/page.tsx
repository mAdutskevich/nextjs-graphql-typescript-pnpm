import React from 'react';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { TextBlock } from '@/components/atoms/TextBlock';

const ServerProtectedRoute: React.FC = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login?callbackUrl=/protected/server');
    }

    return <TextBlock text={`Server Protected Route ${session?.user?.name}`} />;
};

export default ServerProtectedRoute;
