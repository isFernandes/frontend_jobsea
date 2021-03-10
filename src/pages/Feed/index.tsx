/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Crew,CrewCard } from "../../components/Crew";
import Navbar from '../../components/Navbar';
import { getAllProject } from "../../services/projectServices";
import { logout } from "../../rootReducer/ducks/auth";
import { Children, Container, Content, MainFeed} from "./styles";

function Feed(props: any) {
  const dispatch = useDispatch();
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await getAllProject();

      setCrews(response.data);
    };

    getProjects();
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
          <Link to="/user-projects">
            <Button variant="text" style={{ color: "white" }} >
              Seus projetos
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
        {/* <Filtros></Filtros> */}
        <MainFeed>
          {crews.map((crew: Crew) => (
            <CrewCard key={crew._id} crew={crew} />
          ))}
        </MainFeed>
      </Content>
    </Container>
  );
}

export default Feed;