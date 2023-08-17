import { Container } from "./styles";

import { ReactSVG } from "react-svg";
import plus from "../../assets/plus.svg";
import close from "../../assets/close.svg";

export function IngredientsAdd({ isNew, value, onClick, onDelete, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={isNew ? onClick : () => onDelete(value)}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <ReactSVG src={plus} alt="botão de mais" /> : <ReactSVG src={close} alt="botao de fechar" />}
      </button>
    </Container>
  );
}
