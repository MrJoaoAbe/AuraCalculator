import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

function Register() {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        if (nome === '' || idade === '' || email === '' || senha === '') {
            alert("Prencha todos os dados!")
        }
        else {
            e.preventDefault()

            // const novoID = localStorage.length + 1;
            salvarLocalStorage();
            usuarioLogado();
        }
    }

    function salvarLocalStorage() {
        const info = { nome, idade, email, senha };
        const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        usuarios.push(info);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert(`As informações de ${nome} foram salvas`);
        navigate('/')
    }

    function usuarioLogado() {
        const user = { nome, email, senha }
        localStorage.setItem('usuarioLogado', JSON.stringify(user));
        alert("Bem vindo " + nome)
        navigate("/")
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <h1>Cadastre-se</h1>
                <label htmlFor="nome">NOME</label>
                <input type="text" id='nome' name='nome' onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="idade">IDADE</label>
                <input type="text" id='idade' name='idade' onChange={e => setIdade(e.target.value)} />

                <label htmlFor="email">EMAIL</label>
                <input type="email" id='email' name='email' onChange={e => setEmail(e.target.value)} />

                <label htmlFor="senha">SENHA</label>
                <input type="text" id="senha" name="senha" onChange={e => setSenha(e.target.value)} />

                <button type='submit'>Enviar Informações</button>
            </form>

            <Link to='/'>Home</Link>
        </div>
    )
}

export default Register