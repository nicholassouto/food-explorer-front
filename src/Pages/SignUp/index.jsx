import { Container, Dados } from "./styles";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import polygon from "../../assets/polygon.svg";
import { Button } from "../../Components/Button";

export function SignUp() {
  const navigate = useNavigate();

  function goToSignIn() {
    navigate(-1);
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
          <label htmlFor="name">E-mail</label>
          <input type="text" id="name" placeholder="Exemplo: Maria da Silva" />
        </Dados>
        <Dados>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </Dados>
        <Dados>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="No mínimo 6 caracteres" minLength={6} />
        </Dados>
        <Button className="login">
          <p>Criar conta</p>
        </Button>
        <Button className="create">
          <p onClick={goToSignIn}>Ja tenho uma conta</p>
        </Button>
      </section>
    </Container>
  );
}
