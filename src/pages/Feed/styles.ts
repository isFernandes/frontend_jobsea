import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Children = styled.form`
  align-self:flex-end;
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-width:100%;
  @media(max-width: 1000px){
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height:100%;
  margin-top:75px;
  background: #eaf1f3;
`;



export const MainFeed = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  `;

// export const Filtros = styled.div`
//     flex: 1;
//     border: 0.5px solid #d2dbdd;
//     box-shadow: 3px 4px 4px #c7c4c4;
//     max-width: 300px;
//   `;

// export const Mural = styled.div`
//   margin-top:80px;
//   background-color: black;
//   flex: 1;
//   max-height: 200px;
// `;
