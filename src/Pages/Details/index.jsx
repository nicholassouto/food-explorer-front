import { Container, DishesImg } from "./styles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import receipt from "../../assets/receipt.svg";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Ingredients } from "../../Components/Ingredients";
import { Button } from "../../Components/Button";

export function Details() {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPriceBr, setTotalPriceBr] = useState(0);
  const [dishesImage, setDishesImage] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function HandleBack() {
    navigate(-1);
  }

  function handlePlus() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      setPrice(response.data.price);
      setDishesImage(`${api.defaults.baseURL}/files/${response.data.image}`);
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchPrices() {
      const totalPrice = price * quantity;
      setTotalPriceBr(totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));
    }
    fetchPrices();
  }, [totalPriceBr, quantity, price]);

  return (
    <Container>
      <Header className="header" />
      <main>
        <section onClick={HandleBack}>
          <ReactSVG src={arrowLeft} alt="seta para esquerda" />
          <p>voltar</p>
        </section>
        {data && (
          <div>
            <div>
              <div className="food-picture">
                <DishesImg src={dishesImage} />
              </div>
            </div>
            <div className="food-info">
              <h3>{data.name}</h3>
              <p className="dish-description">{data.description}</p>

              {data.ingredients && (
                <div className="ingredients">
                  {data.ingredients.map((ingredient) => (
                    <Ingredients key={String(ingredient.id)} title={ingredient.tags} />
                  ))}
                </div>
              )}

              <div className="pricing-include">
                <ReactSVG src={minus} onClick={handleMinus} alt="botão de menos" />
                <p>{quantity.toString().padStart(2, "0")}</p>
                <ReactSVG src={plus} onClick={handlePlus} alt="botao de mais" />
                <Button className="button">
                  <ReactSVG src={receipt} alt="icone de recibo" />
                  <p>
                    incluir ∙ R$ <span>{totalPriceBr}</span>
                  </p>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer className="footer" />
    </Container>
  );
}
