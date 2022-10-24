import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from "styled-components";
import TopBar from "./TopBar";
import FooterBar from "./FooterBar";
import { useUserContext } from "./Usuario";
import TodayHabit from "./TodayHabit";

export default function Hoje() {
  const { todayProgress, todayHabits } = useUserContext();
  console.log(todayHabits);

  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const upperToday = today[0].toUpperCase() + today.substring(1);

  function Counter() {
    if (todayProgress === 0 || isNaN(todayProgress)) {
      return <p>Nenhum hábito concluído ainda</p>;
    } else {
      return <p className="green">{todayProgress}% dos hábitos concluídos</p>;
    }
  }

  return (
    <Container>
      <TopBar />
      <TextContainer>
        <h1>{upperToday}</h1>
        <Counter />
      </TextContainer>
      <TodayHabits>{todayHabits.map(TodayHabit)}</TodayHabits>
      <FooterBar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-top: 70px;
  padding: 28px 17px 110px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
  background-color: #f2f2f2;
  font-family: "Lexend Deca", sans-serif;
`;

const TextContainer = styled.div`
  width: 340px;

  h1 {
    color: #126ba5;
    font-size: 23px;
  }

  p {
    color: #bababa;
    font-size: 18px;
    line-height: 22px;
  }

  .green {
    color: #8fc549;
  }
`;

const TodayHabits = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
`;
