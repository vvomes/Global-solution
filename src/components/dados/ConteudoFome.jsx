import React from "react";
import styled from "styled-components";
import AccordionDesnutricao from "./AccordionDesnutricao";
import AccordionGuerra from "./AccordionGuerra";
import AccordionPreco from "./AccordionPreco";

export default function ConteudoFome() {
  return (
    <Section id="sobre">
      <div className="content">
        <hr />
        <div className="textos">
          <h4>DESNUTRIÇÃO GLOBAL E SEGURANÇA ALIMENTAR</h4>
        </div>
        <div className="intro">
          <p>
            A desnutrição global é uma questão urgente que afeta milhões de pessoas em todo o mundo, especialmente mulheres e crianças. A falta de acesso a alimentos nutritivos e a ingestão insuficiente de nutrientes essenciais levam a uma série de consequências devastadoras para a saúde e o bem-estar das pessoas. Além disso, a desnutrição está intrinsecamente ligada à segurança alimentar, uma vez que a disponibilidade e o acesso a alimentos de qualidade são fundamentais para garantir uma dieta saudável e adequada.
          </p>
        </div>
        <hr />

        <div className="pagina">
          <div className="topicos-dados">
            <h5>INSEGURANÇA ALIMENTAR</h5>
            <p className="texto-dados">
              Mais de 2,4 bilhões de pessoas, ou mais de 30% da população mundial, estavam moderadamente ou severamente inseguras quanto à alimentação em 2020. A prevalência de desnutrição aumentou para 9,8% em 2021.
            </p>
            <div className="accordion">
              <AccordionDesnutricao />
            </div>
          </div>

          <div className="topicos-dados">
            <h5>GUERRA RUSSIA X UCRANIA</h5>
            <p className="texto-dados">
              A guerra em curso na Ucrânia representa uma ameaça significativa ao aumento da desnutrição em todo o mundo, especialmente entre mulheres e crianças. Como a Ucrânia e a Rússia são importantes produtores agrícolas, o conflito tem o potencial de impactar negativamente a segurança alimentar global.
            </p>
            <div className="accordion">
              <AccordionGuerra />
            </div>
          </div>

          <div className="topicos-dados">
            <h5>PREÇO DOS ALIMENTOS</h5>
            <p className="texto-dados">
              Houve um aumento significativo nos preços dos alimentos, com a parcela de países sobrecarregados por preços elevados aumentando de 16% em 2019 para 47% em 2020.
            </p>
            <div className="accordion">
              <AccordionPreco />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: var(--index-header-height) 0;

  hr {
    margin-top: 2rem;
    width: 90%;
    height: 2px;
    border-width: 0;
    background-color: grey;
  }

  h4 {
    padding: 1rem;
    margin-bottom: 2px;
    padding-top: 3rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px 100px 100px 100px;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3%;
  }

  .intro p {
    font-weight: 500;
    line-height: 2rem;
    padding: 1rem;
    width: 75%;
    font-size: 20px;
    letter-spacing: 0.2rem;
    text-align: justify;
  }

  .pagina {
    width: 100%;
    padding: 20px 100px 100px 100px;
  }

  .topicos-dados {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .texto-dados {
    font-weight: 500;
    line-height: 1.5rem;
    padding: 1rem;
    width: 65%;
    font-size: 15px;
    letter-spacing: 0.2rem;
    text-align: justify;
  }

  .accordion{
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1rem;
    text-align: justify;
}
`;
