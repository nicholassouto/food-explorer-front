import { Container, Table } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { BoughtDishes } from "../../Components/BoughtDishes";

export function Bought() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Histórico de Pedidos</h1>
        <Table>
          <section>
            <p>Status</p>
          </section>
          <section>
            <p>Código</p>
          </section>
          <section>
            <p>Detalhamento</p>
          </section>
          <section>
            <p>Data e Hora</p>
          </section>
        </Table>
        <section>
          <BoughtDishes />
          <BoughtDishes />
          <BoughtDishes />
          <BoughtDishes />
          <BoughtDishes />
          <BoughtDishes />
        </section>
      </main>
      <Footer />
    </Container>
  );
}
