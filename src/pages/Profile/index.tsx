//commom imports
import React, { FormEvent, useState } from "react";
import styled from "styled-components";
//imports material icons
import EditIcon from '@material-ui/icons/Edit';
import { Input, InputLabel, MenuItem,  Select, Chip } from "@material-ui/core";//extern archives
import "./index.css";
import avatarFake from "../../assets/Profile/defaultAvatar@72x.png";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { getAll /*getUser*/ } from "../../services/api";

const Profile: React.FC = () => {
  // const [user, setUser] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const usuarioTeste = async () => {
    const cep = await getAll();
    // const cep = await getAll().then(function () {
    //   console.log("deu certo");
    // }).catch(function (error) {
    //   console.log(error);
    // });

    console.log(cep);
  }


  const editImage = () => {
    alert("click funcionou");
    usuarioTeste();
  };

  // const saveForm = () => {
  //   alert("Dados Salvos");

  // };
  const techsFakeData = [
    "React JS",
    "React Native",
    "Node JS",
    "Git",
    "GitHub",
    "Docker",
    "Spring",
    "Odeio Java",
    "C#",
    "Python",
  ];

  const SoftFakeData = [
    "Trabalho em equipe",
    "Terra redonda",
    "Desenvolto",
    "Lider",
    "Pacifico",
    "Tranquilo",
    "Calmo",
    "Odeia Java",
    "Ama typescript",
    "Jogador de r6",
  ];

  const [techs, setTechs] = useState<string[]>([]);
  const [softs, setSofts] = useState<string[]>([]);
  const [bio, setBio] = useState("");

  const handleSelectTechs = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTechs(event.target.value as string[]);
  };

  const handleSelectSofts = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSofts(event.target.value as string[]);
  };

  const handleDataSubmit = (e: FormEvent)=>{
    e.preventDefault();

    console.log(bio);
  }
  const changeBio = (bio: string)=>{
    setBio(bio);
  }

  return (

    <Container>
      <Navbar placeholder="Busque um freelancer ..." title="Dashboard" />
      <ImageBackground src={imgBackground} />
      <Content onSubmit={handleDataSubmit}>
        <Header>
          <Avatar src={avatarFake} />
          <Icon className="icon" onClick={() => editImage()}>
            <EditIcon fontSize="small" />
          </Icon>
        </Header>
        <UserData>
          nome_Usuario, equipes_participantes, techs_Conhecidas
          </UserData>

        <div className="align">
          <InputLabel id="label">Habilidades Extras</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="select"
            multiple
            value={softs}
            onChange={handleSelectSofts}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div style={{ display: "flex", flexWrap: 'wrap' }}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} style={{ margin: "2px" }} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {SoftFakeData.map((soft) => (
              <MenuItem key={soft} value={soft} >
                {soft}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="align">
          <InputLabel id="label">Habilidades Técnicas</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="select"
            multiple
            value={techs}
            onChange={handleSelectTechs}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div style={{ display: "flex", flexWrap: 'wrap' }}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {techsFakeData.map((tech) => (
              <MenuItem key={tech} value={tech} >
                {tech}
              </MenuItem>
            ))}
          </Select>
        </div>
        <InputDefault name="bio" placeholder="Bio" newValue={changeBio}/>
        <Button className="button">Salvar Dados</Button>
      </Content>
    </Container>

  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self:center;
  width:100%;
  height: 100vh;
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  background-color: #3c7380;
  opacity: 0.9;
  flex:1;
  align-self: center;
  padding: 25px;
  margin-right: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self:center;
  margin-top: 30px;
  @media (max-width: 700px){
    margin-right: 15%;
    margin-top: 70px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  max-width: 400px;
  margin: 20px 0;
`;

const Avatar = styled.img`
  display: flex;
  align-self: center;
  border-radius: 400%;
  background-color: transparent;
  z-index: 1;
  border: black solid 1px;
  width: 120px;
  height: 120px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 12px;
  z-index: 2;
  border-radius: 400%;
  margin-bottom: -15px;
  margin-left: -55px;
  background-color: white;
  border: #d0d0d0 solid 2px;
`;

const Button = styled.button`
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

const UserData = styled.h3`
  font-family: DesirasNonCommercial;
  color: black;
  text-align: center;
  align-self:center;
  display:flex;
`;
