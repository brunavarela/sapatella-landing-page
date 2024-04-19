import { CategoryContainer, DivList } from "./category";
import category1 from "../../assets/img/category1.jpg";
import category2 from "../../assets/img/category2.jpg";
import category3 from "../../assets/img/category3.jpg";
import category4 from "../../assets/img/category4.jpg";
import category5 from "../../assets/img/category5.jpg";
import category6 from "../../assets/img/category6.jpg";


export const Category = () => {
  return (
    <>
      <CategoryContainer>
        <h1>Compre por categoria</h1>
        <DivList>
          <ul>
            <li>
              <img src={category1} />
              <p>Bolsas</p>
            </li>
            <li>
              <img src={category2} />
              <p>Tênis</p>
            </li>
            <li>
              <img src={category3} />
              <p>Rasteiras</p>
            </li>
            <li>
              <img src={category4} />
              <p>Plataformas</p>
            </li>
            <li>
              <img src={category5} />
              <p>Botas</p>
            </li>
            <li>
              <img src={category6} />
              <p>Sapatilhas</p>
            </li>
          </ul>
        </DivList>
      </CategoryContainer>
    </>
  );
};
