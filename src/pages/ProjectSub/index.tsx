/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../../components/Navbar';
import { getProject } from "../../services/projectServices";

function ProjectSub() {
  const [selectedProject, setSelectedProject] = useState();

  const projeto = localStorage.getItem("selectedProject")
  useEffect(() => {
    const getSelectedProject = async (id: any) => {
      if (id !== null) {
        const response = await getProject(id);
        setSelectedProject(response.data);
      }

    };

    getSelectedProject(projeto);
  }, [projeto, selectedProject]);

  return (
    <Container>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA" />
      <Content>
        <MainFeed>
          <InfoCard>
            <Title>
              {selectedProject ? selectedProject.nome : "nome do projeto"}
            </Title>
            <MainInfo >
              {selectedProject ? selectedProject.descricao : "descricao do projeto"}
            </MainInfo>
            <DetailsInfo >
              {selectedProject ? selectedProject.tagTecnicas : "tecnicas do projeto"}
            </DetailsInfo>
            <OwnerInfo >
              Cliente - {selectedProject ? selectedProject.tempoEstimado : "Tempo estimado"}
            </OwnerInfo>
            {/* {selectedProject ? selectedProject.id : "ain nn foi"} */}
          </InfoCard>
        </MainFeed>
        <Mural></Mural>
      </Content>
    </Container>
  );
}

export default ProjectSub;

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

const MainFeed = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self:center;
  justify-content:flex-start;
  align-items:flex-end;
  background-color: transparent;
  height: 90%;
`;

const Mural = styled.div`
  margin-top:80px;
  background-color: black;
  flex: 1;
  max-height: 200px;
  max-width: 300px;
`;
const InfoCard = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-around;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
  padding:0;
  height: 75%;
  width: 600px;
  margin-right:40px;
  align-self: flex-end;
  border-radius: 3px;
  padding: 0 0 0 10px;
`;

const Title = styled.h3`
    display: flex;
    font-weight:bold;
    align-self: center;
    font-family: DesirasNonCommercial;
    color: #3c7380;
    letter-spacing: 1.10px;
`;

const MainInfo = styled.p`
    color: black;
    font-family: DesirasNonCommercial;
    font-size: 12px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    text-align:justify;
    `;
const DetailsInfo = styled.p`
    color: black;
    font-family: DesirasNonCommercial;
    font-size: 12px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    `;
const OwnerInfo = styled.p`
    color: black;
    font-family: DesirasNonCommercial;
    font-size: 12px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
`;