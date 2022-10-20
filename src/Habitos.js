import axios from "axios"
import styled from "styled-components"
import logo from './img/TrackIt.png'

export default function Habitos() {
    return (
        <Container>
            <TopBar>
                <img src={logo} alt={"TrackIt"} />
            </TopBar>
            Habitos
            <FooterBar>
                <button>Habitos</button>
                <button>Hoje</button>
                <button>Histórico</button>
            </FooterBar>
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

const FooterBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    background-color: #FFFFFF;
`