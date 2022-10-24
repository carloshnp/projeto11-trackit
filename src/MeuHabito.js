import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { useUserContext } from "./Usuario";
import { ButtonContainer, DayButton } from "./NovoHabito";
import axios from "axios";

export default function MeuHabito(habit) {
  const { user } = useUserContext();
  const { days, id, name } = habit;
  const weekdaynumber = [0, 1, 2, 3, 4, 5, 6];

  function weekdayRender(weekdayNum) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const isSelected = days.includes(weekdayNum);
    return (
      <DayButton isSelected={isSelected}>{weekdays[weekdayNum]}</DayButton>
    );
  }

  function deletarHabito(idHabito) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`;
    const request = axios.delete(URL, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
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
      <h1>{name}</h1>
      <ButtonContainer>{weekdaynumber.map(weekdayRender)}</ButtonContainer>
      <TrashIcon onClick={() => deletarHabito(id)}>
        <IconContext.Provider value={{ color: "#666666", size: "14px" }}>
          <BsTrash />
        </IconContext.Provider>
      </TrashIcon>
    </Container>
  );
}

const Container = styled.div`
  width: 340px;
  height: 91px;
  margin-top: 10px;
  padding: 14px;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;

  h1 {
    color: #666666;
    margin-bottom: 8px;
    font-size: 20px;
  }
`;

const TrashIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
