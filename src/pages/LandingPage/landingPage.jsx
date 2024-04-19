import { MainContainer } from "./landingPage";
import { Header } from "../../components/Header/header.jsx";
import { Hero } from "../../components/Hero/hero.jsx";

export const LandingPage = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Hero />
      </MainContainer>
    </>
  );
};
