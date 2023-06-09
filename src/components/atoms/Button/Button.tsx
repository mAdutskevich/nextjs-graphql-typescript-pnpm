import React from 'react';
import { ButtonType } from '@/enums/ButtonType';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { StyledButton } from './StyledButton';
// import classNames from 'classnames';
// import classes from './Button.module.scss';

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

// const StyledButton = styled.button<{ $primary?: boolean; }>`

// `;

// const Input = styled.input<{ $inputColor?: string; }>`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.$inputColor || "#BF4F74"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

export const Button: React.FC<IProps> = (props) => {
    // console.log('button');
    return (
        <StyledButton
            type={props.type || ButtonType.BUTTON}
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
            {props.label}
            {props.rightIcon}
            {/* </div> */}
        </StyledButton>
    );
};
