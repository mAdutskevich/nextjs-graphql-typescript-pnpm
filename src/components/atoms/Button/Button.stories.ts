import type { Meta, StoryObj } from '@storybook/react';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { ButtonType } from '@/enums/ButtonType';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Library/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        title: 'Test Button',
        type: ButtonType.BUTTON,
    },
};

export const Secondary: Story = {
    args: {
        title: 'Test Button',
        type: ButtonType.BUTTON,
        $designType: ButtonDesignType.SECONDARY,
    },
};
