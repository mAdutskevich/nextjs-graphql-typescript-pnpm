import React from 'react';

export const metadata = {
    title: 'Auth',
    description: 'Auth description',
};

interface IAuthProps {
    children: React.ReactNode;
}

export default function AuthLayout(props: IAuthProps) {
    return (
        <div>
            <div>Header</div>
            {props.children}
            <div>Footer</div>
        </div>
    );
}
