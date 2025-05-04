/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, FC, JSX } from 'react'
import { UseFormProps, UseFormReturn, useForm, FormProvider, RegisterOptions } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ResetterProps } from './resetter'
import { InfoProps } from './info'
import { LabelProps } from './label'
import FormElementSize from '../../models/components/from-element-size'
import { CharacterCounterProps } from './character-counter'
import { ErrorProps } from './error'



export type FormType = 'CREATE' | 'UPDATE'

export interface FormProps<EntityModel extends Record<string, any>> {
    formType: FormType
    defaultValues: EntityModel
    validationSchema?: any
    useFormProps?: UseFormProps<EntityModel,any>
    fieldsRenderer: (data:{
        reactHookFormObject: UseFormReturn<EntityModel>,
        defaultValue: EntityModel
    }) => JSX.Element | Array<JSX.Element>
}
export interface FormElementBaseProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    registerOptions?: RegisterOptions<EntityModel, any>
    error?: FC<ErrorProps<EntityModel>>
    resetter?: FC<ResetterProps<EntityModel>>
    icon?: FC<any>
    info?: FC<InfoProps>
    label?: FC<LabelProps>
    labelText?: string | JSX.Element
    characterCounter?: FC<CharacterCounterProps<EntityModel>>
    characterLimit?: number
    size: FormElementSize
    disabled?: boolean
    borderHide?: boolean
    dir?: CSSProperties['direction']
    inputResetValue?: any
    infoText?: string
    isRequired?: boolean
}

const Form = <EntityModel extends Record<string, any>>({
    validationSchema,
    defaultValues,
    useFormProps,
    fieldsRenderer
}: FormProps<EntityModel>) => {
    const hookFormObject = useForm<EntityModel>({
        defaultValues:(defaultValues as any),
        resolver: yupResolver(validationSchema) as UseFormProps<EntityModel>['resolver'],
        mode:'all',
        ...useFormProps
    })

    return (
        <FormProvider {...hookFormObject}>
            {fieldsRenderer({reactHookFormObject:hookFormObject, defaultValue:defaultValues})}
        </FormProvider>
    )
}


export default Form

