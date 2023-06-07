import styled from "styled-components";
import card3 from "../../assets/solutionPhotos/home.jpg"


export default function HeroRF() {


	return (
		<HeroSection id="inicio">
		  <Content>
			<Overlay />
			<Image src={card3} alt="RFoods" />
		  </Content>
		</HeroSection>
	  );
	}

const HeroSection = styled.section`
  padding-top: var(--index-header-height);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;


`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(83, 86, 48, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
 
`;



