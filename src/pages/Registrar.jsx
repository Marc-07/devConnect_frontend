import { useState } from "react";
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";


const Registrar = () => {

  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");


  const [alerta, setAlerta ] = useState ({})

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes("")){
      setAlerta({ msg: "Todos los campos son obligatorios.", error: true})
      return;
    }

    if(password !== repetirPassword){
      setAlerta({ msg: "Las contraseñas no coinciden", error: true})
      return;
    }

    if(password.length < 8 ){
      setAlerta({ msg: "La contraseña debe tener al menos 8 caracteres.", error: true})
      return
    }

    setAlerta({})

    //Crear el usuario en la API
    try {
      
      await clienteAxios.post( "/empresas", {nombre, email, password} )
      setAlerta( {
        msg: "Creado correctamente, revisa tu correo electrónico",
        error: false
      })
    } catch (error) {
      setAlerta ( {
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
          Crea tu cuenta y gestiona <br /> tu equipo&nbsp;
          <span className="relative inline-block font-caveat text-7xl font-black">
            tecnológico
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-yellow-500 rounded-full -z-10"></span>
          </span>
        </h1>
      </div>

      <div className="mt-20 md:mt-0">

        { msg && <Alerta 
          alerta={alerta}
        />}
        <form 
          onSubmit={handleSubmit}
        >

          <div className="my-3">
            <label className=" text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input 
              type="text"
              placeholder="Escriba su nombre"
              className="w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          {/* Correo */}
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

          <div className="my-3">
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

          <div className="my-3">
            <label className=" text-gray-600 block text-lg font-bold">
              Repetir contraseña
            </label>
            <input 
              type="password"
              placeholder="Repite tu contraseña"
              className="w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            value="Crear cuenta"
            className="bg-yellow-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-yellow-700 md:w-auto"
          />

        </form>

        <nav className="mt-10 lg:flex lg:justify-end">
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

export default Registrar