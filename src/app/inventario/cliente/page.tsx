import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadocliente = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='cliente/0' pathList='inventario/cliente/' currentEntity={""} entityName='cliente'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de clientes</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Cedula","Nombre","Direccion","Correo Electronico"]}/>
            <TBody columnas={["cedula","nombre","direccion","correoElectronico"]} endpoint='cliente'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadocliente   