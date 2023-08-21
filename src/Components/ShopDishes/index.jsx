import { Container, DishesImg } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { ReactSVG } from "react-svg";
import placeholderDishes from "../../assets/dishes.svg";

import { Button } from "../Button";

export function ShopDishes({ data, ...rest }) {
  const dishesBuyImage = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null;
  const { updateBuyCount } = useAuth();

  async function handleDelete() {
    await api.delete(`/buy/${data.id}`);
    updateBuyCount();
  }
  return (
    <Container {...rest}>
      {dishesBuyImage ? <DishesImg src={dishesBuyImage} /> : <ReactSVG src={placeholderDishes} />}
      <div>
        <h2>{data.name}</h2>
        <Button className="button-remove" onClick={handleDelete}>
          Remover da lista
        </Button>
      </div>
    </Container>
  );
}
