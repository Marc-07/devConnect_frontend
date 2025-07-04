import { useState } from "react"
import Formulario from "../components/Formulario"
import ListadoEmpleado from "../components/ListadoEmpleado"


const AdministrarEmpleados = () => {

  const [ mostrarFormulario, setMostrarFormulario] = useState(false)
  return (
    <div className="flex flex-col md:flex-row">
      <button
        type="button"
        className="bg-gray-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >{mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}</button>

      
      <div className={` ${mostrarFormulario ? "block" : "hidden"} md:block flex flex-col md:flex-row`}>
        <Formulario />
      </div>

      <div className="md:w-1/2 lg:w-3/5">
        <ListadoEmpleado />
      </div>
    </div>
  )
}

export default AdministrarEmpleados