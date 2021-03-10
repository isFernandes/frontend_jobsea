import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
// import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { register } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { clearMessage } from "../../rootReducer/ducks/message";
import {
  Form,
  Container,
  Content,
  ImageBackground,
  ButtonArea,
  TitleSingup,
} from "./styles";

function SingUp(props: any) {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { message } = useSelector((state: RootStateOrAny) => state.message);

  const changeName = (nome: string) => {
    setNome(nome);
  };
  const changeEmail = (email: string) => {
    setEmail(email);
  };
  const changeSenha = (senha: string) => {
    setSenha(senha);
  };

  const createUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const createdUser: any = await dispatch(register(nome, email, senha));
      alert("Seu acesso foi criado com sucesso" + createdUser.nome);
      setNome("");
      setEmail("");
      setSenha("");
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        route="singup"
        placeholder="Busque um freelancer ..."
        title="JOB SEA"
      />
      <Container>
        <ImageBackground src={imgBack} />
        <Content>
          <TitleSingup>CADASTRE-SE</TitleSingup>
          <Form onSubmit={createUser}>
            <InputDefault
              style={{ flex: 1, minWidth: "90%" }}
              name="nome"
              placeholder="Nome"
              newValue={changeName}
            />
            <InputDefault
              style={{ flex: 1, minWidth: "90%" }}
              type="email"
              name="email"
              placeholder="E-Mail"
              newValue={changeEmail}
            />
            <InputDefault
              style={{ flex: 1, minWidth: "90%" }}
              type="password"
              name="senha"
              placeholder="Senha"
              newValue={changeSenha}
            />

            <ButtonArea>
              <button
                className="back-button"
                color="primary"
                onClick={() => {
                  dispatch(clearMessage());
                }}
              >
                <Link className="linking-text" to="/">
                  Voltar
                </Link>
              </button>
              <button
                className="done-button"
                color="primary"
                type="submit"
                onClick={createUser}
              >
                {/* <Link style={{ color: "#3c7380", fontWeight: "bold" }} > */}
                Pronto
                {/* </Link> */}
              </button>
            </ButtonArea>
          </Form>
          {message ? Message(message) : ""}
        </Content>
      </Container>
    </>
  );
}

export default SingUp;
