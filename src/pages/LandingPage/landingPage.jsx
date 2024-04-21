import { HeaderContainer, MainContainer, FooterContainer } from "./landingPage";
import { Header } from "../../components/Header/header.jsx";
import { Hero } from "../../components/Hero/hero.jsx";
import { PaymentBar } from "../../components/PaymentBar/paymentBar.jsx";
import { Category } from "../../components/Category/category.jsx";
import { DynamicShowCase } from "../../components/DynamicShowCase/dynamicShowCase.jsx";
import { Favorites } from "../../components/Favorites/favorites.jsx";
import { ProductsGallery } from "../../components/ProductsGallery/productsGallery.jsx";
import { FeaturedProducts } from "../../components/FeaturedProducts/featuredProducts.jsx";
import { ImageSection } from "../../components/ImageSection/imageSection.jsx";
import { About } from "../../components/About/about.jsx";
import { Register } from "../../components/Register/register.jsx";

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
        <Favorites />
        <ProductsGallery />
        <FeaturedProducts />
        <ImageSection />
        <About />
        <Register />
      </MainContainer>
      <FooterContainer></FooterContainer>
    </>
  );
};
