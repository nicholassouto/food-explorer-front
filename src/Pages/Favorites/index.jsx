import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FavDishes } from "../../Components/FavDishes";

export function Favorites() {
  return (
    <Container>
      <Header className="header" />
      <main>
        <h1>Meus Favoritos</h1>
        <section>
          <FavDishes />
        </section>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
