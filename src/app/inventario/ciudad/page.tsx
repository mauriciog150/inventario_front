import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadociudad = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='inventario/ciudad/0' pathList='inventario/ciudad/' currentEntity={""} entityName='ciudad'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de ciudads</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre Ciudad"]}/>
            <TBody columnas={["nombreCiudad"]} endpoint='ciudad'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadociudad   