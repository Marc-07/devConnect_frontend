import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios"
import useAuth from "../hooks/useAuth";

const EmpleadosContext = createContext()

export const EmpleadosProvider = ({children}) => {

    const [empleados, setEmpleados] = useState([]);
    const [empleado, setEmpleado] = useState({})
    const { auth } = useAuth();

    useEffect(() => {
        const obtenerEmpleados = async () => {

            try {
                const token = localStorage.getItem("token")
                if(!token)return

                const config = {
                    headers : {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios("/empleados", config)
                setEmpleados(data)

                
            } catch (error) {
                console.log(error)
            }
        }
        obtenerEmpleados()
    }, [auth])

    const guardarEmpleado = async (empleado) => {

        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if(empleado.id){
            try {
                const { data } = await clienteAxios.put(`/empleados/${empleado.id}`, empleado, config)

                const empleadosActualizado = empleados.map( empleadoState => empleadoState._id === data._id ? data : empleadoState)
                setEmpleados(empleadosActualizado)

            } catch (error) {
                console.log(error)
            }
        }else {
            try {
            
            const { data } = await clienteAxios.post("/empleados", empleado, config)
            const { createdAt, updatedAt, __v, ...empleadoAlmacenado } = data
            console.log(createdAt)
            console.log(updatedAt)
            setEmpleados([empleadoAlmacenado, ...empleados])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
    }

    const setEdicion = (empleado) => {
        setEmpleado(empleado)
    }

    const eliminarEmpleado = async id => {
        const confirmar = confirm("¿Confirmar que deseas eliminar?")
        if (confirmar) {
            try {
                const token = localStorage.getItem("token")
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.delete(`/empleados/${id}`, config)
                console.log(data)
                const empleadosActualizado = empleados.filter( empleadoState => empleadoState._id !== id)
                setEmpleados(empleadosActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }


 return(
    <>
        <EmpleadosContext.Provider
            value={{
                empleados,
                guardarEmpleado,
                setEdicion,
                empleado,
                eliminarEmpleado
            }}
        >
            {children}
        </EmpleadosContext.Provider>
    </>
 )
}


export default EmpleadosContext;