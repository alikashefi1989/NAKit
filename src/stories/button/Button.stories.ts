import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/button';
import iconList, { IconName } from '../../components/icons/icon-list';
import Icon from '../../components/icons/icon';
import { PalLetType } from '../../styles/components/button/button-config';

type StoryProps = React.ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        title: 'Click me',
        loading: false,
        size: 'M',
        type: 'PRIMARY',
        disabled: false,
        hasIcon: false,
        pallet: '1-Primary',
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['PRIMARY', 'SECONDARY', 'TEXT'],
        },
        size: {
            control: { type: 'select' },
            options: ['XS', 'S', 'M', 'L', 'XL'],
        },
        pallet: {
            control: { type: 'select' },
            options: ['1-Primary', '2-Info', '3-Danger', '4-Green', '5-Accent', '6-Secondary', '7-Olive'] satisfies PalLetType[],
            description: 'Select color palette (mapped to theme colors)',
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


