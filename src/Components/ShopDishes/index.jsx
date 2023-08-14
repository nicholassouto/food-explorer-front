import { Container, DishesImg } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";

export function ShopDishes({ data, ...rest }) {
  const dishesBuyImage = `${api.defaults.baseURL}/files/${data.image}`;
  const { updateBuyCount } = useAuth();

  async function handleDelete() {
    await api.delete(`/buy/${data.id}`);
    updateBuyCount();
  }
  return (
    <Container {...rest}>
      <DishesImg src={dishesBuyImage} />
      <div>
        <h2>{data.name}</h2>
        <Button className="button-remove" onClick={handleDelete}>Remover da lista</Button>
      </div>
    </Container>
  );
}
