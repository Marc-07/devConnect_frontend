import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import AdminRutaProtegida from "./layout/AdminRutaProtegida"

import Login from "./pages/Login"
import Registrar from "./pages/Registrar"
import OlvidePassword from "./pages/OlvidePassword"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"
import NuevoPassword from "./pages/NuevoPassword"
import AdministrarEmpleados from "./pages/AdministrarEmpleados"
import EditarPerfil from "./pages/EditarPerfil"
import CambiarPassword from "./pages/CambiarPassword"

import { AuthProvider } from "./context/AuthProvider"
import { EmpleadosProvider } from "./context/EmpleadosProvider"

function App() {


  return (

    <BrowserRouter>
      <AuthProvider>
        <EmpleadosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login key="login" />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/admin" element={<AdminRutaProtegida />}>
              <Route index element={<AdministrarEmpleados />} />
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiar-password" element={<CambiarPassword />} />
            </Route>
          </Routes>
        </EmpleadosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
