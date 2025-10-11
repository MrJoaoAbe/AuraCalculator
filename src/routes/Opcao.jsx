import { Link } from "react-router-dom"

function Opcao() {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1>Escolha uma opção</h1>

            <Link to='/entrar'>Login</Link>
            <Link to='/register'>Cadastrar</Link>
            <Link to='/'>Home</Link>

        </div>
    )
}

export default Opcao
