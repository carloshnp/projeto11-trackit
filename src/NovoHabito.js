import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "./Usuario";

export default function NovoHabito(props) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const weekdaynumber = [0, 1, 2, 3, 4, 5, 6];
  const { user, refresh, setRefresh } = useUserContext();
  const [selectedDays, setSelectedDays] = useState([]);
  const [habit, setHabit] = useState("");
  const { setCreateHabit } = props;

  function salvarHabito() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const body = {
      name: habit,
      days: selectedDays,
    };
    const request = axios.post(URL, body, {
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

  function weekdayRender(weekdayNum) {
    const isSelected = selectedDays.includes(weekdayNum);
    return (
      <DayButton onClick={() => selectDay(weekdayNum)} isSelected={isSelected}>
        {weekdays[weekdayNum]}
      </DayButton>
    );
  }

  function selectDay(weekdaynumber) {
    if (selectedDays.includes(weekdaynumber)) {
      const index = selectedDays.indexOf(weekdaynumber);
      const arr = [...selectedDays];
      arr.splice(index, 1);
      setSelectedDays(arr);
    } else {
      const arr = [...selectedDays, weekdaynumber];
      setSelectedDays(arr);
    }
  }

  return (
    <Container>
      <input
        placeholder="nome do hábito"
        onChange={(e) => setHabit(e.target.value)}
      ></input>
      <ButtonContainer>{weekdaynumber.map(weekdayRender)}</ButtonContainer>
      <SubmitContainer>
        <SubmitButton
          color={"#52B6FF"}
          bgColor={"#ffffff"}
          onClick={() => {
            setCreateHabit(false);
          }}
        >
          Cancelar
        </SubmitButton>
        <SubmitButton
          color={"#ffffff"}
          bgColor={"#52B6FF"}
          onClick={() => {
            salvarHabito();
            setCreateHabit(false);
          }}
        >
          Salvar
        </SubmitButton>
      </SubmitContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 180px;
  margin: 0px 18px 28px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;

  input {
    width: 303px;
    height: 45px;
    margin: 18px 0 0 15px;
    padding-left: 11px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    color: #666666;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 5px 0 0 15px;
`;

const DayButton = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#CFCFCF")};
  background-color: ${(props) => (!props.isSelected ? "#ffffff" : "#CFCFCF")};
`;

const SubmitContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 16px;
`;

const SubmitButton = styled.button`
  width: 84px;
  height: 35px;
  margin-left: 4px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

export { DayButton, ButtonContainer };
