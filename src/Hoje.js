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

  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const upperToday = today[0].toUpperCase() + today.substring(1);

  function Counter(){
    if(todayProgress === 0 || isNaN(todayProgress) ){
      return(
        <p>Nenhum hábito concluído ainda</p>
      )
    } else{
      return(
        <p className="green">{todayProgress}% dos hábitos concluídos</p>
      )
    }
  }

  return (
    <Container>
      <TopBar />
      <TextContainer>
        <h1>{upperToday}</h1>
        <Counter />
      </TextContainer>
      <TodayHabits>
        {todayHabits.map(TodayHabit)}
      </TodayHabits>
      <FooterBar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div``;

const TodayHabits = styled.div``;
