const Alerta = ({alerta}) => {

  return (
    <div className={`${alerta.error ? "from-red-400 to-red-600" : "from-cyan-700 to-cyan-800"} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta