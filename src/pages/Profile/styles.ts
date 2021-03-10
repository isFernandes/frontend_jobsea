import styled from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self:center;
  width:100%;
  height: 100vh;
`;

export const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  border-radius: 10px;
  max-width:40%;
  display: flex;
  background-color: #3c7380;
  opacity: 0.9;
  flex:1;
  align-self: center;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self:center;
  margin-top: 30px;
  @media (max-width: 700px){
    max-width: 80%;
    padding: 0 25px;
    
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  max-width: 400px;
  margin: 20px 0;
`;

export const Avatar = styled.img`
  display: flex;
  align-self: center;
  border-radius: 400%;
  background-color: transparent;
  z-index: 1;
  border: black solid .5px;
  width: 120px;
  height: 120px;
`;

export const ButtonSave = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 6px;
  background-color: #538f9c;
  opacity: 0.96;
  border: #9fb8bf solid 1.5px;
  border-radius: 12px;
  margin-top: 15px;
  font-family: DesirasNonCommercial;
  font-weight:bold;
  color: white;
`;

export const UserData = styled.h3`
  font-family: DesirasNonCommercial;
  color: black;
  text-align: center;
  align-self:center;
  display:flex;
`;
