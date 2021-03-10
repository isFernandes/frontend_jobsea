import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
`;

export const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;


export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  z-index: 1;
  margin: 80px 0 0 0; 
`;

export const ButtonArea = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  align-self: center;
  padding: 5px;
  flex:1;
  @media(max-width: 700px){
    flex-direction:column;
    min-width: 30%;
    max-width:50%;
    justify-content: center;
    align-items: center;
  }
  `;

export const Logo = styled.img`
  margin-top: 15px;
  position: relative;
  height: 350px;
  display: flex;
  align-self: center;
  @media(max-width: 700px){
    height: 280px;
    margin-top: 0;
  }
`;

export const FooterText = styled.p`
    font-family: DesirasNonCommercial;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    letter-spacing:1.5px;
    word-wrap: break-word;
`;
export const Children = styled.div`
align-self:flex-end;
  display: flex;
  flex: 1;
  justify-content: space-around;
  max-width: 300px;
  @media(max-width: 1000px){
    flex-direction: column;
  }
`;