import useEmpleados from "../hooks/useEmpleados"
import Empleado from "./Empleado";

const ListadoEmpleado = () => {

  const { empleados } = useEmpleados();
  return (
    <>
      {empleados.length  ? 
      (

        <>
          <h2 className="font-gray-300 text-2xl text-center ">Listado empleados</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra a tu equipo {""}
            <span className="text-cyan-600">tecnologico</span>
          </p>

          {empleados.map ( empleado => (
            <Empleado 
              key={empleado._id}
              empleado={empleado}
            />
          ))}
        </>

      ) :  
      (
        <>
          <h2 className="font-gray-300 text-2xl text-center ">No hay empleados</h2>

          <p className="text-l mt-5 mb-10 text-center">
            Comienza agregando a tus empleados {""}
            <span className="text-cya-600">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </>
  )
}

export default ListadoEmpleado