import { HeaderContainer, MainContainer, FooterContainer } from "./landingPage";
import { Header } from "../../components/Header/header.jsx";
import { Hero } from "../../components/Hero/hero.jsx";
import { PaymentBar } from "../../components/PaymentBar/paymentBar.jsx";
import { Category } from "../../components/Category/category.jsx";
import { DynamicShowCase } from "../../components/DynamicShowCase/dynamicShowCase.jsx";

export const LandingPage = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
        <Hero />
      </HeaderContainer>
      <MainContainer>
        <PaymentBar />
        <Category />
        <DynamicShowCase />
      </MainContainer>
      <FooterContainer></FooterContainer>
    </>
  );
};
