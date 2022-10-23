import axios from "axios";
import styled from "styled-components";
import TopBar from "./TopBar";
import NovoHabito from "./NovoHabito";
import FooterBar from "./FooterBar";

export default function Habitos() {
  return (
    <Container>
      <TopBar />
      <AdicionarHabito>
        <p>Meus hábitos</p>
        <button>+</button>
      </AdicionarHabito>
      <NovoHabito />
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
      <FooterBar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;

const AdicionarHabito = styled.div`
  margin: 28px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
