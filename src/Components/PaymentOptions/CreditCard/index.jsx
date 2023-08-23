import { Container, Data } from "./styles";

import { useState } from "react";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { Button } from "../../Button";
import { AwaitCreditCard } from "../../AwaitPayment/AwaitCreditCard";

export function CreditCard() {
  const { updateBuyCount } = useAuth();
  const [showAwaitCreditCard, setShowAwaitCreditCard] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");
  const navigate = useNavigate();

  async function handlePayment() {
    try {
      await api.post("/bought");

      const response = await api.get("/buy");

      for (let i = 0; i < response.data.length; i++) {
        const itemIdToDelete = response.data[i].id;
        await api.delete(`/buy/${itemIdToDelete}`);
      }

      updateBuyCount();

      navigate("/PaymentFinish");
    } catch (error) {
      console.error("Erro ao finalizar o pagamento:", error);
    }
  }

  const handleCvcInputChange = (e) => {
    const formattedValue = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvc(formattedValue);
  };

  const handleNumberInputChange = (e) => {
    const formattedValue = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(formattedValue);
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
        setExpiration("");
      } else {
        formattedValue = `${month}/${year}`;
        setExpiration(formattedValue);
      }
    }

    return formattedValue;
  };

  async function handlePaymentButtonDeskClick() {
    try {
      await api.post("/bought");

      const response = await api.get("/buy");

      for (let i = 0; i < response.data.length; i++) {
        const itemIdToDelete = response.data[i].id;
        await api.delete(`/buy/${itemIdToDelete}`);
      }

      updateBuyCount();

      setShowAwaitCreditCard(true);
    } catch (error) {
      console.error("Erro ao finalizar o pagamento:", error);
    }
  }

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
                  value={cardNumber}
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
                <input
                  value={expiration}
                  type="text"
                  id="expiration"
                  onInput={handleExpirationInputChange}
                  placeholder="04/25"
                  required
                />
              </div>
              <div className="card-code">
                <label htmlFor="cvc">CVC</label>
                <input
                  value={cvc}
                  onInput={handleCvcInputChange}
                  minLength={3}
                  type="text"
                  id="cvc"
                  placeholder="000"
                  required
                />
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
