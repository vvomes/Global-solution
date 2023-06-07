import styled from "styled-components";
import LogoRF from "../../assets/solutionPhotos/logoRF.png"

export default function ConteudoRF () {


	return(
		<Section>
			<hr />

			<div className="container-rf">
				<div className="titulo-rf">
					<img src={LogoRF} alt="RFoods" />
					<h4>RESCUE FOODS</h4>
				</div>
				<div className="texto-rf">
					<p>Surgiu com o propósito de combater o desperdício de alimentos e promover a sustentabilidade, garantindo o acesso a alimentos saudáveis e nutritivos para todos.</p>	
				</div>
			</div>
			<div className="container-solucao">
				<h5>SOLUÇÃO</h5>
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

    hr {
		margin-top: 2rem;
		width: 100%;
		height: 2px;
		border-width: 0;
		background-color: grey;
		align-items:center;
	}
	.container-rf{
		width: 50%;
		height: 280px;
		display: flex;
		flex-direction: column;
		text-align: center;
		box-shadow: 26px 17px 50px 23px rgb(0 0 0 / 7%);
		border-radius: 70px;
		background-color: #ffffff;
		max-width: 1200px;
		margin-top: 40px;
		
	.titulo-rf{	
		display: flex;
		align-items: center;

	img{
		border-radius: 50%;
		width: 100px;
		height: 100px;
	}
	h4{
		padding: 1rem;
		margin-bottom: 25px;	
		padding-top: 3rem;
		}
	}


	.texto-rf{
		p {
			padding: 1rem;
			width: 100%;
			font-size: 20px;
			letter-spacing: .2rem;
			line-height: 1.5rem;
			text-align:justify;
			}
	

	}
}	

	.container-solucao{

	}

`

/*


.bloco-g{
	margin: auto;
    position: relative;
    display: flex;
    background-color: rgb(255, 255, 255);
    box-shadow: 26px 17px 50px 23px rgb(0 0 0 / 7%);
    border-radius: 60px;
    max-width: 1200px;
    height: 370px;
    margin-top: 2px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
}

	.bloco{
		background-color: #ffffff;
		width: 300px;
		height: 300px;
		box-shadow: 26px 17px 50px 23px rgb(0 0 0 / 7%);
		border-radius: 70px;
		position: relative;
	
	}

*/