import { Container, Data, Dishes } from "./styles";
import { ReactSVG } from "react-svg";

import redDot from "../../assets/redDot.svg";
import orangeDot from "../../assets/orangeDot.svg";
import greenDot from "../../assets/greenDot.svg";

export function BoughtDishes({ data, ...rest }) {
  return (
    <Container {...rest}>
      
      <main>
        <Data>
          <p>000001</p>
          <div>
            <p className="dishes-id">000001 </p>
            <ReactSVG src={redDot} alt="ponto vermelho" />
            <span>Pendente</span>
          </div>
          <div className="dishes-id">
            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
          </div>
          <div>
            <p>20/05 às 18h00</p>
          </div>
        </Data>
        <Dishes>
          <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
        </Dishes>
      </main>
    </Container>
  );
}