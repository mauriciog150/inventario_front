'use client'

import { FC } from 'react'
import Button from './Button'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Props {
}

const name:FC <Props> = () => {

    const router = useRouter();

    const logout = () => {
            console.log("Saliendo de sesion")
            Cookies.remove("token")
            router.push("/login")
    }


 return (
   <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href={"/inventario"} className="btn btn-ghost normal-case text-xl">Sistema de Inventario</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="/usuario.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>Ajustes</li>
                        <li>
                            <Button label='Salir' onClick={()=>logout()}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </>
 )
}

export default name