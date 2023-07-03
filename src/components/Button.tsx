
'use client'

import { FC } from 'react'

interface Props {
    label: string,
    onClick?: () => void
    type?:"button" | "submit" | "reset" | undefined
    className?: string
}

const Button:FC <Props> = ({label, onClick=()=>{},type='button', className}) => {
 return (
   <>
    <button className={'btn btn-primary '+ className}
        onClick={onClick}
        type={type}
    >{label}
    </button>   
   </>
 )
}

export default Button