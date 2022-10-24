import axios from "axios";
import styled from "styled-components";
import TopBar from "./TopBar";
import NovoHabito from "./NovoHabito";
import FooterBar from "./FooterBar";
import { useEffect, useState } from "react";
import { useUserContext } from "./Usuario";
import MeuHabito from "./MeuHabito";

export default function Habitos() {
  const { user } = useUserContext();
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
  }, []);

  return (
    <Container>
      <TopBar />
      <AdicionarHabito>
        <p>Meus hábitos</p>
        <button onClick={() => setCreateHabit(true)}>+</button>
      </AdicionarHabito>
      {createHabit && <NovoHabito setCreateHabit={setCreateHabit} />}
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
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
`;

const AdicionarHabito = styled.div`
  margin: 22px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 40px;
    height: 35px;
    border-radius: 5px;
  }
`;
