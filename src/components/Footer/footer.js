import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
`;

export const DivHr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #484848;
`;

export const FirstDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 56px 48px 146px;

  h1 {
    text-transform: uppercase;
    font-size: 16px;
    color: var(--dark-gray);
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 14px;
    font-size: 14px;
    color: var(--dark-gray);
  }
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: column;

  .social {
    display: flex;
    margin-top: 32px;
    gap: 32px;
  }
`;

export const ImgPaymentSecurity = styled.div`
  display: flex;
  flex-direction: column;

  .imagesPaymentSecurity {
    display: flex;
    flex-wrap: wrap;
    max-width: 188px;
    gap: 8px;
    margin-top: 20px;
  }

  .titleSecurity {
    margin-top: 48px;
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;

  p {
    font-size: 12px;
    color: var(--dark-gray);
    text-align: center;
    max-width: 100ch;
    line-height: 18px;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 24px;
`;
