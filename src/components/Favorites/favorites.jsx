import React, { useState } from "react";
import {
  SectionTitle,
  FavoritesContainer,
  DivList,
  DivSpan,
  DivFooter,
} from "./favorites";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { SlHeart } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import dots from "../../assets/icons/dots.svg";
import favorite1 from "../../assets/img/favorite1.jpg";
import favorite2 from "../../assets/img/favorite2.jpg";
import favorite3 from "../../assets/img/favorite3.jpg";
import favorite4 from "../../assets/img/favorite4.jpg";

export const Favorites = () => {
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
      paymentOption: "ou 6x de R$ 28,31 sem juros",
      image: favorite1,
    },
    {
      name: "Sandália Soft Metalizado - Preta",
      price: 209.9,
      sale: 169.9,
      paymentOption: "ou 6x de R$ 28,31 sem juros",
      image: favorite2,
    },
    {
      name: "Sapatilha Elegance - Rose",
      price: 209.9,
      sale: 169.9,
      paymentOption: "ou 6x de R$ 28,31 sem juros",
      image: favorite3,
    },
    {
      name: "Plataforma em Nobuck - Whisky",
      price: 209.9,
      sale: 169.9,
      paymentOption: "ou 6x de R$ 28,31 sem juros",
      image: favorite4,
    },
  ]);

  const [heartClicked, setHeartClicked] = useState(
    Array(products.length).fill(false)
  );

  return (
    <>
      <SectionTitle>Favoritos da semana</SectionTitle>
      <FavoritesContainer>
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
                <img src={product.image} alt="Tênis branco" />
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
      </FavoritesContainer>
    </>
  );
};
