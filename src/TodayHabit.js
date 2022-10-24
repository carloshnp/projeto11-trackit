import { useUserContext } from "./Usuario";
import { IconContext } from "react-icons";
import { BsFillCheckSquareFill } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TodayHabit(habit) {
  const { user, refresh, setRefresh } = useUserContext();
  const { name, done, id, currentSequence, highestSequence } = habit;
  const [isHighest, setIsHighest] = useState(highestSequence);
  useEffect(() => {
    if (isHighest !== currentSequence) {
      setIsHighest(currentSequence);
      setRefresh(!refresh);
    }
  });

  function checkHabit(habitId, isDone) {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

    const check = "/check/";
    const uncheck = "/uncheck/";

    if (isDone) {
      axios
        .post(URL + habitId + uncheck, habitId, {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((ans) => console.log(ans.data))
        .catch((err) => console.log(err.response.data));
      setRefresh(!refresh);
    } else {
      axios
        .post(URL + habitId + check, habitId, {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((ans) => console.log(ans.data))
        .catch((err) => console.log(err.response.data));
      setRefresh(!refresh);
    }
  }

  return (
    <Container key={id} done={done} isHighest={isHighest}>
      <h1>{name}</h1>
      <p>
        Sequência atual: <span className="current">{currentSequence} dias</span>
      </p>
      <p>
        Seu recorde: <span className="highest">{highestSequence} dias</span>
      </p>
      <IconContainer onClick={() => checkHabit(id, done)}>
        <IconContext.Provider
          value={{
            color: done ? "#8FC549" : "#E7E7E7",
            size: "70px",
          }}
        >
          <BsFillCheckSquareFill />
        </IconContext.Provider>
      </IconContainer>
    </Container>
  );
}

const Container = styled.li`
  width: 340px;
  height: 94px;
  margin-bottom: 10px;
  padding: 13px 13px 0;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;

  h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    color: #666666;
  }

  .current {
    color: ${(props) => (props.done ? "#8FC549" : "#666666")};
  }

  .highest {
    color: ${(props) =>
      props.done && props.isHighest ? "#8FC549" : "#666666"};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
`;
