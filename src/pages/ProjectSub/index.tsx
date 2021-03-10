/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Navbar from '../../components/Navbar';
import ButtonOutlined from "../../components/ButtonOutlined"
import ButtonContained from "../../components/ButtonContained"
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { logout } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { subscribeProject } from "../../rootReducer/ducks/user";
import {
  Content,
  ButtonsArea,
  Children,
  Container,
  DetailsInfo,
  InfoCard,
  MainFeed,
  MainInfo,
  OwnerInfo,
  Title
} from "./styles";

function ProjectSub(props: any) {
  const selectedProject = useSelector((state: RootStateOrAny) => state.project.selectedProject);
  const { message } = useSelector((state: RootStateOrAny) => state.message);

  const user = useSelector((state: RootStateOrAny) => state.auth.user);

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      console.log(user.id, selectedProject.project._id)
      dispatch(subscribeProject(user.id, selectedProject.project._id));
    } catch (error) {
      console.log(error)
    }
  }


  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await dispatch(logout())
      props.history.push("/login");
      window.location.reload();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA" >

        <Children>
          <Link to="/create-project">
            <Button variant="text" style={{ color: "white" }} >
              Criar projeto
          </Button>
          </Link>
          <Link to="/user-projects">
            <Button variant="text" style={{ color: "white" }} >
              Seus projetos
            </Button>
          </Link>
          <Button variant="text" style={{ color: "white" }} onClick={() => {
            handleLogout();
          }}>
            Log Out
          </Button>
        </Children>
      </Navbar>
      <Content>
        <MainFeed>
          <InfoCard onSubmit={handleSubmit}>
            <Title>
              {selectedProject !== null ? selectedProject.project.nome : "Nome do Projeto"}
            </Title>
            <MainInfo >
              {selectedProject !== null ? selectedProject.project.descricao : "Descricao do Projeto"}
            </MainInfo>
            <DetailsInfo >
              {selectedProject !== null ? selectedProject.project.tagTecnicas : "Técnicas do Projeto"}
            </DetailsInfo>
            <OwnerInfo >
              Cliente - {selectedProject !== null ? selectedProject.owner : "Owner do Projeto"}
            </OwnerInfo>
            <ButtonsArea>
              <ButtonOutlined text="Cancelar" routeParams="/feed" type="text" />
              <ButtonContained onClick={() => (
                handleSubmit()
              )} text="Candidatar-se" type="submit" />
            </ButtonsArea>
          </InfoCard>
          {message ? Message(message) : ""}
        </MainFeed>
      </Content>
    </Container>
  );
}

export default ProjectSub;