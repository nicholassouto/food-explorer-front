import { Container, Dados } from "./styles";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import polygon from "../../assets/polygon.svg";
import { Button } from "../../Components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const admin = false;
  const navigate = useNavigate();

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.{^\a@]+$/;
    return emailRegex.test(email);
  }

  function handleSignUp() {
    const trimmedPassword = password.trim();

    if (!name.trim() || !isValidEmail(email) || trimmedPassword.length < 6) {
      return alert("Preencha todos os campos corretamente, a senha deve ter 6 ou mais caracteres");
    }

    api
      .post("/users", { name, email, password, admin })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel realizar esta operação");
        }
      });
  }

  function goToSignIn() {
    navigate("/");
  }

  return (
    <Container>
      <div>
        <ReactSVG src={polygon} alt="poligono azul" />
        <h2>food explorer</h2>
      </div>
      <section>
        <h1>Crie sua conta</h1>
        <Dados>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </Dados>
        <Dados>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setemail(e.target.value)}
          />
        </Dados>
        <Dados>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
            minLength={6}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Dados>
        <Button className="create" onClick={handleSignUp}>
          <p>Criar conta</p>
        </Button>
        <Button className="login">
          <p onClick={goToSignIn}>Ja tenho uma conta</p>
        </Button>
      </section>
    </Container>
  );
}
