import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>"Alimentando sonhos e saciando necessidades: juntos pela erradicação da fome."</p>
        <p>© 2023 RescueFoods. Todos os direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #1c3048; 
  color: #fff; 
  padding: 20px;
  position: relative;
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
