import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import Navbar from "../../components/Navbar";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import logotipeMain from "../../assets/HomePage/logotipo-caravela@72x.png";
import { Button } from "@material-ui/core";
import {
  Container,
  ImageBackground,
  LoginField,
  ButtonArea,
  Logo,
  FooterText,
  Children,
} from "./styles";

function Landing() {
  return (
    <>
      <Navbar placeholder="Busque um freelancer ..." route=" " title="JOB SEA">
        <Children>
          <Link to="/">
            <Button variant="text" style={{ color: "white" }}>
              LOGIN
            </Button>
          </Link>
          <Link to="/singup">
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
                display: "flex",
                fontWeight: "bold",
              }}
            >
              Cadastre-se
            </Button>
          </Link>
        </Children>
      </Navbar>
      <Container>
        <ImageBackground src={imgBackground} />
        <LoginField>
          <Logo src={logotipeMain} />
          <ButtonArea>
            <button className="create-job">
              <Link
                style={{ color: "#fff" }}
                className="linking-button"
                to="/remember-password"
              >
                PUBLIQUE UM JOB
              </Link>
            </button>

            <button className="search-job">
              <Link
                style={{ color: "#3c7380" }}
                className="linking-button"
                to="/feed"
              >
                ENCONTRE UM JOB
              </Link>
            </button>
          </ButtonArea>
          <FooterText>
            ENCONTRE SEU JOB NESSE MAR DE OPORTUNIDADES . . .
          </FooterText>
        </LoginField>
      </Container>
    </>
  );
}

export default Landing;