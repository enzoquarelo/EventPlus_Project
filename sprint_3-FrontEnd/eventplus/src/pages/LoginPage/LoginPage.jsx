import React, { useState } from "react";
import "./LoginPage.css";

import { Input, Button } from "../../components/FormComponents/FormComponents";
import ImageIllustrator from "../../components/ImageIllustration/ImageIllustration";
import loginImage from '../../assets/images/login.svg';


import logo from "../../assets/images/logo-pink.svg";



const LoginPage = () => {
  
    const [user, setUser] = useState({email: "enzo.quarelo@gmail.com", senha: "123"});

  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            imageRender={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox">
            <Input
              className="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              onChange={(e) => {}}
              placeholder="Username"
            />
            <Input
              className="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              onChange={(e) => {}}
              placeholder="****"
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              buttonText="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              className="frm-login__button"
              onClick={()=>{}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
