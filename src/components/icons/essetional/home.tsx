import { FC } from 'react'
import { IconProps } from '../icon'

const HomeEssetional: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill="black"/>
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