import React, { useState } from "react";
import {
  FeaturedProductsContainer,
  DivSection,
  DivImage,
  DivList,
  DivSpan,
  ImageWrapper,
  ImageOverlay,
  DivSize,
  Button,
  DivFooter,
} from "./featuredProducts";
import { SlHeart } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import chevronLeft from "../../assets/icons/chevron-left-alt.svg";
import chevronRight from "../../assets/icons/chevron-right-alt.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import dots from "../../assets/icons/dots.svg";
import favorite1 from "../../assets/img/favorite1.jpg";
import favorite2 from "../../assets/img/favorite2.jpg";
import image7 from "../../assets/img/image7.jpg";

export const FeaturedProducts = () => {
  const handleClick = (index) => {
    const updatedHeartClicked = [...heartClicked];
    updatedHeartClicked[index] = !updatedHeartClicked[index];
    setHeartClicked(updatedHeartClicked);
  };
  const [products, setProducts] = useState([
    {
      name: "Tênis Clean Urbano - Branco",
      price: 209.9,
      sale: 169.9,
      paymentOption: "ou 6x de R$ 28,31 sem juros",
      image: favorite1,
      size: ["34", "35", "36", "37", "38"],
    },
    {
      name: "Sandália Soft Metalizado - Preta",
      price: 209.9,
      sale: 169.9,
      paymentOption: "ou 6x de R$ 28,31 sem juros",
      image: favorite2,
      size: ["34", "35", "36", "37", "38"],
    },
  ]);

  const [heartClicked, setHeartClicked] = useState(
    Array(products.length).fill(false)
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [selectedSizes, setSelectedSizes] = useState(products.map(() => 0));

  const handleSelectSize = (productIndex, sizeIndex) => {
    setSelectedSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes[productIndex] = sizeIndex;
      return updatedSizes;
    });
  };

  const handlePrevSize = (index) => {
    setSelectedSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes[index] =
        (prevSizes[index] - 1 + products[index].size.length) %
        products[index].size.length;
      return updatedSizes;
    });
  };

  const handleNextSize = (index) => {
    setSelectedSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes[index] =
        (prevSizes[index] + 1) % products[index].size.length;
      return updatedSizes;
    });
  };

  return (
    <>
      <FeaturedProductsContainer>
        <DivSection>
          <DivImage>
            <img src={image7} alt="Duas mulheres com chinelo e tênis brancos" />
          </DivImage>
          <DivList>
            <div className="arrowLeft">
              <img src={arrowLeft} alt="Seta para esquerda"></img>
            </div>
            <ul>
              {products.map((product, index) => (
                <li key={index}>
                  <DivSpan>
                    <h5>36% OFF</h5>
                    <div className="imgIcon" onClick={() => handleClick(index)}>
                      {heartClicked[index] ? (
                        <FaHeart color="#CF215B" />
                      ) : (
                        <SlHeart />
                      )}
                    </div>
                  </DivSpan>
                  <ImageWrapper
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img src={product.image} alt={product.name} />
                    {hoveredIndex === index && (
                      <ImageOverlay>
                        <DivSize>
                          <p className="sizeTitle">Selecione um tamanho</p>
                          <div className="sizeOptions">
                            <div
                              className="chevronLeft"
                              onClick={() => handlePrevSize(index)}
                            >
                              <img
                                src={chevronLeft}
                                alt="Seta para esquerda"
                              ></img>
                            </div>
                            <ul className="ulSizes">
                              {product.size.map((size, sizeIndex) => (
                                <li
                                  key={sizeIndex}
                                  className={`liSizes ${
                                    selectedSizes[index] === sizeIndex
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleSelectSize(index, sizeIndex)
                                  }
                                >
                                  {size}
                                </li>
                              ))}
                            </ul>
                            <div
                              className="chevronRight"
                              onClick={() => handleNextSize(index)}
                            >
                              <img
                                src={chevronRight}
                                alt="Seta para esquerda"
                              ></img>
                            </div>
                          </div>
                        </DivSize>
                        <Button>Adicionar à sacola</Button>
                      </ImageOverlay>
                    )}
                  </ImageWrapper>
                  <p>{product.name}</p>
                  <h4>
                    {product.sale.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                    <span>
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </h4>
                  <p>{product.paymentOption}</p>
                </li>
              ))}
            </ul>
            <div className="arrowRight">
              <img src={arrowRight} alt="Seta para direita"></img>
            </div>

            <DivFooter>
              <div>
                <img src={dots}></img>
              </div>
            </DivFooter>
          </DivList>
        </DivSection>
      </FeaturedProductsContainer>
    </>
  );
};
