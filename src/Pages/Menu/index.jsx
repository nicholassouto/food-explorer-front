import { Container, DishesShow, Hero } from "./styles";
import { ReactSVG } from "react-svg";
import { useAuth } from "../../hooks/auth";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import close from "../../assets/close.svg";
import magnifier from "../../assets/magnifier.svg";

import { Button } from "../../Components/Button";
import { Search } from "../../Components/Search";
import { Footer } from "../../Components/Footer";
import { Dishes } from "../../Components/Dishes";

export function Menu() {
  const [search, setSearch] = useState("");
  const [dishesRefeicao, setDishesRefeicao] = useState([]);
  const [dishesSobremesa, setDishesSobremesa] = useState([]);
  const [dishesBebidas, setDishesBebidas] = useState([]);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function goHome() {
    navigate("/");
    signOut();
  }

  function handleFavorites() {
    navigate("/Favorites");
  }

  function handleBought() {
    navigate("/Bought");
  }

  function handleSearchChange(event) {
    const searchValue = event.target.value;
    setSearch(searchValue);
  }

  useEffect(() => {
    async function fetchDishes() {
      const responseRefeicao = await api.get(`/dishes?category=Refeicao${search ? `&search=${search}` : ""}`);
      const responseSobremesa = await api.get(`/dishes?category=Sobremesa${search ? `&search=${search}` : ""}`);
      const responseBebidas = await api.get(`/dishes?category=Bebidas${search ? `&search=${search}` : ""}`);
      setDishesRefeicao(responseRefeicao.data);
      setDishesSobremesa(responseSobremesa.data);
      setDishesBebidas(responseBebidas.data);
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <main>
        <Button className="close-menu">
          <ReactSVG onClick={handleBack} src={close} alt="botao em x" />
          <h2>Menu</h2>
        </Button>
        <Search className="search-bar">
          <ReactSVG src={magnifier} />
          <input placeholder="Busque por pratos ou ingredientes" onChange={handleSearchChange} />
        </Search>

        <Hero>
          <DishesShow>
            {dishesRefeicao.map((dishe) => (
              <Dishes key={String(dishe.id)} data={dishe} />
            ))}

            {dishesSobremesa.map((dishe) => (
              <Dishes key={String(dishe.id)} data={dishe} />
            ))}

            {dishesBebidas.map((dishe) => (
              <Dishes key={String(dishe.id)} data={dishe} />
            ))}
          </DishesShow>
        </Hero>

        <section>
          <h2 onClick={handleFavorites}>Meus Favoritos</h2>
        </section>
        <section>
          <h2 onClick={handleBought}>Historico de Pedidos</h2>
        </section>
        <section>
          <h2 onClick={goHome}>Sair</h2>
        </section>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
