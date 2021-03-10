/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Crew, CrewCardUser, SubCrewCardUser } from "../../components/Crew";
import Navbar from '../../components/Navbar';
import { getProjectsFromUser, getSubsFromUser } from "../../services/projectServices";
import { logout } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { Title, Children, Container, Content, MainFeed } from "./styles";

function UserProject(props: any) {
  const dispatch = useDispatch();
  const [crews, setCrews] = useState([]);
  const [subProject, setSubProjects] = useState([]);

  const { user } = useSelector((state: RootStateOrAny) => state.auth);

  useEffect(() => {
    const getProjects = async () => {
      const response = await getProjectsFromUser(user.id);

      setCrews(response.data);
    };

    const getSubProjectForUser = async () => {
      const response: any = await getSubsFromUser(user.id);
      console.log(response)
      setSubProjects(response.data[0].projects_subscribe);
    };

    getProjects();
    getSubProjectForUser();
  }, []);

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
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA">
        <Children>

          <Link to="/create-project">
            <Button variant="text" style={{ color: "white" }} >
              Criar projeto
          </Button>
          </Link>
          <Link to="/profile">
            <Button variant="text" style={{ color: "white" }} >
              Perfil
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
          <Title>Projetos Criados:</Title>
          {crews ?
            crews.map((crew: Crew) => (
              <CrewCardUser key={crew._id} crew={crew} />
            ))
            : Message("Voce ainda não possui nenhum projeto")}
          <Title>Projetos Inscritos:</Title>
          {console.log(subProject)}
          {subProject ?
            subProject.map((crew: Crew) => (
              <SubCrewCardUser key={crew._id} crew={crew} />
            ))
            : Message("Voce ainda não esta inscrito em nenhum projeto")}

        </MainFeed>
      </Content>
    </Container>
  );
}

export default UserProject;