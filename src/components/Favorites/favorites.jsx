import { SectionTitle, FavoritesContainer, DivList, DivFooter } from "./favorites";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import dots from "../../assets/icons/dots.svg";
import favorite1 from "../../assets/img/favorite1.jpg";
import favorite2 from "../../assets/img/favorite2.jpg";
import favorite3 from "../../assets/img/favorite3.jpg";
import favorite4 from "../../assets/img/favorite4.jpg";

export const Favorites = () => {
  return (
    <>
      <SectionTitle>Favoritos da semana</SectionTitle>
      <FavoritesContainer>
        <DivList>
          <div className="arrowLeft">
            <img src={arrowLeft} alt="Seta para esquerda"></img>
          </div>
          <ul>
            <li>
              <img src={favorite1} alt="Tênis branco" />
              <p>Bolsas</p>
            </li>
            <li>
              <img src={favorite2} alt="Sandália preta" />
              <p>Tênis</p>
            </li>
            <li>
              <img src={favorite3} alt="Sapatilha bege" />
              <p>Rasteiras</p>
            </li>
            <li>
              <img src={favorite4} alt="vermelho terra" />
              <p>Plataformas</p>
            </li>
          </ul>
          <div className="arrowRight">
            <img src={arrowRight} alt="Seta para direita"></img>
          </div>

          <DivFooter>
            <div>
              <img src={dots}></img>
            </div>
          </DivFooter>
        </DivList>
      </FavoritesContainer>
    </>
  );
};
