import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderTag>
      <nav>
        <ul>
          <li><CustomNavLink exact="true" to="/">Home</CustomNavLink></li>
          <li><CustomNavLink to="/Grafico">Grafico</CustomNavLink></li>
          <li><CustomNavLink to="/Dados">Dados</CustomNavLink></li>
          <li><CustomNavLink to="#">Pitch</CustomNavLink></li>
          <li><CustomNavLink to="/FaleConosco">Fale Conosco</CustomNavLink></li>
        </ul>
      </nav>
    </HeaderTag>
  );
}

const HeaderTag = styled.header`
  background-color: #1c3048; 
  height: 60px;
  position: sticky;
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
    background-color: #3a5773; /* Cor de hover */
  }

  &.active {
    background-color: #3a5773;
    color: #fff; /* Cor branca para o item ativo */
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
