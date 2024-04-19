import styled from "styled-components";

export const PaymentBarContainer = styled.div`
  width: 100%;
  height: 112px;
  background-color: var(--light-gray);
  padding: 32px 56px;
`;

export const DivList = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
