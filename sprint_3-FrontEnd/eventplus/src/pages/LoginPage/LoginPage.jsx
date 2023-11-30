import React, { useState } from "react";
import "./LoginPage.css";

import { Input, Button } from "../../components/FormComponents/FormComponents";
import ImageIllustrator from "../../components/ImageIllustration/ImageIllustration";
import api, {loginResource} from "../../services/service";
import {} from "../../"

import Notification from "../../components/Notification/Notification";
import Spinner from "../../components/Spinner/Spinner";

import loginImage from "../../assets/images/login.svg";
import logo from "../../assets/images/logo-pink.svg";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  // Notification
  const [notifyUser, setNotifyUser] = useState({});

  // Sppiner
  const [showSpinner, setShowSpinner] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (user.senha.length >= 6) {
      try {
        const promise = await api.post(loginResource, {
          email: user.email,
          senha: user.senha
        });
      } catch (error) {
        alert("Houve um error no carregamento de dados. Verifique a sua conexão com a internet !")
      }
      
      console.log("foi")
      // console.log(promise.data)
    } else {
      alert("A senha deve conter no minimo 6 caracteres")
    }
  }

  function notifySuccess(textNote) {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote,
      imgIcon: "success",
      imgAlt:
        "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
      showMessage: true,
    });
  }

  function notifyError(textNote) {
    setNotifyUser({
      titleNote: "Erro",
      textNote,
      imgIcon: "danger",
      imgAlt:
        "Imagem de ilustração de erro. Homem segurando um balão com símbolo de X.",
      showMessage: true,
    });
  }

  function notifyWarning(textNote) {
    setNotifyUser({
      titleNote: "Aviso",
      textNote,
      imgIcon: "warning",
      imgAlt:
        "Imagem de ilustração de aviso. Mulher em frente a um grande ponto de exclamação.",
      showMessage: true,
    });
  }

  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            image={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              className="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              handleChange={(e) => {
                setUser({ ...user, email: e.target.value.trim() });
              }}
              placeholder="Username"
            />
            <Input
              className="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              handleChange={(e) => {
                setUser({ ...user, senha: e.target.value.trim() });
              }}
              placeholder="****"
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              textButton="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              className="frm-login__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
