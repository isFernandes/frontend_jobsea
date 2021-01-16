import React from "react";
import styled from "styled-components";
import Crew from "../../components/Crew";
import Navbar from '../../components/Navbar';
import { crewData } from "../../helpers/crewsHelpers"

function Feed() {
  return (
    <Container>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA" />
      <Content>
        <Filtros></Filtros>
        <MainFeed>
          {crewData.map((crew) => (
            <Crew key={crew.id} projectTitle={crew.projectTitle} projectInfo={crew.projectInfo} projectDetails={crew.projectDetails} projectOwner={crew.projectOwner} />
          ))}
        </MainFeed>
        <Mural></Mural>
      </Content>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height:100%;
  margin-top:75px;
  background: #eaf1f3;
`;


const Filtros = styled.div`
  flex: 1;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
`;

const MainFeed = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const Mural = styled.div`
  margin-top:80px;
  background-color: black;
  flex: 1;
  max-height: 200px;
`;
