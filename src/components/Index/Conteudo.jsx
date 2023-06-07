import styled from "styled-components";
import CardPages from "./CardPages";
import CardOrg from "./CardOrgs";
import ODS2 from "../../assets/indexPhotos/photoODS2.jpg"
import Grafico from	 "../../assets/indexPhotos/photoGraf.jpg"
import Fome from "../../assets/indexPhotos/photoFome.jpg"
import FAO from "../../assets/indexPhotos/faoLogo.png"
import WFP from "../../assets/indexPhotos/wfpLogo.png"
import AAH from "../../assets/indexPhotos/aahLogo.png"

export default function Sobre() {
	
	const pages = [

		{
			titulo: "FATOS SOBRE A FOME",
			imagem: Fome,
			link: "/Dados",
		},
		{
			titulo: "GRAFICOS",
			imagem: Grafico,
			link: "/Grafico",
		},
		{
			titulo: "METAS ODS 2",
			imagem: ODS2,
			link: "/Metas",
		}
	]
	
	return (
		<Section id="sobre">
		  <div className="content">
			<hr />
	  
			<div className="textos">
			  <h4>COMBATE A FOME</h4>
			</div>
	  
			<div className="intro">
			  <p>
				A fome é uma preocupação global que afeta milhões de pessoas em todo o mundo. Segundo a FAO, em 2021, cerca de 828 milhões de indivíduos sofreram com a fome, e mais de 2 bilhões enfrentaram insegurança alimentar.
			  </p>
			</div>
	  
			<hr />
	  
			<h4>CONTEÚDOS</h4>
	  
			<div className="paginas">
			  <div className="assuntos">
				{pages.map((page) => (
				  <CardPages
					titulo={page.titulo}
					imagem={page.imagem}
					link={page.link}
				  />
				))}
			  </div>
			</div>
	  
			<hr />
	  
			<div className="organizacoes">
			  <h4>UNIDOS NO COMBATE À FOME</h4>
			  <div className="organizacoes-lista">
				<CardOrg logo={FAO} nome="Food and Agriculture Organization - FAO" />
	  
				<CardOrg logo={WFP} nome="World Food Programme" />
	  
				<CardOrg logo={AAH} nome="Action Against Hunger" />
			  </div>
			</div>
	  
			<hr />
		  </div>
		</Section>
	  );
}	  

const Section = styled.section`

	
	h4{
		padding: 1rem;
		margin-bottom: 2px;	
		padding-top: 3rem;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		padding: 20px 100px 100px 100px;
	}
	
	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3%;
		letter-spacing: .2rem;
		text-align: center;
		margin-top: 7px;
	}
	.intro p {
		font-weight: 500;
		line-height: 3rem;
		padding: 1rem;
		width: 75%;
		font-size: 20px;
		text-align: justify;
	}

	.paginas {
		width: 85%;
		align-items: center;
		display: flex;
		justify-content:center;
		margin: 20px;
	}

	.assuntos {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		width: 90%;
	}

	hr {
		margin-top: 2rem;
		width: 90%;
		height: 2px;
		border-width: 0;
		background-color: grey;
	}

	.organizacoes {
		width: 75%;
		display: flex;
		flex-direction: column;
	}
	
	.organizacoes h4 {
		padding-top: 3rem;
	}
	
	.organizacoes-lista {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

`
