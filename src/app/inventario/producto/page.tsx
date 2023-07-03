import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadoproducto = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='producto/0' pathList='inventario/producto/' currentEntity={""} entityName='producto'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de productos</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre","Precio"]}/>
            <TBody columnas={["nombre","precioUnitario"]} endpoint='producto'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadoproducto   