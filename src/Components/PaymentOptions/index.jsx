import { Container } from "./styles";

import { useState } from "react";

import { ReactSVG } from "react-svg";

import { Button } from "../../Components/Button";
import { QRCode } from "./QRCode";
import { CreditCard } from "./CreditCard";

import pix from "../../assets/pix.svg";
import creditCard from "../../assets/creditCard.svg";

export function PaymentOptions() {

  const [selectedButton, setSelectedButton] = useState("creditCard");

  const handleButtonClick = (button) => {
    if (selectedButton === button) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }
  };

  return (
    <Container>
      <div className="payment-options">
        <div>
          <Button
            onClick={() => handleButtonClick("pix")}
            className={`buy-button ${selectedButton === "pix" ? "change-color" : ""}`}
            disabled={selectedButton === "pix"}
          >
            <ReactSVG src={pix} alt="Icone de pix" />
            Pix
          </Button>
          <Button
            onClick={() => handleButtonClick("creditCard")}
            className={`buy-button ${selectedButton === "creditCard" ? "change-color" : ""}`}
            disabled={selectedButton === "creditCard"}
          >
            <ReactSVG src={creditCard} alt="Icone de cartao de credito" />
            Credito
          </Button>
        </div>
        <div>
          {selectedButton === "pix" ? <QRCode /> : null}
          {selectedButton === "creditCard" ? <CreditCard/> : null}
        </div>
      </div>
    </Container>
  );
}
