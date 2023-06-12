import React from 'react';
import { ButtonType } from '@/enums/ButtonType';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { StyledButton } from './StyledButton';

interface IProps {
    label: string;
    onClick?: () => void;
    type?: ButtonType.BUTTON | ButtonType.SUBMIT | ButtonType.RESET;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    designType?:
        | ButtonDesignType.SECONDARY
        | ButtonDesignType.WARNING
        | ButtonDesignType.NOTIFICATION;
    isFullWidth?: boolean;
    isWithoutBorder?: boolean;
    className?: string;
}

export const Button: React.FC<IProps> = (props) => {
    return (
        <StyledButton type={props.type || ButtonType.BUTTON} onClick={props.onClick}>
            {props.leftIcon}
            {props.label}
            {props.rightIcon}
        </StyledButton>
    );
};
