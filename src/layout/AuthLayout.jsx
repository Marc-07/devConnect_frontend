import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>

      <div className="relative min-h-screen flex flex-col justify-between">
        <main className="container mx-auto px-4 mt-12 flex-1 md:grid md:grid-cols-2 md:items-start gap-10">
          <Outlet />
        </main>
      </div>
      
    </>
  )
}

export default AuthLayout