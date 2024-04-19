import {
  HeaderContainer,
  InputContainer,
  Input,
  Icon,
  IconButtons,
} from "./header.js";
import logoBranca from "../../assets/general/logo-branca.png";
import searchIcon from "../../assets/icons/search.svg";
import userIcon from "../../assets/icons/user.svg";
import heartIcon from "../../assets/icons/heart.svg";
import cartIcon from "../../assets/icons/shopping-cart.svg";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logoBranca} />
        <nav>
          <a>Novidades</a>
          <a>Sapatos</a>
          <a>Sandálias</a>
          <a>Tênis</a>
          <a>Bolsa & Acessórios</a>
          <a id="off">OFF</a>
        </nav>
        <InputContainer>
          <Input placeholder="Buscar" />
          <Icon src={searchIcon} alt="Search" />{" "}
        </InputContainer>
        <IconButtons>
          <button aria-label="Conta">
            <img src={userIcon} alt="Conta" />
          </button>
          <button aria-label="Favoritos">
            <img src={heartIcon} alt="Favoritos" />
          </button>
          <button aria-label="Carrinho">
            <img src={cartIcon} alt="Carrinho" />
          </button>
        </IconButtons>
      </HeaderContainer>
    </>
  );
};
