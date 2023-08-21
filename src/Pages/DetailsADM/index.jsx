import { Container, DishesImg } from "./styles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import placeholderDishes from "../../assets/dishes.svg";
import arrowLeft from "../../assets/arrowLeft.svg";

import { HeaderADM } from "../../Components/HeaderADM";
import { Footer } from "../../Components/Footer";
import { Ingredients } from "../../Components/Ingredients";
import { Button } from "../../Components/Button";

export function DetailsADM() {
  const [data, setData] = useState(null);
  const [dishesImage, setDishesImage] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function HandleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);

      if (response.data.image) {
        setDishesImage(`${api.defaults.baseURL}/files/${response.data.image}`);
      }
    }
    fetchDishes();
  }, []);

  function HandlePlateEdit(id) {
    navigate(`/EditPlateADM/${id}`);
  }

  return (
    <Container>
      <HeaderADM className="header" />
      <main>
        <section onClick={HandleBack}>
          <ReactSVG src={arrowLeft} alt="seta para esquerda" />
          <p>voltar</p>
        </section>
        {data && (
          <div>
            <div>
              <div className="food-picture">
                {dishesImage ? <DishesImg src={dishesImage} /> : <ReactSVG src={placeholderDishes} />}
              </div>
            </div>
            <div className="food-info">
              <h3>{data.name}</h3>
              <p className="dish-description">{data.description}</p>

              {data.ingredients && (
                <div className="ingredients">
                  {data.ingredients.map((ingredient) => (
                    <Ingredients key={String(ingredient.id)} title={ingredient.tags} />
                  ))}
                </div>
              )}

              <div className="pricing-include">
                <Button className="button">
                  <p onClick={() => HandlePlateEdit(data.id)}>Editar prato</p>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer className="footer" />
    </Container>
  );
}
