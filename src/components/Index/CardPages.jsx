import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CardPages({ titulo, conteudo, imagem, link }) {
	return(
		<CardDiv>

			<div>
				<h6>{titulo}</h6>
				<h6>{conteudo}</h6>	
				<div className="image" style={{ backgroundImage: `url(${imagem})` }}> 
				</div>
			</div>
			<div>
				{link && (
					<Link to={link}>
						<button>Saiba mais</button>
					</Link>
				)}
			</div>
		</CardDiv>
	)	
}

const CardDiv = styled.div`
	background-color: #F5ECED;
	min-width: 244px;
	height: 300px;
	padding: 1rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	transition: transform .5s ease;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	border: 2px solid var(--color-sky-blue);
	border-radius: 0.3rem;
	border: 2px solid #1A273A;
	
	
	:hover {
		transform: translateY(-1rem);
		border: 2px solid #1A273A;
	}

	.image {
		border-radius: 50%;
		width: 120px;
		height: 120px;
		margin: 0 auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	
	:hover {
		transform: translateY(-1rem);
		//border: 2px solid var(--color-life-green);
	}
	.image {
		width: 180px;
		height: 170px;
		margin: 0 auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 10%;
	}

	
	button {
    	background:#1c3048;
    	padding: 0 20px;
        height: 40px;
		width: 70%;
        border:none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 14px;    
        letter-spacing: .1rem;
		justify-content: center;

			}
`
