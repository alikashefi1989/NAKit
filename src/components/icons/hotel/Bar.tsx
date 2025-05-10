import { FC } from 'react'
import { IconProps } from '../icon'

const BarIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.75V10.25C6 13.4675 8.34 16.1325 11.4167 16.6525V21.0833H8.16667V23.25H16.8333V21.0833H13.5833V16.6525C16.66 16.1325 19 13.4675 19 10.25V3.75H6ZM16.8333 9.16667H8.16667V5.91667H16.8333V9.16667Z" fill="#508B78"/>
        </svg>
    )
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.75V10.25C6 13.4675 8.34 16.1325 11.4167 16.6525V21.0833H8.16667V23.25H16.8333V21.0833H13.5833V16.6525C16.66 16.1325 19 13.4675 19 10.25V3.75H6ZM16.8333 9.16667H8.16667V5.91667H16.8333V9.16667Z" fill="#508B78"/>
        </svg>
    )
}

export default BarIcon