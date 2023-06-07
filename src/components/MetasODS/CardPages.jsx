import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import target21 from "../../assets/odsPhotos/target2.1.png"
import target22 from "../../assets/odsPhotos/target2.2.png"
import target23 from "../../assets/odsPhotos/target2.3.png"
import target24 from "../../assets/odsPhotos/target2.4.png"
import target25 from "../../assets/odsPhotos/target2.5.png"
import target26 from "../../assets/odsPhotos/target2.6.png"
import target27 from "../../assets/odsPhotos/target2.7.png"
import target28 from "../../assets/odsPhotos/target2.8.png"
import ods2 from "../../assets/odsPhotos/ods2.png"


  
export default function CardImg() {
	const [textoExibicao, setTextoExibicao] = useState('');
  
	const handleClick = (titulo, conteudo) => {
	  setTextoExibicao(`<h6>${titulo}</h6><p>${conteudo}</p>`);
	};
  
	const fotos = [
	{   src: target21, 
		titulo: 'META 2.1 - ACESSO UNIVERSAL A ALIMENTOS SEGUROS E NUTRITIVOS', 
		conteudo: 'Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situação de vulnerabilidade, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano.' },

	{   src: target22, 
		titulo: 'META 2.2 - ACABAR COM TODAS AS FORMAS DE DESNUTRIÇÃO', 
		conteudo: 'Até 2030, acabar com todas as formas de desnutrição, incluindo alcançar, até 2025, as metas acordadas internacionalmente sobre retardo de crescimento e emaciação em crianças menores de 5 anos de idade, e atender às necessidades nutricionais de meninas adolescentes, mulheres grávidas e lactantes e idosos.' },

	{   src: target23, 
		titulo: 'META 2.3 - DOBRAR A PRODUTIVIDADE E A RENDA DOS PEQUENOS PRODUTORES DE ALIMENTOS', 
		conteudo: 'Até 2030, dobrar a produtividade agrícola e a renda dos produtores de alimentos de pequena escala, em particular mulheres, povos indígenas, agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igualitário à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades para agregação de valor e emprego não agrícola.' },

	{ 	src: target24, 
		titulo: 'META 2.4 - PRODUÇÃO SUSTENTÁVEL DE ALIMENTOS E PRÁTICAS AGRÍCOLAS RESILIENTES', 
		conteudo: 'Até 2030, garantir sistemas sustentáveis ​​de produção de alimentos e implementar práticas agrícolas resilientes que aumentem a produtividade e a produção, que ajudem a manter os ecossistemas, que fortaleçam a capacidade de adaptação às mudanças climáticas, condições climáticas extremas, secas, inundações e outros desastres e que melhorem progressivamente a qualidade da terra e do solo .' },

	{ 	src: ods2, 
		titulo: 'OBJETIVO DE DESENVOLVIMENTO SUSTENTÁVEL 2', 
		conteudo: 'conteudo sobre a ODS 2' 
	}, // Adicionar conteudo sobre o que são as metas

	{ 	src: target25, 
		titulo: 'META 2.5 - MANTER A DIVERSIDADE GENÉTICA NA PRODUÇÃO DE ALIMENTOS', 
		conteudo: 'Até 2020, manter a diversidade genética de sementes, plantas cultivadas e animais de criação e domesticados e suas espécies silvestres relacionadas, inclusive por meio de bancos de sementes e plantas bem administrados e diversificados nos níveis nacional, regional e internacional, e promover o acesso a uma alimentação justa e equitativa repartição dos benefícios decorrentes da utilização dos recursos genéticos e conhecimentos tradicionais associados, conforme acordado internacionalmente.' },

	{ 	src: target26, 
		titulo: 'META 2.6 - INVESTIR EM INFRAESTRUTURA RURAL, PESQUISA AGRÍCOLA, TECNOLOGIA E BANCOS DE GENE', 
		conteudo: 'Aumentar o investimento, inclusive por meio de maior cooperação internacional, em infraestrutura rural, pesquisa agrícola e serviços de extensão, desenvolvimento de tecnologia e bancos de genes de plantas e gado, a fim de aumentar a capacidade produtiva agrícola nos países em desenvolvimento, em particular nos países menos desenvolvidos.' },

	{ 	src: target27, 
		titulo: 'META 2.7 - EVITAR RESTRIÇÕES COMERCIAIS AGRÍCOLAS, DISTORÇÕES DE MERCADO E SUBSÍDIOS À EXPORTAÇÃO', 
		conteudo: 'Corrigir e prevenir restrições comerciais e distorções nos mercados agrícolas mundiais, inclusive por meio da eliminação paralela de todas as formas de subsídios às exportações agrícolas e todas as medidas de exportação com efeito equivalente, de acordo com o mandato da Rodada de Desenvolvimento de Doha.' },

	{ 	src: target28, 
		titulo: 'META 2.8 - GARANTIR MERCADOS ESTÁVEIS DE COMMODITIES ALIMENTARES E ACESSO OPORTUNO A INFORMAÇÕES', 
		conteudo: 'Adotar medidas para garantir o funcionamento adequado dos mercados de commodities alimentares e seus derivados e facilitar o acesso oportuno a informações de mercado, inclusive sobre reservas de alimentos, a fim de ajudar a limitar a extrema volatilidade dos preços dos alimentos.' },
	];

	useEffect(() => {
		const ods2Content = fotos.find((foto) => foto.src === ods2);
		if (ods2Content) {
		  setTextoExibicao(`<h6>${ods2Content.titulo}</h6><p>${ods2Content.conteudo}</p>`);
		}
	  }, []);

	return (
		<Section>
		  <div className="container">
			<div className="fotos-container">
			  {fotos.map((foto, index) => (
				<div className="foto" key={index}>
				  <img src={foto.src} alt="" onClick={() => handleClick(foto.titulo, foto.conteudo)} />
				  <div className="conteudo">
					<h6>{foto.titulo}</h6>
					<p>{foto.conteudo}</p>
				  </div>
				</div>
			  ))}
			</div>
			<div className='texto-container'>
				<div className="texto-exibicao" dangerouslySetInnerHTML={{ __html: textoExibicao }}></div>
			</div>
		  </div>
		
		</Section>
	)
}
  const Section = styled.section`
    width: 100%;
    padding: 20px 100px 20px 100px;
	

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: center; 
    width: 100%;
	
  }

  .fotos-container {
    display: grid;
    grid-template-columns: repeat(3, 20%);
    gap: 10px;
    width: 45%; 
	justify-content: center; 

}

  .foto {
	min-height: 118px;
	width: 100%;
  }

  img {
    width: 100%;
	min-height: 118px;
  }

  .conteudo {
    display: none;
  }

  .texto-container {
    width: 40%;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);	
	height: 480px;

  }
  .texto-exibicao {
	

	h6{
		padding: 1rem;
		margin-bottom: 15px;	
		padding-top: 3rem;
		text-align: center;
	}
	p{
		text-align: justify;
      word-wrap: break-word;
      font-weight: 400;
      line-height: 1.5rem;
      padding: 0.9rem;
      font-size: 18px;
      letter-spacing: .1rem;

	}
  }
`;