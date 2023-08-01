import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ShopDishes } from "../../Components/ShopDishes";
import { Button } from "../../Components/Button";
import { PaymentOptions } from "../../Components/PaymentOptions";

export function ShopList() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  function handlePayment() {
    navigate("/Payment");
  }

  useEffect(() => {
    async function fetchBuy() {
      const response = await api.get(`/buy`);
      setData(response.data);
    }
    fetchBuy();
  }, [data]);

  function calculateTotal(data) {
    if (!data || data.length === 0) {
      return 0;
    }

    const total = data.reduce((acc, item) => acc + item.price, 0);
    return total;
  }

  const totalPrices = calculateTotal(data);
  const totalPricesBr = totalPrices.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return (
    <Container>
      <Header className="header" />
      <main>
        <div>
          <h1>Meus Pedidos</h1>
          {data && (
            <section>
              {data.map((buy) => (
                <ShopDishes key={String(buy.id)} data={buy} />
              ))}
            </section>
          )}
          <h3>
            Total: R$ <span>{totalPricesBr}</span>
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
