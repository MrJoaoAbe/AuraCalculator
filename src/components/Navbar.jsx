import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
  console.log(usuario?.nome)

  const navigate = useNavigate();

  function handleclick() {
    localStorage.removeItem("usuarioLogado");
    navigate("/opcao")
  }

  return (
    <div className="p-3 flex justify-between items-center bg-[#1A1040]">
      <h1 className="text-2xl">
        <FontAwesomeIcon icon={faCrown} style={{ color: "#A66832" }} />
      </h1>

      <h1 className="text-[#A66832] font-bold text-2xl">AURACALCULATOR</h1>


      <div className="flex items-center gap-4">

        {usuario ? (
          <div>
            <span className="px-4 py-2 rounded-xl text-md font-semibold text-white transition-colors">Olá {usuario.nome}</span>
            <button className="bg-[#2D1859] px-4 py-2 rounded-xl text-md font-semibold text-white hover:bg-[#3A2373] transition-colors" onClick={handleclick}>SAIR</button>
          </div>
        ) : (
          <Link
            to="/opcao"
            className="bg-[#2D1859] px-4 py-2 rounded-xl text-md font-semibold text-white hover:bg-[#3A2373] transition-colors"
          >
            Entrar
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
