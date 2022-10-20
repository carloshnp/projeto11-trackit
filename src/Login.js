import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./img/Logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const body = {
      email: email,
      password: password,
    };

    const request = axios.post(URL, body);

    request
      .then((ans) => {
        navigate("/habitos");
        console.log(ans.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form onSubmit={login}>
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
        <button>Entrar</button>
      </Form>
      <Link to={`/cadastro`}>Não tem uma conta? Cadastre-se!</Link>
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
