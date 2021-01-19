import React, { useState } from 'react';
import styled from "styled-components";
import InputDefault from '../../components/InputDefault';
import Navbar from '../../components/Navbar';

import './index.css';

const ProjectCreate: React.FC = () => {
  const [nameProjeto, setNameProjeto] = useState("");
  const changeName = (nome: string) => {
    setNameProjeto(nome);
  }

  return (
    <>
      <Navbar title="PROJETOS" placeholder="Busque projetos" route="/" />
      <Container>
        <Content>
          <InputDefault placeholder="Nome do projeto" newValue={changeName} />
          <InputDefault placeholder="Caracteristicas Tecnicas" newValue={changeName} />
          <InputDefault placeholder="Descricao" newValue={changeName} />
          <InputDefault placeholder="Tempo estimado" newValue={changeName} />
          <InputDefault placeholder="Valor disponivel" newValue={changeName} />
        </Content>
      </Container>
    </>
  );
}

export default ProjectCreate;

const Container = styled.div`

`;
const Content = styled.form`

`;