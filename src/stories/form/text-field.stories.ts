/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../../components/form/elements/text-field';
import Label from '../../components/form/label';
import Error from '../../components/form/error';
import Resetter from '../../components/form/resetter';


type StoryProps = React.ComponentProps<typeof TextField>;

const meta: Meta<StoryProps> = {
    title: 'Components/Form/TextField',
    component: TextField,
    tags: ['autodocs'],
    args: {
        name:'TextField',
        dir: 'ltr',
        size: 'm',
        labelText: 'Text area',
        labelStyle:{fontSize: '0.75rem', fontWeight: 400},
        disabled: false,
        borderHide: false,
        inputResetValue: '',
        isRequired: false,
        characterLimit: undefined,
        infoText: '',
        data: {
            reactHookFormObject: {
                register: () => ({}),
                formState: { errors: {}, isValid: true, isSubmitting: false },
                watch: () => '',
                setValue: () => {},
                getValues: () => ({}),
                resetField: () => {},
            } as any,
            defaultValue: { subject: '' },
            },
            error: Error,
            resetter: Resetter,
            label: Label,
    },
    argTypes: {
        size: {
        control: { type: 'select' },
        options: ['m', 'l'],
        },
        dir: {
        control: { type: 'select' },
        options: ['rtl', 'ltr'],
        },
        disabled: { control: 'boolean' },
        borderHide: { control: 'boolean' },
        isRequired: { control: 'boolean' },
        characterLimit: { control: 'number' },
        infoText: { control: 'text' },
        labelText: { control: 'text' },
        inputResetValue: { control: 'text' },
    },
}

export default meta;

type Story = StoryObj<StoryProps>;

export const textField: Story = {};

// export const textFieldWithError: Story = {
//     args: {
//         data: {
//         reactHookFormObject: {
//             register: () => ({}),
//             formState: {
//             errors: {
//                 Input: {
//                 type: 'required',
//                 message: 'This is a required field',
//                 },
//             },
//             isValid: false,
//             isSubmitting: false,
//             },
//             watch: () => '',
//             setValue: () => {},
//             getValues: () => ({}),
//             resetField: () => {},
//         } as any,
//         defaultValue: { subject: '' },
//         },
//     },
// };
