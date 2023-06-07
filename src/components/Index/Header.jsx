import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderTag>
      <nav>
        <ul>
          <li><CustomNavLink exact="true" to="/">Home</CustomNavLink></li>
          <li><CustomNavLink to="/Dados">Sobre a Fome</CustomNavLink></li>
          <li><CustomNavLink to="/Grafico">Gráfico</CustomNavLink></li>
          <li><CustomNavLink to="/Metas">Metas ODS</CustomNavLink></li>
          <li><CustomNavLink to="/Solucao">Solução</CustomNavLink></li>
        </ul>
      </nav>
    </HeaderTag>
  );
}

const HeaderTag = styled.header`
  background-color: #1c3048; 
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  box-shadow: 0 1px 10px 1px gray;
  z-index: 999;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between; //
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 1rem;
  }

  @media(max-width: 768px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
    }

  @media(max-width: 800px) {
		ul {
           justify-content: center;
        }
	}

    li {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const CustomNavLink = styled(RRNavLink)`
  color: #fff; 
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a5773; 
  }

  &.active {
    background-color: #3a5773;
    color: #fff; 
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }

  

`;
