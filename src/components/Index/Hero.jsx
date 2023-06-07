import React from "react";
import styled from "styled-components";
import number828 from "../../assets/indexPhotos/photoNumber.jpg";

const HeroSection = styled.section`
  padding-top: var(--index-header-height);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export default function Hero() {
  return (
    <HeroSection id="inicio">
      <Content>
        <Overlay />
        <Image src={number828} alt="Number 828" />
      </Content>
    </HeroSection>
  );
}
