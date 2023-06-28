import { Container, Title } from "./styles";
import { ReactSVG } from "react-svg";
import menu from "../../assets/menu.svg";
import polygon from "../../assets/polygon.svg";
import receipt from "../../assets/receipt.svg";
import magnifier from "../../assets/magnifier.svg";
import signOut from "../../assets/signOut.svg";
import { Button } from "../Button";
import { Search } from "../Search";

export function Header() {
  return (
    <Container>
      <div>
        <ReactSVG src={menu} alt="imagem com 3 linhas, uma sobre a outra" />
      </div>
      <Title>
        <ReactSVG src={polygon} alt="poligono azul" />
        <h2>food explorer</h2>
      </Title>
      <Search className="search-bar">
        <ReactSVG src={magnifier} />
        <input placeholder="Busque por pratos ou ingredientes" />
      </Search>
      <div className="receipt">
        <ReactSVG src={receipt} alt="icone de recibo" />
        <span>0</span>
      </div>
      <Button className="orders">
        <ReactSVG src={receipt} alt="ico de recibo" />
        <p>Pedidos</p>
        <p>
          (<span>0</span>)
        </p>
      </Button>
      <div>
        <ReactSVG src={signOut} alt="icone de saida" />
      </div>
    </Container>
  );
}
