import { FC } from 'react'
import { IconProps } from '../icon'

const Restuarant: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6.5V14.5H19V22.5H21V2.5C18.24 2.5 16 4.74 16 6.5ZM11 9.5H9V2.5H7V9.5H5V2.5H3V9.5C3 11.71 4.79 13.5 7 13.5V22.5H9V13.5C11.21 13.5 13 11.71 13 9.5V2.5H11V9.5Z" fill="#508B78"/>
        </svg>
    )
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6.5V14.5H19V22.5H21V2.5C18.24 2.5 16 4.74 16 6.5ZM11 9.5H9V2.5H7V9.5H5V2.5H3V9.5C3 11.71 4.79 13.5 7 13.5V22.5H9V13.5C11.21 13.5 13 11.71 13 9.5V2.5H11V9.5Z" fill="#508B78"/>
        </svg>
    )
}

export default Restuarant