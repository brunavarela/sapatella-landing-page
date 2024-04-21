import styled from "styled-components";

export const FeaturedProductsContainer = styled.section`
  display: flex;
  background-color: var(--white);
  padding: 32px 56px 32px 0px;
`;

export const DivSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: var(--white);
  padding: 32px 0px;

  
  @media (min-width: 1445px) {
    justify-content: center;
  }
`;

export const DivImage = styled.div`
  align-self: baseline;
`;

export const DivList = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-top: 40px;
  margin-left: 36px;


  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: left;

    color: var(--dark-gray);
    position: relative;

    img {
      margin-bottom: 12px;
      cursor: pointer;
    }

    p {
      font-size: 12px;
      font-weight: 400;
    }

    h4 {
      font-weight: 400;
      margin-top: 16px;
      margin-bottom: 6px;
      color: var(--pink);
    }

    span {
      font-size: 14px;
      text-decoration: line-through;
      color: var(--dark-gray);


    }
  }

  .arrowLeft {
    z-index: 1;
    position: absolute;
    bottom: 60%;
    left: -2%;
    cursor: pointer;
  }

  .arrowRight {
    z-index: 1;
    position: absolute;
    bottom: 60%;
    right: -2%;
    cursor: pointer;
  }
`;

export const DivSpan = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0%;
  background-color: transparent;

  padding: 10px;

  h5 {
    padding: 6px 12px;
    background-color: var(--pink);
    font-size: 10px;
    font-weight: 400;
    color: var(--white);
  }

  .imgIcon {
    font-size: 18px;
    color: var(--dark-gray);
    cursor: pointer;

    :hover {
      color: var(--pink);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  opacity: 0;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

export const DivSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(231, 234, 225, 0.25);
  border-top: 1px solid var(--gray);
  backdrop-filter: blur(10px);
  padding: 8px 10px;

  .sizeTitle {
    text-align: center;
  }

  .sizeOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  }

  .chevronLeft {
    margin-top: 10px;
    margin-right: 20px;
  }

  .chevronRight {
    margin-top: 10px;
    margin-left: 20px;
  }

  .ulSizes {
    display: flex;
    gap: 8px;
  }

  .liSizes {
    box-shadow: inset 0 0 0 1.5px var(--gray);
    color: var(--dark-gray);
    background-color: var(--white);
    padding: 6px;
    cursor: pointer;

    &.selected {
      background-color: var(--pink);
      color: var(--white);
      box-shadow: none;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 32px;
  background-color: var(--pink);
  color: var(--white);
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e5336e;
  }
`;

export const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 24px;
`;
