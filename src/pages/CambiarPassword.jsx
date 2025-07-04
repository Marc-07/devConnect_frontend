import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

  const { guardarPassword } = useAuth()

  const [ alerta, setAlerta ] = useState({})
  const [ password, setPassword ] = useState({
    pw_actual : "",
    pw_nuevo :  ""
  })

  const handleSubmit = async e => {
    e.preventDefault()

    if(Object.values(password).some(campo => campo === "")){
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })
      return
    }

    if( password.pw_nuevo.length < 6 ) {
      setAlerta({
        msg: "La contraseña debe tener minimo 6 caracteres",
        error: true
      })
      return
    }

    const respuesta = await guardarPassword(password)
    setAlerta(respuesta)
  }

  const {msg} = alerta
  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10">Cambia tu contraseña</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {""} <span className="text-cyan-600 font-bold">Contraseña</span></p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bd-white shadow rounded-lg p-5 mb-10">
          {msg && <Alerta alerta={alerta} />}
          <form
            onSubmit={handleSubmit}
          >
            <div className="my-3">
              <label className="font-bold text-gray-600">Contraseña Actual</label>
              <input
                type="password"
                className=" bg-gray-100 w-full p-2 mt-5 rounded-lg border-0"
                name="pw_actual"
                placeholder="Escribe tu actual contraseña"
                onChange={e => setPassword({
                  ...password,
                  [e.target.name] : e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="font-bold text-gray-600">Contraseña Nueva</label>
              <input
                type="password"
                className=" bg-gray-100 w-full p-2 mt-5 rounded-lg border-0"
                name="pw_nuevo"
                placeholder="Escribe tu nueva contraseña"
                onChange={e => setPassword({
                  ...password,
                  [e.target.name] : e.target.value
                })}
              />
            </div>

            <input
              type="submit"
              value="Actualizar Contraseña"
              className="bg-cyan-700 px-10 py-3 font-bold text-white rounded-lg w-full mt-5 hover:bg-cyan-800 transition-colors cursor-pointer uppercase"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default CambiarPassword