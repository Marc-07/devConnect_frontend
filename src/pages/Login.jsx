import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"
import clienteAxios from "../config/axios"


const Login = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ alerta, setAlerta] = useState({})

  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const handleSubmit  = async (e) => {
    e.preventDefault()

    if([ email, password].includes("")){
      setAlerta( {
        msg: "Todos los campos son obligatorios",
        error: true
      } );

      return
    }

    try {
      const { data } = await clienteAxios.post("/empresas/login", { email, password})
      localStorage.setItem("token", data.token)
      setAuth(data)
      navigate("/admin")
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta
  
  return (
    <>
      <div className="mt-0">
        <h1 className="text-sky-800 font-black text-5xl">
          Inicia sesión y gestiona <br /> tu equipo&nbsp;
          <span className="relative inline-block font-caveat text-7xl font-black">
            tecnológico
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-yellow-500 rounded-full -z-10"></span>
          </span>
        </h1>
      </div>

      <div className="mt-20 md:mt-0">

        {msg && <Alerta
          alerta={alerta}
        />}

        <form onSubmit={handleSubmit}>

          <div className="my-5">
            <label className=" text-gray-600 block text-lg font-bold">
              Correo electrónico
            </label>
            <input 
              type="email"
              placeholder="Escriba su correo"
              className="w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {/* Contraseña */}
          <div className="my-5">
            <label className=" text-gray-600 block text-lg font-bold">
              Contraseña
            </label>
            <input 
              type="password"
              placeholder="Escriba su contraseña"
              className="w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            value="Iniciar Sesión"
            className="bg-yellow-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-yellow-700 md:w-auto"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link 
            className="block my-5 text-center  text-gray-500"
            to="/registrar"
          >¿Aún no tienes una cuenta? <span className="font-bold">Registrate</span></Link>
          <Link 
            className="block my-5 text-center text-gray-500"
            to="/olvide-password">Olvidé mi contraseña</Link>
        </nav>
      </div>
      
    </>
  )
}

export default Login