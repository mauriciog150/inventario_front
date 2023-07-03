import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadoproveedores = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='proveedores/0' pathList='proveedores/' currentEntity={""} entityName='proveedores'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de proveedoress</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre","Direccion"]}/>
            <TBody columnas={["nombre","direccion"]} endpoint='proveedores'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadoproveedores   