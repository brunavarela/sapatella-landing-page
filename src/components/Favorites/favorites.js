import styled from "styled-components";

export const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  margin-top: 72px;
`;

export const FavoritesContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: 32px 56px;
`;

export const DivList = styled.section`
  width: 100%;
  max-width: 1445px;
  position: relative;

  ul {
    max-width: 1445px;
    display: flex;
    justify-content: space-between;
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
    }

    span {
      font-size: 14px;
      text-decoration: line-through;
    }
  }

  .arrowLeft {
    z-index: 1;
    position: absolute;
    bottom: 55%;
    left: -2%;
    cursor: pointer;
  }

  .arrowRight {
    z-index: 1;
    position: absolute;
    bottom: 55%;
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

export const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 24px;
`;
