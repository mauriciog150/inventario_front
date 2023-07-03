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
    const [compañia, setcompañia] = useState({
        id: 0,
        nombresCompañia: '',
        direccionCompañia: '',
        telefonoCompañia: 0,
        emailCompañia: '',
    });
    const { register, setValue,getValues,handleSubmit, formState: { errors }  } = useForm(
        {
            defaultValues: {
                ...compañia
            }
        }
    );
    
    const getInitData = async () => {
        if (!entityId || entityId=="0")
            return;
        const { data, error } = await useFetchWithAuth("compañia/" + entityId);
        
        if (!error) {
            
            if (data.id!=0){
                setValue("id", data['id'])
                setValue("nombresCompañia", data['nombresCompañia'])
                setValue("direccionCompañia", data['direccionCompañia'])
                setValue("telefonoCompañia", Number(data['telefonoCompañia']))
                setValue("emailCompañia", data['emailCompañia'])
                setcompañia(data)
            }

        } else {
            console.log(error)
        }
    }

    const onSubmit = async (entity: any) => {
        try {
            let endpoint = "compañia";
            
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
        <Toolbar pathForm='inventario/compañia/0' pathList='inventario/compañia/' currentEntity={getValues("nombresCompañia")} entityName='compañia'/>
        <div className='h-96 w-4/6 mx-auto p-4 border-solid border-gray-300 border-2 rounded-xl  '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id='id' label='' register={register} type='hidden'/>
                <Input id='nombresCompañia' label='' register={register} type='text'/>
                <Input id='direccionCompañia' label='' register={register} type='text'/>
                <Input id='telefonoCompañia' label='' register={register} type='number'/>
                <Input id='emailCompañia' label='' register={register} type='text'/>
                <Button className="btn-sm my-2" type='submit' label='Guardar' />
                {errors?.root?.server && <p>Form submit failed.</p>}
            </form>            
        </div>
        </div>
    </>
    )
}

export default Page;