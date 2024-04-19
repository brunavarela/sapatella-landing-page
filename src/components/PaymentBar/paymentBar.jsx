import { PaymentBarContainer, DivList } from "./paymentBar";
import truck from "../../assets/icons/truck.svg";
import off from "../../assets/icons/off.svg";
import pix from "../../assets/icons/pix.svg";
import card from "../../assets/icons/card.svg";

export const PaymentBar = () => {
  return (
    <>
      <PaymentBarContainer>
        <DivList>
          <ul>
            <li>
              <img src={truck} />
              <p>Frete Grátis p/ Sudeste</p>
            </li>
            <li>
              <img src={off} />
              <p>R$ 20 off na 1º compra</p>
            </li>
            <li>
              <img src={pix} />
              <p>Pague via PIX</p>
            </li>
            <li>
              <img src={card} />
              <p>Parcele em até 6x sem juros</p>
            </li>
          </ul>
        </DivList>
      </PaymentBarContainer>
    </>
  );
};
