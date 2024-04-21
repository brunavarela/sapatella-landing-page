import { ImageSectionContainer } from "./imageSection";
import image8 from "../../assets/img/image8.jpg";

export const ImageSection = () => {
  return (
    <>
      <ImageSectionContainer>
        <img src={image8} alt="Imagem de fundo" />
      </ImageSectionContainer>
    </>
  );
};
