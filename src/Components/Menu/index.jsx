import { Container } from "./styles";
import { ReactSVG } from "react-svg";
import close from "../../assets/close.svg";
import magnifier from "../../assets/magnifier.svg";

import { Button } from "../Button";
import { Search } from "../Search";
import { Footer } from "../Footer";

export function Menu() {
  return (
    <Container>
      <Button className="close-menu">
        <ReactSVG src={close} alt="botao em x" />
        <h2>Menu</h2>
      </Button>
      <Search className="search-bar">
        <ReactSVG src={magnifier} />
        <input placeholder="Busque por pratos ou ingredientes" />
      </Search>
      <span>pratos a adcionar no futuro</span>
      <h1>
        <h2>Sair</h2>
      </h1>
      <Footer />
    </Container>
  );
}
