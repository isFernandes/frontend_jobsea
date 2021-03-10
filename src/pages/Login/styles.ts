import styled from "styled-components";
export const FooterText = styled.p`
    font-family: DesirasNonCommercial;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    letter-spacing:1.5px;
    word-wrap: break-word;
    z-index:2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  height: 100%;
   width: 100%;
   align-self: center;
  `;
export const Content = styled.div`
  display:flex;
  width:90vw;
  justify-content:center;
  @media(max-width:700px){
    flex-direction:column;
  }
  `;

export const Logo = styled.img`
  position: relative;
  max-height: 250px;
  display: flex;
  align-self: center;
  margin-right:25px;
  @media(max-width: 700px){
    height: 180px;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  background-color: #3c7380;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  opacity: 0.95;
  max-width: 500px;
  border-radius: 4px;
  padding-bottom:10px;
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
  max-height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
