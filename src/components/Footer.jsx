

const Footer = () => {
    return (
        <>
            <footer className="bg-cyan-800 text-slate-100 py-12">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                    {/* Izquierda - Título */}
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-yellow-500">devConnect</h2>
                    </div>

                    {/* Centro - Descripción */}
                    <div className="md:w-1/3">
                        <p className="text-sm text-slate-300">
                            devConnect es una plataforma para conectar desarrolladores y compartir proyectos innovadores.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center md:justify-end gap-4">
                        {/* Twitter */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#eab308"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover:scale-110 transition duration-300"
                            >
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#eab308"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hover:scale-110 transition duration-300"
                            >
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                    </div>
                </div>


            </footer>
            {/* Abajo - Créditos */}
            <div className=" bg-gray-800 py-4 text-center text-sm text-slate-400">
                Website made with devConnect
            </div>

        </>
    )
}

export default Footer