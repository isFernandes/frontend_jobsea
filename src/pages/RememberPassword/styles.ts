import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
   width: 100%;
   align-self: center;
  `;

export const Form = styled.form`
  background-color: #3c7380;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  opacity: 0.95;
  max-width: 700px;
  border-radius: 4px;
  @media(max-width:650px){
    max-width: 85%;
    padding:8px;
    align-self: center;
    justify-self: center;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
`;

export const ButtonArea = styled.div`
  margin: 2em 8px 8px 8px;
  display: flex;
  max-width: 350px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
