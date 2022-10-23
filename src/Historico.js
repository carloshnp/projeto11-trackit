import axios from "axios"
import styled from "styled-components"
import FooterBar from "./FooterBar"

export default function Historico() {
    return (
        <Container>
            <TopBar />
            Histórico
            <FooterBar />
        </Container>
    )
};

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const TopBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
        width: 97px
    }
`