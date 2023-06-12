'use client';

import React from 'react';
// import { useSearchParams } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { CHANGE_THEME_EVENT, IS_DARK_THEME } from '@/constants/constants';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { Link } from '@/components/atoms/Link';
import { Button } from '@/components/atoms/Button';
import NoSSR from '@/components/templates/NoSSR';
import { StyledHeader, StyledHeaderContainer } from './styledComponents';

export const Header: React.FC = () => {
    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get('callbackUrl') || undefined;
    const { data: session } = useSession();

    const handleSignIn = () => {
        session ? signOut() : signIn('google'); // , { callbackUrl }
    };

    const handleClick = () => {
        const isDarkTheme = localStorage.getItem(IS_DARK_THEME);

        localStorage.setItem(
            'isDarkTheme',
            isDarkTheme && JSON.parse(isDarkTheme) ? 'false' : 'true',
        );

        window.dispatchEvent(new Event(CHANGE_THEME_EVENT));
    };

    return (
        <NoSSR>
            <StyledHeader>
                <StyledHeaderContainer as="nav">
                    <Link href="/protected/client">Client protected</Link>
                    <Link href="/protected/server">Server protected</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </StyledHeaderContainer>
                <StyledHeaderContainer>
                    <Button
                        label="Test Button"
                        $designType={ButtonDesignType.SECONDARY}
                        $isWithoutBorder
                        onClick={handleClick}
                        $style="margin-right: 10px;"
                    />
                    <Button label={session ? 'Sign Out' : 'Sign In'} onClick={handleSignIn} />
                </StyledHeaderContainer>
            </StyledHeader>
        </NoSSR>
    );
};
