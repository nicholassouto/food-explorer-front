import { Container, DishesImg } from "./styles";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { ReactSVG } from "react-svg";
import placeholderDishes from "../../assets/dishes.svg";

import pencil from "../../assets/pencil.svg";

export function DishesADM({ data, ...rest }) {
  const dishesImage = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null;

  const navigate = useNavigate();

  function GoDetails(id) {
    navigate(`/DetailsADM/${id}`);
  }

  function HandlePlateEdit(id) {
    navigate(`/EditPlateADM/${id}`);
  }

  const totalPrice = data.price;
  const totalPriceBr = totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  return (
    <Container {...rest}>
      <section className="food-details">
        {dishesImage ? (
          <DishesImg src={dishesImage} onClick={() => GoDetails(data.id)} />
        ) : (
          <ReactSVG src={placeholderDishes} onClick={() => GoDetails(data.id)} />
        )}
      </section>
      <ReactSVG className="heart-icon" src={pencil} alt="icone de lapis" onClick={() => HandlePlateEdit(data.id)} />
      <h3>{data.name}</h3>
      <p className="dish-description">{data.description}</p>
      <p className="pricing">
        R$
        <span>{totalPriceBr}</span>
      </p>
    </Container>
  );
}
