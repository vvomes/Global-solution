import React, { useState } from "react";
import styled from "styled-components";
import prodAgroImage from "../../assets/solutionPhotos/prodAgro.png";
import prevDemandaAlimImage from "../../assets/solutionPhotos/prevDemandaAlim.png";
import otimizacaoAgroImage from "../../assets/solutionPhotos/otimizacaoAgro.png";
import previousButtonImage from "../../assets/solutionPhotos/leftB.png";
import nextButtonImage from "../../assets/solutionPhotos/rightB.png";

export default function CardIA() {
  const slides = [
    {
      titulo: "Melhoria da produtividade agrícola",
      conteudo: "A IA na agricultura melhora a produtividade das colheitas ao analisar dados sobre solo, clima e outros fatores. Isso permite decisões informadas sobre o plantio, irrigação, fertilizantes e defensivos. Aumenta a produtividade agrícola, garantindo uma oferta sustentável de alimentos.",
      imagem: prodAgroImage,
    },
    {
      titulo: "Previsão da demanda por alimentos",
      conteudo: "É essencial na previsão da demanda por alimentos, utilizando modelos preditivos para analisar dados históricos, como padrões de consumo, crescimento populacional e fatores socioeconômicos. Isso permite antecipar as necessidades futuras de alimentos, auxiliando no planejamento e na produção mais eficiente, além de garantir uma distribuição adequada para atender à demanda da população.",
      imagem: prevDemandaAlimImage,
    },
    {
      titulo: "Otimização da distribuição de recursos",
      conteudo: "A otimização da distribuição de recursos ajuda a reduzir a fome, identificando áreas com necessidades urgentes e desequilíbrios na distribuição de alimentos. Isso permite uma alocação eficiente de recursos e suporte adequado para regiões afetadas.",
      imagem: otimizacaoAgroImage,
    }
  ];


 
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[activeSlideIndex];

  return (
    <CardContainer>
      <CardDiv>
        <div className="title">{activeSlide.titulo}</div>
        <div className="content">
          <ButtonImage src={previousButtonImage} alt="Previous" onClick={handlePreviousSlide} />
          <div className="image" style={{ backgroundImage: `url(${activeSlide.imagem})` }}></div>
          <div className="text">{activeSlide.conteudo}</div>
          <ButtonImage src={nextButtonImage} alt="Next" onClick={handleNextSlide} />
        </div>
      </CardDiv>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
`;

const CardDiv = styled.div`
  background-color:#F5ECED;
  height: 400px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: right;
  transition: transform 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: 2px solid #1A273A;
  border-radius: 15px;
  
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: auto;
  }

  .image {
    height: 250px;
    background-size: cover;
    background-position: center;
    margin: 1rem;
    width: 50%;
    border-radius: 10px;
 
  }

  .text {
    margin: 0 1rem;
    text-align: justify;
    line-height: 1.5rem;
    font-size: 15px;
    letter-spacing: 0.1rem;
    width: 55%;
    word-wrap: break-word;
    
  }
`;

const ButtonImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
 
`;