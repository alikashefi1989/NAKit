/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CSSProperties,
    HTMLInputTypeAttribute,
    KeyboardEvent,
    MouseEvent,
    useCallback,
    useMemo,
    useState,
  } from "react";
  import { FormElementBaseProps } from "../index";
  import FormElementWrapper from "../../../styles/components/form";
  import {
    CharacterCounterCmpWrapper,
    InputUi,
    InputWrapper,
    InsideIconsWrapper,
    FieldsetAnimated,
  } from "../../../styles/components/form/elements/input";
  
  export interface InputProps<EntityModel extends Record<string, any>>
    extends FormElementBaseProps<EntityModel> {
    type?: undefined | HTMLInputTypeAttribute;
    labelStyle?: CSSProperties;
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
    ...rest
  }: InputProps<EntityModel>) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(data.defaultValue[name] || "");
  
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
  
    const { ref, onChange: rhfOnChange, onBlur: rhfOnBlur, ...registerRest } =
      registerResult;
  
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      rhfOnBlur?.(e);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      rhfOnChange?.(e);
    };
  
    const isActive = focused || !!value;
  
    const onLabelClick = useCallback((event: MouseEvent<HTMLLegendElement>) => {
      event.currentTarget.parentElement?.querySelector("input")?.focus();
    }, []);
  
    return (
      <FormElementWrapper>
        <InputWrapper>
          <InputUi
            type={type}
            key={name.toString()}
            defaultValue={value}
            ref={ref}
            size={size}
            error={hasError}
            disabled={disabled}
            borderHide={borderHide}
            hasIcon={!!Icon}
            hasResetter={!!Resetter}
            dir={dir}
            placeholder=" "
            isActive={isActive}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            onChange={handleChange}
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
  
          {isActive && (
            <FieldsetAnimated className={isActive ? "active" : ""}>
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