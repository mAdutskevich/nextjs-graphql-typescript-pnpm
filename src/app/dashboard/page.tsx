'use client';

import React from 'react';
import withTheme from '@/hocs/withTheme';
import { CHANGE_THEME_EVENT, IS_DARK_THEME } from '@/constants/constants';
import { Button } from '@/components/atoms/Button';

const Dashboard = () => {
    const handleClick = () => {
        const isDarkTheme = localStorage.getItem(IS_DARK_THEME);

        localStorage.setItem(
            'isDarkTheme',
            isDarkTheme && JSON.parse(isDarkTheme) ? 'false' : 'true',
        );

        window.dispatchEvent(new Event(CHANGE_THEME_EVENT));
    };

    return (
        <div>
            Dashboard
            <Button label="Test Button" onClick={handleClick} />
        </div>
    );
};

export default withTheme(Dashboard);
