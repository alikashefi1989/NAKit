import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'


const FormElementWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: `calc(${theme?.spacing?.spacingXs} / 10)`,
        backgroundColor: 'transparent',
    }
})

export default FormElementWrapper