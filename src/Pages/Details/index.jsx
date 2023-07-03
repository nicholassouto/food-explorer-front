import { Container } from "../Menu/styles";

import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";

import ravanelo from "../../assets/Dishes/ravanello.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import arrowLeft from "../../assets/arrowLeft.svg";

import { Button } from "../../Components/Button";
import { Ingredients } from "../../Components/Ingredients";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export function Details() {
  const navigate = useNavigate();

  function HandleBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header className="header" />
      <main>
        <div>
          <ReactSVG src={arrowLeft} alt="seta para esquerda" onClick={HandleBack} />
          <p>voltar</p>
        </div>
        <section>
          <ReactSVG src={ravanelo} />
        </section>
        <h3>Salada Ravanello</h3>
        <p className="dish-description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
        <Ingredients />
        <p className="pricing">
          R$
          <span>49,97</span>
        </p>
        <div className="pricing-include">
          <div>
            <ReactSVG src={minus} alt="botão de menos" />
            <p>00</p>
            <ReactSVG src={plus} alt="botao de mais" />
          </div>
          <div>
            <Button className="button">Incluir</Button>
          </div>
        </div>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
