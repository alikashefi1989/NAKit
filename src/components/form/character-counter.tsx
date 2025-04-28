/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Path, UseFormReturn } from "react-hook-form";
import CharacterCounterWrapper from "../../styles/components/form/character-counter";

export interface CharacterCounterProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    characterLimit?: number
}

const CharacterCounter =<EntityModel extends Record<string, any>> ({name,data,characterLimit} :CharacterCounterProps<EntityModel>) => {
    const hasError = useMemo(()=>{
        return !! (
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name].message
        )
    },[data.reactHookFormObject.formState, name])
    const textLength: number = useMemo(() => {
        const value: any = data.reactHookFormObject.watch(name as string as Path<EntityModel>)
        if (typeof value !== 'string') return 0
        return value.length
    }, [data, name])

    if (hasError || !textLength) return null

    return (
        <CharacterCounterWrapper
            className={(typeof characterLimit === 'number' && textLength > characterLimit) ? 'length-error' : ''}
            >
            {`${textLength}/${characterLimit ? characterLimit : 'infinity'}`}
        </CharacterCounterWrapper>
    )
};

export default CharacterCounter;

