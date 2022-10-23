import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro";
import GlobalStyle from "./GlobalStyle";
import Habitos from "./Habitos";
import Historico from "./Historico";
import Hoje from "./Hoje";
import Login from "./Login";
import { UserContextProvider } from "./Usuario";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
