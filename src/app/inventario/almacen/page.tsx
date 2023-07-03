import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadoalmacen = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='inventario/almacen/0' pathList='inventario/almacen/' currentEntity={""} entityName='almacen'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de almacens</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre Almacen","Direccion Almacen","Capacidad Almacen"]}/>
            <TBody columnas={["nombreAlmacen","direccionAlmacen","capacidadAlmacen"]} endpoint='almacen'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadoalmacen   