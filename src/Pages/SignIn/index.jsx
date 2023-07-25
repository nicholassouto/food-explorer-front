import { Container, Dados } from "./styles";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import polygon from "../../assets/polygon.svg";
import { Button } from "../../Components/Button";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
  }

  function handleSignUp() {
    navigate("/SignUp");
  }

  return (
    <Container>
      <div>
        <ReactSVG src={polygon} alt="poligono azul" />
        <h2>food explorer</h2>
      </div>
      <section>
        <h1>Faça login</h1>
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
        <Button onClick={handleSignIn} className="login">
          <p>Entrar</p>
        </Button>
        <Button onClick={handleSignUp} className="create">
          <p>Criar uma conta</p>
        </Button>
      </section>
    </Container>
  );
}
