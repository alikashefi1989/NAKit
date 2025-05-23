import { FC } from 'react'
import { IconProps } from '../icon'

const NewTicket: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2603 3.6L5.05034 12.29C4.74034 12.62 4.44034 13.27 4.38034 13.72L4.01034 16.96C3.88034 18.13 4.72034 18.93 5.88034 18.73L9.10034 18.18C9.55034 18.1 10.1803 17.77 10.4903 17.43L18.7003 8.74C20.1203 7.24 20.7603 5.53 18.5503 3.44C16.3503 1.37 14.6803 2.1 13.2603 3.6Z" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.8896 5.04999C12.3196 7.80999 14.5596 9.91999 17.3396 10.2" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 22H21" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2603 3.6L5.05034 12.29C4.74034 12.62 4.44034 13.27 4.38034 13.72L4.01034 16.96C3.88034 18.13 4.72034 18.93 5.88034 18.73L9.10034 18.18C9.55034 18.1 10.1803 17.77 10.4903 17.43L18.7003 8.74C20.1203 7.24 20.7603 5.53 18.5503 3.44C16.3503 1.37 14.6803 2.1 13.2603 3.6Z" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.8896 5.04999C12.3196 7.80999 14.5596 9.91999 17.3396 10.2" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 22H21" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default NewTicket