'use client'

import useBasicAuth from '@/hooks/useBasicAuth';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {

  const { register, handleSubmit, getValues } = useForm();
  const router = useRouter();

  const onSubmit = async () => {
        console.log("ingreso en el submit")
        const { bearerToken } = await useBasicAuth(getValues("user"), getValues("password"));
        Cookies.set("token",bearerToken);
        router.push("/inventario/cliente")
  }

 return (
   <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input 
            type="text" 
            placeholder="Usuario" 
            className="input input-bordered" 
            {...register("user")}
        />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input 
            type="password" 
            placeholder="password" 
            className="input input-bordered"
            {...register("password")}
        />
        <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
        </label>
        </div>
        <div className="form-control mt-6">
        <button type='submit' className="btn btn-primary">Login</button>
        </div>    
    </form>

   </>
 )
}