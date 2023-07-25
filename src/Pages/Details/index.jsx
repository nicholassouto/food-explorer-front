import { Container, DishesImg } from "./styles";

import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";

import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import receipt from "../../assets/receipt.svg";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Ingredients } from "../../Components/Ingredients";
import { Button } from "../../Components/Button";

export function Details() {
  const navigate = useNavigate();

  function HandleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header className="header" />
      <main>
        <section onClick={HandleBack}>
          <ReactSVG src={arrowLeft} alt="seta para esquerda" />
          <p>voltar</p>
        </section>
        <div>
          <div className="food-picture">
            <DishesImg />
          </div>
        </div>
        <div className="food-info">
          <h3>Salada Ravanello</h3>
          <p className="dish-description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
          <div className="ingredients">
            <Ingredients />
            <Ingredients />
            <Ingredients />
            <Ingredients />
            <Ingredients />
            <Ingredients />
          </div>
          <div className="pricing-include">
            <ReactSVG src={minus} alt="botão de menos" />
            <p>00</p>
            <ReactSVG src={plus} alt="botao de mais" />
            <Button className="button">
              <ReactSVG src={receipt} alt="icone de recibo" />
              <p>
                incluir ∙ R$ <span>25,00</span>
              </p>
            </Button>
          </div>
        </div>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
