import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterBar() {
  return (
    <Container>
      <Link to={`/habitos`}>
        <button>Hábitos</button>
      </Link>
      <Link to={`/hoje`}>
        <button>Hoje</button>
      </Link>
      <Link to={`/historico`}>
        <button>Histórico</button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`
