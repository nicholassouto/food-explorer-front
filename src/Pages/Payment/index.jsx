import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { PaymentOptions } from "../../Components/PaymentOptions";

export function Payment() {
  return (
    <Container>
      <Header className="header" />
      <main>
        <h1>Pagamento</h1>
        <section>
          <PaymentOptions />
        </section>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
