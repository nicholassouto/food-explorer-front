import { Container, DishesImg } from "./styles";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { ReactSVG } from "react-svg";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import heart from "../../assets/heart.svg";

import { Button } from "../Button";

export function Dishes({ data, ...rest }) {
  const dishesImage = `${api.defaults.baseURL}/files/${data.image}`;
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  function GoDetails(id) {
    navigate(`/Details/${id}`);
  }

  function handlePlus() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  const totalPrice = quantity * data.price;
  const totalPriceBr = totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  return (
    <Container {...rest}>
      <section className="food-details">
        <DishesImg src={dishesImage} onClick={() => GoDetails(data.id)} />
      </section>
      <ReactSVG className="heart-icon" src={heart} alt="icone de coração com o interior vazio" />
      <h3>{data.name}</h3>
      <p className="dish-description">{data.description}</p>
      <p className="pricing">
        R$
        <span>{totalPriceBr}</span>
      </p>
      <div className="pricing-include">
        <div>
          <ReactSVG src={minus} onClick={handleMinus} alt="botão de menos" />
          <p>{quantity.toString().padStart(2, "0")}</p>
          <ReactSVG src={plus} onClick={handlePlus} alt="botao de mais" />
        </div>
        <div>
          <Button className="button">Incluir</Button>
        </div>
      </div>
    </Container>
  );
}
