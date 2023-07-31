import { Container, Title, PedidosFavoritos } from "./styles";
import { ReactSVG } from "react-svg";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import menu from "../../assets/menu.svg";
import polygon from "../../assets/polygon.svg";
import receipt from "../../assets/receipt.svg";
import magnifier from "../../assets/magnifier.svg";
import signOutIcon from "../../assets/signOut.svg";
import { Button } from "../Button";
import { Search } from "../Search";

export function Header({ setSearch }) {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/")
  }

  function goToMenu() {
    navigate("/menu");
  }

  function goHome() {
    navigate("/");
  }

  function handleFavorites() {
    navigate("/Favorites");
  }

  function handleBought() {
    navigate("/Bought");
  }

  function handleShopList() {
    navigate("/ShopList");
  }
  function handleSearchChange(event) {
    const searchValue = event.target.value;
    setSearch(searchValue);
  }

  return (
    <Container>
      <div>
        <ReactSVG onClick={goToMenu} src={menu} alt="imagem com 3 linhas, uma sobre a outra" />
      </div>
      <Title onClick={goHome}>
        <ReactSVG src={polygon} alt="poligono azul" />
        <h2>food explorer</h2>
      </Title>
      <Search className="search-bar">
        <ReactSVG src={magnifier} />
        <input placeholder="Busque por pratos ou ingredientes" onChange={handleSearchChange} />
      </Search>
      <PedidosFavoritos>
        <p onClick={handleFavorites}>Meus favoritos</p>
        <p onClick={handleBought}>Histórico de pedidos</p>
      </PedidosFavoritos>
      <div onClick={handleShopList} className="receipt">
        <ReactSVG src={receipt} alt="icone de recibo" />
        <span>0</span>
      </div>
      <Button onClick={handleShopList} className="orders">
        <ReactSVG src={receipt} alt="icone de recibo" />
        <p>Pedidos</p>
        <p>
          (<span>0</span>)
        </p>
      </Button>
      <div>
        <ReactSVG onClick={handleSignOut} src={signOutIcon} alt="icone de saida" />
      </div>
    </Container>
  );
}
