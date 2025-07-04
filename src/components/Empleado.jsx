import useEmpleados from "../hooks/useEmpleados"

const Empleado = ({empleado}) => {

    const { setEdicion, eliminarEmpleado } = useEmpleados();

    const { nombre, email, tecnologias, cvUrl, observaciones, _id} = empleado
  return (
      <>
        
          <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
              <p className="font-bold text-gray-600 my-2  "> Nombre: {""}
                  <span className="font-normal normal-case text-black">{nombre}</span>
              </p>
              <p className="font-bold text-gray-600 my-2 "> Email: {""}
                  <span className="font-normal normal-case text-black">{email}</span>
              </p>
              <p className="font-bold text-gray-600 my-2"> Tecnologías: {""}
                  <span className="font-normal normal-case text-black">{tecnologias}</span>
              </p>
              <p className="font-bold text-gray-600 my-2"> Portafolio: {""}
                  <span className="font-normal normal-case text-black">{cvUrl}</span>
              </p>
              <p className="font-bold text-gray-600 my-2"> Observaciones: {""}
                  <span className="font-normal normal-case text-black">{observaciones}</span>
              </p>

              <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-cyan-800 hover:bg-cyan-900 text-white uppercase font-bold rounded-lg"
                    onClick={() => setEdicion(empleado)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => eliminarEmpleado(_id)}
                >Eliminar</button>


              </div>
          </div>

      </>
  )
}

export default Empleado