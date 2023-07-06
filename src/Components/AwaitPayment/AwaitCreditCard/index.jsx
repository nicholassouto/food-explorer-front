import { Container } from "./styles";

import { useState, useEffect } from "react";

import { ReactSVG } from "react-svg";

import clock from "../../../assets/clock.svg";
import checkCircle from "../../../assets/checkCircle.svg";
import forkKnife from "../../../assets/forkKnife.svg";

export function AwaitCreditCard() {
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus("approved");
    }, 3000);

    const timer2 = setTimeout(() => {
      setStatus("delivered");
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Container>
      <main>
        {status === "pending" && (
          <section className="processing-payment">
            <ReactSVG src={clock} alt="icone de relogio" />
            <p>Aguardando pagamento no caixa</p>
          </section>
        )}
        {status === "approved" && (
          <section className="processing-payment">
            <ReactSVG src={checkCircle} alt="icone de circulo com certo no meio" />
            <p>Pagamento aprovado!</p>
          </section>
        )}
        {status === "delivered" && (
          <section className="processing-payment">
            <ReactSVG src={forkKnife} alt="icone de garfo e faca" />
            <p>Pedido entregue!</p>
          </section>
        )}
      </main>
    </Container>
  );
}
