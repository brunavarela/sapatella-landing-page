import styled from "styled-components";

export const CategoryContainer = styled.section`
  width: 100%;
  background-color: var(--white);
  padding: 32px 56px;
  margin-top: 72px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const DivList = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: var(--dark-gray);
    cursor: pointer;
  }
`;
