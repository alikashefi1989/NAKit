import { FC } from 'react'
import { IconProps } from '../icon'

const ArrowRightGreen: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.07666 13.4866L5.25666 14.6666L11.9233 7.99992L5.25666 1.33325L4.07666 2.51325L9.56333 7.99992L4.07666 13.4866Z" fill="#477C6B"/>
        </svg>


    )
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.07666 13.4866L5.25666 14.6666L11.9233 7.99992L5.25666 1.33325L4.07666 2.51325L9.56333 7.99992L4.07666 13.4866Z" fill="#477C6B"/>
        </svg>


    )
}
export default ArrowRightGreen