import { CSSProperties } from 'react'
import styled from '@emotion/styled'

export interface IconWrapperProps {
    size: '0.25' | '0.5' | '0.75' | '1' | '1.25' | '1.5' | '1.75' | '2' | '2.25' | '2.5' | '2.75' | '3'
    rounded?: boolean
    style?: CSSProperties
}

const IconWrapper = styled.div<IconWrapperProps>(({ size, rounded, style }) => {
    return {
        boxSizing: 'border-box',
        width: `${size}rem`,
        maxWidth: `${size}rem`,
        height: `${size}rem`,
        maxHeight: `${size}rem`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: rounded ? '50%' : undefined,
        ...style
    }
})

export default IconWrapper