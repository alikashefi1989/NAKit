import { FC } from 'react'
import { IconProps } from '../icon'

const BedroomIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 12H7.5C6.95 12 6.5 12.45 6.5 13V14H17.5V13C17.5 12.45 17.05 12 16.5 12Z" fill="#477C6B"/>
            <path d="M11.25 8.5H7.25V10.5H11.25V8.5Z" fill="#477C6B"/>
            <path d="M16.75 8.5H12.75V10.5H16.75V8.5Z" fill="#477C6B"/>
            <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM19 17H17.5V15.5H6.5V17H5V13.17C5 12.51 5.25 11.91 5.65 11.45V9C5.65 7.9 6.55 7 7.65 7H11C11.37 7 11.72 7.12 12 7.32C12.28 7.12 12.63 7 13 7H16.35C17.45 7 18.35 7.9 18.35 9V11.45C18.75 11.91 19 12.51 19 13.17V17Z" fill="#477C6B"/>
        </svg>
    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10.78V8C21 6.35 19.65 5 18 5H14C13.23 5 12.53 5.3 12 5.78C11.47 5.3 10.77 5 10 5H6C4.35 5 3 6.35 3 8V10.78C2.39 11.33 2 12.12 2 13V19H4V17H20V19H22V13C22 12.12 21.61 11.33 21 10.78ZM14 7H18C18.55 7 19 7.45 19 8V10H13V8C13 7.45 13.45 7 14 7ZM5 8C5 7.45 5.45 7 6 7H10C10.55 7 11 7.45 11 8V10H5V8ZM4 15V13C4 12.45 4.45 12 5 12H19C19.55 12 20 12.45 20 13V15H4Z" fill="black"/>
        </svg>
    )
}

export default BedroomIcon