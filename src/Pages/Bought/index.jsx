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
          <p>Status</p>
          <p>Codigo</p>
          <p>Detalhmento</p>
          <p>Data e Hora</p>
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
