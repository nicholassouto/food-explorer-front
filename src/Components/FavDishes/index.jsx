import { Container, DishesImg } from "./styles";


export function FavDishes({ data, ...rest }) {
  return (
    <Container {...rest}>
      <DishesImg />
      <div>
        <h2>Spaguetti Gambe</h2>
        <p>Remover dos favoritos</p>
      </div>
    </Container>
  );
}
