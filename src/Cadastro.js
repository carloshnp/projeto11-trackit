import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./img/Logo.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function cadastro(e) {
    e.preventDefault();

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = {
      email: email,
      name: name,
      image: image,
      password: password,
    };

    const request = axios.post(URL, body);

    request
      .then((ans) => {
        navigate("/");
        console.log(ans.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      });
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form onSubmit={cadastro}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nome"
          required
        />
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="foto"
        />
        <button>Cadastrar</button>
      </Form>
      <Link to={`/`}>Já tem uma conta? Faça login!</Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;
  margin-top: 68px;
  margin-bottom: 32px;
`;

const Form = styled.form`
  width: 303px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  button {
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    background: #52b6ff;
    border: 0px;
    border-radius: 5px;
  }
`;
