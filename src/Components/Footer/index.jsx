import { Container, Title } from "./styles";
import { ReactSVG } from "react-svg";
import grayPolygon from "../../assets/grayPolygon.svg";

export function Footer() {
  return (
    <Container>
      <Title>
        <ReactSVG src={grayPolygon} alt="poligono cinza" />
        <h2>food explorer</h2>
      </Title>
      <div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
