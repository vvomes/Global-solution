import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: .1rem; */
    color: var(--color-text-gray);
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    .content {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
    .content {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
