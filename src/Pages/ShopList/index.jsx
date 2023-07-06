import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ShopDishes } from "../../Components/ShopDishes";
import { Button } from "../../Components/Button";
import { PaymentOptions } from "../../Components/PaymentOptions";

export function ShopList() {
  const navigate = useNavigate();

  function handlePayment() {
    navigate("/Payment");
  }

  return (
    <Container>
      <Header className="header" />
      <main>
        <div>
          <h1>Meus Pedidos</h1>
          <section>
            <ShopDishes />
            <ShopDishes />
            <ShopDishes />
          </section>
          <h3>
            Total: R$ <span>103,88</span>
          </h3>
          <Button onClick={handlePayment} className="button">
            Avançar
          </Button>
        </div>
        <div className="payment">
          <h1>Pagamento</h1>
          <PaymentOptions />
        </div>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
