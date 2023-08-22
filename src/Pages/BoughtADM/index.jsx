import { Container, Table } from "./styles";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { HeaderADM } from "../../Components/HeaderADM";
import { Footer } from "../../Components/Footer";
import { BoughtDishesADM } from "../../Components/BoughtDishesADM";

export function BoughtADM() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/boughtADM");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    }

    fetchOrders();
  }, [data]);
  return (
    <Container>
      <HeaderADM />
      <main>
        <h1>Histórico de Pedidos</h1>
        <Table>
          <section>
            <p>Status</p>
          </section>
          <section>
            <p>Usuário</p>
          </section>
          <section>
            <p>Detalhamento</p>
          </section>
          <section>
            <p>Data e Hora</p>
          </section>
        </Table>
        <section>
          {data && data.map((order) => <BoughtDishesADM key={order.id} order={order}/>)}
        </section>
      </main>
      <Footer />
    </Container>
  );
}
