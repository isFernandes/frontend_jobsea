import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  flex: 1;
  flex-direction: column;
  align-self:center;
  justify-content:flex-start;
  align-items:center;
  background-color: transparent;
  height: 90%;
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

export const ButtonsArea = styled.div`
  margin:0 15px 0 0;
  background-color: transparent;
  display:flex;
  flex: 1;
  justify-content:space-between;
  max-height: 40px;
  width: 80%;
  align-self: flex-end;
`;

export const InfoCard = styled.form`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-around;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
  padding:0;
  min-height: 70%;
  max-height: 85%;
  width: 600px;
  margin-right:40px;
  align-self: center;
  border-radius: 3px;
  padding: 0 10px 0 10px;
  z-index:0;
  flex:1;
`;

export const Title = styled.h1`
    display: flex;
    font-weight:bold;
    align-self: center;
    font-family: DesirasNonCommercial;
    color: #3c7380;
    letter-spacing: 1.10px;
`;

export const MainInfo = styled.p`
    color: #3c7380;
    font-family: 'Poppins';
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    text-align:justify;
    
    font-weight:700;
    `;
export const DetailsInfo = styled.p`
    color: #3c7380;
    font-family: 'Poppins';
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    font-weight:700;
    `;
export const OwnerInfo = styled.p`
    color: #3c7380;
    font-family: 'Poppins';
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    font-weight:700;
    margin-bottom:15px;
`;