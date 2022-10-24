import axios from "axios";
import styled from "styled-components";
import TopBar from "./TopBar";
import NovoHabito from "./NovoHabito";
import FooterBar from "./FooterBar";
import { useEffect, useState } from "react";
import { useUserContext } from "./Usuario";
import MeuHabito from "./MeuHabito";

export default function Habitos() {
  const { user, refresh } = useUserContext();
  const [userHabits, setUserHabits] = useState([]);
  const [createHabit, setCreateHabit] = useState(false);
  console.log(userHabits);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const request = axios.get(URL, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    request
      .then((ans) => {
        setUserHabits(ans.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [refresh]);

  return (
    <Container>
      <TopBar />
      <AdicionarHabito>
        <h1>Meus hábitos</h1>
        <button onClick={() => setCreateHabit(true)}>+</button>
      </AdicionarHabito>
      {createHabit && <NovoHabito setCreateHabit={setCreateHabit} />}
      {userHabits.length === 0 && (
      <h2>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </h2>)}
      {userHabits.map(MeuHabito)}
      <FooterBar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  font-family: "Lexend Deca", sans-serif;

  h1 {
    color: #126BA5;
    font-size: 22px;
  }

  h2 {
    margin-left: 17px;
    color: #666666;
    font-size: 18px;
  }
`;

const AdicionarHabito = styled.div`
  margin: 22px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 40px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #52B6FF;
    font-size: 28px;
    border: none;
    border-radius: 5px;
  }
`;
