import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { AwaitPayment } from "../../Components/AwaitPayment";

export function PaymentFinish() {
  return (
    <Container>
      <Header className="header" />
      <main>
        <h1>Pagamento</h1>
        <section>
          <AwaitPayment />
        </section>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
