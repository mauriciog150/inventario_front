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
    const [ciudad, setciudad] = useState({
        id: 0,
        nombreCiudad: ''
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...ciudad
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("ciudad/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("nombreCiudad", data['nombreCiudad'])
                setciudad(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "ciudad";
            
            const { data, error } = await saveWithAuth(endpoint, entityId, entity);
            if (error) {
                console.log(error);
            } else {
                router.push("inventario/"+endpoint+"/"+ data.id)
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
        <Toolbar pathForm='inventario/ciudad/0' pathList='inventario/ciudad/' currentEntity={getValues("nombreCiudad")} entityName='ciudad'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='nombreCiudad' label='' register={register} type='text'/>
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>
    </>
    )
}

export default Page;