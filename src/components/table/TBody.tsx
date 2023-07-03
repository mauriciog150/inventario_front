'use client'

import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react'

interface Props {
    columnas: string[],
    endpoint: string
}

const TBody:FC <Props> = ({columnas, endpoint}) => {

    

    const [ entidades, setEntidades ] = useState([])

    const getInitData = async() => {
          const {data } = await useFetchWithAuth(endpoint);
          setEntidades(data);
    }

    useEffect(() => {
        getInitData();
    }, [])


 return (
   <>
    <tbody>
        {entidades && entidades.map((entidad) => (

            <tr key={entidad['id']}>
                <td className='w-6'>
                    <Link href={{
                        pathname: "/inventario/"+endpoint+"/"+entidad['id'],
                        
                    }}>
                       <img className='w-4 h-4' src="/actualizar.png" />
                    </Link>
                </td>
               {columnas.map((columna)=> (
                <td key={entidad['id']+entidad[columna]}>{entidad[columna]}</td>
               ))}
            </tr>
        ))}
            <tr>
              
            </tr>
        </tbody>   
   </>
 )
}

export default TBody