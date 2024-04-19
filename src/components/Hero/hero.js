import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 1px;
  background-color: var(--white);
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  div {
    flex: 1;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 56px;
  padding-right: 56px;
  position: absolute;
  top: 20%;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    position: relative;
  }

  button {
    background-color: var(--pink);
    color: var(--white);
    position: absolute;
    bottom: -4%;
    padding: 14px 48px;
  }
`;

export const ImageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  padding: 16px 24px;
  width: 100%;

  span {
    color: var(--wine);
  }

  text {
    color: var(--pink);
    font-size: 24px;
    font-weight: 700;
  }
`;
