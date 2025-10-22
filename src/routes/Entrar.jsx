import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Entrar() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (nome === "" || email === "" || senha === "") {
            alert("Preencha todos os dados!");
        } else {
            usuarioLogado();
        }
    }

    function usuarioLogado() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const user = usuarios.find(
            (u) => u.nome === nome && u.email === email && u.senha === senha
        );

        if (user) {
            localStorage.setItem("usuarioLogado", JSON.stringify(user));
            alert("Bem-vindo " + nome);
            navigate("/");
        } else {
            alert("Informações incorretas");
        }
    }

    return (
        <div className="flex flex-col justify-center bg-[#2D1859] pt-10 min-h-screen items-center">
            <div className="flex flex-col justify-center items-center lg:bg-[#1A1040] lg:w-150 lg:h-130 lg:rounded-4xl ">
                <h1 className="text-2xl text-white font-semibold text-center mb-6">LOGIN</h1>
                <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-6 w-80">

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="border-b-2 rounded-b-md placeholder:text-white placeholder:text-sm outline-0 transition duration-300 ease-in-out transform focus:scale-110 w-full pr-10"
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={faUser}
                            className="absolute right-2 top-1 transform -translate-y-1/2 text-white"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-b-2 rounded-b-md placeholder:text-white placeholder:text-sm outline-0 transition duration-300 ease-in-out transform focus:scale-110 w-full pr-10"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="absolute right-2 top-1 transform -translate-y-1/2 text-white"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Senha"
                            className="border-b-2 rounded-b-md placeholder:text-white placeholder:text-sm outline-0 transition duration-300 ease-in-out transform focus:scale-110 w-full pr-10"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={faLock}
                            className="absolute right-2 top-1 transform -translate-y-1/2 text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-white text-purple-900 font-semibold py-2 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                        Entrar
                    </button>
                </form>
                <Link to="/" className="mt-4 text-white hover:underline">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Entrar;
