import { Container, Data, Dishes } from "./styles";
import { ReactSVG } from "react-svg";

import redDot from "../../assets/redDot.svg";
import orangeDot from "../../assets/orangeDot.svg";
import greenDot from "../../assets/greenDot.svg";

export function BoughtDishes({ order, orderNumber }) {
  const getStatusIcon = (status) => {
    if (status === "pendente") {
      return <ReactSVG src={redDot} alt="ponto vermelho" />;
    } else if (status === "processando") {
      return <ReactSVG src={orangeDot} alt="ponto laranja" />;
    } else if (status === "pronto") {
      return <ReactSVG src={greenDot} alt="ponto verde" />;
    }
    return null;
  };
  return (
    <Container>
      <main>
        <Data>
          <p>{String(orderNumber).padStart(6, "0")}</p>
          <div className="status">
            {getStatusIcon(order.status)}
            <span>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
          </div>
          <div>
            <p className="id">{String(orderNumber).padStart(6, "0")}</p>
          </div>
          <div className="dishes">
            <p>{order.items}</p>
          </div>
          <div>
            <p>{new Date(order.created_at).toLocaleString()}</p>
          </div>
        </Data>
        <Dishes>
          <p>{order.items}</p>
        </Dishes>
      </main>
    </Container>
  );
}
