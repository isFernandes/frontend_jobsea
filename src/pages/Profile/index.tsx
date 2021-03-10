//commom imports
import React, { FormEvent, useState, useEffect } from "react";
import { Input, InputLabel, MenuItem, Select, Chip, Button } from "@material-ui/core";//extern archives
import "./index.css";

import { ImageBackground, Avatar, ButtonSave, Children, Container, Content, Header, UserData } from "./styles";
import avatarFake from "../../assets/Profile/defaultAvatar@72x.png";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { getUser } from "../../services/userServices";
import { Link } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logout } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { updateProfile } from "../../rootReducer/ducks/user";


function Profile(props: any) {
  const [user, setUser] = useState();
  const [techs, setTechs] = useState<string[]>([]);
  const [softs, setSofts] = useState<string[]>([]);
  const [bio, setBio] = useState("");
  const [imgUrl, setImgUrl] = useState("");
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

  const { message } = useSelector((state: RootStateOrAny) => state.message);
  const loggedUser = useSelector((state: RootStateOrAny) => state.auth.user);

  useEffect(() => {
    const getProjects = async () => {
      const usuario: any = localStorage.getItem("user")
      const userId = usuario.id;
      const response = await getUser(userId)
      setUser(response.data);
    };

    getProjects();
  }, [user]);


  const getBase64Img = (event: any): void => {
    var file = event.target.files[0];
    var reader: any = new FileReader();
    if (reader) {
      reader.onloadend = function () {
        if (reader.result) {
          setImgUrl(reader.result)
        }
        console.log('RESULT', reader.result)
      }
    }
    reader.readAsDataURL(file);
  }


  const techsFakeData = [
    "React JS",
    "React Native",
    "Node JS",
    "Git",
    "GitHub",
    "Docker",
    "Spring",
    "Java",
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
  ];

  const handleSelectTechs = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTechs(event.target.value as string[]);
  };

  const handleSelectSofts = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSofts(event.target.value as string[]);
  };

  const handleDataSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const techsSkills = techs.toString();
    const softSkills = softs.toString();
    const imgUrlBase = imgUrl.toString();
    const newDataUser = {
      techsSkills, softSkills, bio, imgUrlBase
    }
    try {
      dispatch(updateProfile(loggedUser.id, newDataUser));

      setBio("")
    } catch (error) {
      Message("Ocorreu um erro")
    }
    console.log(bio);
  }
  const changeBio = (bio: string) => {
    setBio(bio);
  }

  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await dispatch(logout())
      props.history.push("/login");
      window.location.reload();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="Dashboard" >

        <Children>
          <Link to="/create-project">
            <Button variant="text" style={{ color: "white" }} >
              Criar projeto
          </Button>
          </Link>
          <Link to="/user-projects">
            <Button variant="text" style={{ color: "white" }} >
              Seus projetos
            </Button>
          </Link>
          <Button variant="text" style={{ color: "white" }} onClick={() => {
            handleLogout();
          }}>
            Log Out
          </Button>
        </Children>
      </Navbar>
      <Container>
        <ImageBackground src={imgBackground} />
        <Content onSubmit={handleDataSubmit}>
          <Header>

            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
              name="imgUrl"
              onChange={getBase64Img}
            />
            <label htmlFor="icon-button-file">
              {imgUrl ?
                (<Avatar src={imgUrl} alt="profile-img" />)
                : <Avatar src={avatarFake} alt="profile-img" />}
            </label>

          </Header>
          {loggedUser ? (<UserData>{`${loggedUser.nome}, ${loggedUser.email}`}</UserData>) : (<UserData>
            nome_Usuario, email_Usuario
          </UserData>)}
          <div className="align ">
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
          <InputDefault style={{ width: "80%", height: "80px" }} name="bio" placeholder="Bio" newValue={changeBio} />
          {message ? Message(message) : ""}
          <ButtonSave className="button">Salvar Dados</ButtonSave>
        </Content>
      </Container>

    </>
  );
};

export default Profile;