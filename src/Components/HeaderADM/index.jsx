import { Container, Title, PedidosFavoritos } from "./styles";
import { ReactSVG } from "react-svg";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import menu from "../../assets/menu.svg";
import polygon from "../../assets/polygon.svg";
import adm from "../../assets/admin.svg"
import receipt from "../../assets/receipt.svg";
import magnifier from "../../assets/magnifier.svg";
import signOutIcon from "../../assets/signOut.svg";
import { Button } from "../Button";
import { Search } from "../Search";

export function HeaderADM({ setSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function goToMenu() {
    navigate("/menu");
  }

  function goHome() {
    navigate("/");
  }

  function handleSignUpADM() {
    navigate("/SignUpADM");
  }

  function handleBoughtADM() {
    navigate("/BoughtADM");
  }

  function handleNewPlate() {
    navigate("/CreatePlateADM");
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
        <ReactSVG src={adm} alt="palavra admin em azul" />
      </Title>
      <Search className="search-bar">
        <ReactSVG src={magnifier} />
        <input placeholder="Busque por pratos ou ingredientes" onChange={handleSearchChange} />
      </Search>
      <PedidosFavoritos>
        <p onClick={handleSignUpADM}>Cadastrar ADM</p>
        <p onClick={handleBoughtADM}>Pedidos dos Clientes</p>
      </PedidosFavoritos>
      <Button onClick={handleNewPlate} className="orders">
        <p>Novo Prato</p>
      </Button>
      <div>
        <ReactSVG onClick={handleSignOut} src={signOutIcon} alt="icone de saida" />
      </div>
    </Container>
  );
}
