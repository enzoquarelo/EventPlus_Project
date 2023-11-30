import React, { useContext } from "react";
import iconeLogout from "../../assets/images/icone-logout.svg";
import {Link, useNavigate} from "react-router-dom"

import "./PerfilUsuario.css";
const PerfilUsuario = () => {

  const {userData, setUserData} = useContext(userContext);
  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem('token');
    setUserData(null);
    navigate('/');
  }

  return (
    <div className="perfil-usuario">
      <span className="perfil-usuario__menuitem">Admin</span>

      <span className="perfil-usuario__menuitem"></span>

      <img
      onClick={logout}
        title="Deslogar"
        className="perfil-usuario__icon"
        src={iconeLogout}
        alt="imagem ilustrativa de uma porta de saída do usuário "
      />

      <Link to="/login" className="perfil-usuario__menuitem">
        Login
      </Link>
    </div>
  );
};

export default PerfilUsuario;
