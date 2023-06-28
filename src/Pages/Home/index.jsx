import { Container } from "./styles";
import { ReactSVG } from "react-svg";



import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export function Home() {
  return (
    <Container>
      <Header className="header" />
      <main className="content">
        <div className="slogan">
          <div>
          </div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
        <Footer className="footer" />
      </main>
    </Container>
  );
}
