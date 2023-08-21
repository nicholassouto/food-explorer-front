import { Container, DishesImg } from "./styles";

import { api } from "../../services/api";

import { ReactSVG } from "react-svg";
import placeholderDishes from "../../assets/dishes.svg";

import { Button } from "../Button";

export function FavDishes({ data, ...rest }) {
  const dishesFavImage = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null;

  async function handleDelete() {
    await api.delete(`/favorites/${data.id}`);
  }
  return (
    <Container {...rest}>
      {dishesFavImage ? <DishesImg src={dishesFavImage} /> : <ReactSVG src={placeholderDishes} />}
      <div>
        <h2>{data.name}</h2>
        <Button className="button" onClick={handleDelete}>
          Remover dos favoritos
        </Button>
      </div>
    </Container>
  );
}
