import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import home from "../../components/img/index.jpeg";
import card1 from "../img/card1.jpg"
import card2 from "../img/card2.jpg"
import card3 from "../img/card3.jpg"

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="header">
        <img src={home} alt="Banner" />
      </div>
      <div className="content">
        <div className="overlay"></div>
        <div className="textos">
          <h2>Erradicação da Fome</h2>
          <p>
            O desperdício alimentar é um problema significativo em nossas vidas e causa impactos negativos em diversas esferas, desde o meio ambiente até a economia global.
          </p>
          <p>
            Infelizmente, ele está presente em diferentes etapas da cadeia alimentar, desde a produção até o consumo final. Compreender o alcance desse problema é fundamental para tomarmos ações efetivas em sua redução.
          </p>
          <p>
            Em termos de produção, o desperdício alimentar ocorre devido a práticas inadequadas de agricultura, armazenamento inadequado, transporte ineficiente e falta de infraestrutura adequada. Estima-se que uma quantidade significativa de alimentos seja perdida antes mesmo de chegar aos supermercados e consumidores finais.
          </p>

          <p>
            No âmbito do consumo, o desperdício acontece em nossas próprias casas, nos restaurantes, nas instituições e em eventos. Muitas vezes, jogamos fora alimentos em perfeito estado simplesmente por não estarmos conscientes do valor que eles possuem. Compramos em excesso, não utilizamos tudo o que temos ou deixamos estragar.
          </p>

          <p>
            Os impactos do desperdício alimentar são diversos e abrangem diferentes áreas:
          </p>
          <ul>
            <li>
              <strong>Impacto ambiental:</strong> O desperdício de alimentos contribui para o esgotamento de recursos naturais, como água, solo e energia, utilizados na produção, transporte e descarte de alimentos. Além disso, quando os alimentos em decomposição vão parar em aterros sanitários, eles geram a liberação de gases de efeito estufa, contribuindo para as mudanças climáticas.
            </li>
            <li>
              <strong>Impacto econômico:</strong> O desperdício de alimentos representa uma perda econômica significativa em toda a cadeia produtiva. Produtores, distribuidores, varejistas e consumidores estão desperdiçando recursos financeiros ao descartar alimentos que poderiam ser consumidos ou utilizados para outros fins, como a produção de biogás ou adubos.
            </li>
            <li>
              <strong>Impacto social:</strong> Enquanto desperdiçamos toneladas de alimentos, muitas pessoas ao redor do mundo enfrentam a fome e a desnutrição. Reduzir o desperdício alimentar significa disponibilizar mais alimentos para aqueles que mais precisam, promovendo a segurança alimentar e o acesso a uma nutrição adequada.
            </li>
          </ul>

          <p>
            É essencial que cada um de nós assuma a responsabilidade de combater o desperdício alimentar. Podemos adotar práticas como planejar nossas compras, armazenar corretamente os alimentos, reaproveitar sobras, compartilhar alimentos com aqueles que necessitam e apoiar iniciativas que buscam reduzir o desperdício em toda a cadeia alimentar.
          </p>

          <p>
            Ao fazermos nossa parte, podemos contribuir para um mundo mais sustentável, equitativo e livre do desperdício alimentar, garantindo que os recursos naturais sejam utilizados de forma responsável e que todos tenham acesso a alimentos de qualidade.
          </p>
        </div>

        <div className="cards">
          <Card>
            <img src={card1} alt="card1" />
            <h3>Doações</h3>
            <p>Faça doações para ajudar a alimentar pessoas em situação de vulnerabilidade.</p>
          </Card>
          <Card>
            <img src={card2} alt="card2" />
            <h3>Voluntariado</h3>
            <p>Junte-se a nós como voluntário e participe de ações para combater a fome.</p>
          </Card>
          <Card>
            <img src={card3} alt="card3" />
            <h3>Marketplace</h3>
            <p>Conheça nosso marketplace e apoie produtores locais.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .header {
    position: relative;
    height: 350px;
    background: #000;
  }

  .header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    flex: 1;
    position: flex;
    padding: 50px;
    background-color: #ffffff;
    width: 90%;
    margin: 0 auto;
    overflow: auto;
    margin-bottom: 100px;
  }

  .overlay {
    position: absolute;
    width: 100%;
    top: 0;
    background-color: rgba(46, 44, 44, 0.3);
  }

  .textos {
    text-align: justify;
    margin-bottom: 50px;
    color: #333;
  }

  .textos h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .textos p {
    font-size: 16px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
