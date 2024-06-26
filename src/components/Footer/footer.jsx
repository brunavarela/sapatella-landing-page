import {
  FooterContainer,
  FirstDiv,
  DivList,
  ImgPaymentSecurity,
  DivHr,
  SecondDiv,
  ImgDiv,
} from "./footer";
import logoPreta from "../../assets/general/logo-preta.png";
import instagram from "../../assets/social-icons/InstagramLogo.svg";
import whatsapp from "../../assets/social-icons/WhatsappLogo.svg";
import Facebook from "../../assets/social-icons/FacebookLogo.svg";
import visa from "../../assets/cards-icons/visa-icon.png";
import master from "../../assets/cards-icons/master-icon.png";
import hiper from "../../assets/cards-icons/hiper-icon.png";
import pix from "../../assets/cards-icons/pix-icon.png";
import amex from "../../assets/cards-icons/amex-icon.png";
import elo from "../../assets/cards-icons/elo-icon.png";
import boleto from "../../assets/cards-icons/boleto-icon.png";
import vtex from "../../assets/securityLogo/vtex.png";
import encrypt from "../../assets/securityLogo/encrypt.png";
import wicomm from "../../assets/general/logo-wicomm.png";
import vtexGray from "../../assets/general/vtex-gray.png";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FirstDiv>
          <DivList>
            <img src={logoPreta} alt="Logo Sapatella preta" />
            <div className="social">
              <img className="socialIcons" src={instagram} alt="Logo instagram" />
              <img className="socialIcons" src={whatsapp} alt="Logo whatsapp" />
              <img className="socialIcons" src={Facebook} alt="Logo facebook" />
            </div>
          </DivList>
          <DivList>
            <h1>Sobre nós</h1>
            <ul>
              <li>Quem somos</li>
              <li>Mapa do site</li>
              <li>Casas Sapatella</li>
              <li>Seja um parceiro</li>
              <li>Seja um Franqueado</li>
              <li>Seja um afiliado</li>
              <li>Trabalhe com a gente</li>
            </ul>
          </DivList>
          <DivList>
            <h1>Minha conta</h1>
            <ul>
              <li>Meus Dados</li>
              <li>Meus Pedidos</li>
              <li>Login</li>
            </ul>
          </DivList>
          <DivList>
            <h1>Suporte e políticas</h1>
            <ul>
              <li>Trocas e Devoluções</li>
              <li>Dúvidas Frequentes</li>
              <li>Fale Conosco</li>
              <li>Super Natal</li>
            </ul>
          </DivList>
          <DivList>
            <ImgPaymentSecurity>
              <h1>Formas de pagamento</h1>
              <div className="imagesPaymentSecurity">
                <img src={visa} alt="Visa" />
                <img src={master} alt="Master" />
                <img src={hiper} alt="Hiper" />
                <img src={pix} alt="Pix" />
                <img src={amex} alt="Amex" />
                <img src={elo} alt="Elo" />
                <img src={boleto} alt="Boleto" />
              </div>
            </ImgPaymentSecurity>
            <ImgPaymentSecurity>
              <h1 className="titleSecurity">Segurança</h1>
              <div className="imagesPaymentSecurity">
                <img src={vtex} alt="Logo vtex" />
                <img src={encrypt} alt="Logo encript" />
              </div>
            </ImgPaymentSecurity>
          </DivList>
        </FirstDiv>
        <DivHr></DivHr>
        <SecondDiv>
          <p>
            Somos Sonho LTA - Estrada do Campo D'areia, 182 - Pechincha - Rio de
            Janeiro/RJ - CEP: 22.743-310 CNPJ:28.445.729/0081-75 | © 2024 Todos
            dos direitos reservados
          </p>
          <ImgDiv>
            <img src={wicomm} alt="Logo wicomm" />
            <img src={vtexGray} alt="Logo vtex" />
          </ImgDiv>
        </SecondDiv>
      </FooterContainer>
    </>
  );
};
