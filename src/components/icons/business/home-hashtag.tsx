import { FC } from 'react'
import { IconProps } from '../icon'

const HomeHashtagBusiness: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7002 16.8801H13.4002C14.5502 16.8801 15.4902 15.9401 15.4902 14.7901V14.0901H12.7002V16.8801Z" fill="black"/>
        <path d="M8.50977 14.7901C8.50977 15.9401 9.44977 16.8801 10.5998 16.8801H11.2998V14.0901H8.50977V14.7901Z" fill="black"/>
        <path d="M8.50977 11.9999V12.6999H11.2998V9.90991H10.5998C9.44977 9.90991 8.50977 10.8499 8.50977 11.9999Z" fill="black"/>
        <path d="M20.03 6.81994L14.28 2.78994C12.71 1.68994 10.31 1.74994 8.8 2.91994L3.79 6.82994C2.78 7.60994 2 9.20994 2 10.4699V17.3699C2 19.9199 4.07 21.9999 6.61 21.9999H17.38C19.92 21.9999 21.99 19.9299 21.99 17.3799V10.5999C22 9.24994 21.13 7.58994 20.03 6.81994ZM16.88 14.7899C16.88 16.7099 15.31 18.2799 13.39 18.2799H10.6C8.68 18.2799 7.11 16.7199 7.11 14.7899V11.9999C7.11 10.0799 8.68 8.50994 10.6 8.50994H13.39C15.31 8.50994 16.88 10.0699 16.88 11.9999V14.7899Z" fill="black"/>
        <path d="M13.4002 9.90991H12.7002V12.6999H15.4902V11.9999C15.4902 10.8499 14.5502 9.90991 13.4002 9.90991Z" fill="black"/>
    </svg>

    )
    return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 9V18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 13.5H16.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )
}

export default HomeHashtagBusiness