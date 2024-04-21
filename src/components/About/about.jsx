import { AboutContainer, DivSection, DivContent, DivText } from "./about";
import image9 from "../../assets/img/image9.png";

export const About = () => {
  return (
    <>
      <AboutContainer>
        <DivSection>
          <DivContent>
            <DivText>
              <h3>Sobre a Sapatella</h3>
              <p>
                Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma
                Marca de moda que oferece sapatos e acessórios feitos para te
                encantar. Aqui tem atenção de verdade, produtos com o seu jeito
                e ritmo. Chega mais, fique à vontade. Queremos ver você
                confortável e livre para ser como quiser e ocupar o espaço que
                bem entender. O que nos une e contagia é a vontade de brilhar e
                ser feliz. Mais que mulheres, somos amigas. Sapatella. Vamos
                juntas?
              </p>
            </DivText>
          </DivContent>
          <img src={image9} alt="Mulher em carrinho usando calçados laranjas" />
        </DivSection>
      </AboutContainer>
    </>
  );
};
