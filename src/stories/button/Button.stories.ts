import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/button';
import iconList, { IconName } from '../../components/icons/icon-list';
import Icon from '../../components/icons/icon';

type StoryProps = React.ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        title: 'Click me',
        loading: false,
        size: 'M',
        type: 'FILLED',
        disabled: false,
        hasIcon: false,
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['FILLED'
                , 'OUTLINE'
                , 'TEXT'
                , 'FILLED_SECONDARY'
                , 'OUTLINE_SECONDARY'
                , 'GREY_OUTLINE'
                , 'SUCCESS'
                , 'ERROR'
                , 'SUCCESS_TEXT'
                , 'ERROR_TEXT'],
        },
        size: {
            control: { type: 'select' },
            options: ['XS', 'S', 'M', 'L', 'XL'],
        },
        hasIcon: { control: 'boolean' },

        iconName: {
            control: { type: 'select' },
            options: Object.keys(iconList) as IconName[],
            if: { arg: 'hasIcon', truthy: true },
            description: 'Choose which icon to render',
        },

        icon: {
            control: false,
            table: { disable: true },
            if: { arg: 'hasIcon', truthy: true },
        },

        onClick: { action: 'clicked', control: false },
    },
};

export default meta;
type Story = StoryObj<StoryProps>;


export const button: Story = {
    args: {
        hasIcon: false,
        icon: Icon
    },
};


