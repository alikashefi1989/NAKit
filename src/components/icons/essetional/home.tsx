import { FC } from 'react'
import { IconProps } from '../icon'

const HomeEssetional: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.828 8.01001L14.278 2.77002C12.998 1.75002 10.998 1.74002 9.728 2.76002L3.17801 8.01001C2.23801 8.76001 1.66801 10.26 1.86801 11.44L3.12801 18.98C3.41801 20.67 4.98801 22 6.698 22H17.298C18.988 22 20.588 20.64 20.878 18.97L22.138 11.43C22.318 10.26 21.748 8.76001 20.828 8.01001ZM12.748 18C12.748 18.41 12.408 18.75 11.998 18.75C11.588 18.75 11.248 18.41 11.248 18V15C11.248 14.59 11.588 14.25 11.998 14.25C12.408 14.25 12.748 14.59 12.748 15V18Z" fill="#527167"/>
        </svg>
    )
    return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18V15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0703 2.81997L3.14027 8.36997C2.36027 8.98997 1.86027 10.3 2.03027 11.28L3.36027 19.24C3.60027 20.66 4.96027 21.81 6.40027 21.81H17.6003C19.0303 21.81 20.4003 20.65 20.6403 19.24L21.9703 11.28C22.1303 10.3 21.6303 8.98997 20.8603 8.36997L13.9303 2.82997C12.8603 1.96997 11.1303 1.96997 10.0703 2.81997Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    )
}

export default HomeEssetional