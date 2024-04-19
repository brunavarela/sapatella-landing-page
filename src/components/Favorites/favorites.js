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
    align-items: center;

    color: var(--dark-gray);
    cursor: pointer;
  }

  .arrowLeft {
    position: absolute;
    bottom: 50%;
    left: -2%;
    cursor: pointer;
  }
  
  .arrowRight {
    position: absolute;
    bottom: 50%;
    right: -2%;
    cursor: pointer;
  }
`;

export const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 24px;
`;
