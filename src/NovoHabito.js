import axios from "axios";
import styled from "styled-components";

export default function NovoHabito() {
  function criarHabito() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const body = {
      name: "teste",
      days: [0, 1, 2],
    };
    const request = axios.post(URL, body);

    request
      .then((ans) => {
        console.log(ans.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <input placeholder="nome do hábito"></input>
      <button>d s t q q s s</button>
      <button>Cancelar</button>
      <button onClick={criarHabito}>Salvar</button>
    </Container>
  );
}

const Container = styled.div`
  height: 180px;
  margin: 0px 18px;
  background-color: #ffffff;
`;
