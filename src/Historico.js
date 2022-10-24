import axios from "axios";
import styled from "styled-components";
import FooterBar from "./FooterBar";
import TopBar from "./TopBar";
import { Container } from "./Habitos";

export default function Historico() {
  return (
    <Container>
      <TopBar />
      <TextContainer>
        <h1>Histórico</h1>
      </TextContainer>
      <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      <FooterBar />
    </Container>
  );
}

const TextContainer = styled.div`
  margin: 22px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
