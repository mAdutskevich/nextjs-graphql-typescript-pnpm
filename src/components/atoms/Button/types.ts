import { ButtonType } from '@/enums/ButtonType';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { ElementSize } from '@/enums/ElementSize';

export interface IButtonProps {
    title: string;
    onClick?: () => void;
    // type?: ButtonType.BUTTON | ButtonType.SUBMIT | ButtonType.RESET;
    // type?: keyof typeof ButtonType;
    type?: ButtonType;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    // designType?: keyof typeof ButtonDesignType;
    $designType?: ButtonDesignType;
    // designType?:
    //     | ButtonDesignType.SECONDARY
    //     | ButtonDesignType.WARNING
    //     | ButtonDesignType.NOTIFICATION;
    $isFullWidth?: boolean;
    $isWithoutBorder?: boolean;
    $size?: ElementSize;
    $style?: string;
}
