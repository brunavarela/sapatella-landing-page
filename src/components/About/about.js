import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--white);
  padding: 32px 155px;
  margin-top: 72px;
`;

export const DivSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
`;

export const DivContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  div {
    display: flex;
    gap: 12px;
  }
`;

export const DivText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  h3 {
    color: var(--dark-gray);
  }

  p {
    font-size: 14px;
    max-width: 57ch;
    line-height: 20px;
    color: var(--dark-gray);
    margin-top: 4px;
  }
`;
