import styled from "styled-components";

export default function CardOrg({ nome, logo }) {
	return(
		<CardDiv>
			<div className="image" style={{ backgroundImage: `url(${logo})` }}>
			</div>
			<p>{nome}</p>
		</CardDiv>
	)	
}

const CardDiv = styled.div`
	padding: 1rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	transition: transform .5s ease;

	height: 280px;

	
	:hover {
		
	}

	.image {
		width: 200px;
		height: 200px;
		margin: 0 auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-color: white;
	}

	p {
		padding-top: 0.3rem;
		font-size: 17px;
	}

`
