import {
  HeroContainer,
  Background,
  SlideContainer,
  ImageContainer,
  DivImage,
  ImageHeader,
  SlideFooter,
} from "./hero";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import dots from "../../assets/icons/dots.svg";

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
                <p>
                  até <span>50%OFF</span>
                </p>
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
        <SlideFooter>
          <div>
            <img src={dots}></img>
          </div>
        </SlideFooter>
      </HeroContainer>
    </>
  );
};
