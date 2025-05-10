import { FC } from 'react'
import { IconProps } from '../icon'

const UserIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z" fill="#508B78"/>
        <path d="M12 14.5C7.0396 14.5 3 17.86 3 22C3 22.28 3.21782 22.5 3.49505 22.5H20.505C20.7822 22.5 21 22.28 21 22C21 17.86 16.9604 14.5 12 14.5Z" fill="#508B78"/>
        </svg>
    )
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z" fill="#508B78"/>
        <path d="M12 14.5C7.0396 14.5 3 17.86 3 22C3 22.28 3.21782 22.5 3.49505 22.5H20.505C20.7822 22.5 21 22.28 21 22C21 17.86 16.9604 14.5 12 14.5Z" fill="#508B78"/>
        </svg>
    )
}

export default UserIcon