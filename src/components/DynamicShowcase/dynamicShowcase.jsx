import {
  DynamicShowCaseContainer,
  DivSection,
  DivContent,
  DivText,
} from "./dynamicShowCase";
import imageCart from "../../assets/img/imageCart.jpg";
import pinkRectangle from "../../assets/general/pinkRectangle.jpg";
import rectangle from "../../assets/general/rectangle.jpg";

export const DynamicShowCase = () => {
  return (
    <>
      <DynamicShowCaseContainer>
        <DivSection>
          <DivContent>
            <div>
              <img src={pinkRectangle} />
              <img src={rectangle} />
            </div>
            <DivText>
              <h3>Pra brilhar no verão</h3>
              <p>
                As Sandálias Birkens são uma escolha de calçado atemporal e
                icônica, conhecida por seu conforto, qualidade e design
                diferenciado.
              </p>
            </DivText>
            <button>É a minha cara</button>
          </DivContent>
          <img
            src={imageCart}
            alt="Mulher em carrinho usando calçados laranjas"
          />
        </DivSection>
      </DynamicShowCaseContainer>
    </>
  );
};
