import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="content">
        <div className="overlay"></div>
        <video src="video-source.mp4" autoPlay muted loop></video>
        <div className="textos">
          <h4>HOME</h4>
          <button onClick={() => navigate('/saiba-mais')}>Saiba mais</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .content {
    width: 100%;
    height: 100vh;
    padding-top: var(--index-header-height);
    position: relative;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0, .3);
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .textos {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3%;
    letter-spacing: .2rem;
    text-align: center;
  }
  
  .textos h4 {
    font-weight: 500;
    line-height: 3rem;
    padding: 1rem;
    width: 50%;
    color: var(--color-white);
    background-color: rgba(0,0,0, .4);
    border-radius: 0.3rem;
  }
  
  button {
    background: #3DCD58;
    padding: 0 20px;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: .1rem;
    
    &:hover {
      background-color: var(--color-logo-green);
      border: 2px solid var(--color-logo-green);
      color: var(--color-white);
    }
  }
`;
