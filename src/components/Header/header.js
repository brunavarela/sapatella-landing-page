import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px 56px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 56px;
  padding-right: 56px;

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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
