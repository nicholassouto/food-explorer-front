import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import arrowLeft from "../../assets/arrowLeft.svg";

import { HeaderADM } from "../../Components/HeaderADM";
import { Footer } from "../../Components/Footer";
import { Ingredients } from "../../Components/Ingredients";
import { Button } from "../../Components/Button";

export function EditPlateADM() {
  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function HandleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDishes();
  }, []);

  return (
    <Container>
      <HeaderADM className="header" />
      <main>
        <section onClick={HandleBack}>
          <ReactSVG src={arrowLeft} alt="seta para esquerda" />
          <p>voltar</p>
        </section>
        <h2>Editar prato</h2>

        <div>
          <p>Imagem do prato</p>
          <div>Selecione imagem para alterá-la</div>

          <p>Prato</p>
          <span>Nome do prato</span>

          <p>Categoria</p>
          <select>
            <option>Refeição</option>
            <option>Sobremesa</option>
            <option>Bebidas</option>
          </select>
        </div>

        <div>
          <p>Ingredients</p>
          <section>
            <Ingredients />
          </section>

          <p>Preço</p>
          <span>R$40,00</span>
        </div>

        <div>
          <p>Descrição</p>
          <span>A salada</span>
        </div>

        <div>
          <Button />
          <Button />
        </div>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
