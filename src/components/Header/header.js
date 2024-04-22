import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px 56px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;

  background: linear-gradient(
    to bottom,
    rgba(22, 22, 22, 1) 0%,
    rgba(22, 22, 22, 0) 100%
  );

  nav {
    display: flex;
    gap: 24px;

    a {
      color: var(--white);
    }

    #off {
      font-weight: 700;
    }

    :hover {
      color: var(--pink);
    }
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1445px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 232px;
  height: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0 0 1.5px rgba(211, 211, 211, 0.1);
  color: var(--dark-gray);
  font-size: 16px;
  padding: 8px 36px 8px 12px;
  border: none;

  &::placeholder {
    opacity: 1;
    color: var(--gray);
  }
`;

export const Icon = styled.img`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;

export const IconButtons = styled.div`
  display: flex;
  gap: 24px;

  button {
    background: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 24px;
    cursor: pointer;

    :hover {
      color: var(--pink);
    }

    .cartLength {
      text-align: center;
      background: var(--pink);
      color: var(--white);
      font-size: 10px;
      width: 14px;
      border-radius: 100%;
      padding: 1px 4px;
      position: absolute;
      top: -5px;
      right: -5px;
    }
  }
`;
