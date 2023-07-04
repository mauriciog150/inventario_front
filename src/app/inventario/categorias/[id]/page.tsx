'use client'
import { Input } from '@/components/Input';
import { useForm } from 'react-hook-form';
import  Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Toolbar } from '@/components/Toolbar';
import useFetchWithAuth from '@/hooks/useFetchWithAuth';
import saveWithAuth from '@/hooks/saveWithAuth';

const Page = ({ params }: { params: { id: string } })  => {

    const router = useRouter();
    const entityId =params.id;
    const [categorias, setcategorias] = useState({
        id: 0,
        nombre: '',
        descripcion: ''
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...categorias
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("categorias/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("nombre", data['nombre'])
                setValue("descripcion", data['descripcion'])
                setcategorias(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "categorias";
            
            const { data, error } = await saveWithAuth(endpoint, entityId, entity);
            if (error) {
                console.log(error);
            } else {
                router.push(endpoint+"/")
            }
        } catch (e) {
            console.log("Post error:");
            console.table(e);
        }
    }


    useEffect(() => {
        getInitData();
    }, [])

    return (
    <>
        <div className='grow '>
        <Toolbar pathForm='categorias/0' pathList='inventario/categorias/' currentEntity={getValues("nombre")} entityName='categorias'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='nombre' label='Nombre' register={register} type='text'/>
                <Input id='descripcion' label='Descripcion' register={register} type='text'/>
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>
    </>
    )
}

export default Page;