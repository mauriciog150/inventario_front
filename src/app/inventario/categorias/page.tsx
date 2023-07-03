import { Toolbar } from '@/components/Toolbar'
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody'

const Listadocategorias = () => {
    return (
    <>
    <div className='grow '>
        <Toolbar pathForm='inventario/categorias/0' pathList='inventario/categorias/' currentEntity={""} entityName='categorias'/>
        <p className='text-center text-black'>Listado <span className='text-primary'>de categoriass</span></p>
        <div className='overflow-x-auto'>
        <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
            <Head columnas={["","Nombre","Descripcion"]}/>
            <TBody columnas={["nombre","descripcion"]} endpoint='categorias'/>
        </table>
        </div>
    </div>
    </>
    )
}

export default Listadocategorias   