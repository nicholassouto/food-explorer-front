import { Container, Data, Dishes } from "./styles";
import { ReactSVG } from "react-svg";

import { useState } from "react";
import { api } from "../../services/api";

import redDot from "../../assets/redDot.svg";
import orangeDot from "../../assets/orangeDot.svg";
import greenDot from "../../assets/greenDot.svg";

export function BoughtDishesADM({ order, orderNumber }) {
  const [selectedStatus, setSelectedStatus] = useState(order.status);

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

  const handleChangeStatus = async (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);

    try {
      const response = await api.put(`/boughtADM/${order.id}/status`, { status: newStatus });
    } catch (error) {
      console.error("Erro ao atualizar status", error);
    }
  };
  return (
    <Container>
      <main>
        <Data>
          <p>{order.user_name}</p>
          <div className="status">
            {getStatusIcon(order.status)}
            <select value={selectedStatus} onChange={handleChangeStatus}>
              <option value="pendente">Pendente</option>
              <option value="processando">Processando</option>
              <option value="pronto">Pronto</option>
            </select>
          </div>
          <div>
            <p className="name">{order.user_name}</p>
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
