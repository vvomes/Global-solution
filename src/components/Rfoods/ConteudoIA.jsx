import styled from "styled-components";

import CardIA from "./CardIA";


export default function ConteudoIA() {
	return (
	  <Section>
		<hr />
		<div className="titulo-ia">
		  <h4>O PAPEL DA INTELIGÊNCIA ARTIFICIAL NA CADEIA ALIMENTAR</h4>
		</div>
		<div className="container-ia">
		  <div className="texto-ia">
			<p>
			  A inteligência artificial oferece uma ampla gama de possibilidades
			  para lidar com a fome, abordando desafios em diferentes etapas da
			  cadeia alimentar.
			</p>
			<p>
			  Desde a produção agrícola até a distribuição e consumo de alimentos,
			  a IA pode desempenhar um papel crucial na otimização de processos,
			  no desenvolvimento de soluções inovadoras e na tomada de decisões
			  mais eficientes.
			</p>
		  </div>
		  <CardIA />
		</div>
	  </Section>
	)
}

const Section = styled.section`
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 100%;
		padding: 20px 100px 20px 100px;
		justify-content: center;
		align-items: center;

    hr {
		margin-top: 2rem;
		width: 100%;
		height: 2px;
		border-width: 0;
		background-color: grey;
		align-items:center;
	}

	.titulo-ia{
	
	h4{
		padding: 1rem;
		margin-bottom: 25px;	
		padding-top: 3rem;
		}
	}
	.container-ia{
		width: 95%;
		display: flex;
		justify-content: center;
		

.texto-ia {
    width: 40%;
    text-align: center;
    word-wrap: break-word;
    text-align: justify;
    margin-left: 25px;

    p {
      font-weight: 500;
      line-height: 2rem;
      padding: 1rem;
      width: 95%;
      font-size: 17px;
      word-break: break-word;
	  word-spacing: normal;
    }
  }
}	


`
