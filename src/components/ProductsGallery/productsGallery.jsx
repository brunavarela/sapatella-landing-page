import {
  ProductsGalleryContainer,
  DivSection,
  DivContentLeft,
  DivContentCenter,
  DivContentRight,
  DivText,
  DivButton,
} from "./productsGallery";
import gallery4 from "../../assets/img/gallery4.jpg";
import gallery5 from "../../assets/img/gallery5.jpg";
import gallery6 from "../../assets/img/gallery6.jpg";
import { GoArrowRight } from "react-icons/go";
import { RiArrowRightFill } from "react-icons/ri";

export const ProductsGallery = () => {
  return (
    <>
      <ProductsGalleryContainer>
        <DivSection>
          <DivContentLeft>
            <DivText>
              <h3 className="textLeft">Rasteiras & Birkens</h3>
              <p className="textLeft">
                A categoria de Sandália Rasteira da Sapatella é um verdadeiro
                paraíso para os amantes de conforto e estilo. 
              </p>
            </DivText>
            <DivButton>
              <button>
                <span>Eu quero</span>
                <GoArrowRight />
              </button>
            </DivButton>
            <img className="imgLeft" src={gallery4} alt="Sandália branca" />
          </DivContentLeft>
          <DivContentCenter>
            <img className="imgCenter" src={gallery5} alt="Sandália rosa" />
            <DivButton>
              <button>
                <span>Sandálias</span>
                <GoArrowRight />
              </button>
            </DivButton>
          </DivContentCenter>
          <DivContentRight>
            <img className="imgRight" src={gallery6} alt="Tênis creme" />
            <DivText className="divTextRight">
              <h3 className="textRight">Tênis</h3>
              <p className="textRight">
                Os tênis femininos se tornaram um item básico na moda e nos
                calçados do dia a dia.
              </p>
            </DivText>
            <DivButton>
              <button className="buttonRight">
                <span>Conferir</span> <RiArrowRightFill />
              </button>
            </DivButton>
          </DivContentRight>
        </DivSection>
      </ProductsGalleryContainer>
    </>
  );
};
