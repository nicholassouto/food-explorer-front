import { Container } from "./styles";

import { useState } from "react";

import { ReactSVG } from "react-svg";

import { Button } from "../../Components/Button";
import { AwaitCreditCard } from "./AwaitCreditCard";

import pix from "../../assets/pix.svg";
import creditCard from "../../assets/creditCard.svg";

export function AwaitPayment() {
  const [selectedButton, setSelectedButton] = useState("creditCard");

  return (
    <Container>
      <div className="payment-options">
        <div>
          <Button
            className={`buy-button ${selectedButton === "pix" ? "change-color" : ""}`}
            disabled={selectedButton === "pix"}
          >
            <ReactSVG src={pix} alt="Icone de pix" />
            Pix
          </Button>
          <Button
            className={`buy-button ${selectedButton === "creditCard" ? "change-color" : ""}`}
            disabled={selectedButton === "creditCard"}
          >
            <ReactSVG src={creditCard} alt="Icone de cartao de credito" />
            Credito
          </Button>
        </div>
        <div>
          <AwaitCreditCard />
        </div>
      </div>
    </Container>
  );
}
