import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {

  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [ passwordModificado, setPasswordModificado ] = useState(false)

  const params = useParams()
  const {token} = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/empresas/olvide-password/${token}`)
        setAlerta( {
          msg: "Ingresa tu nueva contraseña"
        })
        setTokenValido(true)
      } catch {
        setAlerta({
          msg: "Hubo un error con el enlace",
          error: true
        })
      }
    }
    comprobarToken()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password.length < 6) {
      setAlerta({
        msg: "La contraseña debe ser mínimo de 6 caracteres",
        error:true
      })
      return;
    }

    try {
      const url = `/empresas/olvide-password/${token}`
      const {data} = await clienteAxios.post(url, {password})

      
      setAlerta({
        msg: data.msg
      })

      setPasswordModificado(true)
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
          Restablece tu contraseña y no pierdas acceso a tu equipo&nbsp;
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
 
        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}
            >
              <div className="my-3">
                <label className=" text-gray-600 block text-lg font-bold">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  placeholder="Escriba su nueva contraseña"
                  className="w-full p-3 mt-3 bg-gray-100 rounded-xl"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Guardar contraseña"
                className="bg-yellow-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-yellow-700 md:w-auto"
              />

            </form>
          </>
        )}

        {passwordModificado && <nav className="mt-5 lg:flex lg:justify-start">
          <Link
            to="/"
            className="block  text-center  text-gray-500"
          ><span className="font-bold ">Inicia Sesión</span>
          </Link>
        </nav>}
      </div>
    </>

  )
}

export default NuevoPassword;