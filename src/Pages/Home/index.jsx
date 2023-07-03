import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Foods } from "../../Components/Foods";
import { Dishes } from "../../Components/Dishes";

export function Home() {
  return (
    <Container>
      <Header className="header" />
      <main>
        <div>
          <Foods />
          <div className="slogan">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        <hero>
          <h2>Refeições</h2>
          <div className="dishes">
            <section>
              <Dishes />
            </section>
            <section>
              <Dishes />
            </section>
          </div>
          <h2>Sobremesas</h2>
          <div className="dishes">
            <section>
              <Dishes />
            </section>
            <section>
              <Dishes />
            </section>
          </div>
          <h2>Bebidas</h2>
          <div className="dishes">
            <section>
              <Dishes />
            </section>
            <section>
              <Dishes />
            </section>
          </div>
        </hero>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
