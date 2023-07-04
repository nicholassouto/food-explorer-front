import { Container, Dados } from "./styles";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import polygon from "../../assets/polygon.svg";
import { Button } from "../../Components/Button";

export function SignIn() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
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
          <input type="email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </Dados>
        <Dados>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="No mínimo 6 caracteres" minLength={6} />
        </Dados>
        <Button onClick={goToHome} className="login">
          <p>Entrar</p>
        </Button>
        <Button onClick={handleSignUp} className="create">
          <p>Criar uma conta</p>
        </Button>
      </section>
    </Container>
  );
}
