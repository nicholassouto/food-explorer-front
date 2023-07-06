import { Container } from "./styles";

import { ReactSVG } from "react-svg";
import qrCode from "../../../assets/qrCode.svg";

export function QRCode() {
  return (
    <Container>
      <ReactSVG src={qrCode} alt="imagem de QR code" />
    </Container>
  );
}
