import styled from "styled-components";

export const RegiterContainer = styled.div`
  align-content: center;
  background-color: var(--light-gray);
  width: 100%;
  height: 148px;
  padding: 34px 254px;
`;

export const Title = styled.div`
  color: var(--dark-gray);
  font-size: 20px;
  width: 100%;
  text-align: center;

  span {
    font-weight: 700;
    color: var(--pink);
  }
`;

export const DivSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  button {
    background: var(--pink);
    color: var(--white);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 57px;

    &:hover {
      background-color: #e5336e;
    }
  }
`;

export const Input = styled.input`
  width: 277px;
  height: 40px;
  background-color: var(--white);
  color: var(--dark-gray);
  font-size: 16px;
  padding: 8px 36px 8px 12px;
  border: 1px solid #484848;
`;
