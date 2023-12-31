import { LoginForm } from "./LoginForm";

const LoginPage = () => {

    return(
        <>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Bienvenido al Sistema de Inventario!</h1>
                <p className="py-6"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <LoginForm/>
                </div>
                </div>
            </div>
            </div>            
        </>
    )

}

export default LoginPage;