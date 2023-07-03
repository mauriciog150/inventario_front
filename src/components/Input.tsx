import React from 'react';
import { FC } from 'react'
import { UseFormRegister,FieldValues } from 'react-hook-form';

interface Props {
    id: string,
    label: string,
    type?:"text"|"password"|"checkbox"|"hidden"|"number"|"date"|"datetime-local",
    register: UseFormRegister<any>
}

export const Input:FC <Props>  = ({id,label,type="text", register}) => {
 return (
   <>
   <div className='flex flex-col'>
    <label htmlFor={id}>{label}</label>
    <input 
      type={type} 
      className='input input-primary' 
      id={id} 
      {...register(id)}/>
   </div>
    
   </>
 )
}
