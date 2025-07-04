import { useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";



const ConfirmarCuenta = () => {

  const [ cuentaConfirmada, setCuentaConfirmada ] = useState(false)
  const [ cargando, setCargando ] = useState(true);
  const [alerta, setAlerta ] = useState ({})

  const params = useParams();
  const { id } = params;
  
    
  useEffect (() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/empresas/confirmar/${id}`
        const { data } = await clienteAxios(url)
        setCuentaConfirmada(true)
        setAlerta( {
          msg: data.msg
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
      setCargando(false)
    }
    confirmarCuenta()
  }, [])

  return (
    <>
      <div className="mt-0">
        <h1 className="text-sky-800 font-black text-5xl">
          Confirma tu cuenta y gestiona <br /> tu equipo&nbsp;
          <span className="relative inline-block font-caveat text-7xl font-black">
            tecnológico
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-yellow-500 rounded-full -z-10"></span>
          </span>
        </h1>
      </div>

      <div className="mt-20 md:mt-0">

        {!cargando && <Alerta 
          alerta={alerta}
        />}

        {cuentaConfirmada && <Link
          to="/"
          className="block my-5 text-center  text-gray-500"
        ><span className="font-bold ">Inicia Sesión</span>
        </Link>}
        
      </div>
    </>
  )
}

export default ConfirmarCuenta