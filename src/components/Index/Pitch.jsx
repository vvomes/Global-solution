import styled from "styled-components";

export default function Pitch() {

	return(
		<Section id="pitch">
			<div className="content">
				<h2>Vídeo Pitch</h2>
				<iframe width="1280" height="720" src="https://www.youtube.com/embed/O_tC7Wp68h4" title="Global Combate a fome - Rescue Foods" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		</Section>
	)
}

const Section = styled.section`
	background-color: black;
	padding: 100px 0;
	
	div.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.content h2 {
		padding-bottom: 2rem;
		color: #fff;
	}
	
`

