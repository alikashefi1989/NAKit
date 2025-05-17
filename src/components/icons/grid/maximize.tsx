import { FC } from 'react'
import { IconProps } from '../icon'

const MaximizeIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1971 2H7.8129C4.17108 2 2 4.17 2 7.81V16.18C2 19.83 4.17108 22 7.8129 22H16.1871C19.8289 22 22 19.83 22 16.19V7.81C22.01 4.17 19.8389 2 16.1971 2ZM18.7584 10C18.7584 10.41 18.4182 10.75 18.008 10.75C17.5978 10.75 17.2576 10.41 17.2576 10V7.81L7.8129 17.25H10.004C10.4142 17.25 10.7544 17.59 10.7544 18C10.7544 18.41 10.4142 18.75 10.004 18.75H6.00199C5.90194 18.75 5.80189 18.73 5.71185 18.69C5.53176 18.61 5.38169 18.47 5.30165 18.28C5.27163 18.19 5.25162 18.1 5.25162 18V14C5.25162 13.59 5.59179 13.25 6.00199 13.25C6.4122 13.25 6.75237 13.59 6.75237 14V16.19L16.1971 6.75H14.006C13.5958 6.75 13.2556 6.41 13.2556 6C13.2556 5.59 13.5958 5.25 14.006 5.25H18.008C18.108 5.25 18.1981 5.27 18.2981 5.31C18.4782 5.39 18.6283 5.53 18.7083 5.72C18.7383 5.81 18.7584 5.9 18.7584 6V10Z" fill="#477C6B"/>
    </svg>

    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 9V3H15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 15V21H9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 3L13.5 10.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 13.5L3 21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default MaximizeIcon