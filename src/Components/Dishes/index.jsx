import { Container } from "./styles";

import { useState } from "react";

import { ReactSVG } from "react-svg";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import heart from "../../assets/heart.svg";
import ravanelo from "../../assets/Dishes/ravanello.svg";

import { Button } from "../Button";

export function Dishes({ data, ...rest }) {
  return (
    <Container {...rest}>
      <section>
        <ReactSVG src={ravanelo} />
      </section>
      <ReactSVG className="heart-icon" src={heart} alt="icone de coração com o interior vazio" />
      <h3>Salada Ravanello</h3>
      <p className="dish-description">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
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
    </Container>
  );
}
