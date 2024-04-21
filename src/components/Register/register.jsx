import { RegiterContainer, Title, DivSection, Input } from "./register";

export const Register = () => {
  return (
    <>
      <RegiterContainer>
        <Title>
          Cadastre-se e ganhe <span>R$20 OFF</span> na sua primeira compra!
        </Title>
        <DivSection>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <button>Cadastrar</button>
        </DivSection>
      </RegiterContainer>
    </>
  );
};
