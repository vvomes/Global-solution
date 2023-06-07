import styled from "styled-components";
import Fome from "../../assets/fomePhotos/fome.png"
export default function DadosFome() {


	return (
		<Section id="inicio">
			<div className="content">
				<div className='overlay'>
				<Image src={Fome} alt="fome" />
				</div>
			</div>
		</Section>
	)
}

const Section = styled.section`
	.content {
		width: 100%;
		height: 60vh;
	}

	.overlay {
		position: relative;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: rgba(0,0,0, .3);
	}
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

