import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Header = () => {

    const { cerrarSesion } = useAuth()

  return (
    <header className="py-10 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-yellow-500 text-4xl font-bold">devConnect</h1>

              <nav className="flex flex-col items-center md:flex-row gap-4 mt-5 lg:mt-0">
                  <Link to="/admin" className="text-gray-700 text-l">Empleados</Link>
                  <Link to="/admin/perfil" className="text-gray-700 text-l">Perfil</Link>

                  <button
                      type="button"
                      className= "text-yellow-500 font-bold text-l"
                      onClick={cerrarSesion}

                  >Cerrar Sesión</button>
              </nav>

            
        </div>
    </header>
  )
}

export default Header