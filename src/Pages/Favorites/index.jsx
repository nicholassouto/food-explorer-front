import { Container } from "./styles";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FavDishes } from "../../Components/FavDishes";

export function Favorites() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites`);
      setData(response.data);
    }
    fetchFavorites();
  }, [data]);

  return (
    <Container>
      <Header className="header" />
      <main>
        <h1>Meus Favoritos</h1>
        {data && (
          <section>
            {data.map((favorite) => (
              <FavDishes
                key={String(favorite.id)}
                data={favorite}
              />
            ))}
          </section>
        )}
      </main>
      <Footer className="footer" />
    </Container>
  );
}
