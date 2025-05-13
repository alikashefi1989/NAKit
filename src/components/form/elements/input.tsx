/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CSSProperties,
    HTMLInputTypeAttribute,
    KeyboardEvent,
    MouseEvent,
    useCallback,
    useMemo,
  } from "react";
  import { FormElementBaseProps } from "../index";
  import FormElementWrapper from "../../../styles/components/form";
  import {
    CharacterCounterCmpWrapper,
    InputUi,
    InputWrapper,
    InsideIconsWrapper,
    FieldsetAnimated,
    OutsideLabel,
  } from "../../../styles/components/form/elements/input";
  
  export interface InputProps<EntityModel extends Record<string, any>>
    extends FormElementBaseProps<EntityModel> {
    type?: undefined | HTMLInputTypeAttribute;
    labelStyle?: CSSProperties;
    labelVariant : "inside" | "outside";
  }
  
  const Input = <EntityModel extends Record<string, any>>({
    name,
    data,
    registerOptions,
    label: Label,
    error: Error,
    icon: Icon,
    resetter: Resetter,
    info: Info,
    characterCounter: CharacterCounter,
    type,
    dir,
    size,
    disabled,
    borderHide,
    inputResetValue,
    infoText,
    labelText,
    labelStyle,
    isRequired,
    characterLimit,
    labelVariant,
    ...rest
  }: InputProps<EntityModel>) => {
    const hasError: boolean = useMemo(() => {
      return !!(
        data.reactHookFormObject.formState.errors &&
        data.reactHookFormObject.formState.errors[name] &&
        data.reactHookFormObject.formState.errors[name]?.message
      );
    }, [data.reactHookFormObject.formState, name]);
  
    const registerResult = data.reactHookFormObject.register(
      name as any,
      registerOptions ? { ...registerOptions } : undefined
    );
  
    const { ref, ...registerRest } = registerResult;
  
    const onLabelClick = useCallback((event: MouseEvent<HTMLLegendElement>) => {
      event.currentTarget.parentElement?.querySelector("input")?.focus();
    }, []);
  
    return (
      <FormElementWrapper>
        <InputWrapper>
          <InputUi
            type={type}
            key={name.toString()}
            defaultValue={data.defaultValue[name]}
            ref={ref}
            size={size}
            error={hasError}
            disabled={disabled}
            borderHide={borderHide}
            hasIcon={!!Icon}
            hasResetter={!!Resetter}
            dir={dir}
            placeholder={labelVariant === "outside" ? "" : " "}
            labelVariant={labelVariant}
            onKeyDown={
              type === "number"
                ? (event: KeyboardEvent<HTMLInputElement>) =>
                    ["e", "E", "+", "-"].includes(event.key) &&
                    event.preventDefault()
                : undefined
            }
            {...registerRest}
            {...rest}
          />
  
  {labelVariant === "outside" ? (
        <OutsideLabel className="outside-label">
          {Label && (
            <Label
              style={labelStyle || {}}
              labelText={labelText || ""}
              isRequired={isRequired}
            />
          )}
        </OutsideLabel>
      ) : (
        <FieldsetAnimated>
          <legend onClick={onLabelClick}>
            {Label && (
              <Label
                style={labelStyle || {}}
                labelText={labelText || ""}
                isRequired={isRequired}
              />
            )}
          </legend>
        </FieldsetAnimated>
      )}
  
          {(Icon || Resetter) && (
            <InsideIconsWrapper dir={dir ?? "rtl"}>
              {Icon && <Icon />}
              {Resetter && (
                <Resetter
                  name={name}
                  data={data}
                  resetValue={inputResetValue ?? ""}
                  iconName="formFieldResetter"
                />
              )}
            </InsideIconsWrapper>
          )}
  
          {CharacterCounter && (
            <CharacterCounterCmpWrapper>
              <CharacterCounter
                name={name}
                data={data}
                characterLimit={characterLimit}
              />
            </CharacterCounterCmpWrapper>
          )}
        </InputWrapper>
  
        {Error && (
          <Error
            name={name}
            data={data}
            fontSize="0.75rem"
            fontWeight={400}
            lineHeight="1.25rem"
          />
        )}
        {!hasError && Info && <Info infoText={infoText || ""} />}
      </FormElementWrapper>
    );
  };
  
  export default Input;