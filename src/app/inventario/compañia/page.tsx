import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadocompañia = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='inventario/compañia/0' pathList='inventario/compañia/' currentEntity={""} entityName='compañia'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de Compañia</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre Compañia","Direccion Compañia","Telefono Compañia","Correo Electronico"]}/>
            <TBody columnas={["nombresCompañia","direccionCompañia","telefonoCompañia","correoElectronico"]} endpoint='compañia'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadocompañia   