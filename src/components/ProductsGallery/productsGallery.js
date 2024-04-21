import styled from "styled-components";

export const ProductsGalleryContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--light-gray);
  padding: 32px 56px;
  margin-top: 72px;
`;

export const DivSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  max-width: 1445px;
`;

export const DivContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  .imgLeft {
    width: 376px;
    margin-top: 24px;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    color: var(--dark-gray);
  }

  p {
    font-size: 12px;
    margin-top: 8px;
    color: var(--dark-gray);
    max-width: 33ch;
    line-height: 16px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  margin-top: 24px;
  cursor: pointer;

  button {
    display: flex;
    align-items: center;
    color: var(--dark-gray);
    background-color: transparent;
  }

  :hover {
    color: var(--pink);
  }

  span {
    margin-right: 16px;
  }
`;

export const DivContentCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .divTextRight {
    margin-top: 24px;
    align-items: center;
    text-align: center;
  }

  .textRight {
    margin-top: 8px;
    max-width: 40ch;
  }

  .imgRight {
    width: 376px;
    border: 1px solid var(--black);
  }

  .buttonRight {
    padding: 14px 48px;
  }
`;
