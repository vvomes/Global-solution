import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2023 Nome da Empresa. Todos os direitos reservados.</p>
        <p>Endereço: 123 Rua do Exemplo, Cidade, Estado</p>
        <p>Telefone: (00) 1234-5678</p>
        <p>Email: exemplo@empresa.com</p>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #1c3048; 
  color: #fff; 
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
`;
