import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "./Usuario";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function FooterBar() {
  const { todayProgress } = useUserContext();
  const navigate = useNavigate();

  return (
    <Container>
      <div onClick={() => navigate("/habitos")}>Hábitos</div>
      <div className="center"></div>
      <div className="todayProgressBar" onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={todayProgress}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>
      <div onClick={() => navigate("/historico")}>Histórico</div>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 110px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: fixed;
  z-index: 2;
  background-color: aquamarine;
  font-family: "Lexend Deca", sans-serif;
  
  div {
    height: 70px;
    width: calc(50% - (91px / 2));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #52b6ff;
    background-color: #ffffff;
  }

  .center {
    height: 70px;
    width: 91px;
    background-color: #ffffff;
  }

  .todayProgressBar {
    height: 91px;
    width: 91px;
    margin-bottom: 10px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: calc(50% - (91px / 2));
    z-index: 3;
    border-radius: 50%;
    color: #ffffff;
    background-color: #52b6ff;
  }
`;
