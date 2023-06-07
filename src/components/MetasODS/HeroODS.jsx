import styled from "styled-components";
import LogoODS2 from "../../assets/odsPhotos/sdg2.png"


export default function HeroODS() {


	return (
		<HeroSection id="inicio">
		  <Content>
			<Overlay />
			<Image src={LogoODS2} alt="Logo ODS2" />
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

  @media (max-width: 768px) {
    height: auto;
  }
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



