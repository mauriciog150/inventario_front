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
    const [cliente, setcliente] = useState({
        id: 0,
        cedula: '',
        nombre: '',
        direccion: '',
        correoElectronico: ''
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...cliente
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("cliente/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("cedula", data['cedula'])
                setValue("nombre", data['nombre'])
                setValue("direccion", data['direccion'])
                setValue("correoElectronico", data['correoElectronico'])
                setcliente(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "cliente";
            
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
        <Toolbar pathForm='cliente/0' pathList='inventario/cliente/' currentEntity={getValues("nombre")} entityName='cliente'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='cedula' label='' register={register} type='text'/>
                <Input id='nombre' label='' register={register} type='text'/>
                <Input id='direccion' label='' register={register} type='text'/>
                <Input id='correoElectronico' label='' register={register} type='text'/>
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>
    </>
    )
}

export default Page;