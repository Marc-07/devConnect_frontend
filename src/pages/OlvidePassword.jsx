import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const OlvidePassword = () => {

  const [email, setEmail] = useState("")
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email === "" || email.length < 6) {
      setAlerta({msg: "El correo electrónico es obligatorio", error: true})
      return;
    }

    try {
      const { data } = await clienteAxios.post("/empresas/olvide-password", {email})
      setAlerta({msg: data.msg})

    } catch (error) {
      setAlerta( {
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
          Recupera tu acceso en&nbsp;
          <span className="relative inline-block font-caveat text-7xl font-black">
            segundos
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-yellow-500 rounded-full -z-10"></span>
          </span>
        </h1>
      </div>

      <div className="mt-20 md:mt-0">

        { msg && <Alerta
          alerta={alerta}
        /> }
        <form 
          onSubmit={handleSubmit}
        >

          <div className="my-3">
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

          <input 
            type="submit"
            value="Recuperar Acceso"
            className="bg-yellow-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-yellow-700 md:w-auto"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block my-5 text-center  text-gray-500"
            to="/registrar"
          >¿Aún no tienes una cuenta? <span className="font-bold">Registrate</span></Link>
          <Link
            to="/"
            className="block my-5 text-center  text-gray-500"
          >¿Ya tienes una cuenta? <span className="font-bold ">Inicia Sesión</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default OlvidePassword