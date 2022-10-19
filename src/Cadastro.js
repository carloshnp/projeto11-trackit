import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Cadastro() {
    return (
        <Container>
            <Logo alt="logo" />
            <Form>
                Formulário
            </Form>
            <Link to={`/`}>
                Login
            </Link>
        </Container>
    )
};

const Container = styled.div`
`

const Logo = styled.img`
`

const Form = styled.form`
`