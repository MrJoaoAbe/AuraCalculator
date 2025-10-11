import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Entrar() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e) {
        if (nome === '' || email === '' || senha === '') {
            alert("Prencha todos os dados!")
        }
        else {
            e.preventDefault()

            usuarioLogado();
        }
    }

    function usuarioLogado() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const user = usuarios.find(u => u.nome === nome && u.email === email && u.senha === senha);

        if (user) {
            localStorage.setItem('usuarioLogado', JSON.stringify(user));
            alert("Bem vindo " + nome)
            navigate("/")
        } else {
            alert("Informações Incorretas")
        }
    }

    return (
        <div>
            <h1>Entrar</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="senha">Senha</label>
                <input type="text" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} />

                <button type="submit">Entrar</button>
            </form>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Entrar