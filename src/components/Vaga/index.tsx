import React from "react";
import styled from "styled-components";

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;
}`;

const VagaTitulo = styled.h3`
 font-weight: bold;
  margin-bottom: 16px;
}`;

const VagaDetails = styled.ul`
  /* styles for the details list element */
`;

const VagaDetailItem = styled.li`
  /* styles for each detail item element */
`;

const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos,
}: Props) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaDetails>
      <VagaDetailItem>Localizacao: {localizacao}</VagaDetailItem>
      <VagaDetailItem>Senioridade: {nivel}</VagaDetailItem>
      <VagaDetailItem>Tipo de contratacao: {modalidade}</VagaDetailItem>
      <VagaDetailItem>
        Salário: {salarioMin} - {salarioMax}
      </VagaDetailItem>
      <VagaDetailItem>Requisitos: {requisitos.join(", ")}</VagaDetailItem>
    </VagaDetails>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
);

export default Vaga;
