import styled from "styled-components";
import CardImg from "../MetasODS/CardPages"


export default function ConteudoODS () {


	return(
		<Section id="sobre">
			<div className="content">
				<hr />
				<div className="textos">
					<h4>ACABAR COM A FOME, ALCANÇAR A SEGURANÇA ALIMENTAR E MELHORAR A NUTRIÇÃO E PROMOVER A AGRICULTURA SUSTENTÁVEL.</h4>
				</div>	
				<div className="intro">
					<p>A escassez alimentar é a principal causa de óbitos globalmente. Embora nosso planeta seja rico em recursos, a disparidade de acesso e a gestão ineficaz resultam em milhões de pessoas sofrendo de desnutrição. Ao incentivar uma agricultura sustentável com tecnologias avançadas e distribuição equitativa, podemos alimentar toda a população mundial e eliminar definitivamente a fome.</p>
				</div>	
			<hr />

				<CardImg />	

			<hr/>
		</div>
		</Section>
	)
}

const Section = styled.section`
	
	padding: var(--index-header-height) 0;

    hr {
		margin-top: 2rem;
		width: 90%;
		height: 2px;
		border-width: 0;
		background-color: grey;
	}
	h4{
		padding: 2rem;
		margin-bottom: 25px;	
		padding-top: 3rem;

	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 20px 100px 20px 100px;
		text-align: center;
	}
	
	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3%;

	}
	.intro p {
		font-weight: 500;
		line-height: 2rem;
		padding: 1rem;
		width: 75%;
		font-size: 20px;
        letter-spacing: .2rem;
		text-align: justify;
	}

		


`
