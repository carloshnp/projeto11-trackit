import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "./img/Logo.png"

export default function Cadastro() {
    return (
        <Container>
            <Logo src={logo} alt="logo" />
            <Form>
                <input placeholder="email" />
                <input placeholder="senha" />
                <input placeholder="nome" />
                <input placeholder="foto" />
                <button>Cadastrar</button>
            </Form>
            <Link to={`/`}>
                Já tem uma conta? Faça login!
            </Link>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Logo = styled.img`
    width: 180px;
`

const Form = styled.form`
    width: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    input {
        margin-bottom: 20px;
    }

    button {
        margin-bottom: 20px;
    }
`