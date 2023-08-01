import { Container, DishesImg } from "./styles";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { ReactSVG } from "react-svg";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import heart from "../../assets/heart.svg";
import heartRed from "../../assets/heartRed.svg";

import { Button } from "../Button";

export function Dishes({ data, ...rest }) {
  const dishesImage = `${api.defaults.baseURL}/files/${data.image}`;
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

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

  async function handleBuy() {
    try {
      for (let i = 0; i < quantity; i++) {
        await api.post("/buy", { dishes_id: data.id });
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async function handleFavoriteCheck() {
    try {
      if (isFavorite) {
        setIsFavorite(false);
        await api.delete(`/favorites/${data.id}`);
      } else {
        setIsFavorite(true);
        await api.post("/favorites", { dishes_id: data.id });
      }
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    async function checkIfFavorite() {
      try {
        const response = await api.get(`/favorites`);
        const favoritesIds = response.data.map((favorite) => favorite.id);
        setIsFavorite(favoritesIds.includes(data.id));
      } catch (error) {
        console.error(error);
      }
    }
    checkIfFavorite();
  }, [data.id, isFavorite]);

  const totalPrice = quantity * data.price;
  const totalPriceBr = totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  return (
    <Container {...rest}>
      <section className="food-details">
        <DishesImg src={dishesImage} onClick={() => GoDetails(data.id)} />
      </section>
      <ReactSVG
        className="heart-icon"
        src={isFavorite ? heartRed : heart}
        alt="icone de coração com o interior vazio"
        onClick={() => handleFavoriteCheck()}
      />
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
          <Button onClick={handleBuy} className="button">
            Incluir
          </Button>
        </div>
      </div>
    </Container>
  );
}
