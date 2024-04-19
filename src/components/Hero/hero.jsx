import {
  HeroContainer,
  Background,
  SlideContainer,
  ImageContainer,
  DivImage,
  ImageHeader,
} from "./hero";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

export const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Background>
          <div>
            <img src={image1} alt="Imagem de fundo"></img>
          </div>
          <div>
            <img src={image3} alt="Imagem de fundo"></img>
          </div>
        </Background>
        <SlideContainer>
          <ImageContainer>
            <div>
              <img src={arrowLeft} alt="Seta para esquerda"></img>
            </div>
            <DivImage>
              <ImageHeader>
                <h1>#SuperBazar</h1>
                <span>até <text>50%OFF</text></span>
              </ImageHeader>
              <div>
                <img src={image2} alt="Sandália"></img>
              </div>
              <button>Conferir</button>
            </DivImage>
            <div>
              <img src={arrowRight} alt="Seta para direita"></img>
            </div>
          </ImageContainer>
        </SlideContainer>
      </HeroContainer>
    </>
  );
};
