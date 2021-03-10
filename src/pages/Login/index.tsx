import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Redirect } from "react-router-dom";

import "./index.css";
import ButtonOutlined from "../../components/ButtonOutlined";
import ButtonContained from "../../components/ButtonContained";
import InputDefault from "../../components/InputDefault";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import { login } from "../../rootReducer/ducks/auth";
import { Content, ButtonArea, Container, FooterText, Form, ImageBackground, Logo } from "./styles";
import logotipeMain from "../../assets/HomePage/logotipo-caravela@72x.png";
import Message from "../../components/Message";

function Login(props: any) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.auth);
  const { message } = useSelector((state: RootStateOrAny) => state.message);

  const changeEmail = (email: string) => {
    setEmail(email)
  }
  const changePass = (pass: string) => {
    setPass(pass)
  }

  useEffect(() => {

    const redirectFeed = () => {
      if (isLoggedIn) {
        props.history.push("/feed");
        window.location.reload();
        return <Redirect to="/feed" />
      }
    }

    redirectFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])
  const handleSubmit = async () => {
    try {
      await dispatch(login(email, pass))
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Container>
      <ImageBackground src={imgBackground} />
      <Content>
        <Logo src={logotipeMain} />
        <Form onSubmit={handleSubmit} >
          <h1>Login</h1>

          <InputDefault style={{ minWidth: "90%", marginBottom: "15px", marginTop: "25px" }} name="email-login" placeholder="E-MAIL" type="email" newValue={changeEmail} />
          <InputDefault style={{ minWidth: "90%", marginTop: "15px", marginBottom: "15px" }} name="password-login" placeholder="Senha" type="password" newValue={changePass} />
          {message ? Message(message) : ""}
          <ButtonArea id="buttonArea" className="input-style">
            <ButtonOutlined text="Esqueci a senha" routeParams="/remember-password" />
            <ButtonContained text="Entrar" type="submit" onClick={handleSubmit} />

          </ButtonArea>
          <Link to="/singup" style={{ marginBottom: "10px", marginTop: "10px", fontSize: "20px", letterSpacing: "2px", textDecoration: "none", color: "white", fontFamily: "DesirasNonCommercial" }} >Cadastre-se</Link>
        </Form>
      </Content>
      <FooterText>ENCONTRE SEU JOB NESSE MAR DE OPORTUNIDADES . . .</FooterText>
    </Container>
  );
}

export default Login;