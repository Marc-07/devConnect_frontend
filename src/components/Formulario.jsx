import {  useState, useEffect } from "react"
import Alerta from "./Alerta"
import useEmpleados from "../hooks/useEmpleados"

const Formulario = () => {

  const [nombre, setNombre ] = useState("")
  const [email, setEmail ] = useState("")
  const [tecnologias, setTecnologias ] = useState("")
  const [cvUrl, setCvUrl ] = useState("")
  const [observaciones, setObservaciones ] = useState("")
  const [ id, setId ] = useState(null)

  const [ alerta, setAlerta ] = useState({})
  const { guardarEmpleado, empleado  } = useEmpleados();
  
  useEffect (() => {
    if(empleado?.nombre){
        setNombre(empleado.nombre)
        setEmail(empleado.email)
        setTecnologias(empleado.tecnologias)
        setCvUrl(empleado.cvUrl)
        setObservaciones(empleado.observaciones)
        setId(empleado._id)
    }
  },[empleado])

  const handleSubmit = e  => {
    e.preventDefault()

    //Validar formulario
    if([nombre, email, tecnologias, cvUrl, observaciones].includes("")){
        setAlerta({
            msg: "Todos los campos son obligatorios",
            error: true
        })
        return
    }

    
    guardarEmpleado({nombre, email, tecnologias, cvUrl, observaciones, id})
    setAlerta({
        msg: "Actualizado correctamente"
    })
    setNombre("")
    setEmail("")
    setTecnologias("")
    setCvUrl("")
    setObservaciones("")
    setId("")

  }

  const { msg } = alerta

  return (

    <>

        <h2 className="font-gray-300 text-2xl text-center ">Administrador de Empleados</h2>

        <p className="text-xl mt-5 mb-10 text-center">
            Agrega a tu equipo  {""}
            <span className="text-cyan-600">tecnologico</span>
        </p>

        { msg && <Alerta alerta={alerta} />}

        <form className="bg-white py-10 px-5 mb-10 shadow-md rounded-md "
            onSubmit={handleSubmit} 
        >
            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className="text-gray-700 font-medium"
                > Nombre Empleado </label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Nombre empleado"
                    className=" bg-white border-2 border-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-gray-700 font-medium"
                > Email empleado </label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Email del empleado"
                    className=" bg-white border-2 border-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="tecnologias"
                    className="text-gray-700 font-medium"
                > Tecnologias </label>
                <input 
                    id="tecnologia"
                    type="text" 
                    placeholder="Tecnologias"
                    className=" bg-white border-2 border-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={tecnologias}
                    onChange={e => setTecnologias(e.target.value)} 
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="cvUrl"
                    className="text-gray-700 font-medium"
                > Enlace portafolio </label>
                <input 
                    id="cvUrl"
                    type="text"
                    placeholder="Enlace portafolio"
                    className=" bg-white border-2 border-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={cvUrl}
                    onChange={e => setCvUrl(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="observaciones"
                    className="text-gray-700 font-medium"
                > Observaciones </label>
                <textarea 
                    id="observaciones"
                    type="text"
                    placeholder="Describe las Observaciones"
                    className=" bg-white border-2 border-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={observaciones}
                    onChange={e => setObservaciones(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className="bg-gray-500 p-4 rounded-xl text-amber-50 font-medium w-full  hover:bg-gray-600 cursor-pointer transition-colors"
                value={id ? "Guardar Cambio" : "Agregar Empleado"}
            />
        </form>
    </>
  )
}

export default Formulario