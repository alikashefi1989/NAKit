import { CSSProperties, JSX } from "react";
import LabelWrapper from "../../styles/components/form/label";
import styled from '@emotion/styled'
import AppThemeModel from "../../models/theme-model";

const RequiredMark = styled.span<{ theme?: AppThemeModel }>(({ theme }) => ({
    color: theme?.color.ordinalColors.danger[500],
    fontSize: '1rem',
    lineHeight: '1',
    }))

export interface LabelProps {
    labelText: string | JSX.Element
    isRequired?: boolean
    style?: CSSProperties
}
const Label = ( {labelText, isRequired, style}: LabelProps ) => {
    return(
        <LabelWrapper style={style}>
            {labelText}
            {isRequired ? <RequiredMark>*</RequiredMark> : null}
        </LabelWrapper>
    )
};

export default Label;
