import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FavDishes } from "../../Components/FavDishes";

export function Favorites() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Meus Favoritos</h1>
        <section>
          <FavDishes />
          <FavDishes />
          <FavDishes />
          <FavDishes />
          <FavDishes />
          <FavDishes />
          <FavDishes />
        </section>
      </main>
      <Footer />
    </Container>
  );
}
