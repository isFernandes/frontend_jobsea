import React, { FormEvent, useState } from "react";
import "./index.css";
import bgRemember from "../../assets/RememberPassword/bg_remember.png";
import ButtonOutlined from "../../components/ButtonOutlined";
import ButtonContained from "../../components/ButtonContained";
import InputDefault from "../../components/InputDefault";
import { Container, Form, ImageBackground, ButtonArea } from "./styles";

function EsqueceuSenha() {
  const [email, setEmail] = useState("");

  const changeEmail = (email: string) => {
    setEmail(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <Container>
      <ImageBackground src={bgRemember} />
      <Form onSubmit={handleSubmit}>
        <h1>Esqueceu a sua senha</h1>
        <p className="paragraph">
          Insira seu email de cadastro para enviarmos a chave de recuperação!
        </p>
        <InputDefault
          style={{ minWidth: "90%" }}
          name="email-remember"
          placeholder="E-MAIL"
          newValue={changeEmail}
        />
        <ButtonArea className="input-style">
          <ButtonOutlined text="Lembrei a senha" routeParams="/" />
          <ButtonContained text="Enviar" />
        </ButtonArea>
      </Form>
    </Container>
  );
}

export default EsqueceuSenha;
