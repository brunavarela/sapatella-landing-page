import styled from "styled-components";

export const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  margin-top: 72px;
`;

export const CategoryContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--white);
  padding: 32px 56px;
`;

export const DivList = styled.div`
  width: 100%;
  max-width: 1445px;

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
