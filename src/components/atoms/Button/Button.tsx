'use client';

import React from 'react';
import { ButtonType } from '@/enums/ButtonType';
import { IButtonProps } from './types';
import { StyledButton } from './styledComponents';

export const Button: React.FC<IButtonProps> = (props) => {
    return (
        <StyledButton
            type={props.type || ButtonType.BUTTON}
            $designType={props.$designType}
            $isWithoutBorder={props.$isWithoutBorder}
            $isFullWidth={props.$isFullWidth}
            $size={props.$size}
            $style={props.$style}
            // className={classNames(classes.button, props.className, {
            //     [classes.fullWidth]: props.isFullWidth,
            //     [classes.withoutBorder]: props.isWithoutBorder,
            //     [classes.secondary]: props.designType === ButtonDesignType.SECONDARY,
            //     [classes.warning]: props.designType === ButtonDesignType.WARNING,
            //     [classes.notification]: props.designType === ButtonDesignType.NOTIFICATION,
            // })}
            onClick={props.onClick}
        >
            {/* <div className={classes.container}> */}
            {props.leftIcon}
            {/* <p
                    className={classNames({
                        [classes.leftIconMargin]: props.leftIcon,
                        [classes.rightIconMargin]: props.rightIcon,
                    })}
                >
                    {props.label}
                </p> */}
            {props.title}
            {props.rightIcon}
            {/* </div> */}
        </StyledButton>
    );
};
