import { Container, DishesImg } from "./styles";

import { api } from "../../services/api";

import { Button } from "../Button";

export function FavDishes({ data, ...rest }) {
  const dishesFavImage = `${api.defaults.baseURL}/files/${data.image}`;

  async function handleDelete() {
    await api.delete(`/favorites/${data.id}`);
  }
  return (
    <Container {...rest}>
      <DishesImg src={dishesFavImage} />
      <div>
        <h2>{data.name}</h2>
        <Button className="button" onClick={handleDelete}>Remover dos favoritos</Button>
      </div>
    </Container>
  );
}
