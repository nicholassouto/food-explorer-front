import { Container } from "./styles";
import { ReactSVG } from "react-svg";

import gambe from "../../assets/Dishes/gambe.svg";

export function ShopDishes({ data, ...rest }) {
  return (
    <Container {...rest}>
      <ReactSVG src={gambe} alt="imagem de prato de comida" />
      <div>
        <h2>Spaguetti Gambe</h2>
        <p>Remover dos favoritos</p>
      </div>
    </Container>
  );
}
