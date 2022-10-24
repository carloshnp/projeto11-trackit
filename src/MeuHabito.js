import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { useUserContext } from "./Usuario";
import { ButtonContainer, DayButton } from "./NovoHabito";
import axios from "axios";

export default function MeuHabito(habit) {
  const { user, refresh, setRefresh } = useUserContext();
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
        setRefresh(!refresh)
        console.log(ans.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <h3>{name}</h3>
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
  height: auto;
  margin: 10px 15px;
  padding: 14px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;

  h3 {
    color: #666666;
    margin-left: 15px;
    margin-bottom: 8px;
    font-size: 20px;
  }
`;

const TrashIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
