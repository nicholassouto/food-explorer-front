import { Container, Hero, DishesShow } from "./styles";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Foods } from "../../Components/Foods";
import { Dishes } from "../../Components/Dishes";

export function Home() {
  const [search, setSearch] = useState("");
  const [dishesRefeicao, setDishesRefeicao] = useState([]);
  const [dishesSobremesa, setDishesSobremesa] = useState([]);
  const [dishesBebidas, setDishesBebidas] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const responseRefeicao = await api.get(`/dishes?category=refeicao${search ? `&search=${search}` : ""}`);
      const responseSobremesa = await api.get(`/dishes?category=sobremesa${search ? `&search=${search}` : ""}`);
      const responseBebidas = await api.get(`/dishes?category=bebidas${search ? `&search=${search}` : ""}`);
      setDishesRefeicao(responseRefeicao.data);
      setDishesSobremesa(responseSobremesa.data);
      setDishesBebidas(responseBebidas.data);
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header className="header" setSearch={setSearch} />
      <main>
        <div>
          <Foods />
          <div className="slogan">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        <Hero>
          <h2>Refeições</h2>
          <DishesShow>
            {dishesRefeicao.map((dishe) => (
              <Dishes key={String(dishe.id)} data={dishe} />
            ))}
          </DishesShow>

          <h2>Sobremesas</h2>
          <DishesShow>
            {dishesSobremesa.map((dishe) => (
              <Dishes key={String(dishe.id)} data={dishe} />
            ))}
          </DishesShow>

          <h2>Bebidas</h2>
          <DishesShow>
            {dishesBebidas.map((dishe) => (
              <Dishes key={String(dishe.id)} data={dishe} />
            ))}
          </DishesShow>
        </Hero>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
