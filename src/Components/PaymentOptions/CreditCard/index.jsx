import { Container, Data } from "./styles";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "../../Button";
import { AwaitCreditCard } from "../../AwaitPayment/AwaitCreditCard";

export function CreditCard() {
  const [showAwaitCreditCard, setShowAwaitCreditCard] = useState(false);
  const navigate = useNavigate();

  function handlePayment() {
    navigate("/PaymentFinish");
  }

  const handleCvcInputChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    e.target.value = e.target.value.slice(0, 4);
  };

  const handleNumberInputChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    e.target.value = e.target.value.slice(0, 16);
  };

  const handleExpirationInputChange = (e) => {
    const { value } = e.target;

    let formattedValue = value.replace(/\D/g, "");

    if (formattedValue.length > 6) {
      formattedValue = formattedValue.slice(0, 6);
    }

    if (formattedValue.length > 2) {
      const month = formattedValue.slice(0, 2);
      const year = formattedValue.slice(2);

      if (Number(month) < 1 || Number(month) > 12) {
        e.target.value = "";
      } else {
        formattedValue = `${month}/${year}`;
        e.target.value = formattedValue;
      }
    }

    return formattedValue;
  };

  const handlePaymentButtonDeskClick = () => {
    setShowAwaitCreditCard(true);
  };

  return (
    <Container>
      <main>
        {showAwaitCreditCard ? (
          <AwaitCreditCard />
        ) : (
          <>
            <Data>
              <div className="card-number">
                <label htmlFor="number">Número do Cartão</label>
                <input
                  minLength={16}
                  onInput={handleNumberInputChange}
                  type="text"
                  id="number"
                  placeholder="0000000000000000"
                  required
                />
              </div>
            </Data>
            <Data>
              <div className="expiration-date">
                <label htmlFor="expiration">Validade</label>
                <input type="text" id="expiration" onInput={handleExpirationInputChange} placeholder="04/25" required />
              </div>
              <div className="card-code">
                <label htmlFor="cvc">CVC</label>
                <input onInput={handleCvcInputChange} minLength={3} type="text" id="cvc" placeholder="000" required />
              </div>
            </Data>
            <Button onClick={handlePayment} className="payment-button">
              Finalizar Pagamento
            </Button>
            <Button onClick={handlePaymentButtonDeskClick} className="payment-button-desk">
              Finalizar Pagamento
            </Button>
          </>
        )}
      </main>
    </Container>
  );
}
