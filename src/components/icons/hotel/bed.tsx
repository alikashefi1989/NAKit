import { FC } from 'react'
import { IconProps } from '../icon'

const BedIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.28V8.5C21 6.85 19.65 5.5 18 5.5H14C13.23 5.5 12.53 5.8 12 6.28C11.47 5.8 10.77 5.5 10 5.5H6C4.35 5.5 3 6.85 3 8.5V11.28C2.39 11.83 2 12.62 2 13.5V19.5H4V17.5H20V19.5H22V13.5C22 12.62 21.61 11.83 21 11.28ZM14 7.5H18C18.55 7.5 19 7.95 19 8.5V10.5H13V8.5C13 7.95 13.45 7.5 14 7.5ZM5 8.5C5 7.95 5.45 7.5 6 7.5H10C10.55 7.5 11 7.95 11 8.5V10.5H5V8.5Z" fill="#508B78"/>
        </svg>
    )
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.28V8.5C21 6.85 19.65 5.5 18 5.5H14C13.23 5.5 12.53 5.8 12 6.28C11.47 5.8 10.77 5.5 10 5.5H6C4.35 5.5 3 6.85 3 8.5V11.28C2.39 11.83 2 12.62 2 13.5V19.5H4V17.5H20V19.5H22V13.5C22 12.62 21.61 11.83 21 11.28ZM14 7.5H18C18.55 7.5 19 7.95 19 8.5V10.5H13V8.5C13 7.95 13.45 7.5 14 7.5ZM5 8.5C5 7.95 5.45 7.5 6 7.5H10C10.55 7.5 11 7.95 11 8.5V10.5H5V8.5Z" fill="#508B78"/>
        </svg>
    )
}

export default BedIcon