import { Container, Table } from "./styles";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { BoughtDishes } from "../../Components/BoughtDishes";

export function Bought() {
  const [data, setData] = useState([]);
  let orderIndicator = 1;

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/bought");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    }

    fetchOrders();
  }, []);
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
          {data && data.map((order) => <BoughtDishes key={order.id} order={order} orderNumber={orderIndicator++} />)}
        </section>
      </main>
      <Footer />
    </Container>
  );
}
