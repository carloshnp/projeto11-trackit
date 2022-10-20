import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./Cadastro"
import GlobalStyle from "./GlobalStyle"
import Habitos from "./Habitos"
import Login from "./Login"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
      </Routes>
    </BrowserRouter>
  )
}
