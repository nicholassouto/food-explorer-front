import { Container } from "./styles";
import { ReactSVG } from "react-svg";

import { useNavigate } from "react-router-dom";

import close from "../../assets/close.svg";
import magnifier from "../../assets/magnifier.svg";

import { Button } from "../../Components/Button";
import { Search } from "../../Components/Search";
import { Footer } from "../../Components/Footer";
import { Dishes } from "../../Components/Dishes";

export function Menu() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleFavorites() {
    navigate("/Favorites");
  }

  function handleBought() {
    navigate("/Bought");
  }

  function goToLogin() {
    navigate("/signin");
  }

  return (
    <Container>
      <main>
        <Button className="close-menu">
          <ReactSVG onClick={handleBack} src={close} alt="botao em x" />
          <h2>Menu</h2>
        </Button>
        <Search className="search-bar">
          <ReactSVG src={magnifier} />
          <input placeholder="Busque por pratos ou ingredientes" />
        </Search>
        <Dishes />
        <h1>
          <h2 onClick={handleFavorites}>Meus Favoritos</h2>
        </h1>
        <h1>
          <h2 onClick={handleBought}>Historico de Pedidos</h2>
        </h1>
        <h1>
          <h2 onClick={goToLogin}>Sair</h2>
        </h1>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
