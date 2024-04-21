import styled from "styled-components";

export const DynamicShowCaseContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--light-gray);
  padding: 32px 155px;
  margin-top: 72px;
`;

export const DivSection = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
`;

export const DivContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-right: 83px;

  div {
    display: flex;
    gap: 12px;
  }

  button {
    padding: 14px 24px;
    background-color: var(--pink);
    color: var(--white);
    width: 156px;
    margin-top: 32px;

    &:hover {
      background-color: #e5336e;
    }
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
    font-size: 12px;
    max-width: 40ch;
    line-height: 16px;
    color: var(--dark-gray);
    margin-top: 4px;
  }
`;
