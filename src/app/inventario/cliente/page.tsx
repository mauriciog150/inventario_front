import { Toolbar } from '@/components/Toolbar';
import Head from '@/components/table/Head'
import TBody from '@/components/table/TBody';

const ListadoCliente = () => {
 return (
   <>
    <div className='grow '>
      <Toolbar pathForm='inventario/cliente/0' pathList='inventario/cliente/' currentEntity={""} entityName='cliente'/>
      <p className='text-center text-black'>Listado <span className='text-primary'>de clientes</span></p>
      <div className='overflow-x-auto'>
      <table className='table table-xs table-pin-rows table-pin-cols w-5/6 mx-auto'>
          <Head columnas={["","Cédula","Nombre","Direccion","Correo Electronico"]}/>
          <TBody columnas={["cedula","nombre","direccion","correo_electronico"]} endpoint='cliente'/>
        </table>
      </div>
    </div>
   </>
 )
}

export default ListadoCliente;