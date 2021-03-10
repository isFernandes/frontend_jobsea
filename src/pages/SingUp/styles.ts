import styled from "styled-components";
export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  max-height: 80vh;
  border-radius: 10px;
  margin-top: 80px;
  flex: 5;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #3c7380;
  z-index: 1;
  opacity: 0.9;
  padding: 0 10px;
  @media (min-width: 680px) {
    width: 565px;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

export const TitleSingup = styled.h4`
  font-family: DesirasNonCommercial;
  color: #fff;
  margin-top: 25px;
  margin-bottom: 10px;
`;
