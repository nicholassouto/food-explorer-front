import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import arrowLeft from "../../assets/arrowLeft.svg";
import upload from "../../assets/upload.svg";

import { HeaderADM } from "../../Components/HeaderADM";
import { Footer } from "../../Components/Footer";
import { IngredientsAdd } from "../../Components/IngredientsAdd";
import { Button } from "../../Components/Button";

export function EditPlateADM() {
  const [data, setData] = useState(null);
  const [description, setDescription] = useState(data?.description || "");
  const [addIngredient, setAddIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const params = useParams();

  const navigate = useNavigate();

  function HandleBack() {
    navigate(-1);
  }

  const handleDelete = async () => {
    await api.delete(`/dishes/${params.id}`);
    alert("Prato excluido com sucesso!");
    navigate("/");
  };

  const handleDeleteIngredient = (ingredientId) => {
    const updateIngredients = data.ingredients.filter((ingredient) => ingredient.id !== ingredientId);
    setData((prevData) => ({ ...prevData, ingredients: updateIngredients }));
  };

  const handleAddIngredient = () => {
    const newIngredient = {
      id: new Date().getTime(),
      tags: addIngredient,
    };
    const updatedIngredients = [...data.ingredients, newIngredient];
    console.log(updatedIngredients);
    setData((prevData) => ({ ...prevData, ingredients: updatedIngredients }));
    setAddIngredient("");
  };

  const handleSelectImage = async (event) => {
    const selectedImage = event.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      await api.patch(`/dishes/image/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Imagem atualizada com sucesso!");
    } catch (error) {
      alert("Error ao atualizar imagem:", error);
    }
  };

  const handleSaveChanges = async () => {
    if (data.ingredients.lenght < 1 || price == 0 || !price || !description || !data.name) {
      return alert("Preencha todos os campos");
    }
    try {
      if (!data) {
        return alert("Não é possivel salvar");
      }

      const updateData = {
        name: data.name,
        description,
        price: price,
        category: selectedCategory,
        ingredients: data.ingredients.map((ingredient) => ingredient.tags),
      };

      await api.put(`/dishes/${params.id}`, updateData);

      alert("Prato atualizado com sucesso!");

      navigate("/")
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      setDescription(response.data.description);
      setPrice(response.data.price.toString());
      setSelectedCategory(response.data.category);
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

        <div className="name-pic-cat">
          <div>
            <p>Imagem do prato</p>
            <div>
              <label className="upload-pic" htmlFor="imageUpload">
                <ReactSVG src={upload} alt="icone de upload" />
                Selecione uma imagem
              </label>
              <input
                type="file"
                id="imageUpload"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleSelectImage}
              />
            </div>
          </div>

          <div className="dishe">
            <p>Prato</p>
            <input type="text" value={data?.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          </div>

          <div className="category">
            <p>Categoria</p>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="Refeicao">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </div>
        </div>

        <div className="ingredients-price">
          <div>
            <p>Ingredients</p>
            <section>
              {data?.ingredients.map((ingredient) => (
                <IngredientsAdd
                  key={String(ingredient.id)}
                  value={ingredient.tags}
                  onDelete={() => handleDeleteIngredient(ingredient.id)}
                />
              ))}
              <IngredientsAdd
                isNew
                placeholder="Novo ingrediente"
                onChange={(e) => setAddIngredient(e.target.value)}
                value={addIngredient}
                onClick={handleAddIngredient}
              />
            </section>
          </div>

          <div>
            <p>Preço</p>
            <input
              className="price-change"
              type="text"
              inputMode="numeric"
              pattern="^\d+(,\d{1,2})?$"
              value={price ? price.replace(".", ",") : ""}
              onChange={(e) => {
                const newValue = e.target.value.replace(",", ".");
                if (/^\d*\.?\d{0,2}$/.test(newValue)) {
                  setPrice(newValue);
                }
              }}
              onBlur={() => {
                if (price) {
                  const formattedPrice = parseFloat(price).toFixed(2);
                  setPrice(formattedPrice);
                }
              }}
            />
          </div>
        </div>

        <div>
          <p>Descrição</p>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className="description"
          ></textarea>
        </div>

        <div className="save-delete">
          <Button onClick={handleDelete} className="delete-dish">
            Excluir Prato
          </Button>
          <Button onClick={handleSaveChanges} className="save-dish">
            Salvar Alterações
          </Button>
        </div>
      </main>
      <Footer className="footer" />
    </Container>
  );
}
