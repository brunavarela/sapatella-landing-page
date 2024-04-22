import {
  HeaderContainer,
  DivHeader,
  InputContainer,
  Input,
  Icon,
  IconButtons,
} from "./header.js";
import logoBranca from "../../assets/general/logo-branca.png";
import searchIcon from "../../assets/icons/search.svg";
import { BiUser } from "react-icons/bi";
import { SlHeart } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <DivHeader>
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
              <BiUser />
            </button>
            <button aria-label="Favoritos">
              <SlHeart />
            </button>
            <button aria-label="Carrinho">
              <BsCart2 />
            </button>
          </IconButtons>
        </DivHeader>
      </HeaderContainer>
    </>
  );
};
